# Create App
pnpm create next-app $1 --import-alias "@$1/*" --ts --tailwind --eslint --src-dir --turbo --use-pnpm --no-app --skip-install
# Go to Project
cd $1
# Install dependencies
pnpm install --save-exact @prisma/client @tanstack/react-query @trpc/client@latest @trpc/next@latest @trpc/react-query@latest @trpc/server@latest axios next pino react react-dom zod
# Install devDependencies
pnpm install --save-exact --save-dev @eslint/compat @eslint/eslintrc @eslint/js @million/lint @testing-library/dom @testing-library/react @types/jest @types/node @types/react @types/react-dom autoprefixer daisyui eslint eslint-config-next eslint-config-prettier eslint-plugin-prettier jest jest-environment-jsdom kill-port million postcss prettier prettier-plugin-tailwindcss prisma rimraf tailwindcss ts-jest ts-node typescript typescript-eslint
