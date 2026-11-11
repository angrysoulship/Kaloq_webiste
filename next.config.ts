import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
  async redirects() {
    return [
      {
        source: "/products/payments",
        destination: "/products/global-account",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
