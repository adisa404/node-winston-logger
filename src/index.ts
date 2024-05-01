import fs from 'fs';
import winston from 'winston';
import logger from './logger';

console.log('Hello');

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console());
}

logger.info('Log info');
logger.error('Log error');
