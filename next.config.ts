import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  // Allow dev server connections from your local network IP
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: ['192.168.8.167:3000', 'localhost:3000'],
  //   },
  // },
  // webpack: (config, { dev }) => {
  //   if (dev) {
  //     config.watchOptions = {
  //       poll: 1000,
  //       aggregateTimeout: 300,
  //     };
  //   }
  //   return config;
  // },

  /* 
  run the below after uncommenting above
  > npx next dev --webpack -H 192.168.8.167 
   */
};

export default nextConfig;
