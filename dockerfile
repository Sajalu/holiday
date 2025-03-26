# Step 1: Use a node base image
FROM node:18-alpine AS base

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the app for production
RUN npm run build

# Step 7: Expose port 3000 (Next.js default)
EXPOSE 3000

# Step 8: Start the app
CMD ["npm", "start"]
