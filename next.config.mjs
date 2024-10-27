/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	sassOptions: {
		includePaths: ["./src/styles"],
		implementation: "dart-sass",
	},
};

export default nextConfig;
