# base image
FROM node:22-alpine

# working directory
WORKDIR /app

# copy package.json , package-lock.json
COPY package*.json .

# install dependencies
RUN npm install

# copy rest project files
COPY . .

# start server
CMD [ "npm" , "start" ]

# expose port
EXPOSE 3000