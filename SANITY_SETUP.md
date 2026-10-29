# Kaloq Sanity CMS

The website is connected to Sanity project `e1y48qsc`, dataset `production`.

## Content Studio

Run the website and open `/studio`. Sign in with a member of the Kaloq Sanity project. Drafts are visible only in Studio; the public website queries the published perspective.

## Environment variables

Copy the variables from `.env.example` into the local and production environments. `SANITY_REVALIDATE_SECRET` must be a random secret of at least 32 characters and must never use the `NEXT_PUBLIC_` prefix.

The current `production` dataset is private, so production also needs `SANITY_API_READ_TOKEN` with the Viewer role. Keep it server-only and never prefix it with `NEXT_PUBLIC_`. If the dataset is intentionally changed to public, omit this token.

## Publish webhook

Create one webhook in Sanity project settings:

- Name: `Kaloq website revalidation`
- URL: `https://kaloq.com/api/revalidate`
- Dataset: `production`
- Trigger: create, update, delete
- Filter: `_type == "post"`
- Projection: `{_type, "slug": slug.current, "previousSlug": before().slug.current}`
- HTTP method: `POST`
- Secret: the same value as `SANITY_REVALIDATE_SECRET`
- Drafts: disabled

The endpoint validates Sanity's signature and refreshes the post, `/blog`, and `/sitemap.xml`.

## Import existing posts

After authenticating the CLI, run:

```bash
npm run sanity:import
```

The import is idempotent. It creates or replaces the five website articles with deterministic document IDs. Website language is controlled globally by the site; articles do not have separate language or translation fields in Sanity.

## Publishing checklist

Before publishing, Studio requires `Product claims reviewed`. Confirm supported assets and networks, availability, countries, currencies, fees, partners, timing, and regulatory wording.
