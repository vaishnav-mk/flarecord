export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["NONE"] = 4] = "NONE";
})(LogLevel || (LogLevel = {}));
export class Logger {
    level;
    prefix;
    constructor(config = { level: LogLevel.INFO }) {
        this.level = config.level;
        this.prefix = config.prefix || "[flarecord]";
    }
    debug(message, ...args) {
        if (this.level <= LogLevel.DEBUG) {
            console.log(`${this.prefix} [DEBUG] ${message}`, ...args);
        }
    }
    info(message, ...args) {
        if (this.level <= LogLevel.INFO) {
            console.log(`${this.prefix} [INFO] ${message}`, ...args);
        }
    }
    warn(message, ...args) {
        if (this.level <= LogLevel.WARN) {
            console.warn(`${this.prefix} [WARN] ${message}`, ...args);
        }
    }
    error(message, error, ...args) {
        if (this.level <= LogLevel.ERROR) {
            const errorDetails = error instanceof Error ? error.stack : error;
            console.error(`${this.prefix} [ERROR] ${message}`, errorDetails, ...args);
        }
    }
    setLevel(level) {
        this.level = level;
    }
}
export const createLogger = (config) => {
    return new Logger(config);
};
//# sourceMappingURL=logger.js.map