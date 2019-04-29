FROM node:8-stretch

RUN apt update && apt install git

RUN npm i -g gulp browser-sync yo

COPY src /home/node/app

RUN chmod 777 /home/node/app

RUN ls /home/node/app

COPY entrypoint.sh /bin/entrypoint.sh

USER root

RUN chmod 777 /bin/entrypoint.sh

USER node

ENTRYPOINT /bin/entrypoint.sh
