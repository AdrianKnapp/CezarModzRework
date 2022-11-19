/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  domains: [process.env.DOMAIN],
  images: {
    domains: ['res.cloudinary.com'],
  },
};
