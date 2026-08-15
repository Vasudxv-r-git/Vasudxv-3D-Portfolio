/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  images: {
    // Serve WebP first, AVIF where supported — browsers fall back automatically
    formats: ["image/avif", "image/webp"],
    // Breakpoints that match actual rendered widths (no 3840 default)
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384, 512],
    // Aggressive CDN cache — images are content-addressed, so this is safe
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.im.ge",
      },
    ],
  },

  // Long-term caching for immutable static assets
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
