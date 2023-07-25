# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container's working directory
COPY . .

# Expose the port on which your Node.js application is running (replace 7000 with the appropriate port number)
EXPOSE 7000

# Set any necessary environmental variables (if applicable)
# ENV ENV_VARIABLE_NAME=value

# Command to start your Node.js application
CMD ["npm", "run", "dev"]