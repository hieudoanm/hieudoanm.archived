#!/bin/sh

pnpm add --exact react react-dom next-pwa
pnpm add @trpc/server@next @trpc/client@next @trpc/react-query@next @trpc/next@next @tanstack/react-query@latest zod
pnpm add --dev --exact prisma prisma-dbml-generator prisma-json-schema-generator prisma-erd-generator @mermaid-js/mermaid-cli prisma-trpc-generator prisma-markdown
pnpm add --dev --exact @million/lint @testing-library/react @types/jest @types/react @types/react-dom daisyui eslint-plugin-github eslint-plugin-jest eslint-plugin-prettier eslint-plugin-sonarjs husky jest jest-environment-jsdom kill-port million prettier prettier-plugin-tailwindcss rimraf ts-jest ts-node typescript
