const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  images: {
    deviceSizes: [320, 420, 768, 1024, 1280, 1600, 1920, 3840], // Added 3840px
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = withMDX(nextConfig);
