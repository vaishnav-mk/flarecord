export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

export interface LoggerConfig {
  level: LogLevel;
  prefix?: string;
}

export class Logger {
  private level: LogLevel;
  private prefix: string;

  constructor(config: LoggerConfig = { level: LogLevel.INFO }) {
    this.level = config.level;
    this.prefix = config.prefix || "[flarecord]";
  }

  debug(message: string, ...args: unknown[]): void {
    if (this.level <= LogLevel.DEBUG) {
      console.log(`${this.prefix} [DEBUG] ${message}`, ...args);
    }
  }

  info(message: string, ...args: unknown[]): void {
    if (this.level <= LogLevel.INFO) {
      console.log(`${this.prefix} [INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: unknown[]): void {
    if (this.level <= LogLevel.WARN) {
      console.warn(`${this.prefix} [WARN] ${message}`, ...args);
    }
  }

  error(message: string, error?: Error | unknown, ...args: unknown[]): void {
    if (this.level <= LogLevel.ERROR) {
      const errorDetails = error instanceof Error ? error.stack : error;
      console.error(`${this.prefix} [ERROR] ${message}`, errorDetails, ...args);
    }
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }
}

export const createLogger = (config?: LoggerConfig): Logger => {
  return new Logger(config);
};

