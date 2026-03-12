/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75, 80],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // ✅ Google profile images
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
