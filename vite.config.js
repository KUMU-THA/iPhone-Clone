import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  // Only add Sentry plugin in production
  if (mode === 'production') {
    plugins.push(
      sentryVitePlugin({
        org: "jsm-x9",
        project: "javascript-react",
        authToken: process.env.SENTRY_AUTH_TOKEN,
        release: { name: "my-release-name" },
        telemetry: false
      })
    );
  }

  return {
    plugins,
    build: {
      sourcemap: true
    }
  };
});
