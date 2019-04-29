FROM node:8-stretch

RUN apt update && apt install -y inotify-tools git

RUN npm i -g gulp browser-sync

COPY entrypoint.sh /bin/entrypoint.sh

USER root

RUN chmod 777 /bin/entrypoint.sh

USER node

ENTRYPOINT /bin/entrypoint.sh
