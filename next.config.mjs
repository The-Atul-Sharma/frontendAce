/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      // Categories removed/merged in the question-bank cleanup. 301 the dead
      // paths so previously-indexed URLs don't 404.
      { source: "/categories/frontend", destination: "/categories", permanent: true },
      { source: "/categories/architecture", destination: "/categories/system-design", permanent: true },
    ];
  },
};

export default nextConfig;
