// import WDIOReporter from '@wdio/reporter';
import winston from 'winston';

export class Logger{

  // private runnerCount = 0;

  private logger: winston.Logger;

  constructor() {

    this.logger = winston.createLogger({
      transports: [
        new winston.transports.File({
          filename: './logs/logs.log',
          level: process.env.LOG_LEVEL || 'info' || 'error',
        }),
        new winston.transports.Console({
          level: process.env.LOG_LEVEL || 'info',
          handleExceptions: true,
          format: winston.format.printf(({ level, message }) => {
            const logLevel = winston.format.colorize().colorize(level, `${level.toUpperCase()}`);
            return `[${logLevel}]: ${message}`;
          })
        })
      ]
    });

    this.logger.on("error", (error: Error) => {
      this.logger.error(`An error occurred: ${error.message}`);
    });
  }

  log(level: string, message: string) {
    this.logger.log(level, message);
  }

  info(message: string){
    this.log('info',message);
  }

  error(message: string, error: Error) {
    this.logger.error(`${message}: ${error.stack || error.message}`, message);
  }
  
  onRunnerStart(runner: any) {
    // this.runnerCount++;
    this.log('info', `Execution of ${runner.cid} workers started`);
  }

}
