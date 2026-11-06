import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = { _type?: string; slug?: string; previousSlug?: string };

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) return NextResponse.json({ message: "Missing SANITY_REVALIDATE_SECRET" }, { status: 500 });

  const { isValidSignature, body } = await parseBody<WebhookPayload>(request, secret, true);
  if (!isValidSignature) return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  if (!body || body._type !== "post") return NextResponse.json({ message: "No blog post to refresh" }, { status: 200 });

  revalidateTag("blog-posts", "max");
  if (body.slug) {
    revalidateTag(`blog-post-${body.slug}`, "max");
    revalidatePath(`/blog/${body.slug}`);
  }
  if (body.previousSlug && body.previousSlug !== body.slug) {
    revalidateTag(`blog-post-${body.previousSlug}`, "max");
    revalidatePath(`/blog/${body.previousSlug}`);
  }
  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
