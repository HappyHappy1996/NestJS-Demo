import * as winston from 'winston';

export const winstonConfig = {
  format: process.env.ENV === 'local'
    ? winston.format.combine(winston.format.colorize(), winston.format.simple())
    : winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
};
