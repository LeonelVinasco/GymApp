FROM node:14.15.0
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 3001 3306
RUN chmod +x wait-for-it.sh

# ENTRYPOINT [ "/bin/bash", "-c" ]
# CMD ["./wait-for-it.sh" , "-h", "mysql", "-p","3306" , "--strict" , "--timeout=300" , "--" , "npm", "run", "start"]
CMD ["npm", "run", "start"]
