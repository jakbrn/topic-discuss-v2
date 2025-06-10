# Use official Node.js LTS image
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the NestJS app
RUN npm run build

# Production image
FROM node:18-alpine AS production

WORKDIR /app

# Copy only necessary files
COPY package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated

# Expose port (change if your app uses a different port)
EXPOSE 3000

# Generate Prisma client again in production to ensure proper paths
RUN npx prisma generate

# Create a startup script
COPY --from=builder /app/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# Use the script as the entrypoint
CMD ["./docker-entrypoint.sh"]