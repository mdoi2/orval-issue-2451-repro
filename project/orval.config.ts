import { defineConfig } from 'orval';

export default defineConfig({
  sample: {
    input: {
      target: './openapi.yaml',
    },
    output: {
      target: './output',
      client: 'zod',
      override: {
        header: false,
      },
    },
  },
});
