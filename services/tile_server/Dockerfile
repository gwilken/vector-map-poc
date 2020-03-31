FROM node:12-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /home/appuser

COPY --chown=appuser:appgroup . .

RUN npm i

EXPOSE 7000

USER appuser

ENTRYPOINT [ "sh", "./entrypoint.sh" ]
