// module.exports = {
//   images: {
//     domains: ['drive.google.com'],
//   },
// }
{
  swcMinify: false // it should be false by default 
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
}

module.exports = nextConfig
