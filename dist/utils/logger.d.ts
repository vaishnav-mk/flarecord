export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    NONE = 4
}
export interface LoggerConfig {
    level: LogLevel;
    prefix?: string;
}
export declare class Logger {
    private level;
    private prefix;
    constructor(config?: LoggerConfig);
    debug(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
    warn(message: string, ...args: unknown[]): void;
    error(message: string, error?: Error | unknown, ...args: unknown[]): void;
    setLevel(level: LogLevel): void;
}
export declare const createLogger: (config?: LoggerConfig) => Logger;
//# sourceMappingURL=logger.d.ts.map