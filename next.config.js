/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/api/oauth2/authorize?client_id=961913060023488564&permissions=8&scope=bot",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
