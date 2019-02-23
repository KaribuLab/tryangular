FROM node:9.11.1

RUN apt update && apt install git

RUN npm i -g browser-sync

COPY entrypoint.sh /bin/entrypoint.sh

USER root

RUN chmod 777 /bin/entrypoint.sh

USER node

ENTRYPOINT /bin/entrypoint.sh
