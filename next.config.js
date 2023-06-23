/** @type {import('next').NextConfig} */

// Locks down the images to only the images on the CDN the client can access
// @pathname: The account number of the Webconnex account
const nextConfig = {
	images: {
		remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.uploads.webconnex.com',
        port: '',
        pathname: '/130981/**',
      },
		],
	},
}

module.exports = nextConfig
