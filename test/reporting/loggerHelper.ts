import WDIOReporter from '@wdio/reporter';
import winston, { Logger as WinstonLogger } from 'winston';

export class LoggerHelper extends WDIOReporter {
  private logger: WinstonLogger;
  private totalSpecs = 0;
  private totalTests = 0;
  private passedTests = 0;
  private failedTests = 0;
  private skippedTests = 0;
  private runnerCount = 0;
  logFilePath: string;

  constructor(options: any) {
    super(options); // Pass options to the superclass constructor
    this.logFilePath = options.logFilePath || '/Users/testvagrant/Documents/Krishna/WDIO/TS_PRAC_WDIO/logs/logs.log';
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.File({
          filename: this.logFilePath,
          level: process.env.LOG_LEVEL || 'info' || 'error'
        }),
        new winston.transports.Console({
          level: process.env.LOG_LEVEL || 'info',
          handleExceptions: true,
          format: winston.format.printf(({ level, message }) => {
            const logLevel = winston.format.colorize().colorize(level, `${level.toUpperCase()}`);
            return `[${logLevel}]: ${message}`; // Exclude the timestamp from the log output
          })
        })
      ]
    });

    this.logger.on("error", (error: Error) => {
      this.emit("error", error);
    });
  }

  log(level: string, message: string) {
    this.logger.log(level, message);
  }

  info(message: string) {
    this.logger.info(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  onRunnerStart(runner: any) {
    this.runnerCount++;
    this.log('info', `Execution of ${runner.cid} workers started`);
  }

  onTestPass() {
    this.passedTests++;
    this.totalTests++;
  }

  onTestFail() {
    this.failedTests++;
    this.totalTests++;
  }

  onTestSkip() {
    this.skippedTests++;
    this.totalTests++;
  }

  onSuiteStart() {
    this.totalSpecs++;
  }

  onRunnerEnd() {
    this.runnerCount--;

    if (this.runnerCount === 0) {
      this.logSummary();
    }
  }

  logSummary() {
    this.log('info', `
      Total tests      : ${this.totalTests} 
      Passed tests     : ${this.passedTests} 
      Failed tests     : ${this.failedTests} 
      Skipped tests    : ${this.skippedTests} 
    `);
  }
}