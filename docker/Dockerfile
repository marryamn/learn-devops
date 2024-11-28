# Use an official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if they exist
COPY package.json ./

# Install dependencies
RUN npm install

# Copy all the rest of the application files, including src, tsconfig.json, etc.
COPY .. .

# Build the application
RUN npm run build

# Expose the port that your NestJS app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]
