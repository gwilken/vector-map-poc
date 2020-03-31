FROM node:12-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /home/appuser

COPY --chown=appuser:appgroup . .

RUN npm i

USER appuser

RUN npm run build

ENTRYPOINT [ "sh", "./entrypoint.sh" ]
