# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package files and frontend package files
COPY package*.json ./
COPY packages/frontend/package*.json ./packages/frontend/

# Install workspace dependencies
RUN npm ci

# Copy full monorepo source code
COPY . .

# Build the frontend package
WORKDIR /app/packages/frontend
RUN npm run build

# Stage 2: Serve stage
FROM nginx:alpine

# Copy custom nginx configuration from frontend directory
COPY packages/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from builder stage
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
