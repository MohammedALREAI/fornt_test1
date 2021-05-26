module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  serverRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080/api',
  },
  webpack: (config) => {
    // extend your webpack configuration here
    return config;
  },
}
