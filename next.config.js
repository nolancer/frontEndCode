/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "generation-sessions.s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
      "flagcdn.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com"
    ],
  },
};

module.exports = nextConfig;
