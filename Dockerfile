# Use Node.js image as base
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose the port where the React app will run
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]
