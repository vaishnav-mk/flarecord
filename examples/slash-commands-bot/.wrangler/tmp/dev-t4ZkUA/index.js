var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e3) => e3.name !== markName) : this._entries.filter((e3) => e3.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e3) => e3.name !== measureName) : this._entries.filter((e3) => e3.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e3) => e3.entryType !== "resource" || e3.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e3) => e3.name === name && (!type || e3.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e3) => e3.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x2, y2, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert2, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert: assert2,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e3) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    __name(getRawTag, "getRawTag");
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    __name(objectToString, "objectToString");
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    __name(baseGetTag, "baseGetTag");
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    __name(isSymbol, "isSymbol");
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    __name(isKey, "isKey");
    module.exports = isKey;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    __name(isObject, "isObject");
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    __name(isFunction, "isFunction");
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var coreJsData = require_coreJsData();
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    })();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    __name(isMasked, "isMasked");
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e3) {
        }
        try {
          return func + "";
        } catch (e3) {
        }
      }
      return "";
    }
    __name(toSource, "toSource");
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    __name(baseIsNative, "baseIsNative");
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    __name(getValue2, "getValue");
    module.exports = getValue2;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseIsNative = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    __name(getNative, "getNative");
    module.exports = getNative;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    __name(hashClear, "hashClear");
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    __name(hashDelete, "hashDelete");
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    __name(hashGet, "hashGet");
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    __name(hashHas, "hashHas");
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    __name(hashSet, "hashSet");
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(Hash, "Hash");
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    __name(listCacheClear, "listCacheClear");
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    __name(eq, "eq");
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    __name(assocIndexOf, "assocIndexOf");
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    __name(listCacheDelete, "listCacheDelete");
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    __name(listCacheGet, "listCacheGet");
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    __name(listCacheHas, "listCacheHas");
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    __name(listCacheSet, "listCacheSet");
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(ListCache, "ListCache");
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    __name(mapCacheClear, "mapCacheClear");
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    __name(isKeyable, "isKeyable");
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    __name(getMapData, "getMapData");
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    __name(mapCacheDelete, "mapCacheDelete");
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    __name(mapCacheGet, "mapCacheGet");
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    __name(mapCacheHas, "mapCacheHas");
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    __name(mapCacheSet, "mapCacheSet");
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    __name(MapCache, "MapCache");
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = /* @__PURE__ */ __name(function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      }, "memoized");
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    __name(memoize, "memoize");
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    __name(memoizeCapped, "memoizeCapped");
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote2, subString) {
        result.push(quote2 ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    __name(arrayMap, "arrayMap");
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    __name(baseToString, "baseToString");
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    __name(toString, "toString");
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    __name(castPath, "castPath");
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    __name(toKey, "toKey");
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    __name(baseGet, "baseGet");
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    __name(get2, "get");
    module.exports = get2;
  }
});

// node_modules/fast-deep-equal/es6/index.js
var require_es6 = __commonJS({
  "node_modules/fast-deep-equal/es6/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = /* @__PURE__ */ __name(function equal2(a3, b2) {
      if (a3 === b2) return true;
      if (a3 && b2 && typeof a3 == "object" && typeof b2 == "object") {
        if (a3.constructor !== b2.constructor) return false;
        var length, i3, keys;
        if (Array.isArray(a3)) {
          length = a3.length;
          if (length != b2.length) return false;
          for (i3 = length; i3-- !== 0; )
            if (!equal2(a3[i3], b2[i3])) return false;
          return true;
        }
        if (a3 instanceof Map && b2 instanceof Map) {
          if (a3.size !== b2.size) return false;
          for (i3 of a3.entries())
            if (!b2.has(i3[0])) return false;
          for (i3 of a3.entries())
            if (!equal2(i3[1], b2.get(i3[0]))) return false;
          return true;
        }
        if (a3 instanceof Set && b2 instanceof Set) {
          if (a3.size !== b2.size) return false;
          for (i3 of a3.entries())
            if (!b2.has(i3[0])) return false;
          return true;
        }
        if (ArrayBuffer.isView(a3) && ArrayBuffer.isView(b2)) {
          length = a3.length;
          if (length != b2.length) return false;
          for (i3 = length; i3-- !== 0; )
            if (a3[i3] !== b2[i3]) return false;
          return true;
        }
        if (a3.constructor === RegExp) return a3.source === b2.source && a3.flags === b2.flags;
        if (a3.valueOf !== Object.prototype.valueOf) return a3.valueOf() === b2.valueOf();
        if (a3.toString !== Object.prototype.toString) return a3.toString() === b2.toString();
        keys = Object.keys(a3);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i3])) return false;
        for (i3 = length; i3-- !== 0; ) {
          var key = keys[i3];
          if (!equal2(a3[key], b2[key])) return false;
        }
        return true;
      }
      return a3 !== a3 && b2 !== b2;
    }, "equal");
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    __name(setCacheAdd, "setCacheAdd");
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    __name(setCacheHas, "setCacheHas");
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    __name(SetCache, "SetCache");
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    __name(baseFindIndex, "baseFindIndex");
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function baseIsNaN(value) {
      return value !== value;
    }
    __name(baseIsNaN, "baseIsNaN");
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    __name(strictIndexOf, "strictIndexOf");
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    __name(baseIndexOf, "baseIndexOf");
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    __name(arrayIncludes, "arrayIncludes");
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    __name(arrayIncludesWith, "arrayIncludesWith");
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    __name(cacheHas, "cacheHas");
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function noop() {
    }
    __name(noop, "noop");
    module.exports = noop;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    __name(setToArray, "setToArray");
    module.exports = setToArray;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    __name(baseUniq, "baseUniq");
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqWith.js
var require_uniqWith = __commonJS({
  "node_modules/lodash/uniqWith.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var baseUniq = require_baseUniq();
    function uniqWith2(array, comparator) {
      comparator = typeof comparator == "function" ? comparator : void 0;
      return array && array.length ? baseUniq(array, void 0, comparator) : [];
    }
    __name(uniqWith2, "uniqWith");
    module.exports = uniqWith2;
  }
});

// node_modules/discord-api-types/gateway/v10.js
var require_v10 = __commonJS({
  "node_modules/discord-api-types/gateway/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VoiceChannelEffectSendAnimationType = exports.GatewayDispatchEvents = exports.GatewayIntentBits = exports.GatewayCloseCodes = exports.GatewayOpcodes = exports.GatewayVersion = void 0;
    exports.GatewayVersion = "10";
    var GatewayOpcodes2;
    (function(GatewayOpcodes3) {
      GatewayOpcodes3[GatewayOpcodes3["Dispatch"] = 0] = "Dispatch";
      GatewayOpcodes3[GatewayOpcodes3["Heartbeat"] = 1] = "Heartbeat";
      GatewayOpcodes3[GatewayOpcodes3["Identify"] = 2] = "Identify";
      GatewayOpcodes3[GatewayOpcodes3["PresenceUpdate"] = 3] = "PresenceUpdate";
      GatewayOpcodes3[GatewayOpcodes3["VoiceStateUpdate"] = 4] = "VoiceStateUpdate";
      GatewayOpcodes3[GatewayOpcodes3["Resume"] = 6] = "Resume";
      GatewayOpcodes3[GatewayOpcodes3["Reconnect"] = 7] = "Reconnect";
      GatewayOpcodes3[GatewayOpcodes3["RequestGuildMembers"] = 8] = "RequestGuildMembers";
      GatewayOpcodes3[GatewayOpcodes3["InvalidSession"] = 9] = "InvalidSession";
      GatewayOpcodes3[GatewayOpcodes3["Hello"] = 10] = "Hello";
      GatewayOpcodes3[GatewayOpcodes3["HeartbeatAck"] = 11] = "HeartbeatAck";
      GatewayOpcodes3[GatewayOpcodes3["RequestSoundboardSounds"] = 31] = "RequestSoundboardSounds";
    })(GatewayOpcodes2 || (exports.GatewayOpcodes = GatewayOpcodes2 = {}));
    var GatewayCloseCodes2;
    (function(GatewayCloseCodes3) {
      GatewayCloseCodes3[GatewayCloseCodes3["UnknownError"] = 4e3] = "UnknownError";
      GatewayCloseCodes3[GatewayCloseCodes3["UnknownOpcode"] = 4001] = "UnknownOpcode";
      GatewayCloseCodes3[GatewayCloseCodes3["DecodeError"] = 4002] = "DecodeError";
      GatewayCloseCodes3[GatewayCloseCodes3["NotAuthenticated"] = 4003] = "NotAuthenticated";
      GatewayCloseCodes3[GatewayCloseCodes3["AuthenticationFailed"] = 4004] = "AuthenticationFailed";
      GatewayCloseCodes3[GatewayCloseCodes3["AlreadyAuthenticated"] = 4005] = "AlreadyAuthenticated";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidSeq"] = 4007] = "InvalidSeq";
      GatewayCloseCodes3[GatewayCloseCodes3["RateLimited"] = 4008] = "RateLimited";
      GatewayCloseCodes3[GatewayCloseCodes3["SessionTimedOut"] = 4009] = "SessionTimedOut";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidShard"] = 4010] = "InvalidShard";
      GatewayCloseCodes3[GatewayCloseCodes3["ShardingRequired"] = 4011] = "ShardingRequired";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidAPIVersion"] = 4012] = "InvalidAPIVersion";
      GatewayCloseCodes3[GatewayCloseCodes3["InvalidIntents"] = 4013] = "InvalidIntents";
      GatewayCloseCodes3[GatewayCloseCodes3["DisallowedIntents"] = 4014] = "DisallowedIntents";
    })(GatewayCloseCodes2 || (exports.GatewayCloseCodes = GatewayCloseCodes2 = {}));
    var GatewayIntentBits2;
    (function(GatewayIntentBits3) {
      GatewayIntentBits3[GatewayIntentBits3["Guilds"] = 1] = "Guilds";
      GatewayIntentBits3[GatewayIntentBits3["GuildMembers"] = 2] = "GuildMembers";
      GatewayIntentBits3[GatewayIntentBits3["GuildModeration"] = 4] = "GuildModeration";
      GatewayIntentBits3[GatewayIntentBits3["GuildBans"] = 4] = "GuildBans";
      GatewayIntentBits3[GatewayIntentBits3["GuildExpressions"] = 8] = "GuildExpressions";
      GatewayIntentBits3[GatewayIntentBits3["GuildEmojisAndStickers"] = 8] = "GuildEmojisAndStickers";
      GatewayIntentBits3[GatewayIntentBits3["GuildIntegrations"] = 16] = "GuildIntegrations";
      GatewayIntentBits3[GatewayIntentBits3["GuildWebhooks"] = 32] = "GuildWebhooks";
      GatewayIntentBits3[GatewayIntentBits3["GuildInvites"] = 64] = "GuildInvites";
      GatewayIntentBits3[GatewayIntentBits3["GuildVoiceStates"] = 128] = "GuildVoiceStates";
      GatewayIntentBits3[GatewayIntentBits3["GuildPresences"] = 256] = "GuildPresences";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessages"] = 512] = "GuildMessages";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessageReactions"] = 1024] = "GuildMessageReactions";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessageTyping"] = 2048] = "GuildMessageTyping";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessages"] = 4096] = "DirectMessages";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessageReactions"] = 8192] = "DirectMessageReactions";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessageTyping"] = 16384] = "DirectMessageTyping";
      GatewayIntentBits3[GatewayIntentBits3["MessageContent"] = 32768] = "MessageContent";
      GatewayIntentBits3[GatewayIntentBits3["GuildScheduledEvents"] = 65536] = "GuildScheduledEvents";
      GatewayIntentBits3[GatewayIntentBits3["AutoModerationConfiguration"] = 1048576] = "AutoModerationConfiguration";
      GatewayIntentBits3[GatewayIntentBits3["AutoModerationExecution"] = 2097152] = "AutoModerationExecution";
      GatewayIntentBits3[GatewayIntentBits3["GuildMessagePolls"] = 16777216] = "GuildMessagePolls";
      GatewayIntentBits3[GatewayIntentBits3["DirectMessagePolls"] = 33554432] = "DirectMessagePolls";
    })(GatewayIntentBits2 || (exports.GatewayIntentBits = GatewayIntentBits2 = {}));
    var GatewayDispatchEvents2;
    (function(GatewayDispatchEvents3) {
      GatewayDispatchEvents3["ApplicationCommandPermissionsUpdate"] = "APPLICATION_COMMAND_PERMISSIONS_UPDATE";
      GatewayDispatchEvents3["AutoModerationActionExecution"] = "AUTO_MODERATION_ACTION_EXECUTION";
      GatewayDispatchEvents3["AutoModerationRuleCreate"] = "AUTO_MODERATION_RULE_CREATE";
      GatewayDispatchEvents3["AutoModerationRuleDelete"] = "AUTO_MODERATION_RULE_DELETE";
      GatewayDispatchEvents3["AutoModerationRuleUpdate"] = "AUTO_MODERATION_RULE_UPDATE";
      GatewayDispatchEvents3["ChannelCreate"] = "CHANNEL_CREATE";
      GatewayDispatchEvents3["ChannelDelete"] = "CHANNEL_DELETE";
      GatewayDispatchEvents3["ChannelPinsUpdate"] = "CHANNEL_PINS_UPDATE";
      GatewayDispatchEvents3["ChannelUpdate"] = "CHANNEL_UPDATE";
      GatewayDispatchEvents3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      GatewayDispatchEvents3["EntitlementDelete"] = "ENTITLEMENT_DELETE";
      GatewayDispatchEvents3["EntitlementUpdate"] = "ENTITLEMENT_UPDATE";
      GatewayDispatchEvents3["GuildAuditLogEntryCreate"] = "GUILD_AUDIT_LOG_ENTRY_CREATE";
      GatewayDispatchEvents3["GuildBanAdd"] = "GUILD_BAN_ADD";
      GatewayDispatchEvents3["GuildBanRemove"] = "GUILD_BAN_REMOVE";
      GatewayDispatchEvents3["GuildCreate"] = "GUILD_CREATE";
      GatewayDispatchEvents3["GuildDelete"] = "GUILD_DELETE";
      GatewayDispatchEvents3["GuildEmojisUpdate"] = "GUILD_EMOJIS_UPDATE";
      GatewayDispatchEvents3["GuildIntegrationsUpdate"] = "GUILD_INTEGRATIONS_UPDATE";
      GatewayDispatchEvents3["GuildMemberAdd"] = "GUILD_MEMBER_ADD";
      GatewayDispatchEvents3["GuildMemberRemove"] = "GUILD_MEMBER_REMOVE";
      GatewayDispatchEvents3["GuildMembersChunk"] = "GUILD_MEMBERS_CHUNK";
      GatewayDispatchEvents3["GuildMemberUpdate"] = "GUILD_MEMBER_UPDATE";
      GatewayDispatchEvents3["GuildRoleCreate"] = "GUILD_ROLE_CREATE";
      GatewayDispatchEvents3["GuildRoleDelete"] = "GUILD_ROLE_DELETE";
      GatewayDispatchEvents3["GuildRoleUpdate"] = "GUILD_ROLE_UPDATE";
      GatewayDispatchEvents3["GuildScheduledEventCreate"] = "GUILD_SCHEDULED_EVENT_CREATE";
      GatewayDispatchEvents3["GuildScheduledEventDelete"] = "GUILD_SCHEDULED_EVENT_DELETE";
      GatewayDispatchEvents3["GuildScheduledEventUpdate"] = "GUILD_SCHEDULED_EVENT_UPDATE";
      GatewayDispatchEvents3["GuildScheduledEventUserAdd"] = "GUILD_SCHEDULED_EVENT_USER_ADD";
      GatewayDispatchEvents3["GuildScheduledEventUserRemove"] = "GUILD_SCHEDULED_EVENT_USER_REMOVE";
      GatewayDispatchEvents3["GuildSoundboardSoundCreate"] = "GUILD_SOUNDBOARD_SOUND_CREATE";
      GatewayDispatchEvents3["GuildSoundboardSoundDelete"] = "GUILD_SOUNDBOARD_SOUND_DELETE";
      GatewayDispatchEvents3["GuildSoundboardSoundsUpdate"] = "GUILD_SOUNDBOARD_SOUNDS_UPDATE";
      GatewayDispatchEvents3["GuildSoundboardSoundUpdate"] = "GUILD_SOUNDBOARD_SOUND_UPDATE";
      GatewayDispatchEvents3["SoundboardSounds"] = "SOUNDBOARD_SOUNDS";
      GatewayDispatchEvents3["GuildStickersUpdate"] = "GUILD_STICKERS_UPDATE";
      GatewayDispatchEvents3["GuildUpdate"] = "GUILD_UPDATE";
      GatewayDispatchEvents3["IntegrationCreate"] = "INTEGRATION_CREATE";
      GatewayDispatchEvents3["IntegrationDelete"] = "INTEGRATION_DELETE";
      GatewayDispatchEvents3["IntegrationUpdate"] = "INTEGRATION_UPDATE";
      GatewayDispatchEvents3["InteractionCreate"] = "INTERACTION_CREATE";
      GatewayDispatchEvents3["InviteCreate"] = "INVITE_CREATE";
      GatewayDispatchEvents3["InviteDelete"] = "INVITE_DELETE";
      GatewayDispatchEvents3["MessageCreate"] = "MESSAGE_CREATE";
      GatewayDispatchEvents3["MessageDelete"] = "MESSAGE_DELETE";
      GatewayDispatchEvents3["MessageDeleteBulk"] = "MESSAGE_DELETE_BULK";
      GatewayDispatchEvents3["MessagePollVoteAdd"] = "MESSAGE_POLL_VOTE_ADD";
      GatewayDispatchEvents3["MessagePollVoteRemove"] = "MESSAGE_POLL_VOTE_REMOVE";
      GatewayDispatchEvents3["MessageReactionAdd"] = "MESSAGE_REACTION_ADD";
      GatewayDispatchEvents3["MessageReactionRemove"] = "MESSAGE_REACTION_REMOVE";
      GatewayDispatchEvents3["MessageReactionRemoveAll"] = "MESSAGE_REACTION_REMOVE_ALL";
      GatewayDispatchEvents3["MessageReactionRemoveEmoji"] = "MESSAGE_REACTION_REMOVE_EMOJI";
      GatewayDispatchEvents3["MessageUpdate"] = "MESSAGE_UPDATE";
      GatewayDispatchEvents3["PresenceUpdate"] = "PRESENCE_UPDATE";
      GatewayDispatchEvents3["RateLimited"] = "RATE_LIMITED";
      GatewayDispatchEvents3["Ready"] = "READY";
      GatewayDispatchEvents3["Resumed"] = "RESUMED";
      GatewayDispatchEvents3["StageInstanceCreate"] = "STAGE_INSTANCE_CREATE";
      GatewayDispatchEvents3["StageInstanceDelete"] = "STAGE_INSTANCE_DELETE";
      GatewayDispatchEvents3["StageInstanceUpdate"] = "STAGE_INSTANCE_UPDATE";
      GatewayDispatchEvents3["SubscriptionCreate"] = "SUBSCRIPTION_CREATE";
      GatewayDispatchEvents3["SubscriptionDelete"] = "SUBSCRIPTION_DELETE";
      GatewayDispatchEvents3["SubscriptionUpdate"] = "SUBSCRIPTION_UPDATE";
      GatewayDispatchEvents3["ThreadCreate"] = "THREAD_CREATE";
      GatewayDispatchEvents3["ThreadDelete"] = "THREAD_DELETE";
      GatewayDispatchEvents3["ThreadListSync"] = "THREAD_LIST_SYNC";
      GatewayDispatchEvents3["ThreadMembersUpdate"] = "THREAD_MEMBERS_UPDATE";
      GatewayDispatchEvents3["ThreadMemberUpdate"] = "THREAD_MEMBER_UPDATE";
      GatewayDispatchEvents3["ThreadUpdate"] = "THREAD_UPDATE";
      GatewayDispatchEvents3["TypingStart"] = "TYPING_START";
      GatewayDispatchEvents3["UserUpdate"] = "USER_UPDATE";
      GatewayDispatchEvents3["VoiceChannelEffectSend"] = "VOICE_CHANNEL_EFFECT_SEND";
      GatewayDispatchEvents3["VoiceServerUpdate"] = "VOICE_SERVER_UPDATE";
      GatewayDispatchEvents3["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
      GatewayDispatchEvents3["WebhooksUpdate"] = "WEBHOOKS_UPDATE";
    })(GatewayDispatchEvents2 || (exports.GatewayDispatchEvents = GatewayDispatchEvents2 = {}));
    var VoiceChannelEffectSendAnimationType2;
    (function(VoiceChannelEffectSendAnimationType3) {
      VoiceChannelEffectSendAnimationType3[VoiceChannelEffectSendAnimationType3["Premium"] = 0] = "Premium";
      VoiceChannelEffectSendAnimationType3[VoiceChannelEffectSendAnimationType3["Basic"] = 1] = "Basic";
    })(VoiceChannelEffectSendAnimationType2 || (exports.VoiceChannelEffectSendAnimationType = VoiceChannelEffectSendAnimationType2 = {}));
  }
});

// node_modules/discord-api-types/globals.js
var require_globals = __commonJS({
  "node_modules/discord-api-types/globals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormattingPatterns = void 0;
    var timestampStyles = "DFRSTdfst";
    var timestampLength = 13;
    exports.FormattingPatterns = {
      /**
       * Regular expression for matching a user mention, strictly without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      User: /<@(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, strictly with a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithNickname: /<@!(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a user mention, with or without a nickname
       *
       * The `id` group property is present on the `exec` result of this expression
       *
       * @deprecated Passing `!` in user mentions is no longer necessary / supported, and future message contents won't have it
       */
      UserWithOptionalNickname: /<@!?(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a channel mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Channel: /<#(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      Role: /<@&(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a application command mention
       *
       * The `fullName` (possibly including `name`, `subcommandOrGroup` and `subcommand`) and `id` group properties are present on the `exec` result of this expression
       */
      SlashCommand: /<\/(?<fullName>(?<name>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: (?<subcommandOrGroup>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?(?: (?<subcommand>[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32}))?):(?<id>\d{17,20})>/u,
      /**
       * Regular expression for matching a custom emoji, either static or animated
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      Emoji: /<(?<animated>a)?:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly an animated custom emoji
       *
       * The `animated`, `name` and `id` group properties are present on the `exec` result of this expression
       */
      AnimatedEmoji: /<(?<animated>a):(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching strictly a static custom emoji
       *
       * The `name` and `id` group properties are present on the `exec` result of this expression
       */
      StaticEmoji: /<:(?<name>\w{2,32}):(?<id>\d{17,20})>/,
      /**
       * Regular expression for matching a timestamp, either default or custom styled
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      Timestamp: new RegExp(`<t:(?<timestamp>-?\\d{1,${timestampLength}})(:(?<style>[${timestampStyles}]))?>`),
      /**
       * Regular expression for matching strictly default styled timestamps
       *
       * The `timestamp` group property is present on the `exec` result of this expression
       */
      DefaultStyledTimestamp: new RegExp(`<t:(?<timestamp>-?\\d{1,${timestampLength}})>`),
      /**
       * Regular expression for matching strictly custom styled timestamps
       *
       * The `timestamp` and `style` group properties are present on the `exec` result of this expression
       */
      StyledTimestamp: new RegExp(`<t:(?<timestamp>-?\\d{1,${timestampLength}}):(?<style>[${timestampStyles}])>`),
      /**
       * Regular expression for matching a guild navigation mention
       *
       * The `type` group property is present on the `exec` result of this expression
       */
      GuildNavigation: /<id:(?<type>customize|browse|guide|linked-roles)>/,
      /**
       * Regular expression for matching a linked role mention
       *
       * The `id` group property is present on the `exec` result of this expression
       */
      LinkedRole: /<id:linked-roles:(?<id>\d{17,20})>/
    };
    Object.freeze(exports.FormattingPatterns);
  }
});

// node_modules/discord-api-types/payloads/common.js
var require_common = __commonJS({
  "node_modules/discord-api-types/payloads/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionFlagsBits = void 0;
    exports.PermissionFlagsBits = {
      /**
       * Allows creation of instant invites
       *
       * Applies to channel types: Text, Voice, Stage
       */
      CreateInstantInvite: 1n << 0n,
      /**
       * Allows kicking members
       */
      KickMembers: 1n << 1n,
      /**
       * Allows banning members
       */
      BanMembers: 1n << 2n,
      /**
       * Allows all permissions and bypasses channel permission overwrites
       */
      Administrator: 1n << 3n,
      /**
       * Allows management and editing of channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageChannels: 1n << 4n,
      /**
       * Allows management and editing of the guild
       */
      ManageGuild: 1n << 5n,
      /**
       * Allows for the addition of reactions to messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AddReactions: 1n << 6n,
      /**
       * Allows for viewing of audit logs
       */
      ViewAuditLog: 1n << 7n,
      /**
       * Allows for using priority speaker in a voice channel
       *
       * Applies to channel types: Voice
       */
      PrioritySpeaker: 1n << 8n,
      /**
       * Allows the user to go live
       *
       * Applies to channel types: Voice, Stage
       */
      Stream: 1n << 9n,
      /**
       * Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ViewChannel: 1n << 10n,
      /**
       * Allows for sending messages in a channel and creating threads in a forum
       * (does not allow sending messages in threads)
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendMessages: 1n << 11n,
      /**
       * Allows for sending of `/tts` messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendTTSMessages: 1n << 12n,
      /**
       * Allows for deletion of other users messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageMessages: 1n << 13n,
      /**
       * Links sent by users with this permission will be auto-embedded
       *
       * Applies to channel types: Text, Voice, Stage
       */
      EmbedLinks: 1n << 14n,
      /**
       * Allows for uploading images and files
       *
       * Applies to channel types: Text, Voice, Stage
       */
      AttachFiles: 1n << 15n,
      /**
       * Allows for reading of message history
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ReadMessageHistory: 1n << 16n,
      /**
       * Allows for using the `@everyone` tag to notify all users in a channel,
       * and the `@here` tag to notify all online users in a channel
       *
       * Applies to channel types: Text, Voice, Stage
       */
      MentionEveryone: 1n << 17n,
      /**
       * Allows the usage of custom emojis from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalEmojis: 1n << 18n,
      /**
       * Allows for viewing guild insights
       */
      ViewGuildInsights: 1n << 19n,
      /**
       * Allows for joining of a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      Connect: 1n << 20n,
      /**
       * Allows for speaking in a voice channel
       *
       * Applies to channel types: Voice
       */
      Speak: 1n << 21n,
      /**
       * Allows for muting members in a voice channel
       *
       * Applies to channel types: Voice, Stage
       */
      MuteMembers: 1n << 22n,
      /**
       * Allows for deafening of members in a voice channel
       *
       * Applies to channel types: Voice
       */
      DeafenMembers: 1n << 23n,
      /**
       * Allows for moving of members between voice channels
       *
       * Applies to channel types: Voice, Stage
       */
      MoveMembers: 1n << 24n,
      /**
       * Allows for using voice-activity-detection in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseVAD: 1n << 25n,
      /**
       * Allows for modification of own nickname
       */
      ChangeNickname: 1n << 26n,
      /**
       * Allows for modification of other users nicknames
       */
      ManageNicknames: 1n << 27n,
      /**
       * Allows management and editing of roles
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageRoles: 1n << 28n,
      /**
       * Allows management and editing of webhooks
       *
       * Applies to channel types: Text, Voice, Stage
       */
      ManageWebhooks: 1n << 29n,
      /**
       * Allows management and editing of emojis, stickers, and soundboard sounds
       *
       * @deprecated This is the old name for {@link PermissionFlagsBits.ManageGuildExpressions}
       */
      ManageEmojisAndStickers: 1n << 30n,
      /**
       * Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users
       */
      ManageGuildExpressions: 1n << 30n,
      /**
       * Allows members to use application commands, including slash commands and context menu commands
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseApplicationCommands: 1n << 31n,
      /**
       * Allows for requesting to speak in stage channels
       *
       * Applies to channel types: Stage
       */
      RequestToSpeak: 1n << 32n,
      /**
       * Allows for editing and deleting scheduled events created by all users
       *
       * Applies to channel types: Voice, Stage
       */
      ManageEvents: 1n << 33n,
      /**
       * Allows for deleting and archiving threads, and viewing all private threads
       *
       * Applies to channel types: Text
       */
      ManageThreads: 1n << 34n,
      /**
       * Allows for creating public and announcement threads
       *
       * Applies to channel types: Text
       */
      CreatePublicThreads: 1n << 35n,
      /**
       * Allows for creating private threads
       *
       * Applies to channel types: Text
       */
      CreatePrivateThreads: 1n << 36n,
      /**
       * Allows the usage of custom stickers from other servers
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalStickers: 1n << 37n,
      /**
       * Allows for sending messages in threads
       *
       * Applies to channel types: Text
       */
      SendMessagesInThreads: 1n << 38n,
      /**
       * Allows for using Activities (applications with the {@link ApplicationFlags.Embedded} flag) in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseEmbeddedActivities: 1n << 39n,
      /**
       * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads,
       * and from speaking in voice and stage channels
       */
      ModerateMembers: 1n << 40n,
      /**
       * Allows for viewing role subscription insights
       */
      ViewCreatorMonetizationAnalytics: 1n << 41n,
      /**
       * Allows for using soundboard in a voice channel
       *
       * Applies to channel types: Voice
       */
      UseSoundboard: 1n << 42n,
      /**
       * Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the current user
       */
      CreateGuildExpressions: 1n << 43n,
      /**
       * Allows for creating scheduled events, and editing and deleting those created by the current user
       *
       * Applies to channel types: Voice, Stage
       */
      CreateEvents: 1n << 44n,
      /**
       * Allows the usage of custom soundboard sounds from other servers
       *
       * Applies to channel types: Voice
       */
      UseExternalSounds: 1n << 45n,
      /**
       * Allows sending voice messages
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendVoiceMessages: 1n << 46n,
      /**
       * Allows sending polls
       *
       * Applies to channel types: Text, Voice, Stage
       */
      SendPolls: 1n << 49n,
      /**
       * Allows user-installed apps to send public responses. When disabled, users will still be allowed to use their apps but the responses will be ephemeral. This only applies to apps not also installed to the server
       *
       * Applies to channel types: Text, Voice, Stage
       */
      UseExternalApps: 1n << 50n,
      /**
       * Allows pinning and unpinning messages
       *
       * Applies to channel types: Text
       */
      PinMessages: 1n << 51n,
      /**
       * Allows bypassing slowmode restrictions
       *
       * Applies to channel types: Text, Voice, Stage
       */
      BypassSlowmode: 1n << 52n
    };
    Object.freeze(exports.PermissionFlagsBits);
  }
});

// node_modules/discord-api-types/payloads/v10/application.js
var require_application = __commonJS({
  "node_modules/discord-api-types/payloads/v10/application.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationWebhookEventStatus = exports.ApplicationRoleConnectionMetadataType = exports.ApplicationFlags = void 0;
    var ApplicationFlags2;
    (function(ApplicationFlags3) {
      ApplicationFlags3[ApplicationFlags3["EmbeddedReleased"] = 2] = "EmbeddedReleased";
      ApplicationFlags3[ApplicationFlags3["ManagedEmoji"] = 4] = "ManagedEmoji";
      ApplicationFlags3[ApplicationFlags3["EmbeddedIAP"] = 8] = "EmbeddedIAP";
      ApplicationFlags3[ApplicationFlags3["GroupDMCreate"] = 16] = "GroupDMCreate";
      ApplicationFlags3[ApplicationFlags3["ApplicationAutoModerationRuleCreateBadge"] = 64] = "ApplicationAutoModerationRuleCreateBadge";
      ApplicationFlags3[ApplicationFlags3["RPCHasConnected"] = 2048] = "RPCHasConnected";
      ApplicationFlags3[ApplicationFlags3["GatewayPresence"] = 4096] = "GatewayPresence";
      ApplicationFlags3[ApplicationFlags3["GatewayPresenceLimited"] = 8192] = "GatewayPresenceLimited";
      ApplicationFlags3[ApplicationFlags3["GatewayGuildMembers"] = 16384] = "GatewayGuildMembers";
      ApplicationFlags3[ApplicationFlags3["GatewayGuildMembersLimited"] = 32768] = "GatewayGuildMembersLimited";
      ApplicationFlags3[ApplicationFlags3["VerificationPendingGuildLimit"] = 65536] = "VerificationPendingGuildLimit";
      ApplicationFlags3[ApplicationFlags3["Embedded"] = 131072] = "Embedded";
      ApplicationFlags3[ApplicationFlags3["GatewayMessageContent"] = 262144] = "GatewayMessageContent";
      ApplicationFlags3[ApplicationFlags3["GatewayMessageContentLimited"] = 524288] = "GatewayMessageContentLimited";
      ApplicationFlags3[ApplicationFlags3["EmbeddedFirstParty"] = 1048576] = "EmbeddedFirstParty";
      ApplicationFlags3[ApplicationFlags3["ApplicationCommandBadge"] = 8388608] = "ApplicationCommandBadge";
    })(ApplicationFlags2 || (exports.ApplicationFlags = ApplicationFlags2 = {}));
    var ApplicationRoleConnectionMetadataType2;
    (function(ApplicationRoleConnectionMetadataType3) {
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerLessThanOrEqual"] = 1] = "IntegerLessThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerGreaterThanOrEqual"] = 2] = "IntegerGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerEqual"] = 3] = "IntegerEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["IntegerNotEqual"] = 4] = "IntegerNotEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["DatetimeLessThanOrEqual"] = 5] = "DatetimeLessThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["DatetimeGreaterThanOrEqual"] = 6] = "DatetimeGreaterThanOrEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["BooleanEqual"] = 7] = "BooleanEqual";
      ApplicationRoleConnectionMetadataType3[ApplicationRoleConnectionMetadataType3["BooleanNotEqual"] = 8] = "BooleanNotEqual";
    })(ApplicationRoleConnectionMetadataType2 || (exports.ApplicationRoleConnectionMetadataType = ApplicationRoleConnectionMetadataType2 = {}));
    var ApplicationWebhookEventStatus2;
    (function(ApplicationWebhookEventStatus3) {
      ApplicationWebhookEventStatus3[ApplicationWebhookEventStatus3["Disabled"] = 1] = "Disabled";
      ApplicationWebhookEventStatus3[ApplicationWebhookEventStatus3["Enabled"] = 2] = "Enabled";
      ApplicationWebhookEventStatus3[ApplicationWebhookEventStatus3["DisabledByDiscord"] = 3] = "DisabledByDiscord";
    })(ApplicationWebhookEventStatus2 || (exports.ApplicationWebhookEventStatus = ApplicationWebhookEventStatus2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/auditLog.js
var require_auditLog = __commonJS({
  "node_modules/discord-api-types/payloads/v10/auditLog.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuditLogOptionsType = exports.AuditLogEvent = void 0;
    var AuditLogEvent2;
    (function(AuditLogEvent3) {
      AuditLogEvent3[AuditLogEvent3["GuildUpdate"] = 1] = "GuildUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelCreate"] = 10] = "ChannelCreate";
      AuditLogEvent3[AuditLogEvent3["ChannelUpdate"] = 11] = "ChannelUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelDelete"] = 12] = "ChannelDelete";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteCreate"] = 13] = "ChannelOverwriteCreate";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteUpdate"] = 14] = "ChannelOverwriteUpdate";
      AuditLogEvent3[AuditLogEvent3["ChannelOverwriteDelete"] = 15] = "ChannelOverwriteDelete";
      AuditLogEvent3[AuditLogEvent3["MemberKick"] = 20] = "MemberKick";
      AuditLogEvent3[AuditLogEvent3["MemberPrune"] = 21] = "MemberPrune";
      AuditLogEvent3[AuditLogEvent3["MemberBanAdd"] = 22] = "MemberBanAdd";
      AuditLogEvent3[AuditLogEvent3["MemberBanRemove"] = 23] = "MemberBanRemove";
      AuditLogEvent3[AuditLogEvent3["MemberUpdate"] = 24] = "MemberUpdate";
      AuditLogEvent3[AuditLogEvent3["MemberRoleUpdate"] = 25] = "MemberRoleUpdate";
      AuditLogEvent3[AuditLogEvent3["MemberMove"] = 26] = "MemberMove";
      AuditLogEvent3[AuditLogEvent3["MemberDisconnect"] = 27] = "MemberDisconnect";
      AuditLogEvent3[AuditLogEvent3["BotAdd"] = 28] = "BotAdd";
      AuditLogEvent3[AuditLogEvent3["RoleCreate"] = 30] = "RoleCreate";
      AuditLogEvent3[AuditLogEvent3["RoleUpdate"] = 31] = "RoleUpdate";
      AuditLogEvent3[AuditLogEvent3["RoleDelete"] = 32] = "RoleDelete";
      AuditLogEvent3[AuditLogEvent3["InviteCreate"] = 40] = "InviteCreate";
      AuditLogEvent3[AuditLogEvent3["InviteUpdate"] = 41] = "InviteUpdate";
      AuditLogEvent3[AuditLogEvent3["InviteDelete"] = 42] = "InviteDelete";
      AuditLogEvent3[AuditLogEvent3["WebhookCreate"] = 50] = "WebhookCreate";
      AuditLogEvent3[AuditLogEvent3["WebhookUpdate"] = 51] = "WebhookUpdate";
      AuditLogEvent3[AuditLogEvent3["WebhookDelete"] = 52] = "WebhookDelete";
      AuditLogEvent3[AuditLogEvent3["EmojiCreate"] = 60] = "EmojiCreate";
      AuditLogEvent3[AuditLogEvent3["EmojiUpdate"] = 61] = "EmojiUpdate";
      AuditLogEvent3[AuditLogEvent3["EmojiDelete"] = 62] = "EmojiDelete";
      AuditLogEvent3[AuditLogEvent3["MessageDelete"] = 72] = "MessageDelete";
      AuditLogEvent3[AuditLogEvent3["MessageBulkDelete"] = 73] = "MessageBulkDelete";
      AuditLogEvent3[AuditLogEvent3["MessagePin"] = 74] = "MessagePin";
      AuditLogEvent3[AuditLogEvent3["MessageUnpin"] = 75] = "MessageUnpin";
      AuditLogEvent3[AuditLogEvent3["IntegrationCreate"] = 80] = "IntegrationCreate";
      AuditLogEvent3[AuditLogEvent3["IntegrationUpdate"] = 81] = "IntegrationUpdate";
      AuditLogEvent3[AuditLogEvent3["IntegrationDelete"] = 82] = "IntegrationDelete";
      AuditLogEvent3[AuditLogEvent3["StageInstanceCreate"] = 83] = "StageInstanceCreate";
      AuditLogEvent3[AuditLogEvent3["StageInstanceUpdate"] = 84] = "StageInstanceUpdate";
      AuditLogEvent3[AuditLogEvent3["StageInstanceDelete"] = 85] = "StageInstanceDelete";
      AuditLogEvent3[AuditLogEvent3["StickerCreate"] = 90] = "StickerCreate";
      AuditLogEvent3[AuditLogEvent3["StickerUpdate"] = 91] = "StickerUpdate";
      AuditLogEvent3[AuditLogEvent3["StickerDelete"] = 92] = "StickerDelete";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventCreate"] = 100] = "GuildScheduledEventCreate";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventUpdate"] = 101] = "GuildScheduledEventUpdate";
      AuditLogEvent3[AuditLogEvent3["GuildScheduledEventDelete"] = 102] = "GuildScheduledEventDelete";
      AuditLogEvent3[AuditLogEvent3["ThreadCreate"] = 110] = "ThreadCreate";
      AuditLogEvent3[AuditLogEvent3["ThreadUpdate"] = 111] = "ThreadUpdate";
      AuditLogEvent3[AuditLogEvent3["ThreadDelete"] = 112] = "ThreadDelete";
      AuditLogEvent3[AuditLogEvent3["ApplicationCommandPermissionUpdate"] = 121] = "ApplicationCommandPermissionUpdate";
      AuditLogEvent3[AuditLogEvent3["SoundboardSoundCreate"] = 130] = "SoundboardSoundCreate";
      AuditLogEvent3[AuditLogEvent3["SoundboardSoundUpdate"] = 131] = "SoundboardSoundUpdate";
      AuditLogEvent3[AuditLogEvent3["SoundboardSoundDelete"] = 132] = "SoundboardSoundDelete";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleCreate"] = 140] = "AutoModerationRuleCreate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleUpdate"] = 141] = "AutoModerationRuleUpdate";
      AuditLogEvent3[AuditLogEvent3["AutoModerationRuleDelete"] = 142] = "AutoModerationRuleDelete";
      AuditLogEvent3[AuditLogEvent3["AutoModerationBlockMessage"] = 143] = "AutoModerationBlockMessage";
      AuditLogEvent3[AuditLogEvent3["AutoModerationFlagToChannel"] = 144] = "AutoModerationFlagToChannel";
      AuditLogEvent3[AuditLogEvent3["AutoModerationUserCommunicationDisabled"] = 145] = "AutoModerationUserCommunicationDisabled";
      AuditLogEvent3[AuditLogEvent3["AutoModerationQuarantineUser"] = 146] = "AutoModerationQuarantineUser";
      AuditLogEvent3[AuditLogEvent3["CreatorMonetizationRequestCreated"] = 150] = "CreatorMonetizationRequestCreated";
      AuditLogEvent3[AuditLogEvent3["CreatorMonetizationTermsAccepted"] = 151] = "CreatorMonetizationTermsAccepted";
      AuditLogEvent3[AuditLogEvent3["OnboardingPromptCreate"] = 163] = "OnboardingPromptCreate";
      AuditLogEvent3[AuditLogEvent3["OnboardingPromptUpdate"] = 164] = "OnboardingPromptUpdate";
      AuditLogEvent3[AuditLogEvent3["OnboardingPromptDelete"] = 165] = "OnboardingPromptDelete";
      AuditLogEvent3[AuditLogEvent3["OnboardingCreate"] = 166] = "OnboardingCreate";
      AuditLogEvent3[AuditLogEvent3["OnboardingUpdate"] = 167] = "OnboardingUpdate";
      AuditLogEvent3[AuditLogEvent3["HomeSettingsCreate"] = 190] = "HomeSettingsCreate";
      AuditLogEvent3[AuditLogEvent3["HomeSettingsUpdate"] = 191] = "HomeSettingsUpdate";
    })(AuditLogEvent2 || (exports.AuditLogEvent = AuditLogEvent2 = {}));
    var AuditLogOptionsType2;
    (function(AuditLogOptionsType3) {
      AuditLogOptionsType3["Role"] = "0";
      AuditLogOptionsType3["Member"] = "1";
    })(AuditLogOptionsType2 || (exports.AuditLogOptionsType = AuditLogOptionsType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/autoModeration.js
var require_autoModeration = __commonJS({
  "node_modules/discord-api-types/payloads/v10/autoModeration.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AutoModerationActionType = exports.AutoModerationRuleEventType = exports.AutoModerationRuleKeywordPresetType = exports.AutoModerationRuleTriggerType = void 0;
    var AutoModerationRuleTriggerType2;
    (function(AutoModerationRuleTriggerType3) {
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["Keyword"] = 1] = "Keyword";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["Spam"] = 3] = "Spam";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["KeywordPreset"] = 4] = "KeywordPreset";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["MentionSpam"] = 5] = "MentionSpam";
      AutoModerationRuleTriggerType3[AutoModerationRuleTriggerType3["MemberProfile"] = 6] = "MemberProfile";
    })(AutoModerationRuleTriggerType2 || (exports.AutoModerationRuleTriggerType = AutoModerationRuleTriggerType2 = {}));
    var AutoModerationRuleKeywordPresetType2;
    (function(AutoModerationRuleKeywordPresetType3) {
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["Profanity"] = 1] = "Profanity";
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["SexualContent"] = 2] = "SexualContent";
      AutoModerationRuleKeywordPresetType3[AutoModerationRuleKeywordPresetType3["Slurs"] = 3] = "Slurs";
    })(AutoModerationRuleKeywordPresetType2 || (exports.AutoModerationRuleKeywordPresetType = AutoModerationRuleKeywordPresetType2 = {}));
    var AutoModerationRuleEventType2;
    (function(AutoModerationRuleEventType3) {
      AutoModerationRuleEventType3[AutoModerationRuleEventType3["MessageSend"] = 1] = "MessageSend";
      AutoModerationRuleEventType3[AutoModerationRuleEventType3["MemberUpdate"] = 2] = "MemberUpdate";
    })(AutoModerationRuleEventType2 || (exports.AutoModerationRuleEventType = AutoModerationRuleEventType2 = {}));
    var AutoModerationActionType2;
    (function(AutoModerationActionType3) {
      AutoModerationActionType3[AutoModerationActionType3["BlockMessage"] = 1] = "BlockMessage";
      AutoModerationActionType3[AutoModerationActionType3["SendAlertMessage"] = 2] = "SendAlertMessage";
      AutoModerationActionType3[AutoModerationActionType3["Timeout"] = 3] = "Timeout";
      AutoModerationActionType3[AutoModerationActionType3["BlockMemberInteraction"] = 4] = "BlockMemberInteraction";
    })(AutoModerationActionType2 || (exports.AutoModerationActionType = AutoModerationActionType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/channel.js
var require_channel = __commonJS({
  "node_modules/discord-api-types/payloads/v10/channel.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelFlags = exports.ThreadMemberFlags = exports.ThreadAutoArchiveDuration = exports.OverwriteType = exports.VideoQualityMode = exports.ChannelType = exports.ForumLayoutType = exports.SortOrderType = void 0;
    var SortOrderType2;
    (function(SortOrderType3) {
      SortOrderType3[SortOrderType3["LatestActivity"] = 0] = "LatestActivity";
      SortOrderType3[SortOrderType3["CreationDate"] = 1] = "CreationDate";
    })(SortOrderType2 || (exports.SortOrderType = SortOrderType2 = {}));
    var ForumLayoutType2;
    (function(ForumLayoutType3) {
      ForumLayoutType3[ForumLayoutType3["NotSet"] = 0] = "NotSet";
      ForumLayoutType3[ForumLayoutType3["ListView"] = 1] = "ListView";
      ForumLayoutType3[ForumLayoutType3["GalleryView"] = 2] = "GalleryView";
    })(ForumLayoutType2 || (exports.ForumLayoutType = ForumLayoutType2 = {}));
    var ChannelType2;
    (function(ChannelType3) {
      ChannelType3[ChannelType3["GuildText"] = 0] = "GuildText";
      ChannelType3[ChannelType3["DM"] = 1] = "DM";
      ChannelType3[ChannelType3["GuildVoice"] = 2] = "GuildVoice";
      ChannelType3[ChannelType3["GroupDM"] = 3] = "GroupDM";
      ChannelType3[ChannelType3["GuildCategory"] = 4] = "GuildCategory";
      ChannelType3[ChannelType3["GuildAnnouncement"] = 5] = "GuildAnnouncement";
      ChannelType3[ChannelType3["AnnouncementThread"] = 10] = "AnnouncementThread";
      ChannelType3[ChannelType3["PublicThread"] = 11] = "PublicThread";
      ChannelType3[ChannelType3["PrivateThread"] = 12] = "PrivateThread";
      ChannelType3[ChannelType3["GuildStageVoice"] = 13] = "GuildStageVoice";
      ChannelType3[ChannelType3["GuildDirectory"] = 14] = "GuildDirectory";
      ChannelType3[ChannelType3["GuildForum"] = 15] = "GuildForum";
      ChannelType3[ChannelType3["GuildMedia"] = 16] = "GuildMedia";
      ChannelType3[ChannelType3["GuildNews"] = 5] = "GuildNews";
      ChannelType3[ChannelType3["GuildNewsThread"] = 10] = "GuildNewsThread";
      ChannelType3[ChannelType3["GuildPublicThread"] = 11] = "GuildPublicThread";
      ChannelType3[ChannelType3["GuildPrivateThread"] = 12] = "GuildPrivateThread";
    })(ChannelType2 || (exports.ChannelType = ChannelType2 = {}));
    var VideoQualityMode2;
    (function(VideoQualityMode3) {
      VideoQualityMode3[VideoQualityMode3["Auto"] = 1] = "Auto";
      VideoQualityMode3[VideoQualityMode3["Full"] = 2] = "Full";
    })(VideoQualityMode2 || (exports.VideoQualityMode = VideoQualityMode2 = {}));
    var OverwriteType2;
    (function(OverwriteType3) {
      OverwriteType3[OverwriteType3["Role"] = 0] = "Role";
      OverwriteType3[OverwriteType3["Member"] = 1] = "Member";
    })(OverwriteType2 || (exports.OverwriteType = OverwriteType2 = {}));
    var ThreadAutoArchiveDuration2;
    (function(ThreadAutoArchiveDuration3) {
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneHour"] = 60] = "OneHour";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneDay"] = 1440] = "OneDay";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["ThreeDays"] = 4320] = "ThreeDays";
      ThreadAutoArchiveDuration3[ThreadAutoArchiveDuration3["OneWeek"] = 10080] = "OneWeek";
    })(ThreadAutoArchiveDuration2 || (exports.ThreadAutoArchiveDuration = ThreadAutoArchiveDuration2 = {}));
    var ThreadMemberFlags2;
    (function(ThreadMemberFlags3) {
      ThreadMemberFlags3[ThreadMemberFlags3["HasInteracted"] = 1] = "HasInteracted";
      ThreadMemberFlags3[ThreadMemberFlags3["AllMessages"] = 2] = "AllMessages";
      ThreadMemberFlags3[ThreadMemberFlags3["OnlyMentions"] = 4] = "OnlyMentions";
      ThreadMemberFlags3[ThreadMemberFlags3["NoMessages"] = 8] = "NoMessages";
    })(ThreadMemberFlags2 || (exports.ThreadMemberFlags = ThreadMemberFlags2 = {}));
    var ChannelFlags2;
    (function(ChannelFlags3) {
      ChannelFlags3[ChannelFlags3["GuildFeedRemoved"] = 1] = "GuildFeedRemoved";
      ChannelFlags3[ChannelFlags3["Pinned"] = 2] = "Pinned";
      ChannelFlags3[ChannelFlags3["ActiveChannelsRemoved"] = 4] = "ActiveChannelsRemoved";
      ChannelFlags3[ChannelFlags3["RequireTag"] = 16] = "RequireTag";
      ChannelFlags3[ChannelFlags3["IsSpam"] = 32] = "IsSpam";
      ChannelFlags3[ChannelFlags3["IsGuildResourceChannel"] = 128] = "IsGuildResourceChannel";
      ChannelFlags3[ChannelFlags3["ClydeAI"] = 256] = "ClydeAI";
      ChannelFlags3[ChannelFlags3["IsScheduledForDeletion"] = 512] = "IsScheduledForDeletion";
      ChannelFlags3[ChannelFlags3["HideMediaDownloadOptions"] = 32768] = "HideMediaDownloadOptions";
    })(ChannelFlags2 || (exports.ChannelFlags = ChannelFlags2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/gateway.js
var require_gateway = __commonJS({
  "node_modules/discord-api-types/payloads/v10/gateway.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActivityFlags = exports.StatusDisplayType = exports.ActivityType = exports.ActivityPlatform = exports.PresenceUpdateStatus = void 0;
    var PresenceUpdateStatus2;
    (function(PresenceUpdateStatus3) {
      PresenceUpdateStatus3["Online"] = "online";
      PresenceUpdateStatus3["DoNotDisturb"] = "dnd";
      PresenceUpdateStatus3["Idle"] = "idle";
      PresenceUpdateStatus3["Invisible"] = "invisible";
      PresenceUpdateStatus3["Offline"] = "offline";
    })(PresenceUpdateStatus2 || (exports.PresenceUpdateStatus = PresenceUpdateStatus2 = {}));
    var ActivityPlatform2;
    (function(ActivityPlatform3) {
      ActivityPlatform3["Desktop"] = "desktop";
      ActivityPlatform3["Xbox"] = "xbox";
      ActivityPlatform3["Samsung"] = "samsung";
      ActivityPlatform3["IOS"] = "ios";
      ActivityPlatform3["Android"] = "android";
      ActivityPlatform3["Embedded"] = "embedded";
      ActivityPlatform3["PS4"] = "ps4";
      ActivityPlatform3["PS5"] = "ps5";
    })(ActivityPlatform2 || (exports.ActivityPlatform = ActivityPlatform2 = {}));
    var ActivityType2;
    (function(ActivityType3) {
      ActivityType3[ActivityType3["Playing"] = 0] = "Playing";
      ActivityType3[ActivityType3["Streaming"] = 1] = "Streaming";
      ActivityType3[ActivityType3["Listening"] = 2] = "Listening";
      ActivityType3[ActivityType3["Watching"] = 3] = "Watching";
      ActivityType3[ActivityType3["Custom"] = 4] = "Custom";
      ActivityType3[ActivityType3["Competing"] = 5] = "Competing";
    })(ActivityType2 || (exports.ActivityType = ActivityType2 = {}));
    var StatusDisplayType2;
    (function(StatusDisplayType3) {
      StatusDisplayType3[StatusDisplayType3["Name"] = 0] = "Name";
      StatusDisplayType3[StatusDisplayType3["State"] = 1] = "State";
      StatusDisplayType3[StatusDisplayType3["Details"] = 2] = "Details";
    })(StatusDisplayType2 || (exports.StatusDisplayType = StatusDisplayType2 = {}));
    var ActivityFlags2;
    (function(ActivityFlags3) {
      ActivityFlags3[ActivityFlags3["Instance"] = 1] = "Instance";
      ActivityFlags3[ActivityFlags3["Join"] = 2] = "Join";
      ActivityFlags3[ActivityFlags3["Spectate"] = 4] = "Spectate";
      ActivityFlags3[ActivityFlags3["JoinRequest"] = 8] = "JoinRequest";
      ActivityFlags3[ActivityFlags3["Sync"] = 16] = "Sync";
      ActivityFlags3[ActivityFlags3["Play"] = 32] = "Play";
      ActivityFlags3[ActivityFlags3["PartyPrivacyFriends"] = 64] = "PartyPrivacyFriends";
      ActivityFlags3[ActivityFlags3["PartyPrivacyVoiceChannel"] = 128] = "PartyPrivacyVoiceChannel";
      ActivityFlags3[ActivityFlags3["Embedded"] = 256] = "Embedded";
    })(ActivityFlags2 || (exports.ActivityFlags = ActivityFlags2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guild.js
var require_guild = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guild.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuildOnboardingPromptType = exports.GuildOnboardingMode = exports.MembershipScreeningFieldType = exports.GuildWidgetStyle = exports.IntegrationExpireBehavior = exports.GuildMemberFlags = exports.GuildFeature = exports.GuildSystemChannelFlags = exports.GuildHubType = exports.GuildPremiumTier = exports.GuildVerificationLevel = exports.GuildNSFWLevel = exports.GuildMFALevel = exports.GuildExplicitContentFilter = exports.GuildDefaultMessageNotifications = void 0;
    var GuildDefaultMessageNotifications2;
    (function(GuildDefaultMessageNotifications3) {
      GuildDefaultMessageNotifications3[GuildDefaultMessageNotifications3["AllMessages"] = 0] = "AllMessages";
      GuildDefaultMessageNotifications3[GuildDefaultMessageNotifications3["OnlyMentions"] = 1] = "OnlyMentions";
    })(GuildDefaultMessageNotifications2 || (exports.GuildDefaultMessageNotifications = GuildDefaultMessageNotifications2 = {}));
    var GuildExplicitContentFilter2;
    (function(GuildExplicitContentFilter3) {
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["Disabled"] = 0] = "Disabled";
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["MembersWithoutRoles"] = 1] = "MembersWithoutRoles";
      GuildExplicitContentFilter3[GuildExplicitContentFilter3["AllMembers"] = 2] = "AllMembers";
    })(GuildExplicitContentFilter2 || (exports.GuildExplicitContentFilter = GuildExplicitContentFilter2 = {}));
    var GuildMFALevel2;
    (function(GuildMFALevel3) {
      GuildMFALevel3[GuildMFALevel3["None"] = 0] = "None";
      GuildMFALevel3[GuildMFALevel3["Elevated"] = 1] = "Elevated";
    })(GuildMFALevel2 || (exports.GuildMFALevel = GuildMFALevel2 = {}));
    var GuildNSFWLevel2;
    (function(GuildNSFWLevel3) {
      GuildNSFWLevel3[GuildNSFWLevel3["Default"] = 0] = "Default";
      GuildNSFWLevel3[GuildNSFWLevel3["Explicit"] = 1] = "Explicit";
      GuildNSFWLevel3[GuildNSFWLevel3["Safe"] = 2] = "Safe";
      GuildNSFWLevel3[GuildNSFWLevel3["AgeRestricted"] = 3] = "AgeRestricted";
    })(GuildNSFWLevel2 || (exports.GuildNSFWLevel = GuildNSFWLevel2 = {}));
    var GuildVerificationLevel2;
    (function(GuildVerificationLevel3) {
      GuildVerificationLevel3[GuildVerificationLevel3["None"] = 0] = "None";
      GuildVerificationLevel3[GuildVerificationLevel3["Low"] = 1] = "Low";
      GuildVerificationLevel3[GuildVerificationLevel3["Medium"] = 2] = "Medium";
      GuildVerificationLevel3[GuildVerificationLevel3["High"] = 3] = "High";
      GuildVerificationLevel3[GuildVerificationLevel3["VeryHigh"] = 4] = "VeryHigh";
    })(GuildVerificationLevel2 || (exports.GuildVerificationLevel = GuildVerificationLevel2 = {}));
    var GuildPremiumTier2;
    (function(GuildPremiumTier3) {
      GuildPremiumTier3[GuildPremiumTier3["None"] = 0] = "None";
      GuildPremiumTier3[GuildPremiumTier3["Tier1"] = 1] = "Tier1";
      GuildPremiumTier3[GuildPremiumTier3["Tier2"] = 2] = "Tier2";
      GuildPremiumTier3[GuildPremiumTier3["Tier3"] = 3] = "Tier3";
    })(GuildPremiumTier2 || (exports.GuildPremiumTier = GuildPremiumTier2 = {}));
    var GuildHubType2;
    (function(GuildHubType3) {
      GuildHubType3[GuildHubType3["Default"] = 0] = "Default";
      GuildHubType3[GuildHubType3["HighSchool"] = 1] = "HighSchool";
      GuildHubType3[GuildHubType3["College"] = 2] = "College";
    })(GuildHubType2 || (exports.GuildHubType = GuildHubType2 = {}));
    var GuildSystemChannelFlags2;
    (function(GuildSystemChannelFlags3) {
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressJoinNotifications"] = 1] = "SuppressJoinNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressPremiumSubscriptions"] = 2] = "SuppressPremiumSubscriptions";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressGuildReminderNotifications"] = 4] = "SuppressGuildReminderNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressJoinNotificationReplies"] = 8] = "SuppressJoinNotificationReplies";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressRoleSubscriptionPurchaseNotifications"] = 16] = "SuppressRoleSubscriptionPurchaseNotifications";
      GuildSystemChannelFlags3[GuildSystemChannelFlags3["SuppressRoleSubscriptionPurchaseNotificationReplies"] = 32] = "SuppressRoleSubscriptionPurchaseNotificationReplies";
    })(GuildSystemChannelFlags2 || (exports.GuildSystemChannelFlags = GuildSystemChannelFlags2 = {}));
    var GuildFeature2;
    (function(GuildFeature3) {
      GuildFeature3["AnimatedBanner"] = "ANIMATED_BANNER";
      GuildFeature3["AnimatedIcon"] = "ANIMATED_ICON";
      GuildFeature3["ApplicationCommandPermissionsV2"] = "APPLICATION_COMMAND_PERMISSIONS_V2";
      GuildFeature3["AutoModeration"] = "AUTO_MODERATION";
      GuildFeature3["Banner"] = "BANNER";
      GuildFeature3["Community"] = "COMMUNITY";
      GuildFeature3["CreatorMonetizableProvisional"] = "CREATOR_MONETIZABLE_PROVISIONAL";
      GuildFeature3["CreatorStorePage"] = "CREATOR_STORE_PAGE";
      GuildFeature3["DeveloperSupportServer"] = "DEVELOPER_SUPPORT_SERVER";
      GuildFeature3["Discoverable"] = "DISCOVERABLE";
      GuildFeature3["Featurable"] = "FEATURABLE";
      GuildFeature3["HasDirectoryEntry"] = "HAS_DIRECTORY_ENTRY";
      GuildFeature3["Hub"] = "HUB";
      GuildFeature3["InvitesDisabled"] = "INVITES_DISABLED";
      GuildFeature3["InviteSplash"] = "INVITE_SPLASH";
      GuildFeature3["LinkedToHub"] = "LINKED_TO_HUB";
      GuildFeature3["MemberVerificationGateEnabled"] = "MEMBER_VERIFICATION_GATE_ENABLED";
      GuildFeature3["MoreSoundboard"] = "MORE_SOUNDBOARD";
      GuildFeature3["MonetizationEnabled"] = "MONETIZATION_ENABLED";
      GuildFeature3["MoreStickers"] = "MORE_STICKERS";
      GuildFeature3["News"] = "NEWS";
      GuildFeature3["Partnered"] = "PARTNERED";
      GuildFeature3["PreviewEnabled"] = "PREVIEW_ENABLED";
      GuildFeature3["PrivateThreads"] = "PRIVATE_THREADS";
      GuildFeature3["RaidAlertsDisabled"] = "RAID_ALERTS_DISABLED";
      GuildFeature3["RelayEnabled"] = "RELAY_ENABLED";
      GuildFeature3["RoleIcons"] = "ROLE_ICONS";
      GuildFeature3["RoleSubscriptionsAvailableForPurchase"] = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE";
      GuildFeature3["RoleSubscriptionsEnabled"] = "ROLE_SUBSCRIPTIONS_ENABLED";
      GuildFeature3["Soundboard"] = "SOUNDBOARD";
      GuildFeature3["TicketedEventsEnabled"] = "TICKETED_EVENTS_ENABLED";
      GuildFeature3["VanityURL"] = "VANITY_URL";
      GuildFeature3["Verified"] = "VERIFIED";
      GuildFeature3["VIPRegions"] = "VIP_REGIONS";
      GuildFeature3["WelcomeScreenEnabled"] = "WELCOME_SCREEN_ENABLED";
      GuildFeature3["GuildTags"] = "GUILD_TAGS";
      GuildFeature3["EnhancedRoleColors"] = "ENHANCED_ROLE_COLORS";
      GuildFeature3["GuestsEnabled"] = "GUESTS_ENABLED";
      GuildFeature3["PinPermissionMigrationComplete"] = "PIN_PERMISSION_MIGRATION_COMPLETE";
    })(GuildFeature2 || (exports.GuildFeature = GuildFeature2 = {}));
    var GuildMemberFlags2;
    (function(GuildMemberFlags3) {
      GuildMemberFlags3[GuildMemberFlags3["DidRejoin"] = 1] = "DidRejoin";
      GuildMemberFlags3[GuildMemberFlags3["CompletedOnboarding"] = 2] = "CompletedOnboarding";
      GuildMemberFlags3[GuildMemberFlags3["BypassesVerification"] = 4] = "BypassesVerification";
      GuildMemberFlags3[GuildMemberFlags3["StartedOnboarding"] = 8] = "StartedOnboarding";
      GuildMemberFlags3[GuildMemberFlags3["IsGuest"] = 16] = "IsGuest";
      GuildMemberFlags3[GuildMemberFlags3["StartedHomeActions"] = 32] = "StartedHomeActions";
      GuildMemberFlags3[GuildMemberFlags3["CompletedHomeActions"] = 64] = "CompletedHomeActions";
      GuildMemberFlags3[GuildMemberFlags3["AutomodQuarantinedUsernameOrGuildNickname"] = 128] = "AutomodQuarantinedUsernameOrGuildNickname";
      GuildMemberFlags3[GuildMemberFlags3["AutomodQuarantinedBio"] = 256] = "AutomodQuarantinedBio";
      GuildMemberFlags3[GuildMemberFlags3["DmSettingsUpsellAcknowledged"] = 512] = "DmSettingsUpsellAcknowledged";
      GuildMemberFlags3[GuildMemberFlags3["AutoModQuarantinedGuildTag"] = 1024] = "AutoModQuarantinedGuildTag";
    })(GuildMemberFlags2 || (exports.GuildMemberFlags = GuildMemberFlags2 = {}));
    var IntegrationExpireBehavior2;
    (function(IntegrationExpireBehavior3) {
      IntegrationExpireBehavior3[IntegrationExpireBehavior3["RemoveRole"] = 0] = "RemoveRole";
      IntegrationExpireBehavior3[IntegrationExpireBehavior3["Kick"] = 1] = "Kick";
    })(IntegrationExpireBehavior2 || (exports.IntegrationExpireBehavior = IntegrationExpireBehavior2 = {}));
    var GuildWidgetStyle2;
    (function(GuildWidgetStyle3) {
      GuildWidgetStyle3["Shield"] = "shield";
      GuildWidgetStyle3["Banner1"] = "banner1";
      GuildWidgetStyle3["Banner2"] = "banner2";
      GuildWidgetStyle3["Banner3"] = "banner3";
      GuildWidgetStyle3["Banner4"] = "banner4";
    })(GuildWidgetStyle2 || (exports.GuildWidgetStyle = GuildWidgetStyle2 = {}));
    var MembershipScreeningFieldType2;
    (function(MembershipScreeningFieldType3) {
      MembershipScreeningFieldType3["Terms"] = "TERMS";
    })(MembershipScreeningFieldType2 || (exports.MembershipScreeningFieldType = MembershipScreeningFieldType2 = {}));
    var GuildOnboardingMode2;
    (function(GuildOnboardingMode3) {
      GuildOnboardingMode3[GuildOnboardingMode3["OnboardingDefault"] = 0] = "OnboardingDefault";
      GuildOnboardingMode3[GuildOnboardingMode3["OnboardingAdvanced"] = 1] = "OnboardingAdvanced";
    })(GuildOnboardingMode2 || (exports.GuildOnboardingMode = GuildOnboardingMode2 = {}));
    var GuildOnboardingPromptType2;
    (function(GuildOnboardingPromptType3) {
      GuildOnboardingPromptType3[GuildOnboardingPromptType3["MultipleChoice"] = 0] = "MultipleChoice";
      GuildOnboardingPromptType3[GuildOnboardingPromptType3["Dropdown"] = 1] = "Dropdown";
    })(GuildOnboardingPromptType2 || (exports.GuildOnboardingPromptType = GuildOnboardingPromptType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js
var require_guildScheduledEvent = __commonJS({
  "node_modules/discord-api-types/payloads/v10/guildScheduledEvent.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuildScheduledEventPrivacyLevel = exports.GuildScheduledEventStatus = exports.GuildScheduledEventEntityType = exports.GuildScheduledEventRecurrenceRuleMonth = exports.GuildScheduledEventRecurrenceRuleWeekday = exports.GuildScheduledEventRecurrenceRuleFrequency = void 0;
    var GuildScheduledEventRecurrenceRuleFrequency2;
    (function(GuildScheduledEventRecurrenceRuleFrequency3) {
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Yearly"] = 0] = "Yearly";
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Monthly"] = 1] = "Monthly";
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Weekly"] = 2] = "Weekly";
      GuildScheduledEventRecurrenceRuleFrequency3[GuildScheduledEventRecurrenceRuleFrequency3["Daily"] = 3] = "Daily";
    })(GuildScheduledEventRecurrenceRuleFrequency2 || (exports.GuildScheduledEventRecurrenceRuleFrequency = GuildScheduledEventRecurrenceRuleFrequency2 = {}));
    var GuildScheduledEventRecurrenceRuleWeekday2;
    (function(GuildScheduledEventRecurrenceRuleWeekday3) {
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Monday"] = 0] = "Monday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Tuesday"] = 1] = "Tuesday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Wednesday"] = 2] = "Wednesday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Thursday"] = 3] = "Thursday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Friday"] = 4] = "Friday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Saturday"] = 5] = "Saturday";
      GuildScheduledEventRecurrenceRuleWeekday3[GuildScheduledEventRecurrenceRuleWeekday3["Sunday"] = 6] = "Sunday";
    })(GuildScheduledEventRecurrenceRuleWeekday2 || (exports.GuildScheduledEventRecurrenceRuleWeekday = GuildScheduledEventRecurrenceRuleWeekday2 = {}));
    var GuildScheduledEventRecurrenceRuleMonth2;
    (function(GuildScheduledEventRecurrenceRuleMonth3) {
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["January"] = 1] = "January";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["February"] = 2] = "February";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["March"] = 3] = "March";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["April"] = 4] = "April";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["May"] = 5] = "May";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["June"] = 6] = "June";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["July"] = 7] = "July";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["August"] = 8] = "August";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["September"] = 9] = "September";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["October"] = 10] = "October";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["November"] = 11] = "November";
      GuildScheduledEventRecurrenceRuleMonth3[GuildScheduledEventRecurrenceRuleMonth3["December"] = 12] = "December";
    })(GuildScheduledEventRecurrenceRuleMonth2 || (exports.GuildScheduledEventRecurrenceRuleMonth = GuildScheduledEventRecurrenceRuleMonth2 = {}));
    var GuildScheduledEventEntityType2;
    (function(GuildScheduledEventEntityType3) {
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["StageInstance"] = 1] = "StageInstance";
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["Voice"] = 2] = "Voice";
      GuildScheduledEventEntityType3[GuildScheduledEventEntityType3["External"] = 3] = "External";
    })(GuildScheduledEventEntityType2 || (exports.GuildScheduledEventEntityType = GuildScheduledEventEntityType2 = {}));
    var GuildScheduledEventStatus2;
    (function(GuildScheduledEventStatus3) {
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Scheduled"] = 1] = "Scheduled";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Active"] = 2] = "Active";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Completed"] = 3] = "Completed";
      GuildScheduledEventStatus3[GuildScheduledEventStatus3["Canceled"] = 4] = "Canceled";
    })(GuildScheduledEventStatus2 || (exports.GuildScheduledEventStatus = GuildScheduledEventStatus2 = {}));
    var GuildScheduledEventPrivacyLevel2;
    (function(GuildScheduledEventPrivacyLevel3) {
      GuildScheduledEventPrivacyLevel3[GuildScheduledEventPrivacyLevel3["GuildOnly"] = 2] = "GuildOnly";
    })(GuildScheduledEventPrivacyLevel2 || (exports.GuildScheduledEventPrivacyLevel = GuildScheduledEventPrivacyLevel2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js
var require_shared = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/shared.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationCommandOptionType = void 0;
    var ApplicationCommandOptionType2;
    (function(ApplicationCommandOptionType3) {
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Subcommand"] = 1] = "Subcommand";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["SubcommandGroup"] = 2] = "SubcommandGroup";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["String"] = 3] = "String";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Integer"] = 4] = "Integer";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Boolean"] = 5] = "Boolean";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["User"] = 6] = "User";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Channel"] = 7] = "Channel";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Role"] = 8] = "Role";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Mentionable"] = 9] = "Mentionable";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Number"] = 10] = "Number";
      ApplicationCommandOptionType3[ApplicationCommandOptionType3["Attachment"] = 11] = "Attachment";
    })(ApplicationCommandOptionType2 || (exports.ApplicationCommandOptionType = ApplicationCommandOptionType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js
var require_chatInput = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/chatInput.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_shared(), exports);
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js
var require_permissions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/permissions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.APIApplicationCommandPermissionsConstant = exports.ApplicationCommandPermissionType = void 0;
    var ApplicationCommandPermissionType2;
    (function(ApplicationCommandPermissionType3) {
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["Role"] = 1] = "Role";
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["User"] = 2] = "User";
      ApplicationCommandPermissionType3[ApplicationCommandPermissionType3["Channel"] = 3] = "Channel";
    })(ApplicationCommandPermissionType2 || (exports.ApplicationCommandPermissionType = ApplicationCommandPermissionType2 = {}));
    exports.APIApplicationCommandPermissionsConstant = {
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      Everyone: /* @__PURE__ */ __name((guildId) => String(guildId), "Everyone"),
      AllChannels: /* @__PURE__ */ __name((guildId) => String(BigInt(guildId) - 1n), "AllChannels")
    };
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js
var require_applicationCommands = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/applicationCommands.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntryPointCommandHandlerType = exports.InteractionContextType = exports.ApplicationIntegrationType = exports.ApplicationCommandType = void 0;
    __exportStar(require_chatInput(), exports);
    __exportStar(require_permissions(), exports);
    var ApplicationCommandType2;
    (function(ApplicationCommandType3) {
      ApplicationCommandType3[ApplicationCommandType3["ChatInput"] = 1] = "ChatInput";
      ApplicationCommandType3[ApplicationCommandType3["User"] = 2] = "User";
      ApplicationCommandType3[ApplicationCommandType3["Message"] = 3] = "Message";
      ApplicationCommandType3[ApplicationCommandType3["PrimaryEntryPoint"] = 4] = "PrimaryEntryPoint";
    })(ApplicationCommandType2 || (exports.ApplicationCommandType = ApplicationCommandType2 = {}));
    var ApplicationIntegrationType2;
    (function(ApplicationIntegrationType3) {
      ApplicationIntegrationType3[ApplicationIntegrationType3["GuildInstall"] = 0] = "GuildInstall";
      ApplicationIntegrationType3[ApplicationIntegrationType3["UserInstall"] = 1] = "UserInstall";
    })(ApplicationIntegrationType2 || (exports.ApplicationIntegrationType = ApplicationIntegrationType2 = {}));
    var InteractionContextType2;
    (function(InteractionContextType3) {
      InteractionContextType3[InteractionContextType3["Guild"] = 0] = "Guild";
      InteractionContextType3[InteractionContextType3["BotDM"] = 1] = "BotDM";
      InteractionContextType3[InteractionContextType3["PrivateChannel"] = 2] = "PrivateChannel";
    })(InteractionContextType2 || (exports.InteractionContextType = InteractionContextType2 = {}));
    var EntryPointCommandHandlerType2;
    (function(EntryPointCommandHandlerType3) {
      EntryPointCommandHandlerType3[EntryPointCommandHandlerType3["AppHandler"] = 1] = "AppHandler";
      EntryPointCommandHandlerType3[EntryPointCommandHandlerType3["DiscordLaunchActivity"] = 2] = "DiscordLaunchActivity";
    })(EntryPointCommandHandlerType2 || (exports.EntryPointCommandHandlerType = EntryPointCommandHandlerType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/_interactions/responses.js
var require_responses = __commonJS({
  "node_modules/discord-api-types/payloads/v10/_interactions/responses.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InteractionResponseType = exports.InteractionType = void 0;
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["Ping"] = 1] = "Ping";
      InteractionType3[InteractionType3["ApplicationCommand"] = 2] = "ApplicationCommand";
      InteractionType3[InteractionType3["MessageComponent"] = 3] = "MessageComponent";
      InteractionType3[InteractionType3["ApplicationCommandAutocomplete"] = 4] = "ApplicationCommandAutocomplete";
      InteractionType3[InteractionType3["ModalSubmit"] = 5] = "ModalSubmit";
    })(InteractionType2 || (exports.InteractionType = InteractionType2 = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["Pong"] = 1] = "Pong";
      InteractionResponseType3[InteractionResponseType3["ChannelMessageWithSource"] = 4] = "ChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredChannelMessageWithSource"] = 5] = "DeferredChannelMessageWithSource";
      InteractionResponseType3[InteractionResponseType3["DeferredMessageUpdate"] = 6] = "DeferredMessageUpdate";
      InteractionResponseType3[InteractionResponseType3["UpdateMessage"] = 7] = "UpdateMessage";
      InteractionResponseType3[InteractionResponseType3["ApplicationCommandAutocompleteResult"] = 8] = "ApplicationCommandAutocompleteResult";
      InteractionResponseType3[InteractionResponseType3["Modal"] = 9] = "Modal";
      InteractionResponseType3[InteractionResponseType3["PremiumRequired"] = 10] = "PremiumRequired";
      InteractionResponseType3[InteractionResponseType3["LaunchActivity"] = 12] = "LaunchActivity";
    })(InteractionResponseType2 || (exports.InteractionResponseType = InteractionResponseType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/interactions.js
var require_interactions = __commonJS({
  "node_modules/discord-api-types/payloads/v10/interactions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_applicationCommands(), exports);
    __exportStar(require_responses(), exports);
  }
});

// node_modules/discord-api-types/payloads/v10/invite.js
var require_invite = __commonJS({
  "node_modules/discord-api-types/payloads/v10/invite.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InviteTargetType = exports.InviteType = exports.InviteFlags = void 0;
    var InviteFlags2;
    (function(InviteFlags3) {
      InviteFlags3[InviteFlags3["IsGuestInvite"] = 1] = "IsGuestInvite";
    })(InviteFlags2 || (exports.InviteFlags = InviteFlags2 = {}));
    var InviteType2;
    (function(InviteType3) {
      InviteType3[InviteType3["Guild"] = 0] = "Guild";
      InviteType3[InviteType3["GroupDM"] = 1] = "GroupDM";
      InviteType3[InviteType3["Friend"] = 2] = "Friend";
    })(InviteType2 || (exports.InviteType = InviteType2 = {}));
    var InviteTargetType2;
    (function(InviteTargetType3) {
      InviteTargetType3[InviteTargetType3["Stream"] = 1] = "Stream";
      InviteTargetType3[InviteTargetType3["EmbeddedApplication"] = 2] = "EmbeddedApplication";
    })(InviteTargetType2 || (exports.InviteTargetType = InviteTargetType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/message.js
var require_message = __commonJS({
  "node_modules/discord-api-types/payloads/v10/message.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeparatorSpacingSize = exports.UnfurledMediaItemLoadingState = exports.SelectMenuDefaultValueType = exports.TextInputStyle = exports.ButtonStyle = exports.ComponentType = exports.AllowedMentionsTypes = exports.AttachmentFlags = exports.EmbedType = exports.MessageFlags = exports.MessageReferenceType = exports.MessageActivityType = exports.MessageType = void 0;
    var MessageType2;
    (function(MessageType3) {
      MessageType3[MessageType3["Default"] = 0] = "Default";
      MessageType3[MessageType3["RecipientAdd"] = 1] = "RecipientAdd";
      MessageType3[MessageType3["RecipientRemove"] = 2] = "RecipientRemove";
      MessageType3[MessageType3["Call"] = 3] = "Call";
      MessageType3[MessageType3["ChannelNameChange"] = 4] = "ChannelNameChange";
      MessageType3[MessageType3["ChannelIconChange"] = 5] = "ChannelIconChange";
      MessageType3[MessageType3["ChannelPinnedMessage"] = 6] = "ChannelPinnedMessage";
      MessageType3[MessageType3["UserJoin"] = 7] = "UserJoin";
      MessageType3[MessageType3["GuildBoost"] = 8] = "GuildBoost";
      MessageType3[MessageType3["GuildBoostTier1"] = 9] = "GuildBoostTier1";
      MessageType3[MessageType3["GuildBoostTier2"] = 10] = "GuildBoostTier2";
      MessageType3[MessageType3["GuildBoostTier3"] = 11] = "GuildBoostTier3";
      MessageType3[MessageType3["ChannelFollowAdd"] = 12] = "ChannelFollowAdd";
      MessageType3[MessageType3["GuildDiscoveryDisqualified"] = 14] = "GuildDiscoveryDisqualified";
      MessageType3[MessageType3["GuildDiscoveryRequalified"] = 15] = "GuildDiscoveryRequalified";
      MessageType3[MessageType3["GuildDiscoveryGracePeriodInitialWarning"] = 16] = "GuildDiscoveryGracePeriodInitialWarning";
      MessageType3[MessageType3["GuildDiscoveryGracePeriodFinalWarning"] = 17] = "GuildDiscoveryGracePeriodFinalWarning";
      MessageType3[MessageType3["ThreadCreated"] = 18] = "ThreadCreated";
      MessageType3[MessageType3["Reply"] = 19] = "Reply";
      MessageType3[MessageType3["ChatInputCommand"] = 20] = "ChatInputCommand";
      MessageType3[MessageType3["ThreadStarterMessage"] = 21] = "ThreadStarterMessage";
      MessageType3[MessageType3["GuildInviteReminder"] = 22] = "GuildInviteReminder";
      MessageType3[MessageType3["ContextMenuCommand"] = 23] = "ContextMenuCommand";
      MessageType3[MessageType3["AutoModerationAction"] = 24] = "AutoModerationAction";
      MessageType3[MessageType3["RoleSubscriptionPurchase"] = 25] = "RoleSubscriptionPurchase";
      MessageType3[MessageType3["InteractionPremiumUpsell"] = 26] = "InteractionPremiumUpsell";
      MessageType3[MessageType3["StageStart"] = 27] = "StageStart";
      MessageType3[MessageType3["StageEnd"] = 28] = "StageEnd";
      MessageType3[MessageType3["StageSpeaker"] = 29] = "StageSpeaker";
      MessageType3[MessageType3["StageRaiseHand"] = 30] = "StageRaiseHand";
      MessageType3[MessageType3["StageTopic"] = 31] = "StageTopic";
      MessageType3[MessageType3["GuildApplicationPremiumSubscription"] = 32] = "GuildApplicationPremiumSubscription";
      MessageType3[MessageType3["GuildIncidentAlertModeEnabled"] = 36] = "GuildIncidentAlertModeEnabled";
      MessageType3[MessageType3["GuildIncidentAlertModeDisabled"] = 37] = "GuildIncidentAlertModeDisabled";
      MessageType3[MessageType3["GuildIncidentReportRaid"] = 38] = "GuildIncidentReportRaid";
      MessageType3[MessageType3["GuildIncidentReportFalseAlarm"] = 39] = "GuildIncidentReportFalseAlarm";
      MessageType3[MessageType3["PurchaseNotification"] = 44] = "PurchaseNotification";
      MessageType3[MessageType3["PollResult"] = 46] = "PollResult";
    })(MessageType2 || (exports.MessageType = MessageType2 = {}));
    var MessageActivityType2;
    (function(MessageActivityType3) {
      MessageActivityType3[MessageActivityType3["Join"] = 1] = "Join";
      MessageActivityType3[MessageActivityType3["Spectate"] = 2] = "Spectate";
      MessageActivityType3[MessageActivityType3["Listen"] = 3] = "Listen";
      MessageActivityType3[MessageActivityType3["JoinRequest"] = 5] = "JoinRequest";
    })(MessageActivityType2 || (exports.MessageActivityType = MessageActivityType2 = {}));
    var MessageReferenceType2;
    (function(MessageReferenceType3) {
      MessageReferenceType3[MessageReferenceType3["Default"] = 0] = "Default";
      MessageReferenceType3[MessageReferenceType3["Forward"] = 1] = "Forward";
    })(MessageReferenceType2 || (exports.MessageReferenceType = MessageReferenceType2 = {}));
    var MessageFlags2;
    (function(MessageFlags3) {
      MessageFlags3[MessageFlags3["Crossposted"] = 1] = "Crossposted";
      MessageFlags3[MessageFlags3["IsCrosspost"] = 2] = "IsCrosspost";
      MessageFlags3[MessageFlags3["SuppressEmbeds"] = 4] = "SuppressEmbeds";
      MessageFlags3[MessageFlags3["SourceMessageDeleted"] = 8] = "SourceMessageDeleted";
      MessageFlags3[MessageFlags3["Urgent"] = 16] = "Urgent";
      MessageFlags3[MessageFlags3["HasThread"] = 32] = "HasThread";
      MessageFlags3[MessageFlags3["Ephemeral"] = 64] = "Ephemeral";
      MessageFlags3[MessageFlags3["Loading"] = 128] = "Loading";
      MessageFlags3[MessageFlags3["FailedToMentionSomeRolesInThread"] = 256] = "FailedToMentionSomeRolesInThread";
      MessageFlags3[MessageFlags3["ShouldShowLinkNotDiscordWarning"] = 1024] = "ShouldShowLinkNotDiscordWarning";
      MessageFlags3[MessageFlags3["SuppressNotifications"] = 4096] = "SuppressNotifications";
      MessageFlags3[MessageFlags3["IsVoiceMessage"] = 8192] = "IsVoiceMessage";
      MessageFlags3[MessageFlags3["HasSnapshot"] = 16384] = "HasSnapshot";
      MessageFlags3[MessageFlags3["IsComponentsV2"] = 32768] = "IsComponentsV2";
    })(MessageFlags2 || (exports.MessageFlags = MessageFlags2 = {}));
    var EmbedType2;
    (function(EmbedType3) {
      EmbedType3["Rich"] = "rich";
      EmbedType3["Image"] = "image";
      EmbedType3["Video"] = "video";
      EmbedType3["GIFV"] = "gifv";
      EmbedType3["Article"] = "article";
      EmbedType3["Link"] = "link";
      EmbedType3["AutoModerationMessage"] = "auto_moderation_message";
      EmbedType3["PollResult"] = "poll_result";
    })(EmbedType2 || (exports.EmbedType = EmbedType2 = {}));
    var AttachmentFlags2;
    (function(AttachmentFlags3) {
      AttachmentFlags3[AttachmentFlags3["IsRemix"] = 4] = "IsRemix";
    })(AttachmentFlags2 || (exports.AttachmentFlags = AttachmentFlags2 = {}));
    var AllowedMentionsTypes2;
    (function(AllowedMentionsTypes3) {
      AllowedMentionsTypes3["Everyone"] = "everyone";
      AllowedMentionsTypes3["Role"] = "roles";
      AllowedMentionsTypes3["User"] = "users";
    })(AllowedMentionsTypes2 || (exports.AllowedMentionsTypes = AllowedMentionsTypes2 = {}));
    var ComponentType2;
    (function(ComponentType3) {
      ComponentType3[ComponentType3["ActionRow"] = 1] = "ActionRow";
      ComponentType3[ComponentType3["Button"] = 2] = "Button";
      ComponentType3[ComponentType3["StringSelect"] = 3] = "StringSelect";
      ComponentType3[ComponentType3["TextInput"] = 4] = "TextInput";
      ComponentType3[ComponentType3["UserSelect"] = 5] = "UserSelect";
      ComponentType3[ComponentType3["RoleSelect"] = 6] = "RoleSelect";
      ComponentType3[ComponentType3["MentionableSelect"] = 7] = "MentionableSelect";
      ComponentType3[ComponentType3["ChannelSelect"] = 8] = "ChannelSelect";
      ComponentType3[ComponentType3["Section"] = 9] = "Section";
      ComponentType3[ComponentType3["TextDisplay"] = 10] = "TextDisplay";
      ComponentType3[ComponentType3["Thumbnail"] = 11] = "Thumbnail";
      ComponentType3[ComponentType3["MediaGallery"] = 12] = "MediaGallery";
      ComponentType3[ComponentType3["File"] = 13] = "File";
      ComponentType3[ComponentType3["Separator"] = 14] = "Separator";
      ComponentType3[ComponentType3["ContentInventoryEntry"] = 16] = "ContentInventoryEntry";
      ComponentType3[ComponentType3["Container"] = 17] = "Container";
      ComponentType3[ComponentType3["Label"] = 18] = "Label";
      ComponentType3[ComponentType3["FileUpload"] = 19] = "FileUpload";
      ComponentType3[ComponentType3["SelectMenu"] = 3] = "SelectMenu";
    })(ComponentType2 || (exports.ComponentType = ComponentType2 = {}));
    var ButtonStyle2;
    (function(ButtonStyle3) {
      ButtonStyle3[ButtonStyle3["Primary"] = 1] = "Primary";
      ButtonStyle3[ButtonStyle3["Secondary"] = 2] = "Secondary";
      ButtonStyle3[ButtonStyle3["Success"] = 3] = "Success";
      ButtonStyle3[ButtonStyle3["Danger"] = 4] = "Danger";
      ButtonStyle3[ButtonStyle3["Link"] = 5] = "Link";
      ButtonStyle3[ButtonStyle3["Premium"] = 6] = "Premium";
    })(ButtonStyle2 || (exports.ButtonStyle = ButtonStyle2 = {}));
    var TextInputStyle2;
    (function(TextInputStyle3) {
      TextInputStyle3[TextInputStyle3["Short"] = 1] = "Short";
      TextInputStyle3[TextInputStyle3["Paragraph"] = 2] = "Paragraph";
    })(TextInputStyle2 || (exports.TextInputStyle = TextInputStyle2 = {}));
    var SelectMenuDefaultValueType2;
    (function(SelectMenuDefaultValueType3) {
      SelectMenuDefaultValueType3["Channel"] = "channel";
      SelectMenuDefaultValueType3["Role"] = "role";
      SelectMenuDefaultValueType3["User"] = "user";
    })(SelectMenuDefaultValueType2 || (exports.SelectMenuDefaultValueType = SelectMenuDefaultValueType2 = {}));
    var UnfurledMediaItemLoadingState2;
    (function(UnfurledMediaItemLoadingState3) {
      UnfurledMediaItemLoadingState3[UnfurledMediaItemLoadingState3["Unknown"] = 0] = "Unknown";
      UnfurledMediaItemLoadingState3[UnfurledMediaItemLoadingState3["Loading"] = 1] = "Loading";
      UnfurledMediaItemLoadingState3[UnfurledMediaItemLoadingState3["LoadedSuccess"] = 2] = "LoadedSuccess";
      UnfurledMediaItemLoadingState3[UnfurledMediaItemLoadingState3["LoadedNotFound"] = 3] = "LoadedNotFound";
    })(UnfurledMediaItemLoadingState2 || (exports.UnfurledMediaItemLoadingState = UnfurledMediaItemLoadingState2 = {}));
    var SeparatorSpacingSize2;
    (function(SeparatorSpacingSize3) {
      SeparatorSpacingSize3[SeparatorSpacingSize3["Small"] = 1] = "Small";
      SeparatorSpacingSize3[SeparatorSpacingSize3["Large"] = 2] = "Large";
    })(SeparatorSpacingSize2 || (exports.SeparatorSpacingSize = SeparatorSpacingSize2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/monetization.js
var require_monetization = __commonJS({
  "node_modules/discord-api-types/payloads/v10/monetization.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionStatus = exports.SKUType = exports.SKUFlags = exports.EntitlementType = void 0;
    var EntitlementType2;
    (function(EntitlementType3) {
      EntitlementType3[EntitlementType3["Purchase"] = 1] = "Purchase";
      EntitlementType3[EntitlementType3["PremiumSubscription"] = 2] = "PremiumSubscription";
      EntitlementType3[EntitlementType3["DeveloperGift"] = 3] = "DeveloperGift";
      EntitlementType3[EntitlementType3["TestModePurchase"] = 4] = "TestModePurchase";
      EntitlementType3[EntitlementType3["FreePurchase"] = 5] = "FreePurchase";
      EntitlementType3[EntitlementType3["UserGift"] = 6] = "UserGift";
      EntitlementType3[EntitlementType3["PremiumPurchase"] = 7] = "PremiumPurchase";
      EntitlementType3[EntitlementType3["ApplicationSubscription"] = 8] = "ApplicationSubscription";
    })(EntitlementType2 || (exports.EntitlementType = EntitlementType2 = {}));
    var SKUFlags2;
    (function(SKUFlags3) {
      SKUFlags3[SKUFlags3["Available"] = 4] = "Available";
      SKUFlags3[SKUFlags3["GuildSubscription"] = 128] = "GuildSubscription";
      SKUFlags3[SKUFlags3["UserSubscription"] = 256] = "UserSubscription";
    })(SKUFlags2 || (exports.SKUFlags = SKUFlags2 = {}));
    var SKUType2;
    (function(SKUType3) {
      SKUType3[SKUType3["Durable"] = 2] = "Durable";
      SKUType3[SKUType3["Consumable"] = 3] = "Consumable";
      SKUType3[SKUType3["Subscription"] = 5] = "Subscription";
      SKUType3[SKUType3["SubscriptionGroup"] = 6] = "SubscriptionGroup";
    })(SKUType2 || (exports.SKUType = SKUType2 = {}));
    var SubscriptionStatus2;
    (function(SubscriptionStatus3) {
      SubscriptionStatus3[SubscriptionStatus3["Active"] = 0] = "Active";
      SubscriptionStatus3[SubscriptionStatus3["Ending"] = 1] = "Ending";
      SubscriptionStatus3[SubscriptionStatus3["Inactive"] = 2] = "Inactive";
    })(SubscriptionStatus2 || (exports.SubscriptionStatus = SubscriptionStatus2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/oauth2.js
var require_oauth2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/oauth2.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Scopes = void 0;
    var OAuth2Scopes2;
    (function(OAuth2Scopes3) {
      OAuth2Scopes3["Bot"] = "bot";
      OAuth2Scopes3["Connections"] = "connections";
      OAuth2Scopes3["DMChannelsRead"] = "dm_channels.read";
      OAuth2Scopes3["Email"] = "email";
      OAuth2Scopes3["Identify"] = "identify";
      OAuth2Scopes3["Guilds"] = "guilds";
      OAuth2Scopes3["GuildsJoin"] = "guilds.join";
      OAuth2Scopes3["GuildsMembersRead"] = "guilds.members.read";
      OAuth2Scopes3["GroupDMJoins"] = "gdm.join";
      OAuth2Scopes3["MessagesRead"] = "messages.read";
      OAuth2Scopes3["RoleConnectionsWrite"] = "role_connections.write";
      OAuth2Scopes3["RPC"] = "rpc";
      OAuth2Scopes3["RPCActivitiesWrite"] = "rpc.activities.write";
      OAuth2Scopes3["RPCVoiceRead"] = "rpc.voice.read";
      OAuth2Scopes3["RPCVoiceWrite"] = "rpc.voice.write";
      OAuth2Scopes3["RPCNotificationsRead"] = "rpc.notifications.read";
      OAuth2Scopes3["WebhookIncoming"] = "webhook.incoming";
      OAuth2Scopes3["Voice"] = "voice";
      OAuth2Scopes3["ApplicationsBuildsUpload"] = "applications.builds.upload";
      OAuth2Scopes3["ApplicationsBuildsRead"] = "applications.builds.read";
      OAuth2Scopes3["ApplicationsStoreUpdate"] = "applications.store.update";
      OAuth2Scopes3["ApplicationsEntitlements"] = "applications.entitlements";
      OAuth2Scopes3["RelationshipsRead"] = "relationships.read";
      OAuth2Scopes3["ActivitiesRead"] = "activities.read";
      OAuth2Scopes3["ActivitiesWrite"] = "activities.write";
      OAuth2Scopes3["ApplicationsCommands"] = "applications.commands";
      OAuth2Scopes3["ApplicationsCommandsUpdate"] = "applications.commands.update";
      OAuth2Scopes3["ApplicationCommandsPermissionsUpdate"] = "applications.commands.permissions.update";
    })(OAuth2Scopes2 || (exports.OAuth2Scopes = OAuth2Scopes2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/permissions.js
var require_permissions2 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/permissions.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RoleFlags = void 0;
    var RoleFlags2;
    (function(RoleFlags3) {
      RoleFlags3[RoleFlags3["InPrompt"] = 1] = "InPrompt";
    })(RoleFlags2 || (exports.RoleFlags = RoleFlags2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/poll.js
var require_poll = __commonJS({
  "node_modules/discord-api-types/payloads/v10/poll.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PollLayoutType = void 0;
    var PollLayoutType2;
    (function(PollLayoutType3) {
      PollLayoutType3[PollLayoutType3["Default"] = 1] = "Default";
    })(PollLayoutType2 || (exports.PollLayoutType = PollLayoutType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/stageInstance.js
var require_stageInstance = __commonJS({
  "node_modules/discord-api-types/payloads/v10/stageInstance.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StageInstancePrivacyLevel = void 0;
    var StageInstancePrivacyLevel2;
    (function(StageInstancePrivacyLevel3) {
      StageInstancePrivacyLevel3[StageInstancePrivacyLevel3["Public"] = 1] = "Public";
      StageInstancePrivacyLevel3[StageInstancePrivacyLevel3["GuildOnly"] = 2] = "GuildOnly";
    })(StageInstancePrivacyLevel2 || (exports.StageInstancePrivacyLevel = StageInstancePrivacyLevel2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/sticker.js
var require_sticker = __commonJS({
  "node_modules/discord-api-types/payloads/v10/sticker.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StickerFormatType = exports.StickerType = void 0;
    var StickerType2;
    (function(StickerType3) {
      StickerType3[StickerType3["Standard"] = 1] = "Standard";
      StickerType3[StickerType3["Guild"] = 2] = "Guild";
    })(StickerType2 || (exports.StickerType = StickerType2 = {}));
    var StickerFormatType2;
    (function(StickerFormatType3) {
      StickerFormatType3[StickerFormatType3["PNG"] = 1] = "PNG";
      StickerFormatType3[StickerFormatType3["APNG"] = 2] = "APNG";
      StickerFormatType3[StickerFormatType3["Lottie"] = 3] = "Lottie";
      StickerFormatType3[StickerFormatType3["GIF"] = 4] = "GIF";
    })(StickerFormatType2 || (exports.StickerFormatType = StickerFormatType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/teams.js
var require_teams = __commonJS({
  "node_modules/discord-api-types/payloads/v10/teams.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TeamMemberRole = exports.TeamMemberMembershipState = void 0;
    var TeamMemberMembershipState2;
    (function(TeamMemberMembershipState3) {
      TeamMemberMembershipState3[TeamMemberMembershipState3["Invited"] = 1] = "Invited";
      TeamMemberMembershipState3[TeamMemberMembershipState3["Accepted"] = 2] = "Accepted";
    })(TeamMemberMembershipState2 || (exports.TeamMemberMembershipState = TeamMemberMembershipState2 = {}));
    var TeamMemberRole2;
    (function(TeamMemberRole3) {
      TeamMemberRole3["Admin"] = "admin";
      TeamMemberRole3["Developer"] = "developer";
      TeamMemberRole3["ReadOnly"] = "read_only";
    })(TeamMemberRole2 || (exports.TeamMemberRole = TeamMemberRole2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/user.js
var require_user = __commonJS({
  "node_modules/discord-api-types/payloads/v10/user.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NameplatePalette = exports.ConnectionVisibility = exports.ConnectionService = exports.UserPremiumType = exports.UserFlags = void 0;
    var UserFlags2;
    (function(UserFlags3) {
      UserFlags3[UserFlags3["Staff"] = 1] = "Staff";
      UserFlags3[UserFlags3["Partner"] = 2] = "Partner";
      UserFlags3[UserFlags3["Hypesquad"] = 4] = "Hypesquad";
      UserFlags3[UserFlags3["BugHunterLevel1"] = 8] = "BugHunterLevel1";
      UserFlags3[UserFlags3["MFASMS"] = 16] = "MFASMS";
      UserFlags3[UserFlags3["PremiumPromoDismissed"] = 32] = "PremiumPromoDismissed";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse1"] = 64] = "HypeSquadOnlineHouse1";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse2"] = 128] = "HypeSquadOnlineHouse2";
      UserFlags3[UserFlags3["HypeSquadOnlineHouse3"] = 256] = "HypeSquadOnlineHouse3";
      UserFlags3[UserFlags3["PremiumEarlySupporter"] = 512] = "PremiumEarlySupporter";
      UserFlags3[UserFlags3["TeamPseudoUser"] = 1024] = "TeamPseudoUser";
      UserFlags3[UserFlags3["HasUnreadUrgentMessages"] = 8192] = "HasUnreadUrgentMessages";
      UserFlags3[UserFlags3["BugHunterLevel2"] = 16384] = "BugHunterLevel2";
      UserFlags3[UserFlags3["VerifiedBot"] = 65536] = "VerifiedBot";
      UserFlags3[UserFlags3["VerifiedDeveloper"] = 131072] = "VerifiedDeveloper";
      UserFlags3[UserFlags3["CertifiedModerator"] = 262144] = "CertifiedModerator";
      UserFlags3[UserFlags3["BotHTTPInteractions"] = 524288] = "BotHTTPInteractions";
      UserFlags3[UserFlags3["Spammer"] = 1048576] = "Spammer";
      UserFlags3[UserFlags3["DisablePremium"] = 2097152] = "DisablePremium";
      UserFlags3[UserFlags3["ActiveDeveloper"] = 4194304] = "ActiveDeveloper";
      UserFlags3[UserFlags3["Quarantined"] = 17592186044416] = "Quarantined";
      UserFlags3[UserFlags3["Collaborator"] = 1125899906842624] = "Collaborator";
      UserFlags3[UserFlags3["RestrictedCollaborator"] = 2251799813685248] = "RestrictedCollaborator";
    })(UserFlags2 || (exports.UserFlags = UserFlags2 = {}));
    var UserPremiumType2;
    (function(UserPremiumType3) {
      UserPremiumType3[UserPremiumType3["None"] = 0] = "None";
      UserPremiumType3[UserPremiumType3["NitroClassic"] = 1] = "NitroClassic";
      UserPremiumType3[UserPremiumType3["Nitro"] = 2] = "Nitro";
      UserPremiumType3[UserPremiumType3["NitroBasic"] = 3] = "NitroBasic";
    })(UserPremiumType2 || (exports.UserPremiumType = UserPremiumType2 = {}));
    var ConnectionService2;
    (function(ConnectionService3) {
      ConnectionService3["AmazonMusic"] = "amazon-music";
      ConnectionService3["BattleNet"] = "battlenet";
      ConnectionService3["Bluesky"] = "bluesky";
      ConnectionService3["BungieNet"] = "bungie";
      ConnectionService3["Crunchyroll"] = "crunchyroll";
      ConnectionService3["Domain"] = "domain";
      ConnectionService3["eBay"] = "ebay";
      ConnectionService3["EpicGames"] = "epicgames";
      ConnectionService3["Facebook"] = "facebook";
      ConnectionService3["GitHub"] = "github";
      ConnectionService3["Instagram"] = "instagram";
      ConnectionService3["LeagueOfLegends"] = "leagueoflegends";
      ConnectionService3["Mastodon"] = "mastodon";
      ConnectionService3["PayPal"] = "paypal";
      ConnectionService3["PlayStationNetwork"] = "playstation";
      ConnectionService3["Reddit"] = "reddit";
      ConnectionService3["RiotGames"] = "riotgames";
      ConnectionService3["Roblox"] = "roblox";
      ConnectionService3["Spotify"] = "spotify";
      ConnectionService3["Skype"] = "skype";
      ConnectionService3["Steam"] = "steam";
      ConnectionService3["TikTok"] = "tiktok";
      ConnectionService3["Twitch"] = "twitch";
      ConnectionService3["X"] = "twitter";
      ConnectionService3["Twitter"] = "twitter";
      ConnectionService3["Xbox"] = "xbox";
      ConnectionService3["YouTube"] = "youtube";
    })(ConnectionService2 || (exports.ConnectionService = ConnectionService2 = {}));
    var ConnectionVisibility2;
    (function(ConnectionVisibility3) {
      ConnectionVisibility3[ConnectionVisibility3["None"] = 0] = "None";
      ConnectionVisibility3[ConnectionVisibility3["Everyone"] = 1] = "Everyone";
    })(ConnectionVisibility2 || (exports.ConnectionVisibility = ConnectionVisibility2 = {}));
    var NameplatePalette2;
    (function(NameplatePalette3) {
      NameplatePalette3["Berry"] = "berry";
      NameplatePalette3["BubbleGum"] = "bubble_gum";
      NameplatePalette3["Clover"] = "clover";
      NameplatePalette3["Cobalt"] = "cobalt";
      NameplatePalette3["Crimson"] = "crimson";
      NameplatePalette3["Forest"] = "forest";
      NameplatePalette3["Lemon"] = "lemon";
      NameplatePalette3["Sky"] = "sky";
      NameplatePalette3["Teal"] = "teal";
      NameplatePalette3["Violet"] = "violet";
      NameplatePalette3["White"] = "white";
    })(NameplatePalette2 || (exports.NameplatePalette = NameplatePalette2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/webhook.js
var require_webhook = __commonJS({
  "node_modules/discord-api-types/payloads/v10/webhook.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebhookType = exports.ApplicationWebhookEventType = exports.ApplicationWebhookType = void 0;
    var ApplicationWebhookType2;
    (function(ApplicationWebhookType3) {
      ApplicationWebhookType3[ApplicationWebhookType3["Ping"] = 0] = "Ping";
      ApplicationWebhookType3[ApplicationWebhookType3["Event"] = 1] = "Event";
    })(ApplicationWebhookType2 || (exports.ApplicationWebhookType = ApplicationWebhookType2 = {}));
    var ApplicationWebhookEventType2;
    (function(ApplicationWebhookEventType3) {
      ApplicationWebhookEventType3["ApplicationAuthorized"] = "APPLICATION_AUTHORIZED";
      ApplicationWebhookEventType3["ApplicationDeauthorized"] = "APPLICATION_DEAUTHORIZED";
      ApplicationWebhookEventType3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      ApplicationWebhookEventType3["EntitlementUpdate"] = "ENTITLEMENT_UPDATE";
      ApplicationWebhookEventType3["EntitlementDelete"] = "ENTITLEMENT_DELETE";
      ApplicationWebhookEventType3["QuestUserEnrollment"] = "QUEST_USER_ENROLLMENT";
    })(ApplicationWebhookEventType2 || (exports.ApplicationWebhookEventType = ApplicationWebhookEventType2 = {}));
    var WebhookType2;
    (function(WebhookType3) {
      WebhookType3[WebhookType3["Incoming"] = 1] = "Incoming";
      WebhookType3[WebhookType3["ChannelFollower"] = 2] = "ChannelFollower";
      WebhookType3[WebhookType3["Application"] = 3] = "Application";
    })(WebhookType2 || (exports.WebhookType = WebhookType2 = {}));
  }
});

// node_modules/discord-api-types/payloads/v10/index.js
var require_v102 = __commonJS({
  "node_modules/discord-api-types/payloads/v10/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_common(), exports);
    __exportStar(require_application(), exports);
    __exportStar(require_auditLog(), exports);
    __exportStar(require_autoModeration(), exports);
    __exportStar(require_channel(), exports);
    __exportStar(require_gateway(), exports);
    __exportStar(require_guild(), exports);
    __exportStar(require_guildScheduledEvent(), exports);
    __exportStar(require_interactions(), exports);
    __exportStar(require_invite(), exports);
    __exportStar(require_message(), exports);
    __exportStar(require_monetization(), exports);
    __exportStar(require_oauth2(), exports);
    __exportStar(require_permissions2(), exports);
    __exportStar(require_poll(), exports);
    __exportStar(require_stageInstance(), exports);
    __exportStar(require_sticker(), exports);
    __exportStar(require_teams(), exports);
    __exportStar(require_user(), exports);
    __exportStar(require_webhook(), exports);
  }
});

// node_modules/discord-api-types/utils/internals.js
var require_internals = __commonJS({
  "node_modules/discord-api-types/utils/internals.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.urlSafeCharacters = void 0;
    var pattern = /^[\d%A-Za-z-_]+$/g;
    exports.urlSafeCharacters = {
      test(input) {
        const result = pattern.test(input);
        pattern.lastIndex = 0;
        return result;
      }
    };
  }
});

// node_modules/discord-api-types/rest/common.js
var require_common2 = __commonJS({
  "node_modules/discord-api-types/rest/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Locale = exports.RESTJSONErrorCodes = void 0;
    var RESTJSONErrorCodes2;
    (function(RESTJSONErrorCodes3) {
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GeneralError"] = 0] = "GeneralError";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownAccount"] = 10001] = "UnknownAccount";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplication"] = 10002] = "UnknownApplication";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownChannel"] = 10003] = "UnknownChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuild"] = 10004] = "UnknownGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownIntegration"] = 10005] = "UnknownIntegration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownInvite"] = 10006] = "UnknownInvite";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownMember"] = 10007] = "UnknownMember";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownMessage"] = 10008] = "UnknownMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownPermissionOverwrite"] = 10009] = "UnknownPermissionOverwrite";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownProvider"] = 10010] = "UnknownProvider";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownRole"] = 10011] = "UnknownRole";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownToken"] = 10012] = "UnknownToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownUser"] = 10013] = "UnknownUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownEmoji"] = 10014] = "UnknownEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownWebhook"] = 10015] = "UnknownWebhook";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownWebhookService"] = 10016] = "UnknownWebhookService";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSession"] = 10020] = "UnknownSession";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownAsset"] = 10021] = "UnknownAsset";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBan"] = 10026] = "UnknownBan";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSKU"] = 10027] = "UnknownSKU";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStoreListing"] = 10028] = "UnknownStoreListing";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownEntitlement"] = 10029] = "UnknownEntitlement";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBuild"] = 10030] = "UnknownBuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownLobby"] = 10031] = "UnknownLobby";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownBranch"] = 10032] = "UnknownBranch";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStoreDirectoryLayout"] = 10033] = "UnknownStoreDirectoryLayout";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownRedistributable"] = 10036] = "UnknownRedistributable";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGiftCode"] = 10038] = "UnknownGiftCode";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStream"] = 10049] = "UnknownStream";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownPremiumServerSubscribeCooldown"] = 10050] = "UnknownPremiumServerSubscribeCooldown";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildTemplate"] = 10057] = "UnknownGuildTemplate";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownDiscoverableServerCategory"] = 10059] = "UnknownDiscoverableServerCategory";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSticker"] = 10060] = "UnknownSticker";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStickerPack"] = 10061] = "UnknownStickerPack";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownInteraction"] = 10062] = "UnknownInteraction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplicationCommand"] = 10063] = "UnknownApplicationCommand";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownVoiceState"] = 10065] = "UnknownVoiceState";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownApplicationCommandPermissions"] = 10066] = "UnknownApplicationCommandPermissions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownStageInstance"] = 10067] = "UnknownStageInstance";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildMemberVerificationForm"] = 10068] = "UnknownGuildMemberVerificationForm";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildWelcomeScreen"] = 10069] = "UnknownGuildWelcomeScreen";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildScheduledEvent"] = 10070] = "UnknownGuildScheduledEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownGuildScheduledEventUser"] = 10071] = "UnknownGuildScheduledEventUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownTag"] = 10087] = "UnknownTag";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnknownSound"] = 10097] = "UnknownSound";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["BotsCannotUseThisEndpoint"] = 20001] = "BotsCannotUseThisEndpoint";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyBotsCanUseThisEndpoint"] = 20002] = "OnlyBotsCanUseThisEndpoint";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ExplicitContentCannotBeSentToTheDesiredRecipient"] = 20009] = "ExplicitContentCannotBeSentToTheDesiredRecipient";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NotAuthorizedToPerformThisActionOnThisApplication"] = 20012] = "NotAuthorizedToPerformThisActionOnThisApplication";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ActionCannotBePerformedDueToSlowmodeRateLimit"] = 20016] = "ActionCannotBePerformedDueToSlowmodeRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheMazeIsntMeantForYou"] = 20017] = "TheMazeIsntMeantForYou";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyTheOwnerOfThisAccountCanPerformThisAction"] = 20018] = "OnlyTheOwnerOfThisAccountCanPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["AnnouncementEditLimitExceeded"] = 20022] = "AnnouncementEditLimitExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UnderMinimumAge"] = 20024] = "UnderMinimumAge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ChannelSendRateLimit"] = 20028] = "ChannelSendRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerSendRateLimit"] = 20029] = "ServerSendRateLimit";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords"] = 20031] = "StageTopicServerNameServerDescriptionOrChannelNamesContainDisallowedWords";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildPremiumSubscriptionLevelTooLow"] = 20035] = "GuildPremiumSubscriptionLevelTooLow";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildsReached"] = 30001] = "MaximumNumberOfGuildsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfFriendsReached"] = 30002] = "MaximumNumberOfFriendsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPinsReachedForTheChannel"] = 30003] = "MaximumNumberOfPinsReachedForTheChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfRecipientsReached"] = 30004] = "MaximumNumberOfRecipientsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildRolesReached"] = 30005] = "MaximumNumberOfGuildRolesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfWebhooksReached"] = 30007] = "MaximumNumberOfWebhooksReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfEmojisReached"] = 30008] = "MaximumNumberOfEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfReactionsReached"] = 30010] = "MaximumNumberOfReactionsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGroupDMsReached"] = 30011] = "MaximumNumberOfGroupDMsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildChannelsReached"] = 30013] = "MaximumNumberOfGuildChannelsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfAttachmentsInAMessageReached"] = 30015] = "MaximumNumberOfAttachmentsInAMessageReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfInvitesReached"] = 30016] = "MaximumNumberOfInvitesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfAnimatedEmojisReached"] = 30018] = "MaximumNumberOfAnimatedEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfServerMembersReached"] = 30019] = "MaximumNumberOfServerMembersReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfServerCategoriesReached"] = 30030] = "MaximumNumberOfServerCategoriesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildAlreadyHasTemplate"] = 30031] = "GuildAlreadyHasTemplate";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfApplicationCommandsReached"] = 30032] = "MaximumNumberOfApplicationCommandsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumThreadParticipantsReached"] = 30033] = "MaximumThreadParticipantsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumDailyApplicationCommandCreatesReached"] = 30034] = "MaximumDailyApplicationCommandCreatesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfNonGuildMemberBansHasBeenExceeded"] = 30035] = "MaximumNumberOfNonGuildMemberBansHasBeenExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfBanFetchesHasBeenReached"] = 30037] = "MaximumNumberOfBanFetchesHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfUncompletedGuildScheduledEventsReached"] = 30038] = "MaximumNumberOfUncompletedGuildScheduledEventsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfStickersReached"] = 30039] = "MaximumNumberOfStickersReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPruneRequestsHasBeenReached"] = 30040] = "MaximumNumberOfPruneRequestsHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached"] = 30042] = "MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfSoundboardSoundsReached"] = 30045] = "MaximumNumberOfSoundboardSoundsReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfEditsToMessagesOlderThanOneHourReached"] = 30046] = "MaximumNumberOfEditsToMessagesOlderThanOneHourReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPinnedThreadsInForumHasBeenReached"] = 30047] = "MaximumNumberOfPinnedThreadsInForumHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfTagsInForumHasBeenReached"] = 30048] = "MaximumNumberOfTagsInForumHasBeenReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["BitrateIsTooHighForChannelOfThisType"] = 30052] = "BitrateIsTooHighForChannelOfThisType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfPremiumEmojisReached"] = 30056] = "MaximumNumberOfPremiumEmojisReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfWebhooksPerGuildReached"] = 30058] = "MaximumNumberOfWebhooksPerGuildReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumNumberOfChannelPermissionOverwritesReached"] = 30060] = "MaximumNumberOfChannelPermissionOverwritesReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheChannelsForThisGuildAreTooLarge"] = 30061] = "TheChannelsForThisGuildAreTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["Unauthorized"] = 40001] = "Unauthorized";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VerifyYourAccount"] = 40002] = "VerifyYourAccount";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OpeningDirectMessagesTooFast"] = 40003] = "OpeningDirectMessagesTooFast";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["SendMessagesHasBeenTemporarilyDisabled"] = 40004] = "SendMessagesHasBeenTemporarilyDisabled";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["RequestEntityTooLarge"] = 40005] = "RequestEntityTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FeatureTemporarilyDisabledServerSide"] = 40006] = "FeatureTemporarilyDisabledServerSide";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UserBannedFromThisGuild"] = 40007] = "UserBannedFromThisGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ConnectionHasBeenRevoked"] = 40012] = "ConnectionHasBeenRevoked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OnlyConsumableSKUsCanBeConsumed"] = 40018] = "OnlyConsumableSKUsCanBeConsumed";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouCanOnlyDeleteSandboxEntitlements"] = 40019] = "YouCanOnlyDeleteSandboxEntitlements";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TargetUserIsNotConnectedToVoice"] = 40032] = "TargetUserIsNotConnectedToVoice";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThisMessageWasAlreadyCrossposted"] = 40033] = "ThisMessageWasAlreadyCrossposted";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationCommandWithThatNameAlreadyExists"] = 40041] = "ApplicationCommandWithThatNameAlreadyExists";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationInteractionFailedToSend"] = 40043] = "ApplicationInteractionFailedToSend";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendAMessageInAForumChannel"] = 40058] = "CannotSendAMessageInAForumChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InteractionHasAlreadyBeenAcknowledged"] = 40060] = "InteractionHasAlreadyBeenAcknowledged";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TagNamesMustBeUnique"] = 40061] = "TagNamesMustBeUnique";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServiceResourceIsBeingRateLimited"] = 40062] = "ServiceResourceIsBeingRateLimited";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThereAreNoTagsAvailableThatCanBeSetByNonModerators"] = 40066] = "ThereAreNoTagsAvailableThatCanBeSetByNonModerators";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TagRequiredToCreateAForumPostInThisChannel"] = 40067] = "TagRequiredToCreateAForumPostInThisChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["AnEntitlementHasAlreadyBeenGrantedForThisResource"] = 40074] = "AnEntitlementHasAlreadyBeenGrantedForThisResource";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages"] = 40094] = "ThisInteractionHasHitTheMaximumNumberOfFollowUpMessages";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CloudflareIsBlockingYourRequest"] = 40333] = "CloudflareIsBlockingYourRequest";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingAccess"] = 50001] = "MissingAccess";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidAccountType"] = 50002] = "InvalidAccountType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnDMChannel"] = 50003] = "CannotExecuteActionOnDMChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["GuildWidgetDisabled"] = 50004] = "GuildWidgetDisabled";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditMessageAuthoredByAnotherUser"] = 50005] = "CannotEditMessageAuthoredByAnotherUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendAnEmptyMessage"] = 50006] = "CannotSendAnEmptyMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendMessagesToThisUser"] = 50007] = "CannotSendMessagesToThisUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSendMessagesInNonTextChannel"] = 50008] = "CannotSendMessagesInNonTextChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ChannelVerificationLevelTooHighForYouToGainAccess"] = 50009] = "ChannelVerificationLevelTooHighForYouToGainAccess";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OAuth2ApplicationDoesNotHaveBot"] = 50010] = "OAuth2ApplicationDoesNotHaveBot";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OAuth2ApplicationLimitReached"] = 50011] = "OAuth2ApplicationLimitReached";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidOAuth2State"] = 50012] = "InvalidOAuth2State";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingPermissions"] = 50013] = "MissingPermissions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidToken"] = 50014] = "InvalidToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NoteWasTooLong"] = 50015] = "NoteWasTooLong";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedTooFewOrTooManyMessagesToDelete"] = 50016] = "ProvidedTooFewOrTooManyMessagesToDelete";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidMFALevel"] = 50017] = "InvalidMFALevel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageCanOnlyBePinnedInTheChannelItWasSentIn"] = 50019] = "MessageCanOnlyBePinnedInTheChannelItWasSentIn";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InviteCodeInvalidOrTaken"] = 50020] = "InviteCodeInvalidOrTaken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnSystemMessage"] = 50021] = "CannotExecuteActionOnSystemMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExecuteActionOnThisChannelType"] = 50024] = "CannotExecuteActionOnThisChannelType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidOAuth2AccessToken"] = 50025] = "InvalidOAuth2AccessToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MissingRequiredOAuth2Scope"] = 50026] = "MissingRequiredOAuth2Scope";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidWebhookToken"] = 50027] = "InvalidWebhookToken";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRole"] = 50028] = "InvalidRole";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRecipients"] = 50033] = "InvalidRecipients";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OneOfTheMessagesProvidedWasTooOldForBulkDelete"] = 50034] = "OneOfTheMessagesProvidedWasTooOldForBulkDelete";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidFormBodyOrContentType"] = 50035] = "InvalidFormBodyOrContentType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InviteAcceptedToGuildWithoutTheBotBeingIn"] = 50036] = "InviteAcceptedToGuildWithoutTheBotBeingIn";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidActivityAction"] = 50039] = "InvalidActivityAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidAPIVersion"] = 50041] = "InvalidAPIVersion";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FileUploadedExceedsMaximumSize"] = 50045] = "FileUploadedExceedsMaximumSize";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidFileUploaded"] = 50046] = "InvalidFileUploaded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotSelfRedeemThisGift"] = 50054] = "CannotSelfRedeemThisGift";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidGuild"] = 50055] = "InvalidGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidSKU"] = 50057] = "InvalidSKU";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidRequestOrigin"] = 50067] = "InvalidRequestOrigin";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidMessageType"] = 50068] = "InvalidMessageType";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PaymentSourceRequiredToRedeemGift"] = 50070] = "PaymentSourceRequiredToRedeemGift";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotModifyASystemWebhook"] = 50073] = "CannotModifyASystemWebhook";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotDeleteChannelRequiredForCommunityGuilds"] = 50074] = "CannotDeleteChannelRequiredForCommunityGuilds";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditStickersWithinMessage"] = 50080] = "CannotEditStickersWithinMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidStickerSent"] = 50081] = "InvalidStickerSent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidActionOnArchivedThread"] = 50083] = "InvalidActionOnArchivedThread";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidThreadNotificationSettings"] = 50084] = "InvalidThreadNotificationSettings";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ParameterEarlierThanCreation"] = 50085] = "ParameterEarlierThanCreation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CommunityServerChannelsMustBeTextChannels"] = 50086] = "CommunityServerChannelsMustBeTextChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor"] = 50091] = "TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNotAvailableInYourLocation"] = 50095] = "ServerNotAvailableInYourLocation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNeedsMonetizationEnabledToPerformThisAction"] = 50097] = "ServerNeedsMonetizationEnabledToPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ServerNeedsMoreBoostsToPerformThisAction"] = 50101] = "ServerNeedsMoreBoostsToPerformThisAction";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["RequestBodyContainsInvalidJSON"] = 50109] = "RequestBodyContainsInvalidJSON";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileIsInvalid"] = 50110] = "ProvidedFileIsInvalid";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileTypeIsInvalid"] = 50123] = "ProvidedFileTypeIsInvalid";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileDurationExceedsMaximumLength"] = 50124] = "ProvidedFileDurationExceedsMaximumLength";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OwnerCannotBePendingMember"] = 50131] = "OwnerCannotBePendingMember";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["OwnershipCannotBeMovedToABotUser"] = 50132] = "OwnershipCannotBeMovedToABotUser";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToResizeAssetBelowTheMinimumSize"] = 50138] = "FailedToResizeAssetBelowTheMinimumSize";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji"] = 50144] = "CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotConvertBetweenPremiumEmojiAndNormalEmoji"] = 50145] = "CannotConvertBetweenPremiumEmojiAndNormalEmoji";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UploadedFileNotFound"] = 50146] = "UploadedFileNotFound";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["SpecifiedEmojiIsInvalid"] = 50151] = "SpecifiedEmojiIsInvalid";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesDoNotSupportAdditionalContent"] = 50159] = "VoiceMessagesDoNotSupportAdditionalContent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesMustHaveASingleAudioAttachment"] = 50160] = "VoiceMessagesMustHaveASingleAudioAttachment";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesMustHaveSupportingMetadata"] = 50161] = "VoiceMessagesMustHaveSupportingMetadata";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["VoiceMessagesCannotBeEdited"] = 50162] = "VoiceMessagesCannotBeEdited";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotDeleteGuildSubscriptionIntegration"] = 50163] = "CannotDeleteGuildSubscriptionIntegration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouCannotSendVoiceMessagesInThisChannel"] = 50173] = "YouCannotSendVoiceMessagesInThisChannel";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheUserAccountMustFirstBeVerified"] = 50178] = "TheUserAccountMustFirstBeVerified";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ProvidedFileDoesNotHaveAValidDuration"] = 50192] = "ProvidedFileDoesNotHaveAValidDuration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["YouDoNotHavePermissionToSendThisSticker"] = 50600] = "YouDoNotHavePermissionToSendThisSticker";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TwoFactorAuthenticationIsRequired"] = 60003] = "TwoFactorAuthenticationIsRequired";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["NoUsersWithDiscordTagExist"] = 80004] = "NoUsersWithDiscordTagExist";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ReactionWasBlocked"] = 90001] = "ReactionWasBlocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UserCannotUseBurstReactions"] = 90002] = "UserCannotUseBurstReactions";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ApplicationNotYetAvailable"] = 110001] = "ApplicationNotYetAvailable";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["APIResourceOverloaded"] = 13e4] = "APIResourceOverloaded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TheStageIsAlreadyOpen"] = 150006] = "TheStageIsAlreadyOpen";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotReplyWithoutPermissionToReadMessageHistory"] = 160002] = "CannotReplyWithoutPermissionToReadMessageHistory";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThreadAlreadyCreatedForMessage"] = 160004] = "ThreadAlreadyCreatedForMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["ThreadLocked"] = 160005] = "ThreadLocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumActiveThreads"] = 160006] = "MaximumActiveThreads";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MaximumActiveAnnouncementThreads"] = 160007] = "MaximumActiveAnnouncementThreads";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidJSONForUploadedLottieFile"] = 170001] = "InvalidJSONForUploadedLottieFile";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["UploadedLottiesCannotContainRasterizedImages"] = 170002] = "UploadedLottiesCannotContainRasterizedImages";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerMaximumFramerateExceeded"] = 170003] = "StickerMaximumFramerateExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerFrameCountExceedsMaximumOf1000Frames"] = 170004] = "StickerFrameCountExceedsMaximumOf1000Frames";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["LottieAnimationMaximumDimensionsExceeded"] = 170005] = "LottieAnimationMaximumDimensionsExceeded";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerFramerateIsTooSmallOrTooLarge"] = 170006] = "StickerFramerateIsTooSmallOrTooLarge";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["StickerAnimationDurationExceedsMaximumOf5Seconds"] = 170007] = "StickerAnimationDurationExceedsMaximumOf5Seconds";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUpdateAFinishedEvent"] = 18e4] = "CannotUpdateAFinishedEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToCreateStageNeededForStageEvent"] = 180002] = "FailedToCreateStageNeededForStageEvent";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageWasBlockedByAutomaticModeration"] = 2e5] = "MessageWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["TitleWasBlockedByAutomaticModeration"] = 200001] = "TitleWasBlockedByAutomaticModeration";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId"] = 220001] = "WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadId";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId"] = 220002] = "WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadId";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhooksCanOnlyCreateThreadsInForumChannels"] = 220003] = "WebhooksCanOnlyCreateThreadsInForumChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["WebhookServicesCannotBeUsedInForumChannels"] = 220004] = "WebhookServicesCannotBeUsedInForumChannels";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["MessageBlockedByHarmfulLinksFilter"] = 24e4] = "MessageBlockedByHarmfulLinksFilter";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEnableOnboardingRequirementsAreNotMet"] = 35e4] = "CannotEnableOnboardingRequirementsAreNotMet";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUpdateOnboardingWhileBelowRequirements"] = 350001] = "CannotUpdateOnboardingWhileBelowRequirements";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["AccessToFileUploadsHasBeenLimitedForThisGuild"] = 400001] = "AccessToFileUploadsHasBeenLimitedForThisGuild";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["FailedToBanUsers"] = 5e5] = "FailedToBanUsers";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PollVotingBlocked"] = 52e4] = "PollVotingBlocked";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["PollExpired"] = 520001] = "PollExpired";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["InvalidChannelTypeForPollCreation"] = 520002] = "InvalidChannelTypeForPollCreation";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotEditAPollMessage"] = 520003] = "CannotEditAPollMessage";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotUseAnEmojiIncludedWithThePoll"] = 520004] = "CannotUseAnEmojiIncludedWithThePoll";
      RESTJSONErrorCodes3[RESTJSONErrorCodes3["CannotExpireANonPollMessage"] = 520006] = "CannotExpireANonPollMessage";
    })(RESTJSONErrorCodes2 || (exports.RESTJSONErrorCodes = RESTJSONErrorCodes2 = {}));
    var Locale2;
    (function(Locale3) {
      Locale3["Indonesian"] = "id";
      Locale3["EnglishUS"] = "en-US";
      Locale3["EnglishGB"] = "en-GB";
      Locale3["Bulgarian"] = "bg";
      Locale3["ChineseCN"] = "zh-CN";
      Locale3["ChineseTW"] = "zh-TW";
      Locale3["Croatian"] = "hr";
      Locale3["Czech"] = "cs";
      Locale3["Danish"] = "da";
      Locale3["Dutch"] = "nl";
      Locale3["Finnish"] = "fi";
      Locale3["French"] = "fr";
      Locale3["German"] = "de";
      Locale3["Greek"] = "el";
      Locale3["Hindi"] = "hi";
      Locale3["Hungarian"] = "hu";
      Locale3["Italian"] = "it";
      Locale3["Japanese"] = "ja";
      Locale3["Korean"] = "ko";
      Locale3["Lithuanian"] = "lt";
      Locale3["Norwegian"] = "no";
      Locale3["Polish"] = "pl";
      Locale3["PortugueseBR"] = "pt-BR";
      Locale3["Romanian"] = "ro";
      Locale3["Russian"] = "ru";
      Locale3["SpanishES"] = "es-ES";
      Locale3["SpanishLATAM"] = "es-419";
      Locale3["Swedish"] = "sv-SE";
      Locale3["Thai"] = "th";
      Locale3["Turkish"] = "tr";
      Locale3["Ukrainian"] = "uk";
      Locale3["Vietnamese"] = "vi";
    })(Locale2 || (exports.Locale = Locale2 = {}));
  }
});

// node_modules/discord-api-types/rest/v10/channel.js
var require_channel2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/channel.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactionType = void 0;
    var ReactionType2;
    (function(ReactionType3) {
      ReactionType3[ReactionType3["Normal"] = 0] = "Normal";
      ReactionType3[ReactionType3["Super"] = 1] = "Super";
    })(ReactionType2 || (exports.ReactionType = ReactionType2 = {}));
  }
});

// node_modules/discord-api-types/rest/v10/monetization.js
var require_monetization2 = __commonJS({
  "node_modules/discord-api-types/rest/v10/monetization.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EntitlementOwnerType = void 0;
    var EntitlementOwnerType2;
    (function(EntitlementOwnerType3) {
      EntitlementOwnerType3[EntitlementOwnerType3["Guild"] = 1] = "Guild";
      EntitlementOwnerType3[EntitlementOwnerType3["User"] = 2] = "User";
    })(EntitlementOwnerType2 || (exports.EntitlementOwnerType = EntitlementOwnerType2 = {}));
  }
});

// node_modules/discord-api-types/rest/v10/index.js
var require_v103 = __commonJS({
  "node_modules/discord-api-types/rest/v10/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuth2Routes = exports.RouteBases = exports.CDNRoutes = exports.ImageFormat = exports.StickerPackApplicationId = exports.Routes = exports.APIVersion = void 0;
    var internals_1 = require_internals();
    __exportStar(require_common2(), exports);
    __exportStar(require_channel2(), exports);
    __exportStar(require_monetization2(), exports);
    exports.APIVersion = "10";
    exports.Routes = {
      /**
       * Route for:
       * - GET `/applications/{application.id}/role-connections/metadata`
       * - PUT `/applications/{application.id}/role-connections/metadata`
       */
      applicationRoleConnectionMetadata(applicationId) {
        return `/applications/${applicationId}/role-connections/metadata`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/auto-moderation/rules`
       * - POST `/guilds/{guild.id}/auto-moderation/rules`
       */
      guildAutoModerationRules(guildId) {
        return `/guilds/${guildId}/auto-moderation/rules`;
      },
      /**
       * Routes for:
       * - GET    `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - PATCH  `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       * - DELETE `/guilds/{guild.id}/auto-moderation/rules/{rule.id}`
       */
      guildAutoModerationRule(guildId, ruleId) {
        return `/guilds/${guildId}/auto-moderation/rules/${ruleId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/audit-logs`
       */
      guildAuditLog(guildId) {
        return `/guilds/${guildId}/audit-logs`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}`
       * - PATCH  `/channels/{channel.id}`
       * - DELETE `/channels/{channel.id}`
       */
      channel(channelId) {
        return `/channels/${channelId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/messages`
       * - POST `/channels/{channel.id}/messages`
       */
      channelMessages(channelId) {
        return `/channels/${channelId}/messages`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}`
       * - PATCH  `/channels/{channel.id}/messages/{message.id}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}`
       */
      channelMessage(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/{message.id}/crosspost`
       */
      channelMessageCrosspost(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/crosspost`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageOwnReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageUserReaction(channelId, messageId, emoji, userId) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`;
      },
      /**
       * Route for:
       * - GET    `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}`
       *
       * **Note**: You need to URL encode the emoji yourself
       */
      channelMessageReaction(channelId, messageId, emoji) {
        return `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`;
      },
      /**
       * Route for:
       * - DELETE `/channels/{channel.id}/messages/{message.id}/reactions`
       */
      channelMessageAllReactions(channelId, messageId) {
        return `/channels/${channelId}/messages/${messageId}/reactions`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/messages/bulk-delete`
       */
      channelBulkDelete(channelId) {
        return `/channels/${channelId}/messages/bulk-delete`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/permissions/{overwrite.id}`
       * - DELETE `/channels/{channel.id}/permissions/{overwrite.id}`
       */
      channelPermission(channelId, overwriteId) {
        return `/channels/${channelId}/permissions/${overwriteId}`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/invites`
       * - POST `/channels/{channel.id}/invites`
       */
      channelInvites(channelId) {
        return `/channels/${channelId}/invites`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/followers`
       */
      channelFollowers(channelId) {
        return `/channels/${channelId}/followers`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/typing`
       */
      channelTyping(channelId) {
        return `/channels/${channelId}/typing`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/messages/pins`
       */
      channelMessagesPins(channelId) {
        return `/channels/${channelId}/messages/pins`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/messages/pins/{message.id}`
       * - DELETE `/channels/{channel.id}/messages/pins/{message.id}`
       */
      channelMessagesPin(channelId, messageId) {
        return `/channels/${channelId}/messages/pins/${messageId}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/pins`
       *
       * @deprecated Use {@link Routes.channelMessagesPins} instead.
       */
      channelPins(channelId) {
        return `/channels/${channelId}/pins`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/pins/{message.id}`
       * - DELETE `/channels/{channel.id}/pins/{message.id}`
       *
       * @deprecated Use {@link Routes.channelMessagesPin} instead.
       */
      channelPin(channelId, messageId) {
        return `/channels/${channelId}/pins/${messageId}`;
      },
      /**
       * Route for:
       * - PUT    `/channels/{channel.id}/recipients/{user.id}`
       * - DELETE `/channels/{channel.id}/recipients/{user.id}`
       */
      channelRecipient(channelId, userId) {
        return `/channels/${channelId}/recipients/${userId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/emojis`
       * - POST `/guilds/{guild.id}/emojis`
       */
      guildEmojis(guildId) {
        return `/guilds/${guildId}/emojis`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/emojis/{emoji.id}`
       * - PATCH  `/guilds/{guild.id}/emojis/{emoji.id}`
       * - DELETE `/guilds/{guild.id}/emojis/{emoji.id}`
       */
      guildEmoji(guildId, emojiId) {
        return `/guilds/${guildId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - POST `/guilds`
       *
       * @deprecated {@link https://discord.com/developers/docs/change-log#guild-create-deprecation}
       */
      guilds() {
        return "/guilds";
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}`
       * - PATCH  `/guilds/{guild.id}`
       * - DELETE `/guilds/{guild.id}` (**deprecated**)
       */
      guild(guildId) {
        return `/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/preview`
       */
      guildPreview(guildId) {
        return `/guilds/${guildId}/preview`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/channels`
       * - POST  `/guilds/{guild.id}/channels`
       * - PATCH `/guilds/{guild.id}/channels`
       */
      guildChannels(guildId) {
        return `/guilds/${guildId}/channels`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/members/{user.id}`
       * - PUT    `/guilds/{guild.id}/members/{user.id}`
       * - PATCH  `/guilds/{guild.id}/members/@me`
       * - PATCH  `/guilds/{guild.id}/members/{user.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}`
       */
      guildMember(guildId, userId = "@me") {
        return `/guilds/${guildId}/members/${userId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members`
       */
      guildMembers(guildId) {
        return `/guilds/${guildId}/members`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/members/search`
       */
      guildMembersSearch(guildId) {
        return `/guilds/${guildId}/members/search`;
      },
      /**
       * Route for:
       * - PATCH `/guilds/{guild.id}/members/@me/nick`
       *
       * @deprecated Use {@link Routes.guildMember} instead.
       */
      guildCurrentMemberNickname(guildId) {
        return `/guilds/${guildId}/members/@me/nick`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/members/{user.id}/roles/{role.id}`
       */
      guildMemberRole(guildId, memberId, roleId) {
        return `/guilds/${guildId}/members/${memberId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/mfa`
       *
       * @deprecated
       */
      guildMFA(guildId) {
        return `/guilds/${guildId}/mfa`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/bans`
       */
      guildBans(guildId) {
        return `/guilds/${guildId}/bans`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/bans/{user.id}`
       * - PUT    `/guilds/{guild.id}/bans/{user.id}`
       * - DELETE `/guilds/{guild.id}/bans/{user.id}`
       */
      guildBan(guildId, userId) {
        return `/guilds/${guildId}/bans/${userId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/roles`
       * - POST  `/guilds/{guild.id}/roles`
       * - PATCH `/guilds/{guild.id}/roles`
       */
      guildRoles(guildId) {
        return `/guilds/${guildId}/roles`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/roles/{role.id}`
       * - PATCH  `/guilds/{guild.id}/roles/{role.id}`
       * - DELETE `/guilds/{guild.id}/roles/{role.id}`
       */
      guildRole(guildId, roleId) {
        return `/guilds/${guildId}/roles/${roleId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/roles/member-counts`
       *
       * @unstable
       */
      guildRoleMemberCounts(guildId) {
        return `/guilds/${guildId}/roles/member-counts`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/prune`
       * - POST `/guilds/{guild.id}/prune`
       */
      guildPrune(guildId) {
        return `/guilds/${guildId}/prune`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/regions`
       */
      guildVoiceRegions(guildId) {
        return `/guilds/${guildId}/regions`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/invites`
       */
      guildInvites(guildId) {
        return `/guilds/${guildId}/invites`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/integrations`
       */
      guildIntegrations(guildId) {
        return `/guilds/${guildId}/integrations`;
      },
      /**
       * Route for:
       * - DELETE `/guilds/{guild.id}/integrations/{integration.id}`
       */
      guildIntegration(guildId, integrationId) {
        return `/guilds/${guildId}/integrations/${integrationId}`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/widget`
       * - PATCH `/guilds/{guild.id}/widget`
       */
      guildWidgetSettings(guildId) {
        return `/guilds/${guildId}/widget`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.json`
       */
      guildWidgetJSON(guildId) {
        return `/guilds/${guildId}/widget.json`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/vanity-url`
       */
      guildVanityUrl(guildId) {
        return `/guilds/${guildId}/vanity-url`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/widget.png`
       */
      guildWidgetImage(guildId) {
        return `/guilds/${guildId}/widget.png`;
      },
      /**
       * Route for:
       * - GET    `/invites/{invite.code}`
       * - DELETE `/invites/{invite.code}`
       */
      invite(code) {
        return `/invites/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/templates/{template.code}`
       * - POST `/guilds/templates/{template.code}` (**deprecated**)
       */
      template(code) {
        return `/guilds/templates/${code}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/templates`
       * - POST `/guilds/{guild.id}/templates`
       */
      guildTemplates(guildId) {
        return `/guilds/${guildId}/templates`;
      },
      /**
       * Route for:
       * - PUT    `/guilds/{guild.id}/templates/{template.code}`
       * - PATCH  `/guilds/{guild.id}/templates/{template.code}`
       * - DELETE `/guilds/{guild.id}/templates/{template.code}`
       */
      guildTemplate(guildId, code) {
        return `/guilds/${guildId}/templates/${code}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/polls/{message.id}/answers/{answer_id}`
       */
      pollAnswerVoters(channelId, messageId, answerId) {
        return `/channels/${channelId}/polls/${messageId}/answers/${answerId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/polls/{message.id}/expire`
       */
      expirePoll(channelId, messageId) {
        return `/channels/${channelId}/polls/${messageId}/expire`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/threads`
       * - POST `/channels/{channel.id}/messages/{message.id}/threads`
       */
      threads(parentId, messageId) {
        const parts = ["", "channels", parentId];
        if (messageId)
          parts.push("messages", messageId);
        parts.push("threads");
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/threads/active`
       */
      guildActiveThreads(guildId) {
        return `/guilds/${guildId}/threads/active`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/threads/archived/public`
       * - GET `/channels/{channel.id}/threads/archived/private`
       */
      channelThreads(channelId, archivedStatus) {
        return `/channels/${channelId}/threads/archived/${archivedStatus}`;
      },
      /**
       * Route for:
       * - GET `/channels/{channel.id}/users/@me/threads/archived/private`
       */
      channelJoinedArchivedThreads(channelId) {
        return `/channels/${channelId}/users/@me/threads/archived/private`;
      },
      /**
       * Route for:
       * - GET    `/channels/{thread.id}/thread-members`
       * - GET    `/channels/{thread.id}/thread-members/{user.id}`
       * - PUT    `/channels/{thread.id}/thread-members/@me`
       * - PUT    `/channels/{thread.id}/thread-members/{user.id}`
       * - DELETE `/channels/{thread.id}/thread-members/@me`
       * - DELETE `/channels/{thread.id}/thread-members/{user.id}`
       */
      threadMembers(threadId, userId) {
        const parts = ["", "channels", threadId, "thread-members"];
        if (userId)
          parts.push(userId);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET   `/users/@me`
       * - GET   `/users/{user.id}`
       * - PATCH `/users/@me`
       *
       * @param userId - The user ID, defaulted to `@me`
       */
      user(userId = "@me") {
        return `/users/${userId}`;
      },
      /**
       * Route for:
       * - GET `/users/@me/applications/{application.id}/role-connection`
       * - PUT `/users/@me/applications/{application.id}/role-connection`
       */
      userApplicationRoleConnection(applicationId) {
        return `/users/@me/applications/${applicationId}/role-connection`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds`
       */
      userGuilds() {
        return `/users/@me/guilds`;
      },
      /**
       * Route for:
       * - GET `/users/@me/guilds/{guild.id}/member`
       */
      userGuildMember(guildId) {
        return `/users/@me/guilds/${guildId}/member`;
      },
      /**
       * Route for:
       * - DELETE `/users/@me/guilds/{guild.id}`
       */
      userGuild(guildId) {
        return `/users/@me/guilds/${guildId}`;
      },
      /**
       * Route for:
       * - POST `/users/@me/channels`
       */
      userChannels() {
        return `/users/@me/channels`;
      },
      /**
       * Route for:
       * - GET `/users/@me/connections`
       */
      userConnections() {
        return `/users/@me/connections`;
      },
      /**
       * Route for:
       * - GET `/voice/regions`
       */
      voiceRegions() {
        return `/voice/regions`;
      },
      /**
       * Route for:
       * - GET  `/channels/{channel.id}/webhooks`
       * - POST `/channels/{channel.id}/webhooks`
       */
      channelWebhooks(channelId) {
        return `/channels/${channelId}/webhooks`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/webhooks`
       */
      guildWebhooks(guildId) {
        return `/guilds/${guildId}/webhooks`;
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}`
       * - PATCH  `/webhooks/{webhook.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}`
       * - DELETE `/webhooks/{webhook.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}`
       * - POST   `/webhooks/{webhook.id}/{webhook.token}`
       *
       * - POST   `/webhooks/{application.id}/{interaction.token}`
       */
      webhook(webhookId, webhookToken) {
        const parts = ["", "webhooks", webhookId];
        if (webhookToken)
          parts.push(webhookToken);
        return parts.join("/");
      },
      /**
       * Route for:
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - GET    `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - PATCH  `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/@original`
       * - DELETE `/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}`
       *
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/@original`
       * - PATCH  `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       * - DELETE `/webhooks/{application.id}/{interaction.token}/messages/{message.id}`
       */
      webhookMessage(webhookId, webhookToken, messageId = "@original") {
        return `/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`;
      },
      /**
       * Route for:
       * - POST `/webhooks/{webhook.id}/{webhook.token}/github`
       * - POST `/webhooks/{webhook.id}/{webhook.token}/slack`
       */
      webhookPlatform(webhookId, webhookToken, platform2) {
        return `/webhooks/${webhookId}/${webhookToken}/${platform2}`;
      },
      /**
       * Route for:
       * - GET `/gateway`
       */
      gateway() {
        return `/gateway`;
      },
      /**
       * Route for:
       * - GET `/gateway/bot`
       */
      gatewayBot() {
        return `/gateway/bot`;
      },
      /**
       * Route for:
       * - GET `/oauth2/applications/@me`
       */
      oauth2CurrentApplication() {
        return `/oauth2/applications/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/@me`
       */
      oauth2CurrentAuthorization() {
        return `/oauth2/@me`;
      },
      /**
       * Route for:
       * - GET `/oauth2/authorize`
       */
      oauth2Authorization() {
        return `/oauth2/authorize`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token`
       */
      oauth2TokenExchange() {
        return `/oauth2/token`;
      },
      /**
       * Route for:
       * - POST `/oauth2/token/revoke`
       */
      oauth2TokenRevocation() {
        return `/oauth2/token/revoke`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/commands`
       * - PUT  `/applications/{application.id}/commands`
       * - POST `/applications/{application.id}/commands`
       */
      applicationCommands(applicationId) {
        return `/applications/${applicationId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/commands/{command.id}`
       */
      applicationCommand(applicationId, commandId) {
        return `/applications/${applicationId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - GET  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - PUT  `/applications/{application.id}/guilds/{guild.id}/commands`
       * - POST `/applications/{application.id}/guilds/{guild.id}/commands`
       */
      applicationGuildCommands(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands`;
      },
      /**
       * Route for:
       * - GET    `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - PATCH  `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       * - DELETE `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}`
       */
      applicationGuildCommand(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`;
      },
      /**
       * Route for:
       * - POST `/interactions/{interaction.id}/{interaction.token}/callback`
       */
      interactionCallback(interactionId, interactionToken) {
        return `/interactions/${interactionId}/${interactionToken}/callback`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/member-verification`
       * - PATCH `/guilds/{guild.id}/member-verification`
       *
       * @unstable https://github.com/discord/discord-api-docs/pull/2547
       */
      guildMemberVerification(guildId) {
        return `/guilds/${guildId}/member-verification`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/voice-states/@me`
       * - GET `/guilds/{guild.id}/voice-states/{user.id}`
       * - PATCH `/guilds/{guild.id}/voice-states/@me`
       * - PATCH `/guilds/{guild.id}/voice-states/{user.id}`
       */
      guildVoiceState(guildId, userId = "@me") {
        return `/guilds/${guildId}/voice-states/${userId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/permissions`
       */
      guildApplicationCommandsPermissions(applicationId, guildId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/permissions`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       * - PUT `/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions`
       */
      applicationCommandPermissions(applicationId, guildId, commandId) {
        return `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}/permissions`;
      },
      /**
       * Route for:
       * - GET   `/guilds/{guild.id}/welcome-screen`
       * - PATCH `/guilds/{guild.id}/welcome-screen`
       */
      guildWelcomeScreen(guildId) {
        return `/guilds/${guildId}/welcome-screen`;
      },
      /**
       * Route for:
       * - POST `/stage-instances`
       */
      stageInstances() {
        return `/stage-instances`;
      },
      /**
       * Route for:
       * - GET `/stage-instances/{channel.id}`
       * - PATCH `/stage-instances/{channel.id}`
       * - DELETE `/stage-instances/{channel.id}`
       */
      stageInstance(channelId) {
        return `/stage-instances/${channelId}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}`
       */
      sticker(stickerId) {
        return `/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       */
      stickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET `/sticker-packs/{pack.id}`
       */
      stickerPack(packId) {
        return `/sticker-packs/${packId}`;
      },
      /**
       * Route for:
       * - GET `/sticker-packs`
       *
       * @deprecated Use {@link Routes.stickerPacks} instead.
       */
      nitroStickerPacks() {
        return "/sticker-packs";
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/stickers`
       * - POST `/guilds/{guild.id}/stickers`
       */
      guildStickers(guildId) {
        return `/guilds/${guildId}/stickers`;
      },
      /**
       * Route for:
       * - GET    `/guilds/{guild.id}/stickers/{sticker.id}`
       * - PATCH  `/guilds/{guild.id}/stickers/{sticker.id}`
       * - DELETE `/guilds/{guild.id}/stickers/{sticker.id}`
       */
      guildSticker(guildId, stickerId) {
        return `/guilds/${guildId}/stickers/${stickerId}`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events`
       * - POST `/guilds/{guild.id}/scheduled-events`
       */
      guildScheduledEvents(guildId) {
        return `/guilds/${guildId}/scheduled-events`;
      },
      /**
       * Route for:
       * - GET  `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - PATCH `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       * - DELETE `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}`
       */
      guildScheduledEvent(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/scheduled-events/{guildScheduledEvent.id}/users`
       */
      guildScheduledEventUsers(guildId, guildScheduledEventId) {
        return `/guilds/${guildId}/scheduled-events/${guildScheduledEventId}/users`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/onboarding`
       * - PUT `/guilds/{guild.id}/onboarding`
       */
      guildOnboarding(guildId) {
        return `/guilds/${guildId}/onboarding`;
      },
      /**
       * Route for:
       * - PUT `/guilds/${guild.id}/incident-actions`
       */
      guildIncidentActions(guildId) {
        return `/guilds/${guildId}/incident-actions`;
      },
      /**
       * Route for:
       * - GET `/applications/@me`
       * - PATCH `/applications/@me`
       */
      currentApplication() {
        return "/applications/@me";
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements`
       * - POST `/applications/{application.id}/entitlements`
       */
      entitlements(applicationId) {
        return `/applications/${applicationId}/entitlements`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/entitlements/{entitlement.id}`
       * - DELETE `/applications/{application.id}/entitlements/{entitlement.id}`
       */
      entitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/skus`
       */
      skus(applicationId) {
        return `/applications/${applicationId}/skus`;
      },
      /**
       * Route for:
       * - POST `/guilds/{guild.id}/bulk-ban`
       */
      guildBulkBan(guildId) {
        return `/guilds/${guildId}/bulk-ban`;
      },
      /**
       * Route for:
       * - POST `/applications/{application.id}/entitlements/{entitlement.id}/consume`
       */
      consumeEntitlement(applicationId, entitlementId) {
        return `/applications/${applicationId}/entitlements/${entitlementId}/consume`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/emojis`
       * - POST `/applications/{application.id}/emojis`
       */
      applicationEmojis(applicationId) {
        return `/applications/${applicationId}/emojis`;
      },
      /**
       * Route for:
       * - GET `/applications/{application.id}/emojis/{emoji.id}`
       * - PATCH `/applications/{application.id}/emojis/{emoji.id}`
       * - DELETE `/applications/{application.id}/emojis/{emoji.id}`
       */
      applicationEmoji(applicationId, emojiId) {
        return `/applications/${applicationId}/emojis/${emojiId}`;
      },
      /**
       * Route for:
       * - GET `/skus/{sku.id}/subscriptions`
       */
      skuSubscriptions(skuId) {
        return `/skus/${skuId}/subscriptions`;
      },
      /**
       * Route for:
       * - GET `/skus/{sku.id}/subscriptions/{subscription.id}`
       */
      skuSubscription(skuId, subscriptionId) {
        return `/skus/${skuId}/subscriptions/${subscriptionId}`;
      },
      /**
       * Route for:
       * - POST `/channels/{channel.id}/send-soundboard-sound`
       */
      sendSoundboardSound(channelId) {
        return `/channels/${channelId}/send-soundboard-sound`;
      },
      /**
       * Route for:
       * - GET `/soundboard-default-sounds`
       */
      soundboardDefaultSounds() {
        return "/soundboard-default-sounds";
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/soundboard-sounds`
       * - POST `/guilds/{guild.id}/soundboard-sounds`
       */
      guildSoundboardSounds(guildId) {
        return `/guilds/${guildId}/soundboard-sounds`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       * - PATCH `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       * - DELETE `/guilds/{guild.id}/soundboard-sounds/{sound.id}`
       */
      guildSoundboardSound(guildId, soundId) {
        return `/guilds/${guildId}/soundboard-sounds/${soundId}`;
      }
    };
    for (const [key, fn] of Object.entries(exports.Routes)) {
      exports.Routes[key] = (...args) => {
        const escaped = args.map((arg) => {
          if (arg) {
            if (internals_1.urlSafeCharacters.test(String(arg))) {
              return arg;
            }
            return encodeURIComponent(arg);
          }
          return arg;
        });
        return fn.call(null, ...escaped);
      };
    }
    Object.freeze(exports.Routes);
    exports.StickerPackApplicationId = "710982414301790216";
    var ImageFormat2;
    (function(ImageFormat3) {
      ImageFormat3["JPEG"] = "jpeg";
      ImageFormat3["PNG"] = "png";
      ImageFormat3["WebP"] = "webp";
      ImageFormat3["GIF"] = "gif";
      ImageFormat3["Lottie"] = "json";
    })(ImageFormat2 || (exports.ImageFormat = ImageFormat2 = {}));
    exports.CDNRoutes = {
      /**
       * Route for:
       * - GET `/emojis/{emoji.id}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      emoji(emojiId, format) {
        return `/emojis/${emojiId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/icons/{guild.id}/{guild.icon}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildIcon(guildId, guildIcon, format) {
        return `/icons/${guildId}/${guildIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/splashes/{guild.id}/{guild.splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildSplash(guildId, guildSplash, format) {
        return `/splashes/${guildId}/${guildSplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/discovery-splashes/{guild.id}/{guild.discovery_splash}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildDiscoverySplash(guildId, guildDiscoverySplash, format) {
        return `/discovery-splashes/${guildId}/${guildDiscoverySplash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{guild.id}/{guild.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildBanner(guildId, guildBanner, format) {
        return `/banners/${guildId}/${guildBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/banners/{user.id}/{user.banner}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userBanner(userId, userBanner, format) {
        return `/banners/${userId}/${userBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/embed/avatars/{index}.png`
       *
       * The value for `index` parameter depends on whether the user is {@link https://discord.com/developers/docs/change-log#unique-usernames-on-discord | migrated to the new username system}.
       * For users on the new username system, `index` will be `(user.id >> 22) % 6`.
       * For users on the legacy username system, `index` will be `user.discriminator % 5`.
       *
       * This route supports the extension: PNG
       */
      defaultUserAvatar(index) {
        return `/embed/avatars/${index}.png`;
      },
      /**
       * Route for:
       * - GET `/avatars/{user.id}/{user.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      userAvatar(userId, userAvatar, format) {
        return `/avatars/${userId}/${userAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/{guild.id}/users/{user.id}/avatars/{guild_member.avatar}.{png|jpeg|webp|gif}`
       *
       * As this route supports GIFs, the hash will begin with `a_` if it is available in GIF format
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberAvatar(guildId, userId, memberAvatar, format) {
        return `/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${format}`;
      },
      /**
       * Route for:
       * - GET `/avatar-decorations/{user.id}/{user.avatar_decoration}.png`
       *
       * This route supports the extension: PNG
       *
       * @deprecated Use {@link CDNRoutes.avatarDecoration} instead.
       */
      userAvatarDecoration(userId, userAvatarDecoration) {
        return `/avatar-decorations/${userId}/${userAvatarDecoration}.png`;
      },
      /**
       * Route for:
       * - GET `/avatar-decoration-presets/{avatar_decoration_data_asset}.png`
       *
       * This route supports the extension: PNG
       */
      avatarDecoration(avatarDecorationDataAsset) {
        return `/avatar-decoration-presets/${avatarDecorationDataAsset}.png`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationIcon(applicationId, applicationIcon, format) {
        return `/app-icons/${applicationId}/${applicationIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-icons/{application.id}/{application.cover_image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationCover(applicationId, applicationCoverImage, format) {
        return `/app-icons/${applicationId}/${applicationCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/{application.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      applicationAsset(applicationId, applicationAssetId, format) {
        return `/app-assets/${applicationId}/${applicationAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/{application.id}/achievements/{achievement.id}/icons/{achievement.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      achievementIcon(applicationId, achievementId, achievementIconHash, format) {
        return `/app-assets/${applicationId}/achievements/${achievementId}/icons/${achievementIconHash}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/710982414301790216/store/{sticker_pack.banner.asset_id}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      stickerPackBanner(stickerPackBannerAssetId, format) {
        return `/app-assets/${exports.StickerPackApplicationId}/store/${stickerPackBannerAssetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/app-assets/${application.id}/store/${asset.id}.{png|jpeg|webp}}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      storePageAsset(applicationId, assetId, format = ImageFormat2.PNG) {
        return `/app-assets/${applicationId}/store/${assetId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/team-icons/{team.id}/{team.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      teamIcon(teamId, teamIcon, format) {
        return `/team-icons/${teamId}/${teamIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/stickers/{sticker.id}.{png|json}`
       *
       * This route supports the extensions: PNG, Lottie, GIF
       */
      sticker(stickerId, format) {
        return `/stickers/${stickerId}.${format}`;
      },
      /**
       * Route for:
       * - GET `/role-icons/{role.id}/{role.icon}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      roleIcon(roleId, roleIcon, format) {
        return `/role-icons/${roleId}/${roleIcon}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guild-events/{guild_scheduled_event.id}/{guild_scheduled_event.image}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildScheduledEventCover(guildScheduledEventId, guildScheduledEventCoverImage, format) {
        return `/guild-events/${guildScheduledEventId}/${guildScheduledEventCoverImage}.${format}`;
      },
      /**
       * Route for:
       * - GET `/guilds/${guild.id}/users/${user.id}/banners/${guild_member.banner}.{png|jpeg|webp|gif}`
       *
       * This route supports the extensions: PNG, JPEG, WebP, GIF
       */
      guildMemberBanner(guildId, userId, guildMemberBanner, format) {
        return `/guilds/${guildId}/users/${userId}/banners/${guildMemberBanner}.${format}`;
      },
      /**
       * Route for:
       * - GET `/soundboard-sounds/${sound.id}`
       */
      soundboardSound(soundId) {
        return `/soundboard-sounds/${soundId}`;
      },
      /**
       * Route for:
       * - GET `/guild-tag-badges/{guild.id}/{badge}.{png|jpeg|webp}`
       *
       * This route supports the extensions: PNG, JPEG, WebP
       */
      guildTagBadge(guildId, guildTagBadge, format) {
        return `/guild-tag-badges/${guildId}/${guildTagBadge}.${format}`;
      }
    };
    for (const [key, fn] of Object.entries(exports.CDNRoutes)) {
      exports.CDNRoutes[key] = (...args) => {
        const escaped = args.map((arg) => {
          if (arg) {
            if (internals_1.urlSafeCharacters.test(String(arg))) {
              return arg;
            }
            return encodeURIComponent(arg);
          }
          return arg;
        });
        return fn.call(null, ...escaped);
      };
    }
    Object.freeze(exports.CDNRoutes);
    exports.RouteBases = {
      api: `https://discord.com/api/v${exports.APIVersion}`,
      cdn: "https://cdn.discordapp.com",
      media: "https://media.discordapp.net",
      invite: "https://discord.gg",
      template: "https://discord.new",
      gift: "https://discord.gift",
      scheduledEvent: "https://discord.com/events"
    };
    Object.freeze(exports.RouteBases);
    exports.OAuth2Routes = {
      authorizationURL: `${exports.RouteBases.api}${exports.Routes.oauth2Authorization()}`,
      tokenURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenExchange()}`,
      /**
       * @see {@link https://tools.ietf.org/html/rfc7009}
       */
      tokenRevocationURL: `${exports.RouteBases.api}${exports.Routes.oauth2TokenRevocation()}`
    };
    Object.freeze(exports.OAuth2Routes);
  }
});

// node_modules/discord-api-types/rpc/common.js
var require_common3 = __commonJS({
  "node_modules/discord-api-types/rpc/common.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RPCCloseEventCodes = exports.RPCErrorCodes = exports.RelationshipType = exports.VoiceConnectionStates = exports.RPCVoiceShortcutKeyComboKeyType = exports.RPCVoiceSettingsModeType = exports.RPCDeviceType = void 0;
    var RPCDeviceType2;
    (function(RPCDeviceType3) {
      RPCDeviceType3["AudioInput"] = "audioinput";
      RPCDeviceType3["AudioOutput"] = "audiooutput";
      RPCDeviceType3["VideoInput"] = "videoinput";
    })(RPCDeviceType2 || (exports.RPCDeviceType = RPCDeviceType2 = {}));
    var RPCVoiceSettingsModeType2;
    (function(RPCVoiceSettingsModeType3) {
      RPCVoiceSettingsModeType3["PushToTalk"] = "PUSH_TO_TALK";
      RPCVoiceSettingsModeType3["VoiceActivity"] = "VOICE_ACTIVITY";
    })(RPCVoiceSettingsModeType2 || (exports.RPCVoiceSettingsModeType = RPCVoiceSettingsModeType2 = {}));
    var RPCVoiceShortcutKeyComboKeyType2;
    (function(RPCVoiceShortcutKeyComboKeyType3) {
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["KeyboardKey"] = 0] = "KeyboardKey";
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["MouseButton"] = 1] = "MouseButton";
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["KeyboardModifierKey"] = 2] = "KeyboardModifierKey";
      RPCVoiceShortcutKeyComboKeyType3[RPCVoiceShortcutKeyComboKeyType3["GamepadButton"] = 3] = "GamepadButton";
    })(RPCVoiceShortcutKeyComboKeyType2 || (exports.RPCVoiceShortcutKeyComboKeyType = RPCVoiceShortcutKeyComboKeyType2 = {}));
    var VoiceConnectionStates2;
    (function(VoiceConnectionStates3) {
      VoiceConnectionStates3["Disconnected"] = "DISCONNECTED";
      VoiceConnectionStates3["AwaitingEndpoint"] = "AWAITING_ENDPOINT";
      VoiceConnectionStates3["Authenticating"] = "AUTHENTICATING";
      VoiceConnectionStates3["Connecting"] = "CONNECTING";
      VoiceConnectionStates3["Connected"] = "CONNECTED";
      VoiceConnectionStates3["VoiceDisconnected"] = "VOICE_DISCONNECTED";
      VoiceConnectionStates3["VoiceConnecting"] = "VOICE_CONNECTING";
      VoiceConnectionStates3["VoiceConnected"] = "VOICE_CONNECTED";
      VoiceConnectionStates3["NoRoute"] = "NO_ROUTE";
      VoiceConnectionStates3["IceChecking"] = "ICE_CHECKING";
    })(VoiceConnectionStates2 || (exports.VoiceConnectionStates = VoiceConnectionStates2 = {}));
    var RelationshipType2;
    (function(RelationshipType3) {
      RelationshipType3[RelationshipType3["None"] = 0] = "None";
      RelationshipType3[RelationshipType3["Friend"] = 1] = "Friend";
      RelationshipType3[RelationshipType3["Blocked"] = 2] = "Blocked";
      RelationshipType3[RelationshipType3["PendingIncoming"] = 3] = "PendingIncoming";
      RelationshipType3[RelationshipType3["PendingOutgoing"] = 4] = "PendingOutgoing";
      RelationshipType3[RelationshipType3["Implicit"] = 5] = "Implicit";
    })(RelationshipType2 || (exports.RelationshipType = RelationshipType2 = {}));
    var RPCErrorCodes2;
    (function(RPCErrorCodes3) {
      RPCErrorCodes3[RPCErrorCodes3["UnknownError"] = 1e3] = "UnknownError";
      RPCErrorCodes3[RPCErrorCodes3["ServiceUnavailable"] = 1001] = "ServiceUnavailable";
      RPCErrorCodes3[RPCErrorCodes3["TransactionAborted"] = 1002] = "TransactionAborted";
      RPCErrorCodes3[RPCErrorCodes3["InvalidPayload"] = 4e3] = "InvalidPayload";
      RPCErrorCodes3[RPCErrorCodes3["InvalidCommand"] = 4002] = "InvalidCommand";
      RPCErrorCodes3[RPCErrorCodes3["InvalidGuild"] = 4003] = "InvalidGuild";
      RPCErrorCodes3[RPCErrorCodes3["InvalidEvent"] = 4004] = "InvalidEvent";
      RPCErrorCodes3[RPCErrorCodes3["InvalidChannel"] = 4005] = "InvalidChannel";
      RPCErrorCodes3[RPCErrorCodes3["InvalidPermissions"] = 4006] = "InvalidPermissions";
      RPCErrorCodes3[RPCErrorCodes3["InvalidClientId"] = 4007] = "InvalidClientId";
      RPCErrorCodes3[RPCErrorCodes3["InvalidOrigin"] = 4008] = "InvalidOrigin";
      RPCErrorCodes3[RPCErrorCodes3["InvalidToken"] = 4009] = "InvalidToken";
      RPCErrorCodes3[RPCErrorCodes3["InvalidUser"] = 4010] = "InvalidUser";
      RPCErrorCodes3[RPCErrorCodes3["InvalidInvite"] = 4011] = "InvalidInvite";
      RPCErrorCodes3[RPCErrorCodes3["InvalidActivityJoinRequest"] = 4012] = "InvalidActivityJoinRequest";
      RPCErrorCodes3[RPCErrorCodes3["InvalidEntitlement"] = 4013] = "InvalidEntitlement";
      RPCErrorCodes3[RPCErrorCodes3["InvalidGiftCode"] = 4014] = "InvalidGiftCode";
      RPCErrorCodes3[RPCErrorCodes3["OAuth2Error"] = 5e3] = "OAuth2Error";
      RPCErrorCodes3[RPCErrorCodes3["SelectChannelTimedOut"] = 5001] = "SelectChannelTimedOut";
      RPCErrorCodes3[RPCErrorCodes3["GetGuildTimedOut"] = 5002] = "GetGuildTimedOut";
      RPCErrorCodes3[RPCErrorCodes3["SelectVoiceForceRequired"] = 5003] = "SelectVoiceForceRequired";
      RPCErrorCodes3[RPCErrorCodes3["CaptureShortcutAlreadyListening"] = 5004] = "CaptureShortcutAlreadyListening";
      RPCErrorCodes3[RPCErrorCodes3["InvalidActivitySecret"] = 5005] = "InvalidActivitySecret";
      RPCErrorCodes3[RPCErrorCodes3["NoEligibleActivity"] = 5006] = "NoEligibleActivity";
      RPCErrorCodes3[RPCErrorCodes3["PurchaseCanceled"] = 5007] = "PurchaseCanceled";
      RPCErrorCodes3[RPCErrorCodes3["PurchaseError"] = 5008] = "PurchaseError";
      RPCErrorCodes3[RPCErrorCodes3["UnauthorizedForAchievement"] = 5009] = "UnauthorizedForAchievement";
      RPCErrorCodes3[RPCErrorCodes3["RateLimited"] = 5010] = "RateLimited";
    })(RPCErrorCodes2 || (exports.RPCErrorCodes = RPCErrorCodes2 = {}));
    var RPCCloseEventCodes2;
    (function(RPCCloseEventCodes3) {
      RPCCloseEventCodes3[RPCCloseEventCodes3["CloseNormal"] = 1e3] = "CloseNormal";
      RPCCloseEventCodes3[RPCCloseEventCodes3["CloseUnsupported"] = 1003] = "CloseUnsupported";
      RPCCloseEventCodes3[RPCCloseEventCodes3["CloseAbnormal"] = 1006] = "CloseAbnormal";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidClientId"] = 4e3] = "InvalidClientId";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidOrigin"] = 4001] = "InvalidOrigin";
      RPCCloseEventCodes3[RPCCloseEventCodes3["RateLimited"] = 4002] = "RateLimited";
      RPCCloseEventCodes3[RPCCloseEventCodes3["TokenRevoked"] = 4003] = "TokenRevoked";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidVersion"] = 4004] = "InvalidVersion";
      RPCCloseEventCodes3[RPCCloseEventCodes3["InvalidEncoding"] = 4005] = "InvalidEncoding";
    })(RPCCloseEventCodes2 || (exports.RPCCloseEventCodes = RPCCloseEventCodes2 = {}));
  }
});

// node_modules/discord-api-types/rpc/v10.js
var require_v104 = __commonJS({
  "node_modules/discord-api-types/rpc/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RPCEvents = exports.RPCCommands = exports.RPCVersion = void 0;
    __exportStar(require_common3(), exports);
    exports.RPCVersion = "1";
    var RPCCommands2;
    (function(RPCCommands3) {
      RPCCommands3["AcceptActivityInvite"] = "ACCEPT_ACTIVITY_INVITE";
      RPCCommands3["ActivityInviteUser"] = "ACTIVITY_INVITE_USER";
      RPCCommands3["Authenticate"] = "AUTHENTICATE";
      RPCCommands3["Authorize"] = "AUTHORIZE";
      RPCCommands3["BraintreePopupBridgeCallback"] = "BRAINTREE_POPUP_BRIDGE_CALLBACK";
      RPCCommands3["BrowserHandoff"] = "BROWSER_HANDOFF";
      RPCCommands3["CloseActivityJoinRequest"] = "CLOSE_ACTIVITY_JOIN_REQUEST";
      RPCCommands3["ConnectionsCallback"] = "CONNECTIONS_CALLBACK";
      RPCCommands3["CreateChannelInvite"] = "CREATE_CHANNEL_INVITE";
      RPCCommands3["DeepLink"] = "DEEP_LINK";
      RPCCommands3["Dispatch"] = "DISPATCH";
      RPCCommands3["GetApplicationTicket"] = "GET_APPLICATION_TICKET";
      RPCCommands3["GetChannel"] = "GET_CHANNEL";
      RPCCommands3["GetChannels"] = "GET_CHANNELS";
      RPCCommands3["GetEntitlementTicket"] = "GET_ENTITLEMENT_TICKET";
      RPCCommands3["GetEntitlements"] = "GET_ENTITLEMENTS";
      RPCCommands3["GetGuild"] = "GET_GUILD";
      RPCCommands3["GetGuilds"] = "GET_GUILDS";
      RPCCommands3["GetImage"] = "GET_IMAGE";
      RPCCommands3["GetNetworkingConfig"] = "GET_NETWORKING_CONFIG";
      RPCCommands3["GetRelationships"] = "GET_RELATIONSHIPS";
      RPCCommands3["GetSelectedVoiceChannel"] = "GET_SELECTED_VOICE_CHANNEL";
      RPCCommands3["GetSkus"] = "GET_SKUS";
      RPCCommands3["GetUser"] = "GET_USER";
      RPCCommands3["GetVoiceSettings"] = "GET_VOICE_SETTINGS";
      RPCCommands3["GiftCodeBrowser"] = "GIFT_CODE_BROWSER";
      RPCCommands3["GuildTemplateBrowser"] = "GUILD_TEMPLATE_BROWSER";
      RPCCommands3["InviteBrowser"] = "INVITE_BROWSER";
      RPCCommands3["NetworkingCreateToken"] = "NETWORKING_CREATE_TOKEN";
      RPCCommands3["NetworkingPeerMetrics"] = "NETWORKING_PEER_METRICS";
      RPCCommands3["NetworkingSystemMetrics"] = "NETWORKING_SYSTEM_METRICS";
      RPCCommands3["OpenOverlayActivityInvite"] = "OPEN_OVERLAY_ACTIVITY_INVITE";
      RPCCommands3["OpenOverlayGuildInvite"] = "OPEN_OVERLAY_GUILD_INVITE";
      RPCCommands3["OpenOverlayVoiceSettings"] = "OPEN_OVERLAY_VOICE_SETTINGS";
      RPCCommands3["Overlay"] = "OVERLAY";
      RPCCommands3["SelectTextChannel"] = "SELECT_TEXT_CHANNEL";
      RPCCommands3["SelectVoiceChannel"] = "SELECT_VOICE_CHANNEL";
      RPCCommands3["SendActivityJoinInvite"] = "SEND_ACTIVITY_JOIN_INVITE";
      RPCCommands3["SetActivity"] = "SET_ACTIVITY";
      RPCCommands3["SetCertifiedDevices"] = "SET_CERTIFIED_DEVICES";
      RPCCommands3["SetOverlayLocked"] = "SET_OVERLAY_LOCKED";
      RPCCommands3["SetUserVoiceSettings"] = "SET_USER_VOICE_SETTINGS";
      RPCCommands3["SetUserVoiceSettings2"] = "SET_USER_VOICE_SETTINGS_2";
      RPCCommands3["SetVoiceSettings"] = "SET_VOICE_SETTINGS";
      RPCCommands3["SetVoiceSettings2"] = "SET_VOICE_SETTINGS_2";
      RPCCommands3["StartPurchase"] = "START_PURCHASE";
      RPCCommands3["Subscribe"] = "SUBSCRIBE";
      RPCCommands3["Unsubscribe"] = "UNSUBSCRIBE";
      RPCCommands3["ValidateApplication"] = "VALIDATE_APPLICATION";
    })(RPCCommands2 || (exports.RPCCommands = RPCCommands2 = {}));
    var RPCEvents2;
    (function(RPCEvents3) {
      RPCEvents3["ActivityInvite"] = "ACTIVITY_INVITE";
      RPCEvents3["ActivityJoin"] = "ACTIVITY_JOIN";
      RPCEvents3["ActivityJoinRequest"] = "ACTIVITY_JOIN_REQUEST";
      RPCEvents3["ActivitySpectate"] = "ACTIVITY_SPECTATE";
      RPCEvents3["ChannelCreate"] = "CHANNEL_CREATE";
      RPCEvents3["CurrentUserUpdate"] = "CURRENT_USER_UPDATE";
      RPCEvents3["EntitlementCreate"] = "ENTITLEMENT_CREATE";
      RPCEvents3["EntitlementDelete"] = "ENTITLEMENT_DELETE";
      RPCEvents3["Error"] = "ERROR";
      RPCEvents3["GameJoin"] = "GAME_JOIN";
      RPCEvents3["GameSpectate"] = "GAME_SPECTATE";
      RPCEvents3["GuildCreate"] = "GUILD_CREATE";
      RPCEvents3["GuildStatus"] = "GUILD_STATUS";
      RPCEvents3["MessageCreate"] = "MESSAGE_CREATE";
      RPCEvents3["MessageDelete"] = "MESSAGE_DELETE";
      RPCEvents3["MessageUpdate"] = "MESSAGE_UPDATE";
      RPCEvents3["NotificationCreate"] = "NOTIFICATION_CREATE";
      RPCEvents3["Overlay"] = "OVERLAY";
      RPCEvents3["OverlayUpdate"] = "OVERLAY_UPDATE";
      RPCEvents3["Ready"] = "READY";
      RPCEvents3["RelationshipUpdate"] = "RELATIONSHIP_UPDATE";
      RPCEvents3["SpeakingStart"] = "SPEAKING_START";
      RPCEvents3["SpeakingStop"] = "SPEAKING_STOP";
      RPCEvents3["VoiceChannelSelect"] = "VOICE_CHANNEL_SELECT";
      RPCEvents3["VoiceConnectionStatus"] = "VOICE_CONNECTION_STATUS";
      RPCEvents3["VoiceSettingsUpdate"] = "VOICE_SETTINGS_UPDATE";
      RPCEvents3["VoiceSettingsUpdate2"] = "VOICE_SETTINGS_UPDATE_2";
      RPCEvents3["VoiceStateCreate"] = "VOICE_STATE_CREATE";
      RPCEvents3["VoiceStateDelete"] = "VOICE_STATE_DELETE";
      RPCEvents3["VoiceStateUpdate"] = "VOICE_STATE_UPDATE";
    })(RPCEvents2 || (exports.RPCEvents = RPCEvents2 = {}));
  }
});

// node_modules/discord-api-types/utils/v10.js
var require_v105 = __commonJS({
  "node_modules/discord-api-types/utils/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isDMInteraction = isDMInteraction;
    exports.isGuildInteraction = isGuildInteraction;
    exports.isApplicationCommandDMInteraction = isApplicationCommandDMInteraction;
    exports.isApplicationCommandGuildInteraction = isApplicationCommandGuildInteraction;
    exports.isMessageComponentDMInteraction = isMessageComponentDMInteraction;
    exports.isMessageComponentGuildInteraction = isMessageComponentGuildInteraction;
    exports.isLinkButton = isLinkButton;
    exports.isInteractionButton = isInteractionButton;
    exports.isModalSubmitInteraction = isModalSubmitInteraction;
    exports.isMessageComponentInteraction = isMessageComponentInteraction;
    exports.isMessageComponentButtonInteraction = isMessageComponentButtonInteraction;
    exports.isMessageComponentSelectMenuInteraction = isMessageComponentSelectMenuInteraction;
    exports.isChatInputApplicationCommandInteraction = isChatInputApplicationCommandInteraction;
    exports.isContextMenuApplicationCommandInteraction = isContextMenuApplicationCommandInteraction;
    var index_1 = require_v102();
    function isDMInteraction(interaction) {
      return Reflect.has(interaction, "user");
    }
    __name(isDMInteraction, "isDMInteraction");
    function isGuildInteraction(interaction) {
      return Reflect.has(interaction, "guild_id");
    }
    __name(isGuildInteraction, "isGuildInteraction");
    function isApplicationCommandDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    __name(isApplicationCommandDMInteraction, "isApplicationCommandDMInteraction");
    function isApplicationCommandGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    __name(isApplicationCommandGuildInteraction, "isApplicationCommandGuildInteraction");
    function isMessageComponentDMInteraction(interaction) {
      return isDMInteraction(interaction);
    }
    __name(isMessageComponentDMInteraction, "isMessageComponentDMInteraction");
    function isMessageComponentGuildInteraction(interaction) {
      return isGuildInteraction(interaction);
    }
    __name(isMessageComponentGuildInteraction, "isMessageComponentGuildInteraction");
    function isLinkButton(component) {
      return component.style === index_1.ButtonStyle.Link;
    }
    __name(isLinkButton, "isLinkButton");
    function isInteractionButton(component) {
      return ![index_1.ButtonStyle.Link, index_1.ButtonStyle.Premium].includes(component.style);
    }
    __name(isInteractionButton, "isInteractionButton");
    function isModalSubmitInteraction(interaction) {
      return interaction.type === index_1.InteractionType.ModalSubmit;
    }
    __name(isModalSubmitInteraction, "isModalSubmitInteraction");
    function isMessageComponentInteraction(interaction) {
      return interaction.type === index_1.InteractionType.MessageComponent;
    }
    __name(isMessageComponentInteraction, "isMessageComponentInteraction");
    function isMessageComponentButtonInteraction(interaction) {
      return interaction.data.component_type === index_1.ComponentType.Button;
    }
    __name(isMessageComponentButtonInteraction, "isMessageComponentButtonInteraction");
    function isMessageComponentSelectMenuInteraction(interaction) {
      return [
        index_1.ComponentType.StringSelect,
        index_1.ComponentType.UserSelect,
        index_1.ComponentType.RoleSelect,
        index_1.ComponentType.MentionableSelect,
        index_1.ComponentType.ChannelSelect
      ].includes(interaction.data.component_type);
    }
    __name(isMessageComponentSelectMenuInteraction, "isMessageComponentSelectMenuInteraction");
    function isChatInputApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.ChatInput;
    }
    __name(isChatInputApplicationCommandInteraction, "isChatInputApplicationCommandInteraction");
    function isContextMenuApplicationCommandInteraction(interaction) {
      return interaction.data.type === index_1.ApplicationCommandType.Message || interaction.data.type === index_1.ApplicationCommandType.User;
    }
    __name(isContextMenuApplicationCommandInteraction, "isContextMenuApplicationCommandInteraction");
  }
});

// node_modules/discord-api-types/v10.js
var require_v106 = __commonJS({
  "node_modules/discord-api-types/v10.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      var desc = Object.getOwnPropertyDescriptor(m3, k2);
      if (!desc || ("get" in desc ? !m3.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m3[k2];
        }, "get") };
      }
      Object.defineProperty(o3, k22, desc);
    }) : (function(o3, m3, k2, k22) {
      if (k22 === void 0) k22 = k2;
      o3[k22] = m3[k2];
    }));
    var __exportStar = exports && exports.__exportStar || function(m3, exports2) {
      for (var p3 in m3) if (p3 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p3)) __createBinding(exports2, m3, p3);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = void 0;
    __exportStar(require_v10(), exports);
    __exportStar(require_globals(), exports);
    __exportStar(require_v102(), exports);
    __exportStar(require_v103(), exports);
    __exportStar(require_v104(), exports);
    __exportStar(require_internals(), exports);
    exports.Utils = require_v105();
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = /* @__PURE__ */ __name(function equal2(a3, b2) {
      if (a3 === b2) return true;
      if (a3 && b2 && typeof a3 == "object" && typeof b2 == "object") {
        if (a3.constructor !== b2.constructor) return false;
        var length, i3, keys;
        if (Array.isArray(a3)) {
          length = a3.length;
          if (length != b2.length) return false;
          for (i3 = length; i3-- !== 0; )
            if (!equal2(a3[i3], b2[i3])) return false;
          return true;
        }
        if (a3.constructor === RegExp) return a3.source === b2.source && a3.flags === b2.flags;
        if (a3.valueOf !== Object.prototype.valueOf) return a3.valueOf() === b2.valueOf();
        if (a3.toString !== Object.prototype.toString) return a3.toString() === b2.toString();
        keys = Object.keys(a3);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i3])) return false;
        for (i3 = length; i3-- !== 0; ) {
          var key = keys[i3];
          if (!equal2(a3[key], b2[key])) return false;
        }
        return true;
      }
      return a3 !== a3 && b2 !== b2;
    }, "equal");
  }
});

// .wrangler/tmp/bundle-IXZArt/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-IXZArt/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/bot.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/flarecord/dist/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/flarecord/dist/core/gateway.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/flarecord/dist/core/connection.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/flarecord/dist/types/constants.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GatewayOpcode;
(function(GatewayOpcode2) {
  GatewayOpcode2[GatewayOpcode2["DISPATCH"] = 0] = "DISPATCH";
  GatewayOpcode2[GatewayOpcode2["HEARTBEAT"] = 1] = "HEARTBEAT";
  GatewayOpcode2[GatewayOpcode2["IDENTIFY"] = 2] = "IDENTIFY";
  GatewayOpcode2[GatewayOpcode2["PRESENCE_UPDATE"] = 3] = "PRESENCE_UPDATE";
  GatewayOpcode2[GatewayOpcode2["VOICE_STATE_UPDATE"] = 4] = "VOICE_STATE_UPDATE";
  GatewayOpcode2[GatewayOpcode2["RESUME"] = 6] = "RESUME";
  GatewayOpcode2[GatewayOpcode2["RECONNECT"] = 7] = "RECONNECT";
  GatewayOpcode2[GatewayOpcode2["REQUEST_GUILD_MEMBERS"] = 8] = "REQUEST_GUILD_MEMBERS";
  GatewayOpcode2[GatewayOpcode2["INVALID_SESSION"] = 9] = "INVALID_SESSION";
  GatewayOpcode2[GatewayOpcode2["HELLO"] = 10] = "HELLO";
  GatewayOpcode2[GatewayOpcode2["HEARTBEAT_ACK"] = 11] = "HEARTBEAT_ACK";
})(GatewayOpcode || (GatewayOpcode = {}));
var GatewayEvent;
(function(GatewayEvent2) {
  GatewayEvent2["READY"] = "READY";
  GatewayEvent2["RESUMED"] = "RESUMED";
  GatewayEvent2["MESSAGE_CREATE"] = "MESSAGE_CREATE";
  GatewayEvent2["MESSAGE_UPDATE"] = "MESSAGE_UPDATE";
  GatewayEvent2["MESSAGE_DELETE"] = "MESSAGE_DELETE";
  GatewayEvent2["INTERACTION_CREATE"] = "INTERACTION_CREATE";
  GatewayEvent2["GUILD_CREATE"] = "GUILD_CREATE";
  GatewayEvent2["GUILD_UPDATE"] = "GUILD_UPDATE";
  GatewayEvent2["GUILD_DELETE"] = "GUILD_DELETE";
})(GatewayEvent || (GatewayEvent = {}));
var GatewayIntents;
(function(GatewayIntents2) {
  GatewayIntents2[GatewayIntents2["GUILDS"] = 1] = "GUILDS";
  GatewayIntents2[GatewayIntents2["GUILD_MEMBERS"] = 2] = "GUILD_MEMBERS";
  GatewayIntents2[GatewayIntents2["GUILD_MODERATION"] = 4] = "GUILD_MODERATION";
  GatewayIntents2[GatewayIntents2["GUILD_EMOJIS_AND_STICKERS"] = 8] = "GUILD_EMOJIS_AND_STICKERS";
  GatewayIntents2[GatewayIntents2["GUILD_INTEGRATIONS"] = 16] = "GUILD_INTEGRATIONS";
  GatewayIntents2[GatewayIntents2["GUILD_WEBHOOKS"] = 32] = "GUILD_WEBHOOKS";
  GatewayIntents2[GatewayIntents2["GUILD_INVITES"] = 64] = "GUILD_INVITES";
  GatewayIntents2[GatewayIntents2["GUILD_VOICE_STATES"] = 128] = "GUILD_VOICE_STATES";
  GatewayIntents2[GatewayIntents2["GUILD_PRESENCES"] = 256] = "GUILD_PRESENCES";
  GatewayIntents2[GatewayIntents2["GUILD_MESSAGES"] = 512] = "GUILD_MESSAGES";
  GatewayIntents2[GatewayIntents2["GUILD_MESSAGE_REACTIONS"] = 1024] = "GUILD_MESSAGE_REACTIONS";
  GatewayIntents2[GatewayIntents2["GUILD_MESSAGE_TYPING"] = 2048] = "GUILD_MESSAGE_TYPING";
  GatewayIntents2[GatewayIntents2["DIRECT_MESSAGES"] = 4096] = "DIRECT_MESSAGES";
  GatewayIntents2[GatewayIntents2["DIRECT_MESSAGE_REACTIONS"] = 8192] = "DIRECT_MESSAGE_REACTIONS";
  GatewayIntents2[GatewayIntents2["DIRECT_MESSAGE_TYPING"] = 16384] = "DIRECT_MESSAGE_TYPING";
  GatewayIntents2[GatewayIntents2["MESSAGE_CONTENT"] = 32768] = "MESSAGE_CONTENT";
  GatewayIntents2[GatewayIntents2["GUILD_SCHEDULED_EVENTS"] = 65536] = "GUILD_SCHEDULED_EVENTS";
  GatewayIntents2[GatewayIntents2["AUTO_MODERATION_CONFIGURATION"] = 1048576] = "AUTO_MODERATION_CONFIGURATION";
  GatewayIntents2[GatewayIntents2["AUTO_MODERATION_EXECUTION"] = 2097152] = "AUTO_MODERATION_EXECUTION";
  GatewayIntents2[GatewayIntents2["GUILD_MESSAGE_POLLS"] = 16777216] = "GUILD_MESSAGE_POLLS";
  GatewayIntents2[GatewayIntents2["DIRECT_MESSAGE_POLLS"] = 33554432] = "DIRECT_MESSAGE_POLLS";
})(GatewayIntents || (GatewayIntents = {}));
var WebSocketCloseCode;
(function(WebSocketCloseCode2) {
  WebSocketCloseCode2[WebSocketCloseCode2["NORMAL_CLOSURE"] = 1e3] = "NORMAL_CLOSURE";
  WebSocketCloseCode2[WebSocketCloseCode2["GOING_AWAY"] = 1001] = "GOING_AWAY";
  WebSocketCloseCode2[WebSocketCloseCode2["PROTOCOL_ERROR"] = 1002] = "PROTOCOL_ERROR";
  WebSocketCloseCode2[WebSocketCloseCode2["UNSUPPORTED_DATA"] = 1003] = "UNSUPPORTED_DATA";
  WebSocketCloseCode2[WebSocketCloseCode2["NO_STATUS_RECEIVED"] = 1005] = "NO_STATUS_RECEIVED";
  WebSocketCloseCode2[WebSocketCloseCode2["ABNORMAL_CLOSURE"] = 1006] = "ABNORMAL_CLOSURE";
  WebSocketCloseCode2[WebSocketCloseCode2["INVALID_FRAME_PAYLOAD"] = 1007] = "INVALID_FRAME_PAYLOAD";
  WebSocketCloseCode2[WebSocketCloseCode2["POLICY_VIOLATION"] = 1008] = "POLICY_VIOLATION";
  WebSocketCloseCode2[WebSocketCloseCode2["MESSAGE_TOO_BIG"] = 1009] = "MESSAGE_TOO_BIG";
  WebSocketCloseCode2[WebSocketCloseCode2["MISSING_EXTENSION"] = 1010] = "MISSING_EXTENSION";
  WebSocketCloseCode2[WebSocketCloseCode2["INTERNAL_ERROR"] = 1011] = "INTERNAL_ERROR";
  WebSocketCloseCode2[WebSocketCloseCode2["SERVICE_RESTART"] = 1012] = "SERVICE_RESTART";
  WebSocketCloseCode2[WebSocketCloseCode2["TRY_AGAIN_LATER"] = 1013] = "TRY_AGAIN_LATER";
  WebSocketCloseCode2[WebSocketCloseCode2["BAD_GATEWAY"] = 1014] = "BAD_GATEWAY";
  WebSocketCloseCode2[WebSocketCloseCode2["TLS_HANDSHAKE"] = 1015] = "TLS_HANDSHAKE";
  WebSocketCloseCode2[WebSocketCloseCode2["UNAUTHENTICATED"] = 4e3] = "UNAUTHENTICATED";
  WebSocketCloseCode2[WebSocketCloseCode2["INVALID_API_VERSION"] = 4001] = "INVALID_API_VERSION";
  WebSocketCloseCode2[WebSocketCloseCode2["INVALID_INTENTS"] = 4002] = "INVALID_INTENTS";
  WebSocketCloseCode2[WebSocketCloseCode2["DISALLOWED_INTENTS"] = 4003] = "DISALLOWED_INTENTS";
})(WebSocketCloseCode || (WebSocketCloseCode = {}));
var RESUMEABLE_CLOSE_CODES = [
  WebSocketCloseCode.NORMAL_CLOSURE,
  WebSocketCloseCode.GOING_AWAY,
  WebSocketCloseCode.ABNORMAL_CLOSURE,
  WebSocketCloseCode.NO_STATUS_RECEIVED
];
var GATEWAY_BASE_URL = "https://discord.com/api/v10/gateway/bot";
var WEBSOCKET_READY_STATE_OPEN = 1;
var DEFAULT_STORAGE_KEY = "gatewayState";
var DEFAULT_MAX_RECONNECT_ATTEMPTS = 5;
var DEFAULT_RECONNECT_DELAYS = {
  initial: 1e3,
  max: 6e4,
  backoffMultiplier: 2
};

// node_modules/flarecord/dist/utils/websocket.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var WebSocketManager = class {
  static {
    __name(this, "WebSocketManager");
  }
  _ws = null;
  get ws() {
    return this._ws;
  }
  async connect(gatewayUrl) {
    const response = await fetch(gatewayUrl, {
      headers: { Upgrade: "websocket" }
    });
    const wsResponse = response;
    if (!wsResponse.webSocket) {
      throw new Error("Server did not accept WebSocket connection");
    }
    this._ws = wsResponse.webSocket;
    this._ws.accept();
  }
  setupEventListeners(onMessage, onClose, onError) {
    if (!this._ws) {
      return;
    }
    this._ws.addEventListener("message", (event) => {
      onMessage(event.data);
    });
    this._ws.addEventListener("close", (event) => {
      onClose(event.code, event.reason);
    });
    this._ws.addEventListener("error", () => {
      onError(new Error("WebSocket error"));
    });
  }
  send(payload) {
    if (!this._ws) {
      throw new Error("WebSocket not connected");
    }
    try {
      this._ws.send(JSON.stringify(payload));
    } catch (error3) {
      throw new Error(`Failed to send payload: ${error3 instanceof Error ? error3.message : "Unknown error"}`);
    }
  }
  close() {
    if (this._ws) {
      try {
        this._ws.close();
      } catch (error3) {
      }
      this._ws = null;
    }
  }
  decodeMessage(data) {
    if (typeof data === "string") {
      return data;
    }
    if (data instanceof ArrayBuffer) {
      return new TextDecoder().decode(data);
    }
    const view = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    return new TextDecoder().decode(view);
  }
};

// node_modules/flarecord/dist/core/handlers.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GatewayHandlers = class {
  static {
    __name(this, "GatewayHandlers");
  }
  ctx;
  storageKey;
  sequence;
  onReady;
  onMessage;
  onDispatch;
  logger;
  constructor(ctx, storageKey, sequence, onReady, onMessage, onDispatch, logger) {
    this.ctx = ctx;
    this.storageKey = storageKey;
    this.sequence = sequence;
    this.onReady = onReady;
    this.onMessage = onMessage;
    this.onDispatch = onDispatch;
    this.logger = logger;
  }
  async handleHello(data) {
    this.logger.debug("Handling HELLO", { heartbeatInterval: data.heartbeat_interval });
    const state = await this.getState();
    await this.ctx.storage.put(this.storageKey, {
      heartbeatInterval: data.heartbeat_interval,
      sequence: this.sequence.value,
      sessionId: state?.sessionId ?? null,
      reconnectAttempts: 0,
      shouldResume: state?.sessionId !== null && state?.sessionId !== void 0
    });
  }
  async handleReady(data) {
    this.logger.info("Bot ready", { userId: data.user.id, username: data.user.username });
    const state = await this.getState();
    if (state) {
      await this.ctx.storage.put(this.storageKey, {
        ...state,
        sessionId: data.session_id,
        shouldResume: true,
        reconnectAttempts: 0
      });
    }
    this.onReady(data);
  }
  handleResumed() {
    this.logger.info("Session resumed");
    this.ctx.storage.get(this.storageKey).then((state) => {
      const gatewayState = this.validateState(state);
      if (gatewayState) {
        this.ctx.storage.put(this.storageKey, {
          ...gatewayState,
          reconnectAttempts: 0
        });
      }
    });
  }
  handleDispatch(payload) {
    if (payload.s !== null && payload.s !== void 0) {
      this.sequence.value = payload.s;
      this.updateSequenceInStorage();
    }
    if (!payload.t) {
      return;
    }
    const event = payload.t;
    if (event === GatewayEvent.READY) {
      this.handleReady(payload.d);
    } else if (event === GatewayEvent.MESSAGE_CREATE) {
      this.handleMessageCreate(payload);
    } else if (event === GatewayEvent.RESUMED) {
      this.handleResumed();
    }
    if (this.onDispatch) {
      this.onDispatch(event, payload.d);
    }
  }
  handleMessageCreate(payload) {
    const messageData = payload.d;
    const opcodeName = this.getOpcodeName(payload.op);
    const enrichedMessage = {
      ...messageData,
      _gatewayMetadata: {
        opcode: payload.op,
        opcodeName,
        event: payload.t ?? "UNKNOWN",
        sequence: payload.s ?? null
      }
    };
    this.onMessage(enrichedMessage);
  }
  getOpcodeName(opcode) {
    const entry = Object.entries(GatewayOpcode).find(([, value]) => value === opcode);
    return entry?.[0] ?? "UNKNOWN";
  }
  async getState() {
    const state = await this.ctx.storage.get(this.storageKey);
    return this.validateState(state);
  }
  validateState(state) {
    if (state === null || state === void 0) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state;
    }
    return null;
  }
  updateSequenceInStorage() {
    this.ctx.storage.get(this.storageKey).then((state) => {
      const gatewayState = this.validateState(state);
      if (gatewayState) {
        this.ctx.storage.put(this.storageKey, {
          ...gatewayState,
          sequence: this.sequence.value
        });
      }
    });
  }
};

// node_modules/flarecord/dist/utils/reconnect.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ReconnectManager = class {
  static {
    __name(this, "ReconnectManager");
  }
  reconnectAttempts = 0;
  maxReconnectAttempts;
  isReconnecting = false;
  reconnectDelays;
  constructor(maxReconnectAttempts = 5, reconnectDelays = DEFAULT_RECONNECT_DELAYS) {
    this.maxReconnectAttempts = maxReconnectAttempts;
    this.reconnectDelays = reconnectDelays;
  }
  async scheduleReconnect(connectFn) {
    if (this.isReconnecting || this.reconnectAttempts >= this.maxReconnectAttempts) {
      return;
    }
    this.isReconnecting = true;
    const delay = this.calculateDelay();
    await new Promise((resolve) => setTimeout(resolve, delay));
    this.reconnectAttempts++;
    this.isReconnecting = false;
    await connectFn();
  }
  async reconnect(shouldResume, ctx, storageKey, connectFn, closeFn) {
    if (this.isReconnecting) {
      return;
    }
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      throw new Error("Max reconnect attempts reached");
    }
    this.isReconnecting = true;
    await ctx.storage.deleteAlarm().catch(() => {
    });
    closeFn();
    const state = await this.getState(ctx, storageKey);
    if (state) {
      await ctx.storage.put(storageKey, {
        ...state,
        shouldResume: shouldResume && state.sessionId !== null,
        reconnectAttempts: this.reconnectAttempts + 1
      });
    }
    const delay = this.calculateDelay();
    await new Promise((resolve) => setTimeout(resolve, delay));
    this.reconnectAttempts++;
    this.isReconnecting = false;
    await connectFn();
  }
  reset() {
    this.reconnectAttempts = 0;
    this.isReconnecting = false;
  }
  calculateDelay() {
    return Math.min(this.reconnectDelays.initial * Math.pow(this.reconnectDelays.backoffMultiplier, this.reconnectAttempts), this.reconnectDelays.max);
  }
  async getState(ctx, storageKey) {
    const state = await ctx.storage.get(storageKey);
    return this.validateState(state);
  }
  validateState(state) {
    if (state === null || state === void 0) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state;
    }
    return null;
  }
};

// node_modules/flarecord/dist/utils/session.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SessionManager = class {
  static {
    __name(this, "SessionManager");
  }
  token;
  ctx;
  storageKey;
  identifyProperties;
  sendFn;
  constructor(token, ctx, storageKey, identifyProperties, sendFn) {
    this.token = token;
    this.ctx = ctx;
    this.storageKey = storageKey;
    this.identifyProperties = identifyProperties;
    this.sendFn = sendFn;
  }
  async getResumeData() {
    const state = await this.getState();
    if (state?.sessionId && state.sequence !== null) {
      return { sessionId: state.sessionId, sequence: state.sequence };
    }
    return null;
  }
  sendResume(sessionId, sequence) {
    const resume = {
      op: GatewayOpcode.RESUME,
      d: {
        token: this.token,
        session_id: sessionId,
        seq: sequence
      }
    };
    this.sendFn(resume);
  }
  sendIdentify(intents) {
    const identify = {
      op: GatewayOpcode.IDENTIFY,
      d: {
        token: this.token,
        properties: this.identifyProperties,
        intents
      }
    };
    this.sendFn(identify);
  }
  async getState() {
    const state = await this.ctx.storage.get(this.storageKey);
    return this.validateState(state);
  }
  validateState(state) {
    if (state === null || state === void 0) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state;
    }
    return null;
  }
};

// node_modules/flarecord/dist/core/heartbeat.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HeartbeatManager = class {
  static {
    __name(this, "HeartbeatManager");
  }
  ctx;
  storageKey;
  sendFn;
  heartbeatInterval = null;
  sequence;
  constructor(ctx, storageKey, sequence, sendFn) {
    this.ctx = ctx;
    this.storageKey = storageKey;
    this.sendFn = sendFn;
    this.sequence = sequence;
  }
  setInterval(interval) {
    this.heartbeatInterval = interval;
  }
  async send() {
    if (!this.heartbeatInterval) {
      return;
    }
    const heartbeat = {
      op: GatewayOpcode.HEARTBEAT,
      d: this.sequence.value
    };
    this.sendFn(heartbeat);
    const nextHeartbeat = Date.now() + this.heartbeatInterval;
    await this.ctx.storage.setAlarm(nextHeartbeat);
  }
  async cancel() {
    await this.ctx.storage.deleteAlarm().catch(() => {
    });
  }
  async updateAck() {
    const state = await this.getState();
    if (state) {
      await this.ctx.storage.put(this.storageKey, {
        ...state,
        lastHeartbeatAck: Date.now()
      });
    }
  }
  async getState() {
    const state = await this.ctx.storage.get(this.storageKey);
    return this.validateState(state);
  }
  validateState(state) {
    if (state === null || state === void 0) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state;
    }
    return null;
  }
};

// node_modules/flarecord/dist/core/message-handler.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MessageHandler = class {
  static {
    __name(this, "MessageHandler");
  }
  handlers;
  sessionManager;
  heartbeatManager;
  reconnectFn;
  ctx;
  storageKey;
  intents;
  logger;
  constructor(handlers, sessionManager, heartbeatManager, reconnectFn, ctx, storageKey, intents, logger) {
    this.handlers = handlers;
    this.sessionManager = sessionManager;
    this.heartbeatManager = heartbeatManager;
    this.reconnectFn = reconnectFn;
    this.ctx = ctx;
    this.storageKey = storageKey;
    this.intents = intents;
    this.logger = logger;
  }
  async handle(payload) {
    const opcode = payload.op;
    if (opcode === GatewayOpcode.HELLO) {
      await this.handleHello(payload.d);
    } else if (opcode === GatewayOpcode.HEARTBEAT_ACK) {
      await this.heartbeatManager.updateAck();
    } else if (opcode === GatewayOpcode.DISPATCH) {
      this.handlers.handleDispatch(payload);
    } else if (opcode === GatewayOpcode.RECONNECT) {
      this.logger.warn("Received RECONNECT opcode");
      await this.reconnectFn(true);
    } else if (opcode === GatewayOpcode.INVALID_SESSION) {
      await this.handleInvalidSession(payload.d);
    } else {
      this.logger.warn("Unknown opcode received", { opcode });
    }
  }
  async handleHello(data) {
    this.logger.debug("Handling HELLO", { heartbeatInterval: data.heartbeat_interval });
    this.heartbeatManager.setInterval(data.heartbeat_interval);
    await this.handlers.handleHello(data);
    const resumeData = await this.sessionManager.getResumeData();
    const state = await this.getState();
    if (resumeData && state?.shouldResume) {
      this.logger.debug("Resuming session", { sessionId: resumeData.sessionId });
      this.sessionManager.sendResume(resumeData.sessionId, resumeData.sequence);
    } else {
      this.logger.debug("Identifying with new session");
      this.sessionManager.sendIdentify(this.intents);
    }
    await this.heartbeatManager.send();
  }
  async handleInvalidSession(resumable) {
    this.logger.warn("Invalid session", { resumable });
    if (resumable) {
      await this.reconnectFn(true);
    } else {
      const state = await this.getState();
      if (state) {
        await this.ctx.storage.put(this.storageKey, {
          ...state,
          shouldResume: false,
          sessionId: null
        });
      }
      await this.reconnectFn(false);
    }
  }
  shouldResume(code) {
    const isResumable = RESUMEABLE_CLOSE_CODES.includes(code);
    this.logger.debug("Checking if should resume", { code, isResumable });
    return isResumable;
  }
  async getState() {
    const state = await this.ctx.storage.get(this.storageKey);
    if (state === null || state === void 0) {
      return null;
    }
    if (typeof state === "object" && "heartbeatInterval" in state) {
      return state;
    }
    return null;
  }
};

// node_modules/flarecord/dist/utils/logger.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["INFO"] = 1] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 2] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 3] = "ERROR";
  LogLevel2[LogLevel2["NONE"] = 4] = "NONE";
})(LogLevel || (LogLevel = {}));
var Logger = class {
  static {
    __name(this, "Logger");
  }
  level;
  prefix;
  constructor(config2 = { level: LogLevel.INFO }) {
    this.level = config2.level;
    this.prefix = config2.prefix || "[flarecord]";
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
  error(message, error3, ...args) {
    if (this.level <= LogLevel.ERROR) {
      const errorDetails = error3 instanceof Error ? error3.stack : error3;
      console.error(`${this.prefix} [ERROR] ${message}`, errorDetails, ...args);
    }
  }
  setLevel(level) {
    this.level = level;
  }
};
var createLogger = /* @__PURE__ */ __name((config2) => {
  return new Logger(config2);
}, "createLogger");

// node_modules/flarecord/dist/core/connection.js
var GatewayConnection = class {
  static {
    __name(this, "GatewayConnection");
  }
  wsManager;
  token;
  ctx;
  storageKey;
  sequence = { value: null };
  handlers;
  reconnectManager;
  sessionManager;
  heartbeatManager;
  messageHandler;
  onDispatch;
  logger;
  isShuttingDown = false;
  onReadyCallback = null;
  onMessageCallback = null;
  onErrorCallback = null;
  constructor(token, intents, ctx, config2) {
    this.token = token;
    this.ctx = ctx;
    this.storageKey = config2.storageKey;
    this.onDispatch = config2.onDispatch;
    this.logger = config2.logger || createLogger({
      level: config2.debug ? LogLevel.DEBUG : LogLevel.INFO
    });
    this.wsManager = new WebSocketManager();
    this.reconnectManager = new ReconnectManager(config2.maxReconnectAttempts, config2.reconnectDelays);
    this.sessionManager = new SessionManager(token, ctx, this.storageKey, config2.identifyProperties, (p3) => this.wsManager.send(p3));
    this.heartbeatManager = new HeartbeatManager(ctx, this.storageKey, this.sequence, (p3) => this.wsManager.send(p3));
    this.handlers = new GatewayHandlers(ctx, this.storageKey, this.sequence, (data) => this.onReadyCallback?.(data), (data) => this.onMessageCallback?.(data), this.onDispatch, this.logger);
    this.messageHandler = new MessageHandler(this.handlers, this.sessionManager, this.heartbeatManager, (shouldResume) => this.reconnect(shouldResume), ctx, this.storageKey, intents, this.logger);
  }
  get ws() {
    return this.wsManager.ws;
  }
  get isConnected() {
    return this.wsManager.ws?.readyState === WEBSOCKET_READY_STATE_OPEN;
  }
  async connect() {
    if (this.isShuttingDown) {
      this.logger.warn("Connection attempt blocked: shutdown in progress");
      return;
    }
    try {
      this.logger.debug("Fetching gateway URL");
      const gatewayUrl = await this.getGatewayUrl();
      this.logger.debug("Connecting to gateway", { url: gatewayUrl });
      await this.wsManager.connect(gatewayUrl);
      this.wsManager.setupEventListeners((data) => this.handleMessage(data), async (code, reason) => await this.handleClose(code, reason), (error3) => this.handleWebSocketError(error3));
      this.reconnectManager.reset();
      this.logger.info("Gateway connection established");
    } catch (error3) {
      const err = error3 instanceof Error ? error3 : new Error("Connection failed");
      this.logger.error("Failed to connect to gateway", err);
      this.onErrorCallback?.(err);
      if (!this.isShuttingDown) {
        await this.reconnectManager.scheduleReconnect(() => this.connect());
      }
    }
  }
  async getGatewayUrl() {
    const response = await fetch(GATEWAY_BASE_URL, {
      headers: { Authorization: `Bot ${this.token}` }
    });
    if (!response.ok) {
      throw new Error(`Failed to get Gateway URL: ${response.status}`);
    }
    const data = await response.json();
    const wsUrl = data.url.replace(/^wss:/, "https:");
    return `${wsUrl}?v=10&encoding=json`;
  }
  async handleMessage(data) {
    try {
      const text = this.wsManager.decodeMessage(data);
      const payload = JSON.parse(text);
      this.logger.debug("Received gateway payload", { op: payload.op, t: payload.t });
      await this.messageHandler.handle(payload);
    } catch (error3) {
      const err = error3 instanceof Error ? error3 : new Error("Message handling failed");
      this.logger.error("Error handling gateway message", err);
      this.onErrorCallback?.(err);
    }
  }
  async handleClose(code, reason) {
    this.logger.warn("WebSocket closed", { code, reason });
    await this.heartbeatManager.cancel();
    if (this.isShuttingDown) {
      this.logger.debug("Shutdown in progress, not reconnecting");
      return;
    }
    const shouldResume = this.messageHandler.shouldResume(code);
    this.logger.debug("Determining reconnect strategy", { shouldResume, code });
    await this.reconnect(shouldResume);
  }
  handleWebSocketError(error3) {
    this.logger.error("WebSocket error", error3);
    this.onErrorCallback?.(error3);
    if (!this.isShuttingDown && !this.isConnected) {
      this.logger.debug("Scheduling reconnect due to WebSocket error");
      this.reconnectManager.scheduleReconnect(() => this.connect()).catch((err) => {
        this.logger.error("Failed to schedule reconnect", err);
      });
    }
  }
  async reconnect(shouldResume) {
    if (this.isShuttingDown) {
      this.logger.debug("Reconnect blocked: shutdown in progress");
      return;
    }
    try {
      await this.reconnectManager.reconnect(shouldResume, this.ctx, this.storageKey, () => this.connect(), () => {
        this.logger.debug("Closing WebSocket connection");
        this.wsManager.close();
      });
    } catch (error3) {
      const err = error3 instanceof Error ? error3 : new Error("Reconnect failed");
      this.logger.error("Reconnection failed", err);
      this.onErrorCallback?.(err);
    }
  }
  async disconnect() {
    this.logger.info("Disconnecting from gateway");
    this.isShuttingDown = true;
    await this.heartbeatManager.cancel();
    this.wsManager.close();
    this.reconnectManager.reset();
  }
  onReady(callback) {
    this.onReadyCallback = callback;
  }
  onMessage(callback) {
    this.onMessageCallback = callback;
  }
  onError(callback) {
    this.onErrorCallback = callback;
  }
  async sendHeartbeat() {
    if (!this.isConnected) {
      await this.heartbeatManager.cancel();
      return;
    }
    await this.heartbeatManager.send();
  }
};

// node_modules/flarecord/dist/types/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_IDENTIFY_PROPERTIES = {
  os: "cloudflare-workers",
  browser: "discord-gateway",
  device: "discord-gateway"
};

// node_modules/flarecord/dist/core/gateway.js
var DiscordGateway = class {
  static {
    __name(this, "DiscordGateway");
  }
  connection;
  constructor(token, intents, ctx, config2) {
    const storageKey = config2?.storageKey || DEFAULT_STORAGE_KEY;
    const identifyProperties = config2?.identifyProperties || DEFAULT_IDENTIFY_PROPERTIES;
    const maxReconnectAttempts = config2?.maxReconnectAttempts || DEFAULT_MAX_RECONNECT_ATTEMPTS;
    const reconnectDelays = config2?.reconnectDelays || DEFAULT_RECONNECT_DELAYS;
    const logger = config2?.logger || createLogger({
      level: config2?.debug ? LogLevel.DEBUG : LogLevel.INFO
    });
    this.connection = new GatewayConnection(token, intents, ctx, {
      storageKey,
      identifyProperties,
      maxReconnectAttempts,
      reconnectDelays,
      onDispatch: config2?.onDispatch,
      logger,
      debug: config2?.debug
    });
  }
  get ws() {
    return this.connection.ws;
  }
  get isConnected() {
    return this.connection.isConnected;
  }
  async connect() {
    await this.connection.connect();
  }
  async disconnect() {
    await this.connection.disconnect();
  }
  async sendHeartbeat() {
    await this.connection.sendHeartbeat();
  }
  onReady(callback) {
    this.connection.onReady(callback);
  }
  onMessage(callback) {
    this.connection.onMessage(callback);
  }
  onError(callback) {
    this.connection.onError(callback);
  }
};

// node_modules/flarecord/dist/core/client.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DiscordClient = class {
  static {
    __name(this, "DiscordClient");
  }
  ctx;
  gateway = null;
  initialized = false;
  options;
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
  }
  getGateway() {
    return this.gateway;
  }
  isConnected() {
    return this.gateway?.isConnected ?? false;
  }
  getToken() {
    return this.options.token;
  }
  async fetch(_request) {
    if (!this.initialized) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      await this.initialize();
      this.initialized = true;
    }
    return new Response("Bot is running!", {
      headers: { "Content-Type": "text/plain" }
    });
  }
  async alarm() {
    if (this.gateway?.isConnected) {
      await this.gateway.sendHeartbeat();
    }
  }
  async initialize() {
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.gateway = new DiscordGateway(this.options.token, this.options.intents, this.ctx, {
      storageKey: this.options.storageKey || "gatewayState",
      onDispatch: /* @__PURE__ */ __name((event, data) => {
        this.options.onDispatch?.(event, data);
      }, "onDispatch")
    });
    this.gateway.onReady((data) => {
      this.options.onReady?.(data);
    });
    this.gateway.onMessage((data) => {
      this.options.onMessage?.(data);
    });
    this.gateway.onError((error3) => {
      this.options.onError?.(error3);
    });
    try {
      await this.gateway.connect();
    } catch (error3) {
      this.options.onError?.(error3 instanceof Error ? error3 : new Error("Failed to connect"));
    }
  }
};

// node_modules/flarecord/dist/utils/message-helper.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/bot.ts
import { DurableObject } from "cloudflare:workers";

// src/interaction-helper.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var InteractionHelper = class {
  static {
    __name(this, "InteractionHelper");
  }
  token;
  baseUrl = "https://discord.com/api/v10";
  constructor(token) {
    this.token = token;
  }
  async respond(interactionId, interactionToken, data) {
    const url = `${this.baseUrl}/interactions/${interactionId}/${interactionToken}/callback`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bot ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }
  async followUp(interactionToken, data) {
    const url = `${this.baseUrl}/webhooks/@me/${interactionToken}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bot ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  }
  async registerCommands(applicationId, commands2, guildId) {
    const url = guildId ? `${this.baseUrl}/applications/${applicationId}/guilds/${guildId}/commands` : `${this.baseUrl}/applications/${applicationId}/commands`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bot ${this.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commands2)
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Discord API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }
    return response.json();
  }
};

// src/handlers/interaction-handler.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/commands/index.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/commands/ping.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@discordjs/builders/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@sapphire/shapeshift/dist/esm/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_get = __toESM(require_get(), 1);
var import_es6 = __toESM(require_es6(), 1);
var import_uniqWith = __toESM(require_uniqWith(), 1);
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var e;
var t;
var n;
var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
var o = e = {};
function i() {
  throw new Error("setTimeout has not been defined");
}
__name(i, "i");
__name2(i, "i");
function u() {
  throw new Error("clearTimeout has not been defined");
}
__name(u, "u");
__name2(u, "u");
function c(e3) {
  if (t === setTimeout)
    return setTimeout(e3, 0);
  if ((t === i || !t) && setTimeout)
    return t = setTimeout, setTimeout(e3, 0);
  try {
    return t(e3, 0);
  } catch (n3) {
    try {
      return t.call(null, e3, 0);
    } catch (n4) {
      return t.call(this || r, e3, 0);
    }
  }
}
__name(c, "c");
__name2(c, "c");
!(function() {
  try {
    t = "function" == typeof setTimeout ? setTimeout : i;
  } catch (e3) {
    t = i;
  }
  try {
    n = "function" == typeof clearTimeout ? clearTimeout : u;
  } catch (e3) {
    n = u;
  }
})();
var l;
var s = [];
var f = false;
var a = -1;
function h() {
  f && l && (f = false, l.length ? s = l.concat(s) : a = -1, s.length && d());
}
__name(h, "h");
__name2(h, "h");
function d() {
  if (!f) {
    var e3 = c(h);
    f = true;
    for (var t3 = s.length; t3; ) {
      for (l = s, s = []; ++a < t3; )
        l && l[a].run();
      a = -1, t3 = s.length;
    }
    l = null, f = false, (function(e4) {
      if (n === clearTimeout)
        return clearTimeout(e4);
      if ((n === u || !n) && clearTimeout)
        return n = clearTimeout, clearTimeout(e4);
      try {
        n(e4);
      } catch (t4) {
        try {
          return n.call(null, e4);
        } catch (t5) {
          return n.call(this || r, e4);
        }
      }
    })(e3);
  }
}
__name(d, "d");
__name2(d, "d");
function m(e3, t3) {
  (this || r).fun = e3, (this || r).array = t3;
}
__name(m, "m");
__name2(m, "m");
function p() {
}
__name(p, "p");
__name2(p, "p");
o.nextTick = function(e3) {
  var t3 = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n3 = 1; n3 < arguments.length; n3++)
      t3[n3 - 1] = arguments[n3];
  s.push(new m(e3, t3)), 1 !== s.length || f || c(d);
}, m.prototype.run = function() {
  (this || r).fun.apply(null, (this || r).array);
}, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = p, o.addListener = p, o.once = p, o.off = p, o.removeListener = p, o.removeAllListeners = p, o.emit = p, o.prependListener = p, o.prependOnceListener = p, o.listeners = function(e3) {
  return [];
}, o.binding = function(e3) {
  throw new Error("process.binding is not supported");
}, o.cwd = function() {
  return "/";
}, o.chdir = function(e3) {
  throw new Error("process.chdir is not supported");
}, o.umask = function() {
  return 0;
};
var T = e;
T.addListener;
T.argv;
T.binding;
T.browser;
T.chdir;
T.cwd;
T.emit;
T.env;
T.listeners;
T.nextTick;
T.off;
T.on;
T.once;
T.prependListener;
T.prependOnceListener;
T.removeAllListeners;
T.removeListener;
T.title;
T.umask;
T.version;
T.versions;
var t2 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
var e2 = Object.prototype.toString;
var o2 = /* @__PURE__ */ __name2(function(o3) {
  return !(t2 && o3 && "object" == typeof o3 && Symbol.toStringTag in o3) && "[object Arguments]" === e2.call(o3);
}, "o");
var n2 = /* @__PURE__ */ __name2(function(t3) {
  return !!o2(t3) || null !== t3 && "object" == typeof t3 && "number" == typeof t3.length && t3.length >= 0 && "[object Array]" !== e2.call(t3) && "[object Function]" === e2.call(t3.callee);
}, "n");
var r2 = (function() {
  return o2(arguments);
})();
o2.isLegacyArguments = n2;
var l2 = r2 ? o2 : n2;
var t$1 = Object.prototype.toString;
var o$1 = Function.prototype.toString;
var n$1 = /^\s*(?:function)?\*/;
var e$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
var r$1 = Object.getPrototypeOf;
var c2 = (function() {
  if (!e$1)
    return false;
  try {
    return Function("return function*() {}")();
  } catch (t3) {
  }
})();
var u2 = c2 ? r$1(c2) : {};
var i2 = /* @__PURE__ */ __name2(function(c3) {
  return "function" == typeof c3 && (!!n$1.test(o$1.call(c3)) || (e$1 ? r$1(c3) === u2 : "[object GeneratorFunction]" === t$1.call(c3)));
}, "i");
var t$2 = "function" == typeof Object.create ? function(t3, e3) {
  e3 && (t3.super_ = e3, t3.prototype = Object.create(e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
} : function(t3, e3) {
  if (e3) {
    t3.super_ = e3;
    var o3 = /* @__PURE__ */ __name2(function() {
    }, "o");
    o3.prototype = e3.prototype, t3.prototype = new o3(), t3.prototype.constructor = t3;
  }
};
var i$1 = /* @__PURE__ */ __name2(function(e3) {
  return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
}, "i$1");
var o$2 = {};
var u$1 = i$1;
var f2 = l2;
var a2 = i2;
function c$1(e3) {
  return e3.call.bind(e3);
}
__name(c$1, "c$1");
__name2(c$1, "c$1");
var s2 = "undefined" != typeof BigInt;
var p2 = "undefined" != typeof Symbol;
var y = p2 && void 0 !== Symbol.toStringTag;
var l$1 = "undefined" != typeof Uint8Array;
var d2 = "undefined" != typeof ArrayBuffer;
if (l$1 && y)
  var g = Object.getPrototypeOf(Uint8Array.prototype), b = c$1(Object.getOwnPropertyDescriptor(g, Symbol.toStringTag).get);
var m2 = c$1(Object.prototype.toString);
var h2 = c$1(Number.prototype.valueOf);
var j = c$1(String.prototype.valueOf);
var A = c$1(Boolean.prototype.valueOf);
if (s2)
  var w = c$1(BigInt.prototype.valueOf);
if (p2)
  var v = c$1(Symbol.prototype.valueOf);
function O(e3, t3) {
  if ("object" != typeof e3)
    return false;
  try {
    return t3(e3), true;
  } catch (e4) {
    return false;
  }
}
__name(O, "O");
__name2(O, "O");
function S(e3) {
  return l$1 && y ? void 0 !== b(e3) : B(e3) || k(e3) || E(e3) || D(e3) || U(e3) || P(e3) || x(e3) || I(e3) || M(e3) || z(e3) || F(e3);
}
__name(S, "S");
__name2(S, "S");
function B(e3) {
  return l$1 && y ? "Uint8Array" === b(e3) : "[object Uint8Array]" === m2(e3) || u$1(e3) && void 0 !== e3.buffer;
}
__name(B, "B");
__name2(B, "B");
function k(e3) {
  return l$1 && y ? "Uint8ClampedArray" === b(e3) : "[object Uint8ClampedArray]" === m2(e3);
}
__name(k, "k");
__name2(k, "k");
function E(e3) {
  return l$1 && y ? "Uint16Array" === b(e3) : "[object Uint16Array]" === m2(e3);
}
__name(E, "E");
__name2(E, "E");
function D(e3) {
  return l$1 && y ? "Uint32Array" === b(e3) : "[object Uint32Array]" === m2(e3);
}
__name(D, "D");
__name2(D, "D");
function U(e3) {
  return l$1 && y ? "Int8Array" === b(e3) : "[object Int8Array]" === m2(e3);
}
__name(U, "U");
__name2(U, "U");
function P(e3) {
  return l$1 && y ? "Int16Array" === b(e3) : "[object Int16Array]" === m2(e3);
}
__name(P, "P");
__name2(P, "P");
function x(e3) {
  return l$1 && y ? "Int32Array" === b(e3) : "[object Int32Array]" === m2(e3);
}
__name(x, "x");
__name2(x, "x");
function I(e3) {
  return l$1 && y ? "Float32Array" === b(e3) : "[object Float32Array]" === m2(e3);
}
__name(I, "I");
__name2(I, "I");
function M(e3) {
  return l$1 && y ? "Float64Array" === b(e3) : "[object Float64Array]" === m2(e3);
}
__name(M, "M");
__name2(M, "M");
function z(e3) {
  return l$1 && y ? "BigInt64Array" === b(e3) : "[object BigInt64Array]" === m2(e3);
}
__name(z, "z");
__name2(z, "z");
function F(e3) {
  return l$1 && y ? "BigUint64Array" === b(e3) : "[object BigUint64Array]" === m2(e3);
}
__name(F, "F");
__name2(F, "F");
function T2(e3) {
  return "[object Map]" === m2(e3);
}
__name(T2, "T2");
__name2(T2, "T");
function N(e3) {
  return "[object Set]" === m2(e3);
}
__name(N, "N");
__name2(N, "N");
function W(e3) {
  return "[object WeakMap]" === m2(e3);
}
__name(W, "W");
__name2(W, "W");
function $(e3) {
  return "[object WeakSet]" === m2(e3);
}
__name($, "$");
__name2($, "$");
function C(e3) {
  return "[object ArrayBuffer]" === m2(e3);
}
__name(C, "C");
__name2(C, "C");
function V(e3) {
  return "undefined" != typeof ArrayBuffer && (C.working ? C(e3) : e3 instanceof ArrayBuffer);
}
__name(V, "V");
__name2(V, "V");
function G(e3) {
  return "[object DataView]" === m2(e3);
}
__name(G, "G");
__name2(G, "G");
function R(e3) {
  return "undefined" != typeof DataView && (G.working ? G(e3) : e3 instanceof DataView);
}
__name(R, "R");
__name2(R, "R");
function J(e3) {
  return "[object SharedArrayBuffer]" === m2(e3);
}
__name(J, "J");
__name2(J, "J");
function _(e3) {
  return "undefined" != typeof SharedArrayBuffer && (J.working ? J(e3) : e3 instanceof SharedArrayBuffer);
}
__name(_, "_");
__name2(_, "_");
function H(e3) {
  return O(e3, h2);
}
__name(H, "H");
__name2(H, "H");
function Z(e3) {
  return O(e3, j);
}
__name(Z, "Z");
__name2(Z, "Z");
function q(e3) {
  return O(e3, A);
}
__name(q, "q");
__name2(q, "q");
function K(e3) {
  return s2 && O(e3, w);
}
__name(K, "K");
__name2(K, "K");
function L(e3) {
  return p2 && O(e3, v);
}
__name(L, "L");
__name2(L, "L");
o$2.isArgumentsObject = f2, o$2.isGeneratorFunction = a2, o$2.isPromise = function(e3) {
  return "undefined" != typeof Promise && e3 instanceof Promise || null !== e3 && "object" == typeof e3 && "function" == typeof e3.then && "function" == typeof e3.catch;
}, o$2.isArrayBufferView = function(e3) {
  return d2 && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : S(e3) || R(e3);
}, o$2.isTypedArray = S, o$2.isUint8Array = B, o$2.isUint8ClampedArray = k, o$2.isUint16Array = E, o$2.isUint32Array = D, o$2.isInt8Array = U, o$2.isInt16Array = P, o$2.isInt32Array = x, o$2.isFloat32Array = I, o$2.isFloat64Array = M, o$2.isBigInt64Array = z, o$2.isBigUint64Array = F, T2.working = "undefined" != typeof Map && T2(/* @__PURE__ */ new Map()), o$2.isMap = function(e3) {
  return "undefined" != typeof Map && (T2.working ? T2(e3) : e3 instanceof Map);
}, N.working = "undefined" != typeof Set && N(/* @__PURE__ */ new Set()), o$2.isSet = function(e3) {
  return "undefined" != typeof Set && (N.working ? N(e3) : e3 instanceof Set);
}, W.working = "undefined" != typeof WeakMap && W(/* @__PURE__ */ new WeakMap()), o$2.isWeakMap = function(e3) {
  return "undefined" != typeof WeakMap && (W.working ? W(e3) : e3 instanceof WeakMap);
}, $.working = "undefined" != typeof WeakSet && $(/* @__PURE__ */ new WeakSet()), o$2.isWeakSet = function(e3) {
  return $(e3);
}, C.working = "undefined" != typeof ArrayBuffer && C(new ArrayBuffer()), o$2.isArrayBuffer = V, G.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && G(new DataView(new ArrayBuffer(1), 0, 1)), o$2.isDataView = R, J.working = "undefined" != typeof SharedArrayBuffer && J(new SharedArrayBuffer()), o$2.isSharedArrayBuffer = _, o$2.isAsyncFunction = function(e3) {
  return "[object AsyncFunction]" === m2(e3);
}, o$2.isMapIterator = function(e3) {
  return "[object Map Iterator]" === m2(e3);
}, o$2.isSetIterator = function(e3) {
  return "[object Set Iterator]" === m2(e3);
}, o$2.isGeneratorObject = function(e3) {
  return "[object Generator]" === m2(e3);
}, o$2.isWebAssemblyCompiledModule = function(e3) {
  return "[object WebAssembly.Module]" === m2(e3);
}, o$2.isNumberObject = H, o$2.isStringObject = Z, o$2.isBooleanObject = q, o$2.isBigIntObject = K, o$2.isSymbolObject = L, o$2.isBoxedPrimitive = function(e3) {
  return H(e3) || Z(e3) || q(e3) || K(e3) || L(e3);
}, o$2.isAnyArrayBuffer = function(e3) {
  return l$1 && (V(e3) || _(e3));
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e3) {
  Object.defineProperty(o$2, e3, { enumerable: false, value: /* @__PURE__ */ __name(function() {
    throw new Error(e3 + " is not supported in userland");
  }, "value") });
});
var Q = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : globalThis;
var X = {};
var Y = T;
var ee = Object.getOwnPropertyDescriptors || function(e3) {
  for (var t3 = Object.keys(e3), r3 = {}, n3 = 0; n3 < t3.length; n3++)
    r3[t3[n3]] = Object.getOwnPropertyDescriptor(e3, t3[n3]);
  return r3;
};
var te = /%[sdj%]/g;
X.format = function(e3) {
  if (!ge(e3)) {
    for (var t3 = [], r3 = 0; r3 < arguments.length; r3++)
      t3.push(oe(arguments[r3]));
    return t3.join(" ");
  }
  r3 = 1;
  for (var n3 = arguments, i3 = n3.length, o3 = String(e3).replace(te, function(e4) {
    if ("%%" === e4)
      return "%";
    if (r3 >= i3)
      return e4;
    switch (e4) {
      case "%s":
        return String(n3[r3++]);
      case "%d":
        return Number(n3[r3++]);
      case "%j":
        try {
          return JSON.stringify(n3[r3++]);
        } catch (e5) {
          return "[Circular]";
        }
      default:
        return e4;
    }
  }), u3 = n3[r3]; r3 < i3; u3 = n3[++r3])
    le(u3) || !he(u3) ? o3 += " " + u3 : o3 += " " + oe(u3);
  return o3;
}, X.deprecate = function(e3, t3) {
  if (void 0 !== Y && true === Y.noDeprecation)
    return e3;
  if (void 0 === Y)
    return function() {
      return X.deprecate(e3, t3).apply(this || Q, arguments);
    };
  var r3 = false;
  return function() {
    if (!r3) {
      if (Y.throwDeprecation)
        throw new Error(t3);
      Y.traceDeprecation ? console.trace(t3) : console.error(t3), r3 = true;
    }
    return e3.apply(this || Q, arguments);
  };
};
var re = {};
var ne = /^$/;
if (Y.env.NODE_DEBUG) {
  ie = Y.env.NODE_DEBUG;
  ie = ie.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ne = new RegExp("^" + ie + "$", "i");
}
var ie;
function oe(e3, t3) {
  var r3 = { seen: [], stylize: fe };
  return arguments.length >= 3 && (r3.depth = arguments[2]), arguments.length >= 4 && (r3.colors = arguments[3]), ye(t3) ? r3.showHidden = t3 : t3 && X._extend(r3, t3), be(r3.showHidden) && (r3.showHidden = false), be(r3.depth) && (r3.depth = 2), be(r3.colors) && (r3.colors = false), be(r3.customInspect) && (r3.customInspect = true), r3.colors && (r3.stylize = ue), ae(r3, e3, r3.depth);
}
__name(oe, "oe");
__name2(oe, "oe");
function ue(e3, t3) {
  var r3 = oe.styles[t3];
  return r3 ? "\x1B[" + oe.colors[r3][0] + "m" + e3 + "\x1B[" + oe.colors[r3][1] + "m" : e3;
}
__name(ue, "ue");
__name2(ue, "ue");
function fe(e3, t3) {
  return e3;
}
__name(fe, "fe");
__name2(fe, "fe");
function ae(e3, t3, r3) {
  if (e3.customInspect && t3 && we(t3.inspect) && t3.inspect !== X.inspect && (!t3.constructor || t3.constructor.prototype !== t3)) {
    var n3 = t3.inspect(r3, e3);
    return ge(n3) || (n3 = ae(e3, n3, r3)), n3;
  }
  var i3 = (function(e4, t4) {
    if (be(t4))
      return e4.stylize("undefined", "undefined");
    if (ge(t4)) {
      var r4 = "'" + JSON.stringify(t4).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e4.stylize(r4, "string");
    }
    if (de(t4))
      return e4.stylize("" + t4, "number");
    if (ye(t4))
      return e4.stylize("" + t4, "boolean");
    if (le(t4))
      return e4.stylize("null", "null");
  })(e3, t3);
  if (i3)
    return i3;
  var o3 = Object.keys(t3), u3 = (function(e4) {
    var t4 = {};
    return e4.forEach(function(e5, r4) {
      t4[e5] = true;
    }), t4;
  })(o3);
  if (e3.showHidden && (o3 = Object.getOwnPropertyNames(t3)), Ae(t3) && (o3.indexOf("message") >= 0 || o3.indexOf("description") >= 0))
    return ce(t3);
  if (0 === o3.length) {
    if (we(t3)) {
      var f3 = t3.name ? ": " + t3.name : "";
      return e3.stylize("[Function" + f3 + "]", "special");
    }
    if (me(t3))
      return e3.stylize(RegExp.prototype.toString.call(t3), "regexp");
    if (je(t3))
      return e3.stylize(Date.prototype.toString.call(t3), "date");
    if (Ae(t3))
      return ce(t3);
  }
  var a3, c3 = "", s4 = false, p3 = ["{", "}"];
  (pe(t3) && (s4 = true, p3 = ["[", "]"]), we(t3)) && (c3 = " [Function" + (t3.name ? ": " + t3.name : "") + "]");
  return me(t3) && (c3 = " " + RegExp.prototype.toString.call(t3)), je(t3) && (c3 = " " + Date.prototype.toUTCString.call(t3)), Ae(t3) && (c3 = " " + ce(t3)), 0 !== o3.length || s4 && 0 != t3.length ? r3 < 0 ? me(t3) ? e3.stylize(RegExp.prototype.toString.call(t3), "regexp") : e3.stylize("[Object]", "special") : (e3.seen.push(t3), a3 = s4 ? (function(e4, t4, r4, n4, i4) {
    for (var o4 = [], u4 = 0, f4 = t4.length; u4 < f4; ++u4)
      ke(t4, String(u4)) ? o4.push(se(e4, t4, r4, n4, String(u4), true)) : o4.push("");
    return i4.forEach(function(i5) {
      i5.match(/^\d+$/) || o4.push(se(e4, t4, r4, n4, i5, true));
    }), o4;
  })(e3, t3, r3, u3, o3) : o3.map(function(n4) {
    return se(e3, t3, r3, u3, n4, s4);
  }), e3.seen.pop(), (function(e4, t4, r4) {
    var n4 = 0;
    if (e4.reduce(function(e5, t5) {
      return n4++, t5.indexOf("\n") >= 0 && n4++, e5 + t5.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) > 60)
      return r4[0] + ("" === t4 ? "" : t4 + "\n ") + " " + e4.join(",\n  ") + " " + r4[1];
    return r4[0] + t4 + " " + e4.join(", ") + " " + r4[1];
  })(a3, c3, p3)) : p3[0] + c3 + p3[1];
}
__name(ae, "ae");
__name2(ae, "ae");
function ce(e3) {
  return "[" + Error.prototype.toString.call(e3) + "]";
}
__name(ce, "ce");
__name2(ce, "ce");
function se(e3, t3, r3, n3, i3, o3) {
  var u3, f3, a3;
  if ((a3 = Object.getOwnPropertyDescriptor(t3, i3) || { value: t3[i3] }).get ? f3 = a3.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : a3.set && (f3 = e3.stylize("[Setter]", "special")), ke(n3, i3) || (u3 = "[" + i3 + "]"), f3 || (e3.seen.indexOf(a3.value) < 0 ? (f3 = le(r3) ? ae(e3, a3.value, null) : ae(e3, a3.value, r3 - 1)).indexOf("\n") > -1 && (f3 = o3 ? f3.split("\n").map(function(e4) {
    return "  " + e4;
  }).join("\n").substr(2) : "\n" + f3.split("\n").map(function(e4) {
    return "   " + e4;
  }).join("\n")) : f3 = e3.stylize("[Circular]", "special")), be(u3)) {
    if (o3 && i3.match(/^\d+$/))
      return f3;
    (u3 = JSON.stringify("" + i3)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u3 = u3.substr(1, u3.length - 2), u3 = e3.stylize(u3, "name")) : (u3 = u3.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u3 = e3.stylize(u3, "string"));
  }
  return u3 + ": " + f3;
}
__name(se, "se");
__name2(se, "se");
function pe(e3) {
  return Array.isArray(e3);
}
__name(pe, "pe");
__name2(pe, "pe");
function ye(e3) {
  return "boolean" == typeof e3;
}
__name(ye, "ye");
__name2(ye, "ye");
function le(e3) {
  return null === e3;
}
__name(le, "le");
__name2(le, "le");
function de(e3) {
  return "number" == typeof e3;
}
__name(de, "de");
__name2(de, "de");
function ge(e3) {
  return "string" == typeof e3;
}
__name(ge, "ge");
__name2(ge, "ge");
function be(e3) {
  return void 0 === e3;
}
__name(be, "be");
__name2(be, "be");
function me(e3) {
  return he(e3) && "[object RegExp]" === ve(e3);
}
__name(me, "me");
__name2(me, "me");
function he(e3) {
  return "object" == typeof e3 && null !== e3;
}
__name(he, "he");
__name2(he, "he");
function je(e3) {
  return he(e3) && "[object Date]" === ve(e3);
}
__name(je, "je");
__name2(je, "je");
function Ae(e3) {
  return he(e3) && ("[object Error]" === ve(e3) || e3 instanceof Error);
}
__name(Ae, "Ae");
__name2(Ae, "Ae");
function we(e3) {
  return "function" == typeof e3;
}
__name(we, "we");
__name2(we, "we");
function ve(e3) {
  return Object.prototype.toString.call(e3);
}
__name(ve, "ve");
__name2(ve, "ve");
function Oe(e3) {
  return e3 < 10 ? "0" + e3.toString(10) : e3.toString(10);
}
__name(Oe, "Oe");
__name2(Oe, "Oe");
X.debuglog = function(e3) {
  if (e3 = e3.toUpperCase(), !re[e3])
    if (ne.test(e3)) {
      var t3 = Y.pid;
      re[e3] = function() {
        var r3 = X.format.apply(X, arguments);
        console.error("%s %d: %s", e3, t3, r3);
      };
    } else
      re[e3] = function() {
      };
  return re[e3];
}, X.inspect = oe, oe.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, oe.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, X.types = o$2, X.isArray = pe, X.isBoolean = ye, X.isNull = le, X.isNullOrUndefined = function(e3) {
  return null == e3;
}, X.isNumber = de, X.isString = ge, X.isSymbol = function(e3) {
  return "symbol" == typeof e3;
}, X.isUndefined = be, X.isRegExp = me, X.types.isRegExp = me, X.isObject = he, X.isDate = je, X.types.isDate = je, X.isError = Ae, X.types.isNativeError = Ae, X.isFunction = we, X.isPrimitive = function(e3) {
  return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == typeof e3 || void 0 === e3;
}, X.isBuffer = i$1;
var Se = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Be() {
  var e3 = /* @__PURE__ */ new Date(), t3 = [Oe(e3.getHours()), Oe(e3.getMinutes()), Oe(e3.getSeconds())].join(":");
  return [e3.getDate(), Se[e3.getMonth()], t3].join(" ");
}
__name(Be, "Be");
__name2(Be, "Be");
function ke(e3, t3) {
  return Object.prototype.hasOwnProperty.call(e3, t3);
}
__name(ke, "ke");
__name2(ke, "ke");
X.log = function() {
  console.log("%s - %s", Be(), X.format.apply(X, arguments));
}, X.inherits = t$2, X._extend = function(e3, t3) {
  if (!t3 || !he(t3))
    return e3;
  for (var r3 = Object.keys(t3), n3 = r3.length; n3--; )
    e3[r3[n3]] = t3[r3[n3]];
  return e3;
};
var Ee = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function De(e3, t3) {
  if (!e3) {
    var r3 = new Error("Promise was rejected with a falsy value");
    r3.reason = e3, e3 = r3;
  }
  return t3(e3);
}
__name(De, "De");
__name2(De, "De");
X.promisify = function(e3) {
  if ("function" != typeof e3)
    throw new TypeError('The "original" argument must be of type Function');
  if (Ee && e3[Ee]) {
    var t3;
    if ("function" != typeof (t3 = e3[Ee]))
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(t3, Ee, { value: t3, enumerable: false, writable: false, configurable: true }), t3;
  }
  function t3() {
    for (var t4, r3, n3 = new Promise(function(e4, n4) {
      t4 = e4, r3 = n4;
    }), i3 = [], o3 = 0; o3 < arguments.length; o3++)
      i3.push(arguments[o3]);
    i3.push(function(e4, n4) {
      e4 ? r3(e4) : t4(n4);
    });
    try {
      e3.apply(this || Q, i3);
    } catch (e4) {
      r3(e4);
    }
    return n3;
  }
  __name(t3, "t3");
  __name2(t3, "t");
  return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Ee && Object.defineProperty(t3, Ee, { value: t3, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t3, ee(e3));
}, X.promisify.custom = Ee, X.callbackify = function(e3) {
  if ("function" != typeof e3)
    throw new TypeError('The "original" argument must be of type Function');
  function t3() {
    for (var t4 = [], r3 = 0; r3 < arguments.length; r3++)
      t4.push(arguments[r3]);
    var n3 = t4.pop();
    if ("function" != typeof n3)
      throw new TypeError("The last argument must be of type Function");
    var i3 = this || Q, o3 = /* @__PURE__ */ __name2(function() {
      return n3.apply(i3, arguments);
    }, "o");
    e3.apply(this || Q, t4).then(function(e4) {
      Y.nextTick(o3.bind(null, null, e4));
    }, function(e4) {
      Y.nextTick(De.bind(null, e4, o3));
    });
  }
  __name(t3, "t3");
  __name2(t3, "t");
  return Object.setPrototypeOf(t3, Object.getPrototypeOf(e3)), Object.defineProperties(t3, ee(e3)), t3;
};
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X.types;
X._extend;
X.callbackify;
X.debuglog;
X.deprecate;
X.format;
X.inherits;
var inspect2 = X.inspect;
X.isArray;
X.isBoolean;
X.isBuffer;
X.isDate;
X.isError;
X.isFunction;
X.isNull;
X.isNullOrUndefined;
X.isNumber;
X.isObject;
X.isPrimitive;
X.isRegExp;
X.isString;
X.isSymbol;
X.isUndefined;
X.log;
X.promisify;
X.types;
X.TextEncoder = globalThis.TextEncoder;
X.TextDecoder = globalThis.TextDecoder;
var customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
var customInspectSymbolStackLess = Symbol.for("nodejs.util.inspect.custom.stack-less");
var _BaseError = class _BaseError2 extends Error {
  static {
    __name(this, "_BaseError");
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message
    };
  }
  [customInspectSymbol](depth, options) {
    return `${this[customInspectSymbolStackLess](depth, options)}
${this.stack.slice(this.stack.indexOf("\n"))}`;
  }
};
__name2(_BaseError, "BaseError");
var BaseError = _BaseError;
var _BaseConstraintError = class _BaseConstraintError2 extends BaseError {
  static {
    __name(this, "_BaseConstraintError");
  }
  constructor(constraint, message, given) {
    super(message);
    this.constraint = constraint;
    this.given = given;
  }
  toJSON() {
    return {
      name: this.name,
      constraint: this.constraint,
      given: this.given,
      message: this.message
    };
  }
};
__name2(_BaseConstraintError, "BaseConstraintError");
var BaseConstraintError = _BaseConstraintError;
var _ExpectedConstraintError = class _ExpectedConstraintError2 extends BaseConstraintError {
  static {
    __name(this, "_ExpectedConstraintError");
  }
  constructor(constraint, message, given, expected) {
    super(constraint, message, given);
    this.expected = expected;
  }
  toJSON() {
    return {
      name: this.name,
      constraint: this.constraint,
      given: this.given,
      expected: this.expected,
      message: this.message
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const constraint = options.stylize(this.constraint, "string");
    if (depth < 0) {
      return options.stylize(`[ExpectedConstraintError: ${constraint}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("ExpectedConstraintError", "special")} > ${constraint}`;
    const message = options.stylize(this.message, "regexp");
    const expectedBlock = `
  ${options.stylize("Expected: ", "string")}${options.stylize(this.expected, "boolean")}`;
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
  }
};
__name2(_ExpectedConstraintError, "ExpectedConstraintError");
var ExpectedConstraintError = _ExpectedConstraintError;
var _Result = class _Result2 {
  static {
    __name(this, "_Result");
  }
  constructor(success, value, error3) {
    this.success = success;
    if (success) {
      this.value = value;
    } else {
      this.error = error3;
    }
  }
  isOk() {
    return this.success;
  }
  isErr() {
    return !this.success;
  }
  unwrap() {
    if (this.isOk())
      return this.value;
    throw this.error;
  }
  static ok(value) {
    return new _Result2(true, value);
  }
  static err(error3) {
    return new _Result2(false, void 0, error3);
  }
};
__name2(_Result, "Result");
var Result = _Result;
function whenConstraint(key, options, validator, validatorOptions) {
  return {
    run(input, parent) {
      if (!parent) {
        return Result.err(
          new ExpectedConstraintError(
            "s.object(T.when)",
            validatorOptions?.message ?? "Validator has no parent",
            parent,
            "Validator to have a parent"
          )
        );
      }
      const isKeyArray = Array.isArray(key);
      const value = isKeyArray ? key.map((k2) => (0, import_get.default)(parent, k2)) : (0, import_get.default)(parent, key);
      const predicate = resolveBooleanIs(options, value, isKeyArray) ? options.then : options.otherwise;
      if (predicate) {
        return predicate(validator).run(input);
      }
      return Result.ok(input);
    }
  };
}
__name(whenConstraint, "whenConstraint");
__name2(whenConstraint, "whenConstraint");
function resolveBooleanIs(options, value, isKeyArray) {
  if (options.is === void 0) {
    return isKeyArray ? !value.some((val) => !val) : Boolean(value);
  }
  if (typeof options.is === "function") {
    return options.is(value);
  }
  return value === options.is;
}
__name(resolveBooleanIs, "resolveBooleanIs");
__name2(resolveBooleanIs, "resolveBooleanIs");
var validationEnabled = true;
function setGlobalValidationEnabled(enabled) {
  validationEnabled = enabled;
}
__name(setGlobalValidationEnabled, "setGlobalValidationEnabled");
__name2(setGlobalValidationEnabled, "setGlobalValidationEnabled");
function getGlobalValidationEnabled() {
  return validationEnabled;
}
__name(getGlobalValidationEnabled, "getGlobalValidationEnabled");
__name2(getGlobalValidationEnabled, "getGlobalValidationEnabled");
function getValue(valueOrFn) {
  return typeof valueOrFn === "function" ? valueOrFn() : valueOrFn;
}
__name(getValue, "getValue");
__name2(getValue, "getValue");
var _BaseValidator = class _BaseValidator2 {
  static {
    __name(this, "_BaseValidator");
  }
  constructor(validatorOptions = {}, constraints = []) {
    this.constraints = [];
    this.isValidationEnabled = null;
    this.constraints = constraints;
    this.validatorOptions = validatorOptions;
  }
  setParent(parent) {
    this.parent = parent;
    return this;
  }
  optional(options = this.validatorOptions) {
    return new UnionValidator([new LiteralValidator(void 0, options), this.clone()], options);
  }
  nullable(options = this.validatorOptions) {
    return new UnionValidator([new LiteralValidator(null, options), this.clone()], options);
  }
  nullish(options = this.validatorOptions) {
    return new UnionValidator([new NullishValidator(options), this.clone()], options);
  }
  array(options = this.validatorOptions) {
    return new ArrayValidator(this.clone(), options);
  }
  set(options = this.validatorOptions) {
    return new SetValidator(this.clone(), options);
  }
  or(...predicates) {
    return new UnionValidator([this.clone(), ...predicates], this.validatorOptions);
  }
  transform(cb, options = this.validatorOptions) {
    return this.addConstraint(
      {
        run: /* @__PURE__ */ __name((input) => Result.ok(cb(input)), "run")
      },
      options
    );
  }
  reshape(cb, options = this.validatorOptions) {
    return this.addConstraint(
      {
        run: cb
      },
      options
    );
  }
  default(value, options = this.validatorOptions) {
    return new DefaultValidator(this.clone(), value, options);
  }
  when(key, options, validatorOptions) {
    return this.addConstraint(whenConstraint(key, options, this, validatorOptions));
  }
  describe(description) {
    const clone = this.clone();
    clone.description = description;
    return clone;
  }
  run(value) {
    let result = this.handle(value);
    if (result.isErr())
      return result;
    for (const constraint of this.constraints) {
      result = constraint.run(result.value, this.parent);
      if (result.isErr())
        break;
    }
    return result;
  }
  parse(value) {
    if (!this.shouldRunConstraints) {
      return this.handle(value).unwrap();
    }
    return this.constraints.reduce((v2, constraint) => constraint.run(v2).unwrap(), this.handle(value).unwrap());
  }
  is(value) {
    return this.run(value).isOk();
  }
  /**
   * Sets if the validator should also run constraints or just do basic checks.
   * @param isValidationEnabled Whether this validator should be enabled or disabled. You can pass boolean or a function returning boolean which will be called just before parsing.
   * Set to `null` to go off of the global configuration.
   */
  setValidationEnabled(isValidationEnabled2) {
    const clone = this.clone();
    clone.isValidationEnabled = isValidationEnabled2;
    return clone;
  }
  getValidationEnabled() {
    return getValue(this.isValidationEnabled);
  }
  get shouldRunConstraints() {
    return getValue(this.isValidationEnabled) ?? getGlobalValidationEnabled();
  }
  clone() {
    const clone = Reflect.construct(this.constructor, [this.validatorOptions, this.constraints]);
    clone.isValidationEnabled = this.isValidationEnabled;
    return clone;
  }
  addConstraint(constraint, validatorOptions = this.validatorOptions) {
    const clone = this.clone();
    clone.validatorOptions = validatorOptions;
    clone.constraints = clone.constraints.concat(constraint);
    return clone;
  }
};
__name2(_BaseValidator, "BaseValidator");
var BaseValidator = _BaseValidator;
function isUnique(input) {
  if (input.length < 2)
    return true;
  const uniqueArray2 = (0, import_uniqWith.default)(input, import_es6.default);
  return uniqueArray2.length === input.length;
}
__name(isUnique, "isUnique");
__name2(isUnique, "isUnique");
function lessThan(a3, b2) {
  return a3 < b2;
}
__name(lessThan, "lessThan");
__name2(lessThan, "lessThan");
function lessThanOrEqual(a3, b2) {
  return a3 <= b2;
}
__name(lessThanOrEqual, "lessThanOrEqual");
__name2(lessThanOrEqual, "lessThanOrEqual");
function greaterThan(a3, b2) {
  return a3 > b2;
}
__name(greaterThan, "greaterThan");
__name2(greaterThan, "greaterThan");
function greaterThanOrEqual(a3, b2) {
  return a3 >= b2;
}
__name(greaterThanOrEqual, "greaterThanOrEqual");
__name2(greaterThanOrEqual, "greaterThanOrEqual");
function equal(a3, b2) {
  return a3 === b2;
}
__name(equal, "equal");
__name2(equal, "equal");
function notEqual(a3, b2) {
  return a3 !== b2;
}
__name(notEqual, "notEqual");
__name2(notEqual, "notEqual");
function arrayLengthComparator(comparator, name, expected, length, options) {
  return {
    run(input) {
      return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Array length", input, expected));
    }
  };
}
__name(arrayLengthComparator, "arrayLengthComparator");
__name2(arrayLengthComparator, "arrayLengthComparator");
function arrayLengthLessThan(value, options) {
  const expected = `expected.length < ${value}`;
  return arrayLengthComparator(lessThan, "s.array(T).lengthLessThan()", expected, value, options);
}
__name(arrayLengthLessThan, "arrayLengthLessThan");
__name2(arrayLengthLessThan, "arrayLengthLessThan");
function arrayLengthLessThanOrEqual(value, options) {
  const expected = `expected.length <= ${value}`;
  return arrayLengthComparator(lessThanOrEqual, "s.array(T).lengthLessThanOrEqual()", expected, value, options);
}
__name(arrayLengthLessThanOrEqual, "arrayLengthLessThanOrEqual");
__name2(arrayLengthLessThanOrEqual, "arrayLengthLessThanOrEqual");
function arrayLengthGreaterThan(value, options) {
  const expected = `expected.length > ${value}`;
  return arrayLengthComparator(greaterThan, "s.array(T).lengthGreaterThan()", expected, value, options);
}
__name(arrayLengthGreaterThan, "arrayLengthGreaterThan");
__name2(arrayLengthGreaterThan, "arrayLengthGreaterThan");
function arrayLengthGreaterThanOrEqual(value, options) {
  const expected = `expected.length >= ${value}`;
  return arrayLengthComparator(greaterThanOrEqual, "s.array(T).lengthGreaterThanOrEqual()", expected, value, options);
}
__name(arrayLengthGreaterThanOrEqual, "arrayLengthGreaterThanOrEqual");
__name2(arrayLengthGreaterThanOrEqual, "arrayLengthGreaterThanOrEqual");
function arrayLengthEqual(value, options) {
  const expected = `expected.length === ${value}`;
  return arrayLengthComparator(equal, "s.array(T).lengthEqual()", expected, value, options);
}
__name(arrayLengthEqual, "arrayLengthEqual");
__name2(arrayLengthEqual, "arrayLengthEqual");
function arrayLengthNotEqual(value, options) {
  const expected = `expected.length !== ${value}`;
  return arrayLengthComparator(notEqual, "s.array(T).lengthNotEqual()", expected, value, options);
}
__name(arrayLengthNotEqual, "arrayLengthNotEqual");
__name2(arrayLengthNotEqual, "arrayLengthNotEqual");
function arrayLengthRange(start, endBefore, options) {
  const expected = `expected.length >= ${start} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length >= start && input.length < endBefore ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.array(T).lengthRange()", options?.message ?? "Invalid Array length", input, expected));
    }
  };
}
__name(arrayLengthRange, "arrayLengthRange");
__name2(arrayLengthRange, "arrayLengthRange");
function arrayLengthRangeInclusive(start, end, options) {
  const expected = `expected.length >= ${start} && expected.length <= ${end}`;
  return {
    run(input) {
      return input.length >= start && input.length <= end ? Result.ok(input) : Result.err(
        new ExpectedConstraintError("s.array(T).lengthRangeInclusive()", options?.message ?? "Invalid Array length", input, expected)
      );
    }
  };
}
__name(arrayLengthRangeInclusive, "arrayLengthRangeInclusive");
__name2(arrayLengthRangeInclusive, "arrayLengthRangeInclusive");
function arrayLengthRangeExclusive(startAfter, endBefore, options) {
  const expected = `expected.length > ${startAfter} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length > startAfter && input.length < endBefore ? Result.ok(input) : Result.err(
        new ExpectedConstraintError("s.array(T).lengthRangeExclusive()", options?.message ?? "Invalid Array length", input, expected)
      );
    }
  };
}
__name(arrayLengthRangeExclusive, "arrayLengthRangeExclusive");
__name2(arrayLengthRangeExclusive, "arrayLengthRangeExclusive");
function uniqueArray(options) {
  return {
    run(input) {
      return isUnique(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.array(T).unique()",
          options?.message ?? "Array values are not unique",
          input,
          "Expected all values to be unique"
        )
      );
    }
  };
}
__name(uniqueArray, "uniqueArray");
__name2(uniqueArray, "uniqueArray");
var _CombinedPropertyError = class _CombinedPropertyError2 extends BaseError {
  static {
    __name(this, "_CombinedPropertyError");
  }
  constructor(errors, validatorOptions) {
    super(validatorOptions?.message ?? "Received one or more errors");
    this.errors = errors;
  }
  [customInspectSymbolStackLess](depth, options) {
    if (depth < 0) {
      return options.stylize("[CombinedPropertyError]", "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const header = `${options.stylize("CombinedPropertyError", "special")} (${options.stylize(this.errors.length.toString(), "number")})`;
    const message = options.stylize(this.message, "regexp");
    const errors = this.errors.map(([key, error3]) => {
      const property = _CombinedPropertyError2.formatProperty(key, options);
      const body = error3[customInspectSymbolStackLess](depth - 1, newOptions).replace(/\n/g, padding);
      return `  input${property}${padding}${body}`;
    }).join("\n\n");
    return `${header}
  ${message}

${errors}`;
  }
  static formatProperty(key, options) {
    if (typeof key === "string")
      return options.stylize(`.${key}`, "symbol");
    if (typeof key === "number")
      return `[${options.stylize(key.toString(), "number")}]`;
    return `[${options.stylize("Symbol", "symbol")}(${key.description})]`;
  }
};
__name2(_CombinedPropertyError, "CombinedPropertyError");
var CombinedPropertyError = _CombinedPropertyError;
var _ValidationError = class _ValidationError2 extends BaseError {
  static {
    __name(this, "_ValidationError");
  }
  constructor(validator, message, given) {
    super(message);
    this.validator = validator;
    this.given = given;
  }
  toJSON() {
    return {
      name: this.name,
      message: "Unknown validation error occurred.",
      validator: this.validator,
      given: this.given
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const validator = options.stylize(this.validator, "string");
    if (depth < 0) {
      return options.stylize(`[ValidationError: ${validator}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("ValidationError", "special")} > ${validator}`;
    const message = options.stylize(this.message, "regexp");
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${givenBlock}`;
  }
};
__name2(_ValidationError, "ValidationError");
var ValidationError = _ValidationError;
var _ArrayValidator = class _ArrayValidator2 extends BaseValidator {
  static {
    __name(this, "_ArrayValidator");
  }
  constructor(validator, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.validator = validator;
  }
  lengthLessThan(length, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthLessThan(length, options));
  }
  lengthLessThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthLessThanOrEqual(length, options));
  }
  lengthGreaterThan(length, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthGreaterThan(length, options));
  }
  lengthGreaterThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthGreaterThanOrEqual(length, options));
  }
  lengthEqual(length, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthEqual(length, options));
  }
  lengthNotEqual(length, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthNotEqual(length, options));
  }
  lengthRange(start, endBefore, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthRange(start, endBefore, options));
  }
  lengthRangeInclusive(startAt, endAt, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthRangeInclusive(startAt, endAt, options));
  }
  lengthRangeExclusive(startAfter, endBefore, options = this.validatorOptions) {
    return this.addConstraint(arrayLengthRangeExclusive(startAfter, endBefore, options));
  }
  unique(options = this.validatorOptions) {
    return this.addConstraint(uniqueArray(options));
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
  }
  handle(values) {
    if (!Array.isArray(values)) {
      return Result.err(new ValidationError("s.array(T)", this.validatorOptions.message ?? "Expected an array", values));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(values);
    }
    const errors = [];
    const transformed = [];
    for (let i3 = 0; i3 < values.length; i3++) {
      const result = this.validator.run(values[i3]);
      if (result.isOk())
        transformed.push(result.value);
      else
        errors.push([i3, result.error]);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
  }
};
__name2(_ArrayValidator, "ArrayValidator");
var ArrayValidator = _ArrayValidator;
function bigintComparator(comparator, name, expected, number, options) {
  return {
    run(input) {
      return comparator(input, number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid bigint value", input, expected));
    }
  };
}
__name(bigintComparator, "bigintComparator");
__name2(bigintComparator, "bigintComparator");
function bigintLessThan(value, options) {
  const expected = `expected < ${value}n`;
  return bigintComparator(lessThan, "s.bigint().lessThan()", expected, value, options);
}
__name(bigintLessThan, "bigintLessThan");
__name2(bigintLessThan, "bigintLessThan");
function bigintLessThanOrEqual(value, options) {
  const expected = `expected <= ${value}n`;
  return bigintComparator(lessThanOrEqual, "s.bigint().lessThanOrEqual()", expected, value, options);
}
__name(bigintLessThanOrEqual, "bigintLessThanOrEqual");
__name2(bigintLessThanOrEqual, "bigintLessThanOrEqual");
function bigintGreaterThan(value, options) {
  const expected = `expected > ${value}n`;
  return bigintComparator(greaterThan, "s.bigint().greaterThan()", expected, value, options);
}
__name(bigintGreaterThan, "bigintGreaterThan");
__name2(bigintGreaterThan, "bigintGreaterThan");
function bigintGreaterThanOrEqual(value, options) {
  const expected = `expected >= ${value}n`;
  return bigintComparator(greaterThanOrEqual, "s.bigint().greaterThanOrEqual()", expected, value, options);
}
__name(bigintGreaterThanOrEqual, "bigintGreaterThanOrEqual");
__name2(bigintGreaterThanOrEqual, "bigintGreaterThanOrEqual");
function bigintEqual(value, options) {
  const expected = `expected === ${value}n`;
  return bigintComparator(equal, "s.bigint().equal()", expected, value, options);
}
__name(bigintEqual, "bigintEqual");
__name2(bigintEqual, "bigintEqual");
function bigintNotEqual(value, options) {
  const expected = `expected !== ${value}n`;
  return bigintComparator(notEqual, "s.bigint().notEqual()", expected, value, options);
}
__name(bigintNotEqual, "bigintNotEqual");
__name2(bigintNotEqual, "bigintNotEqual");
function bigintDivisibleBy(divider, options) {
  const expected = `expected % ${divider}n === 0n`;
  return {
    run(input) {
      return input % divider === 0n ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.bigint().divisibleBy()", options?.message ?? "BigInt is not divisible", input, expected));
    }
  };
}
__name(bigintDivisibleBy, "bigintDivisibleBy");
__name2(bigintDivisibleBy, "bigintDivisibleBy");
var _BigIntValidator = class _BigIntValidator2 extends BaseValidator {
  static {
    __name(this, "_BigIntValidator");
  }
  lessThan(number, options = this.validatorOptions) {
    return this.addConstraint(bigintLessThan(number, options));
  }
  lessThanOrEqual(number, options = this.validatorOptions) {
    return this.addConstraint(bigintLessThanOrEqual(number, options));
  }
  greaterThan(number, options = this.validatorOptions) {
    return this.addConstraint(bigintGreaterThan(number, options));
  }
  greaterThanOrEqual(number, options = this.validatorOptions) {
    return this.addConstraint(bigintGreaterThanOrEqual(number, options));
  }
  equal(number, options = this.validatorOptions) {
    return this.addConstraint(bigintEqual(number, options));
  }
  notEqual(number, options = this.validatorOptions) {
    return this.addConstraint(bigintNotEqual(number, options));
  }
  positive(options = this.validatorOptions) {
    return this.greaterThanOrEqual(0n, options);
  }
  negative(options = this.validatorOptions) {
    return this.lessThan(0n, options);
  }
  divisibleBy(number, options = this.validatorOptions) {
    return this.addConstraint(bigintDivisibleBy(number, options));
  }
  abs(options = this.validatorOptions) {
    return this.transform((value) => value < 0 ? -value : value, options);
  }
  intN(bits, options = this.validatorOptions) {
    return this.transform((value) => BigInt.asIntN(bits, value), options);
  }
  uintN(bits, options = this.validatorOptions) {
    return this.transform((value) => BigInt.asUintN(bits, value), options);
  }
  handle(value) {
    return typeof value === "bigint" ? Result.ok(value) : Result.err(new ValidationError("s.bigint()", this.validatorOptions.message ?? "Expected a bigint primitive", value));
  }
};
__name2(_BigIntValidator, "BigIntValidator");
var BigIntValidator = _BigIntValidator;
function booleanTrue(options) {
  return {
    run(input) {
      return input ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.boolean().true()", options?.message ?? "Invalid boolean value", input, "true"));
    }
  };
}
__name(booleanTrue, "booleanTrue");
__name2(booleanTrue, "booleanTrue");
function booleanFalse(options) {
  return {
    run(input) {
      return input ? Result.err(new ExpectedConstraintError("s.boolean().false()", options?.message ?? "Invalid boolean value", input, "false")) : Result.ok(input);
    }
  };
}
__name(booleanFalse, "booleanFalse");
__name2(booleanFalse, "booleanFalse");
var _BooleanValidator = class _BooleanValidator2 extends BaseValidator {
  static {
    __name(this, "_BooleanValidator");
  }
  true(options = this.validatorOptions) {
    return this.addConstraint(booleanTrue(options));
  }
  false(options = this.validatorOptions) {
    return this.addConstraint(booleanFalse(options));
  }
  equal(value, options = this.validatorOptions) {
    return value ? this.true(options) : this.false(options);
  }
  notEqual(value, options = this.validatorOptions) {
    return value ? this.false(options) : this.true(options);
  }
  handle(value) {
    return typeof value === "boolean" ? Result.ok(value) : Result.err(new ValidationError("s.boolean()", this.validatorOptions.message ?? "Expected a boolean primitive", value));
  }
};
__name2(_BooleanValidator, "BooleanValidator");
var BooleanValidator = _BooleanValidator;
function dateComparator(comparator, name, expected, number, options) {
  return {
    run(input) {
      return comparator(input.getTime(), number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Date value", input, expected));
    }
  };
}
__name(dateComparator, "dateComparator");
__name2(dateComparator, "dateComparator");
function dateLessThan(value, options) {
  const expected = `expected < ${value.toISOString()}`;
  return dateComparator(lessThan, "s.date().lessThan()", expected, value.getTime(), options);
}
__name(dateLessThan, "dateLessThan");
__name2(dateLessThan, "dateLessThan");
function dateLessThanOrEqual(value, options) {
  const expected = `expected <= ${value.toISOString()}`;
  return dateComparator(lessThanOrEqual, "s.date().lessThanOrEqual()", expected, value.getTime(), options);
}
__name(dateLessThanOrEqual, "dateLessThanOrEqual");
__name2(dateLessThanOrEqual, "dateLessThanOrEqual");
function dateGreaterThan(value, options) {
  const expected = `expected > ${value.toISOString()}`;
  return dateComparator(greaterThan, "s.date().greaterThan()", expected, value.getTime(), options);
}
__name(dateGreaterThan, "dateGreaterThan");
__name2(dateGreaterThan, "dateGreaterThan");
function dateGreaterThanOrEqual(value, options) {
  const expected = `expected >= ${value.toISOString()}`;
  return dateComparator(greaterThanOrEqual, "s.date().greaterThanOrEqual()", expected, value.getTime(), options);
}
__name(dateGreaterThanOrEqual, "dateGreaterThanOrEqual");
__name2(dateGreaterThanOrEqual, "dateGreaterThanOrEqual");
function dateEqual(value, options) {
  const expected = `expected === ${value.toISOString()}`;
  return dateComparator(equal, "s.date().equal()", expected, value.getTime(), options);
}
__name(dateEqual, "dateEqual");
__name2(dateEqual, "dateEqual");
function dateNotEqual(value, options) {
  const expected = `expected !== ${value.toISOString()}`;
  return dateComparator(notEqual, "s.date().notEqual()", expected, value.getTime(), options);
}
__name(dateNotEqual, "dateNotEqual");
__name2(dateNotEqual, "dateNotEqual");
function dateInvalid(options) {
  return {
    run(input) {
      return Number.isNaN(input.getTime()) ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.date().invalid()", options?.message ?? "Invalid Date value", input, "expected === NaN"));
    }
  };
}
__name(dateInvalid, "dateInvalid");
__name2(dateInvalid, "dateInvalid");
function dateValid(options) {
  return {
    run(input) {
      return Number.isNaN(input.getTime()) ? Result.err(new ExpectedConstraintError("s.date().valid()", options?.message ?? "Invalid Date value", input, "expected !== NaN")) : Result.ok(input);
    }
  };
}
__name(dateValid, "dateValid");
__name2(dateValid, "dateValid");
var _DateValidator = class _DateValidator2 extends BaseValidator {
  static {
    __name(this, "_DateValidator");
  }
  lessThan(date, options = this.validatorOptions) {
    return this.addConstraint(dateLessThan(new Date(date), options));
  }
  lessThanOrEqual(date, options = this.validatorOptions) {
    return this.addConstraint(dateLessThanOrEqual(new Date(date), options));
  }
  greaterThan(date, options = this.validatorOptions) {
    return this.addConstraint(dateGreaterThan(new Date(date), options));
  }
  greaterThanOrEqual(date, options = this.validatorOptions) {
    return this.addConstraint(dateGreaterThanOrEqual(new Date(date), options));
  }
  equal(date, options = this.validatorOptions) {
    const resolved = new Date(date);
    return Number.isNaN(resolved.getTime()) ? this.invalid(options) : this.addConstraint(dateEqual(resolved, options));
  }
  notEqual(date, options = this.validatorOptions) {
    const resolved = new Date(date);
    return Number.isNaN(resolved.getTime()) ? this.valid(options) : this.addConstraint(dateNotEqual(resolved, options));
  }
  valid(options = this.validatorOptions) {
    return this.addConstraint(dateValid(options));
  }
  invalid(options = this.validatorOptions) {
    return this.addConstraint(dateInvalid(options));
  }
  handle(value) {
    return value instanceof Date ? Result.ok(value) : Result.err(new ValidationError("s.date()", this.validatorOptions.message ?? "Expected a Date", value));
  }
};
__name2(_DateValidator, "DateValidator");
var DateValidator = _DateValidator;
var _ExpectedValidationError = class _ExpectedValidationError2 extends ValidationError {
  static {
    __name(this, "_ExpectedValidationError");
  }
  constructor(validator, message, given, expected) {
    super(validator, message, given);
    this.expected = expected;
  }
  toJSON() {
    return {
      name: this.name,
      validator: this.validator,
      given: this.given,
      expected: this.expected,
      message: this.message
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const validator = options.stylize(this.validator, "string");
    if (depth < 0) {
      return options.stylize(`[ExpectedValidationError: ${validator}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const expected = inspect2(this.expected, newOptions).replace(/\n/g, padding);
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("ExpectedValidationError", "special")} > ${validator}`;
    const message = options.stylize(this.message, "regexp");
    const expectedBlock = `
  ${options.stylize("Expected:", "string")}${padding}${expected}`;
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
  }
};
__name2(_ExpectedValidationError, "ExpectedValidationError");
var ExpectedValidationError = _ExpectedValidationError;
var _InstanceValidator = class _InstanceValidator2 extends BaseValidator {
  static {
    __name(this, "_InstanceValidator");
  }
  constructor(expected, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.expected = expected;
  }
  handle(value) {
    return value instanceof this.expected ? Result.ok(value) : Result.err(new ExpectedValidationError("s.instance(V)", this.validatorOptions.message ?? "Expected", value, this.expected));
  }
  clone() {
    return Reflect.construct(this.constructor, [this.expected, this.validatorOptions, this.constraints]);
  }
};
__name2(_InstanceValidator, "InstanceValidator");
var InstanceValidator = _InstanceValidator;
var _LiteralValidator = class _LiteralValidator2 extends BaseValidator {
  static {
    __name(this, "_LiteralValidator");
  }
  constructor(literal, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.expected = literal;
  }
  handle(value) {
    return Object.is(value, this.expected) ? Result.ok(value) : Result.err(
      new ExpectedValidationError("s.literal(V)", this.validatorOptions.message ?? "Expected values to be equals", value, this.expected)
    );
  }
  clone() {
    return Reflect.construct(this.constructor, [this.expected, this.validatorOptions, this.constraints]);
  }
};
__name2(_LiteralValidator, "LiteralValidator");
var LiteralValidator = _LiteralValidator;
var _NeverValidator = class _NeverValidator2 extends BaseValidator {
  static {
    __name(this, "_NeverValidator");
  }
  handle(value) {
    return Result.err(new ValidationError("s.never()", this.validatorOptions.message ?? "Expected a value to not be passed", value));
  }
};
__name2(_NeverValidator, "NeverValidator");
var NeverValidator = _NeverValidator;
var _NullishValidator = class _NullishValidator2 extends BaseValidator {
  static {
    __name(this, "_NullishValidator");
  }
  handle(value) {
    return value === void 0 || value === null ? Result.ok(value) : Result.err(new ValidationError("s.nullish()", this.validatorOptions.message ?? "Expected undefined or null", value));
  }
};
__name2(_NullishValidator, "NullishValidator");
var NullishValidator = _NullishValidator;
function numberComparator(comparator, name, expected, number, options) {
  return {
    run(input) {
      return comparator(input, number) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid number value", input, expected));
    }
  };
}
__name(numberComparator, "numberComparator");
__name2(numberComparator, "numberComparator");
function numberLessThan(value, options) {
  const expected = `expected < ${value}`;
  return numberComparator(lessThan, "s.number().lessThan()", expected, value, options);
}
__name(numberLessThan, "numberLessThan");
__name2(numberLessThan, "numberLessThan");
function numberLessThanOrEqual(value, options) {
  const expected = `expected <= ${value}`;
  return numberComparator(lessThanOrEqual, "s.number().lessThanOrEqual()", expected, value, options);
}
__name(numberLessThanOrEqual, "numberLessThanOrEqual");
__name2(numberLessThanOrEqual, "numberLessThanOrEqual");
function numberGreaterThan(value, options) {
  const expected = `expected > ${value}`;
  return numberComparator(greaterThan, "s.number().greaterThan()", expected, value, options);
}
__name(numberGreaterThan, "numberGreaterThan");
__name2(numberGreaterThan, "numberGreaterThan");
function numberGreaterThanOrEqual(value, options) {
  const expected = `expected >= ${value}`;
  return numberComparator(greaterThanOrEqual, "s.number().greaterThanOrEqual()", expected, value, options);
}
__name(numberGreaterThanOrEqual, "numberGreaterThanOrEqual");
__name2(numberGreaterThanOrEqual, "numberGreaterThanOrEqual");
function numberEqual(value, options) {
  const expected = `expected === ${value}`;
  return numberComparator(equal, "s.number().equal()", expected, value, options);
}
__name(numberEqual, "numberEqual");
__name2(numberEqual, "numberEqual");
function numberNotEqual(value, options) {
  const expected = `expected !== ${value}`;
  return numberComparator(notEqual, "s.number().notEqual()", expected, value, options);
}
__name(numberNotEqual, "numberNotEqual");
__name2(numberNotEqual, "numberNotEqual");
function numberInt(options) {
  return {
    run(input) {
      return Number.isInteger(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.number().int()",
          options?.message ?? "Given value is not an integer",
          input,
          "Number.isInteger(expected) to be true"
        )
      );
    }
  };
}
__name(numberInt, "numberInt");
__name2(numberInt, "numberInt");
function numberSafeInt(options) {
  return {
    run(input) {
      return Number.isSafeInteger(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.number().safeInt()",
          options?.message ?? "Given value is not a safe integer",
          input,
          "Number.isSafeInteger(expected) to be true"
        )
      );
    }
  };
}
__name(numberSafeInt, "numberSafeInt");
__name2(numberSafeInt, "numberSafeInt");
function numberFinite(options) {
  return {
    run(input) {
      return Number.isFinite(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.number().finite()",
          options?.message ?? "Given value is not finite",
          input,
          "Number.isFinite(expected) to be true"
        )
      );
    }
  };
}
__name(numberFinite, "numberFinite");
__name2(numberFinite, "numberFinite");
function numberNaN(options) {
  return {
    run(input) {
      return Number.isNaN(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError("s.number().equal(NaN)", options?.message ?? "Invalid number value", input, "expected === NaN")
      );
    }
  };
}
__name(numberNaN, "numberNaN");
__name2(numberNaN, "numberNaN");
function numberNotNaN(options) {
  return {
    run(input) {
      return Number.isNaN(input) ? Result.err(
        new ExpectedConstraintError("s.number().notEqual(NaN)", options?.message ?? "Invalid number value", input, "expected !== NaN")
      ) : Result.ok(input);
    }
  };
}
__name(numberNotNaN, "numberNotNaN");
__name2(numberNotNaN, "numberNotNaN");
function numberDivisibleBy(divider, options) {
  const expected = `expected % ${divider} === 0`;
  return {
    run(input) {
      return input % divider === 0 ? Result.ok(input) : Result.err(new ExpectedConstraintError("s.number().divisibleBy()", options?.message ?? "Number is not divisible", input, expected));
    }
  };
}
__name(numberDivisibleBy, "numberDivisibleBy");
__name2(numberDivisibleBy, "numberDivisibleBy");
var _NumberValidator = class _NumberValidator2 extends BaseValidator {
  static {
    __name(this, "_NumberValidator");
  }
  lessThan(number, options = this.validatorOptions) {
    return this.addConstraint(numberLessThan(number, options));
  }
  lessThanOrEqual(number, options = this.validatorOptions) {
    return this.addConstraint(numberLessThanOrEqual(number, options));
  }
  greaterThan(number, options = this.validatorOptions) {
    return this.addConstraint(numberGreaterThan(number, options));
  }
  greaterThanOrEqual(number, options = this.validatorOptions) {
    return this.addConstraint(numberGreaterThanOrEqual(number, options));
  }
  equal(number, options = this.validatorOptions) {
    return Number.isNaN(number) ? this.addConstraint(numberNaN(options)) : this.addConstraint(numberEqual(number, options));
  }
  notEqual(number, options = this.validatorOptions) {
    return Number.isNaN(number) ? this.addConstraint(numberNotNaN(options)) : this.addConstraint(numberNotEqual(number, options));
  }
  int(options = this.validatorOptions) {
    return this.addConstraint(numberInt(options));
  }
  safeInt(options = this.validatorOptions) {
    return this.addConstraint(numberSafeInt(options));
  }
  finite(options = this.validatorOptions) {
    return this.addConstraint(numberFinite(options));
  }
  positive(options = this.validatorOptions) {
    return this.greaterThanOrEqual(0, options);
  }
  negative(options = this.validatorOptions) {
    return this.lessThan(0, options);
  }
  divisibleBy(divider, options = this.validatorOptions) {
    return this.addConstraint(numberDivisibleBy(divider, options));
  }
  abs(options = this.validatorOptions) {
    return this.transform(Math.abs, options);
  }
  sign(options = this.validatorOptions) {
    return this.transform(Math.sign, options);
  }
  trunc(options = this.validatorOptions) {
    return this.transform(Math.trunc, options);
  }
  floor(options = this.validatorOptions) {
    return this.transform(Math.floor, options);
  }
  fround(options = this.validatorOptions) {
    return this.transform(Math.fround, options);
  }
  round(options = this.validatorOptions) {
    return this.transform(Math.round, options);
  }
  ceil(options = this.validatorOptions) {
    return this.transform(Math.ceil, options);
  }
  handle(value) {
    return typeof value === "number" ? Result.ok(value) : Result.err(new ValidationError("s.number()", this.validatorOptions.message ?? "Expected a number primitive", value));
  }
};
__name2(_NumberValidator, "NumberValidator");
var NumberValidator = _NumberValidator;
var _MissingPropertyError = class _MissingPropertyError2 extends BaseError {
  static {
    __name(this, "_MissingPropertyError");
  }
  constructor(property, validatorOptions) {
    super(validatorOptions?.message ?? "A required property is missing");
    this.property = property;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      property: this.property
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const property = options.stylize(this.property.toString(), "string");
    if (depth < 0) {
      return options.stylize(`[MissingPropertyError: ${property}]`, "special");
    }
    const header = `${options.stylize("MissingPropertyError", "special")} > ${property}`;
    const message = options.stylize(this.message, "regexp");
    return `${header}
  ${message}`;
  }
};
__name2(_MissingPropertyError, "MissingPropertyError");
var MissingPropertyError = _MissingPropertyError;
var _UnknownPropertyError = class _UnknownPropertyError2 extends BaseError {
  static {
    __name(this, "_UnknownPropertyError");
  }
  constructor(property, value, options) {
    super(options?.message ?? "Received unexpected property");
    this.property = property;
    this.value = value;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      property: this.property,
      value: this.value
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const property = options.stylize(this.property.toString(), "string");
    if (depth < 0) {
      return options.stylize(`[UnknownPropertyError: ${property}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const given = inspect2(this.value, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("UnknownPropertyError", "special")} > ${property}`;
    const message = options.stylize(this.message, "regexp");
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${givenBlock}`;
  }
};
__name2(_UnknownPropertyError, "UnknownPropertyError");
var UnknownPropertyError = _UnknownPropertyError;
var _DefaultValidator = class _DefaultValidator2 extends BaseValidator {
  static {
    __name(this, "_DefaultValidator");
  }
  constructor(validator, value, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.validator = validator;
    this.defaultValue = value;
  }
  default(value, options = this.validatorOptions) {
    const clone = this.clone();
    clone.validatorOptions = options;
    clone.defaultValue = value;
    return clone;
  }
  handle(value) {
    return typeof value === "undefined" ? Result.ok(getValue(this.defaultValue)) : this.validator["handle"](value);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.defaultValue, this.validatorOptions, this.constraints]);
  }
};
__name2(_DefaultValidator, "DefaultValidator");
var DefaultValidator = _DefaultValidator;
var _CombinedError = class _CombinedError2 extends BaseError {
  static {
    __name(this, "_CombinedError");
  }
  constructor(errors, validatorOptions) {
    super(validatorOptions?.message ?? "Received one or more errors");
    this.errors = errors;
  }
  [customInspectSymbolStackLess](depth, options) {
    if (depth < 0) {
      return options.stylize("[CombinedError]", "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1, compact: true };
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const header = `${options.stylize("CombinedError", "special")} (${options.stylize(this.errors.length.toString(), "number")})`;
    const message = options.stylize(this.message, "regexp");
    const errors = this.errors.map((error3, i3) => {
      const index = options.stylize((i3 + 1).toString(), "number");
      const body = error3[customInspectSymbolStackLess](depth - 1, newOptions).replace(/\n/g, padding);
      return `  ${index} ${body}`;
    }).join("\n\n");
    return `${header}
  ${message}

${errors}`;
  }
};
__name2(_CombinedError, "CombinedError");
var CombinedError = _CombinedError;
var _UnionValidator = class _UnionValidator2 extends BaseValidator {
  static {
    __name(this, "_UnionValidator");
  }
  constructor(validators, validatorOptions, constraints = []) {
    super(validatorOptions, constraints);
    this.validators = validators;
  }
  optional(options = this.validatorOptions) {
    if (this.validators.length === 0)
      return new _UnionValidator2([new LiteralValidator(void 0, options)], this.validatorOptions, this.constraints);
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === void 0)
        return this.clone();
      if (validator.expected === null) {
        return new _UnionValidator2(
          [new NullishValidator(options), ...this.validators.slice(1)],
          this.validatorOptions,
          this.constraints
        );
      }
    } else if (validator instanceof NullishValidator) {
      return this.clone();
    }
    return new _UnionValidator2([new LiteralValidator(void 0, options), ...this.validators], this.validatorOptions);
  }
  required(options = this.validatorOptions) {
    if (this.validators.length === 0)
      return this.clone();
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === void 0) {
        return new _UnionValidator2(this.validators.slice(1), this.validatorOptions, this.constraints);
      }
    } else if (validator instanceof NullishValidator) {
      return new _UnionValidator2(
        [new LiteralValidator(null, options), ...this.validators.slice(1)],
        this.validatorOptions,
        this.constraints
      );
    }
    return this.clone();
  }
  nullable(options = this.validatorOptions) {
    if (this.validators.length === 0) {
      return new _UnionValidator2([new LiteralValidator(null, options)], this.validatorOptions, this.constraints);
    }
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === null)
        return this.clone();
      if (validator.expected === void 0) {
        return new _UnionValidator2(
          [new NullishValidator(options), ...this.validators.slice(1)],
          this.validatorOptions,
          this.constraints
        );
      }
    } else if (validator instanceof NullishValidator) {
      return this.clone();
    }
    return new _UnionValidator2([new LiteralValidator(null, options), ...this.validators], this.validatorOptions);
  }
  nullish(options = this.validatorOptions) {
    if (this.validators.length === 0) {
      return new _UnionValidator2([new NullishValidator(options)], options, this.constraints);
    }
    const [validator] = this.validators;
    if (validator instanceof LiteralValidator) {
      if (validator.expected === null || validator.expected === void 0) {
        return new _UnionValidator2(
          [new NullishValidator(options), ...this.validators.slice(1)],
          options,
          this.constraints
        );
      }
    } else if (validator instanceof NullishValidator) {
      return this.clone();
    }
    return new _UnionValidator2([new NullishValidator(options), ...this.validators], options);
  }
  or(...predicates) {
    return new _UnionValidator2([...this.validators, ...predicates], this.validatorOptions);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validators, this.validatorOptions, this.constraints]);
  }
  handle(value) {
    const errors = [];
    for (const validator of this.validators) {
      const result = validator.run(value);
      if (result.isOk())
        return result;
      errors.push(result.error);
    }
    return Result.err(new CombinedError(errors, this.validatorOptions));
  }
};
__name2(_UnionValidator, "UnionValidator");
var UnionValidator = _UnionValidator;
var _ObjectValidator = class _ObjectValidator2 extends BaseValidator {
  static {
    __name(this, "_ObjectValidator");
  }
  constructor(shape, strategy = 0, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.keys = [];
    this.requiredKeys = /* @__PURE__ */ new Map();
    this.possiblyUndefinedKeys = /* @__PURE__ */ new Map();
    this.possiblyUndefinedKeysWithDefaults = /* @__PURE__ */ new Map();
    this.shape = shape;
    this.strategy = strategy;
    switch (this.strategy) {
      case 0:
        this.handleStrategy = (value) => this.handleIgnoreStrategy(value);
        break;
      case 1: {
        this.handleStrategy = (value) => this.handleStrictStrategy(value);
        break;
      }
      case 2:
        this.handleStrategy = (value) => this.handlePassthroughStrategy(value);
        break;
    }
    const shapeEntries = Object.entries(shape);
    this.keys = shapeEntries.map(([key]) => key);
    for (const [key, validator] of shapeEntries) {
      if (validator instanceof UnionValidator) {
        const [possiblyLiteralOrNullishPredicate] = validator["validators"];
        if (possiblyLiteralOrNullishPredicate instanceof NullishValidator) {
          this.possiblyUndefinedKeys.set(key, validator);
        } else if (possiblyLiteralOrNullishPredicate instanceof LiteralValidator) {
          if (possiblyLiteralOrNullishPredicate.expected === void 0) {
            this.possiblyUndefinedKeys.set(key, validator);
          } else {
            this.requiredKeys.set(key, validator);
          }
        } else if (validator instanceof DefaultValidator) {
          this.possiblyUndefinedKeysWithDefaults.set(key, validator);
        } else {
          this.requiredKeys.set(key, validator);
        }
      } else if (validator instanceof NullishValidator) {
        this.possiblyUndefinedKeys.set(key, validator);
      } else if (validator instanceof LiteralValidator) {
        if (validator.expected === void 0) {
          this.possiblyUndefinedKeys.set(key, validator);
        } else {
          this.requiredKeys.set(key, validator);
        }
      } else if (validator instanceof DefaultValidator) {
        this.possiblyUndefinedKeysWithDefaults.set(key, validator);
      } else {
        this.requiredKeys.set(key, validator);
      }
    }
  }
  strict(options = this.validatorOptions) {
    return Reflect.construct(this.constructor, [this.shape, 1, options, this.constraints]);
  }
  ignore(options = this.validatorOptions) {
    return Reflect.construct(this.constructor, [this.shape, 0, options, this.constraints]);
  }
  passthrough(options = this.validatorOptions) {
    return Reflect.construct(this.constructor, [this.shape, 2, options, this.constraints]);
  }
  partial(options = this.validatorOptions) {
    const shape = Object.fromEntries(this.keys.map((key) => [key, this.shape[key].optional(options)]));
    return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
  }
  required(options = this.validatorOptions) {
    const shape = Object.fromEntries(
      this.keys.map((key) => {
        let validator = this.shape[key];
        if (validator instanceof UnionValidator)
          validator = validator.required(options);
        return [key, validator];
      })
    );
    return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
  }
  extend(schema, options = this.validatorOptions) {
    const shape = { ...this.shape, ...schema instanceof _ObjectValidator2 ? schema.shape : schema };
    return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
  }
  pick(keys, options = this.validatorOptions) {
    const shape = Object.fromEntries(
      keys.filter((key) => this.keys.includes(key)).map((key) => [key, this.shape[key]])
    );
    return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
  }
  omit(keys, options = this.validatorOptions) {
    const shape = Object.fromEntries(
      this.keys.filter((key) => !keys.includes(key)).map((key) => [key, this.shape[key]])
    );
    return Reflect.construct(this.constructor, [shape, this.strategy, options, this.constraints]);
  }
  handle(value) {
    const typeOfValue = typeof value;
    if (typeOfValue !== "object") {
      return Result.err(
        new ValidationError(
          "s.object(T)",
          this.validatorOptions.message ?? `Expected the value to be an object, but received ${typeOfValue} instead`,
          value
        )
      );
    }
    if (value === null) {
      return Result.err(new ValidationError("s.object(T)", this.validatorOptions.message ?? "Expected the value to not be null", value));
    }
    if (Array.isArray(value)) {
      return Result.err(new ValidationError("s.object(T)", this.validatorOptions.message ?? "Expected the value to not be an array", value));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(value);
    }
    for (const predicate of Object.values(this.shape)) {
      predicate.setParent(this.parent ?? value);
    }
    return this.handleStrategy(value);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.shape, this.strategy, this.validatorOptions, this.constraints]);
  }
  handleIgnoreStrategy(value) {
    const errors = [];
    const finalObject = {};
    const inputEntries = new Map(Object.entries(value));
    const runPredicate = /* @__PURE__ */ __name2((key, predicate) => {
      const result = predicate.run(value[key]);
      if (result.isOk()) {
        finalObject[key] = result.value;
      } else {
        const error3 = result.error;
        errors.push([key, error3]);
      }
    }, "runPredicate");
    for (const [key, predicate] of this.requiredKeys) {
      if (inputEntries.delete(key)) {
        runPredicate(key, predicate);
      } else {
        errors.push([key, new MissingPropertyError(key, this.validatorOptions)]);
      }
    }
    for (const [key, validator] of this.possiblyUndefinedKeysWithDefaults) {
      inputEntries.delete(key);
      runPredicate(key, validator);
    }
    if (inputEntries.size === 0) {
      return errors.length === 0 ? Result.ok(finalObject) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
    }
    const checkInputEntriesInsteadOfSchemaKeys = this.possiblyUndefinedKeys.size > inputEntries.size;
    if (checkInputEntriesInsteadOfSchemaKeys) {
      for (const [key] of inputEntries) {
        const predicate = this.possiblyUndefinedKeys.get(key);
        if (predicate) {
          runPredicate(key, predicate);
        }
      }
    } else {
      for (const [key, predicate] of this.possiblyUndefinedKeys) {
        if (inputEntries.delete(key)) {
          runPredicate(key, predicate);
        }
      }
    }
    return errors.length === 0 ? Result.ok(finalObject) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
  }
  handleStrictStrategy(value) {
    const errors = [];
    const finalResult = {};
    const inputEntries = new Map(Object.entries(value));
    const runPredicate = /* @__PURE__ */ __name2((key, predicate) => {
      const result = predicate.run(value[key]);
      if (result.isOk()) {
        finalResult[key] = result.value;
      } else {
        const error3 = result.error;
        errors.push([key, error3]);
      }
    }, "runPredicate");
    for (const [key, predicate] of this.requiredKeys) {
      if (inputEntries.delete(key)) {
        runPredicate(key, predicate);
      } else {
        errors.push([key, new MissingPropertyError(key, this.validatorOptions)]);
      }
    }
    for (const [key, validator] of this.possiblyUndefinedKeysWithDefaults) {
      inputEntries.delete(key);
      runPredicate(key, validator);
    }
    for (const [key, predicate] of this.possiblyUndefinedKeys) {
      if (inputEntries.size === 0) {
        break;
      }
      if (inputEntries.delete(key)) {
        runPredicate(key, predicate);
      }
    }
    if (inputEntries.size !== 0) {
      for (const [key, value2] of inputEntries.entries()) {
        errors.push([key, new UnknownPropertyError(key, value2, this.validatorOptions)]);
      }
    }
    return errors.length === 0 ? Result.ok(finalResult) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
  }
  handlePassthroughStrategy(value) {
    const result = this.handleIgnoreStrategy(value);
    return result.isErr() ? result : Result.ok({ ...value, ...result.value });
  }
};
__name2(_ObjectValidator, "ObjectValidator");
var ObjectValidator = _ObjectValidator;
var _PassthroughValidator = class _PassthroughValidator2 extends BaseValidator {
  static {
    __name(this, "_PassthroughValidator");
  }
  handle(value) {
    return Result.ok(value);
  }
};
__name2(_PassthroughValidator, "PassthroughValidator");
var PassthroughValidator = _PassthroughValidator;
var _RecordValidator = class _RecordValidator2 extends BaseValidator {
  static {
    __name(this, "_RecordValidator");
  }
  constructor(validator, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.validator = validator;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
  }
  handle(value) {
    if (typeof value !== "object") {
      return Result.err(new ValidationError("s.record(T)", this.validatorOptions.message ?? "Expected an object", value));
    }
    if (value === null) {
      return Result.err(new ValidationError("s.record(T)", this.validatorOptions.message ?? "Expected the value to not be null", value));
    }
    if (Array.isArray(value)) {
      return Result.err(new ValidationError("s.record(T)", this.validatorOptions.message ?? "Expected the value to not be an array", value));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(value);
    }
    const errors = [];
    const transformed = {};
    for (const [key, val] of Object.entries(value)) {
      const result = this.validator.run(val);
      if (result.isOk())
        transformed[key] = result.value;
      else
        errors.push([key, result.error]);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
  }
};
__name2(_RecordValidator, "RecordValidator");
var RecordValidator = _RecordValidator;
var _SetValidator = class _SetValidator2 extends BaseValidator {
  static {
    __name(this, "_SetValidator");
  }
  constructor(validator, validatorOptions, constraints = []) {
    super(validatorOptions, constraints);
    this.validator = validator;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
  }
  handle(values) {
    if (!(values instanceof Set)) {
      return Result.err(new ValidationError("s.set(T)", this.validatorOptions.message ?? "Expected a set", values));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(values);
    }
    const errors = [];
    const transformed = /* @__PURE__ */ new Set();
    for (const value of values) {
      const result = this.validator.run(value);
      if (result.isOk())
        transformed.add(result.value);
      else
        errors.push(result.error);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedError(errors, this.validatorOptions));
  }
};
__name2(_SetValidator, "SetValidator");
var SetValidator = _SetValidator;
var accountRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]$/i;
function validateEmail(email2) {
  if (!email2)
    return false;
  const atIndex = email2.indexOf("@");
  if (atIndex === -1)
    return false;
  if (atIndex > 64)
    return false;
  const domainIndex = atIndex + 1;
  if (email2.includes("@", domainIndex))
    return false;
  if (email2.length - domainIndex > 255)
    return false;
  let dotIndex = email2.indexOf(".", domainIndex);
  if (dotIndex === -1)
    return false;
  let lastDotIndex = domainIndex;
  do {
    if (dotIndex - lastDotIndex > 63)
      return false;
    lastDotIndex = dotIndex + 1;
  } while ((dotIndex = email2.indexOf(".", lastDotIndex)) !== -1);
  if (email2.length - lastDotIndex > 63)
    return false;
  return accountRegex.test(email2.slice(0, atIndex)) && validateEmailDomain(email2.slice(domainIndex));
}
__name(validateEmail, "validateEmail");
__name2(validateEmail, "validateEmail");
function validateEmailDomain(domain2) {
  try {
    return new URL(`http://${domain2}`).hostname === domain2;
  } catch {
    return false;
  }
}
__name(validateEmailDomain, "validateEmailDomain");
__name2(validateEmailDomain, "validateEmailDomain");
var v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
var v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
var IPv4Reg = new RegExp(`^${v4Str}$`);
var v6Seg = "(?:[0-9a-fA-F]{1,4})";
var IPv6Reg = new RegExp(
  `^((?:${v6Seg}:){7}(?:${v6Seg}|:)|(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
function isIPv4(s4) {
  return IPv4Reg.test(s4);
}
__name(isIPv4, "isIPv4");
__name2(isIPv4, "isIPv4");
function isIPv6(s4) {
  return IPv6Reg.test(s4);
}
__name(isIPv6, "isIPv6");
__name2(isIPv6, "isIPv6");
function isIP(s4) {
  if (isIPv4(s4))
    return 4;
  if (isIPv6(s4))
    return 6;
  return 0;
}
__name(isIP, "isIP");
__name2(isIP, "isIP");
var phoneNumberRegex = /^((?:\+|0{0,2})\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
function validatePhoneNumber(input) {
  return phoneNumberRegex.test(input);
}
__name(validatePhoneNumber, "validatePhoneNumber");
__name2(validatePhoneNumber, "validatePhoneNumber");
var _MultiplePossibilitiesConstraintError = class _MultiplePossibilitiesConstraintError2 extends BaseConstraintError {
  static {
    __name(this, "_MultiplePossibilitiesConstraintError");
  }
  constructor(constraint, message, given, expected) {
    super(constraint, message, given);
    this.expected = expected;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      constraint: this.constraint,
      given: this.given,
      expected: this.expected
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const constraint = options.stylize(this.constraint, "string");
    if (depth < 0) {
      return options.stylize(`[MultiplePossibilitiesConstraintError: ${constraint}]`, "special");
    }
    const newOptions = { ...options, depth: options.depth === null ? null : options.depth - 1 };
    const verticalLine = options.stylize("|", "undefined");
    const padding = `
  ${verticalLine} `;
    const given = inspect2(this.given, newOptions).replace(/\n/g, padding);
    const header = `${options.stylize("MultiplePossibilitiesConstraintError", "special")} > ${constraint}`;
    const message = options.stylize(this.message, "regexp");
    const expectedPadding = `
  ${verticalLine} - `;
    const expectedBlock = `
  ${options.stylize("Expected any of the following:", "string")}${expectedPadding}${this.expected.map((possible) => options.stylize(possible, "boolean")).join(expectedPadding)}`;
    const givenBlock = `
  ${options.stylize("Received:", "regexp")}${padding}${given}`;
    return `${header}
  ${message}
${expectedBlock}
${givenBlock}`;
  }
};
__name2(_MultiplePossibilitiesConstraintError, "MultiplePossibilitiesConstraintError");
var MultiplePossibilitiesConstraintError = _MultiplePossibilitiesConstraintError;
function combinedErrorFn(...fns) {
  switch (fns.length) {
    case 0:
      return () => null;
    case 1:
      return fns[0];
    case 2: {
      const [fn0, fn1] = fns;
      return (...params) => fn0(...params) || fn1(...params);
    }
    default: {
      return (...params) => {
        for (const fn of fns) {
          const result = fn(...params);
          if (result)
            return result;
        }
        return null;
      };
    }
  }
}
__name(combinedErrorFn, "combinedErrorFn");
__name2(combinedErrorFn, "combinedErrorFn");
function createUrlValidators(options, validatorOptions) {
  const fns = [];
  if (options?.allowedProtocols?.length)
    fns.push(allowedProtocolsFn(options.allowedProtocols, validatorOptions));
  if (options?.allowedDomains?.length)
    fns.push(allowedDomainsFn(options.allowedDomains, validatorOptions));
  return combinedErrorFn(...fns);
}
__name(createUrlValidators, "createUrlValidators");
__name2(createUrlValidators, "createUrlValidators");
function allowedProtocolsFn(allowedProtocols, options) {
  return (input, url) => allowedProtocols.includes(url.protocol) ? null : new MultiplePossibilitiesConstraintError("s.string().url()", options?.message ?? "Invalid URL protocol", input, allowedProtocols);
}
__name(allowedProtocolsFn, "allowedProtocolsFn");
__name2(allowedProtocolsFn, "allowedProtocolsFn");
function allowedDomainsFn(allowedDomains, options) {
  return (input, url) => allowedDomains.includes(url.hostname) ? null : new MultiplePossibilitiesConstraintError("s.string().url()", options?.message ?? "Invalid URL domain", input, allowedDomains);
}
__name(allowedDomainsFn, "allowedDomainsFn");
__name2(allowedDomainsFn, "allowedDomainsFn");
function stringLengthComparator(comparator, name, expected, length, options) {
  return {
    run(input) {
      return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid string length", input, expected));
    }
  };
}
__name(stringLengthComparator, "stringLengthComparator");
__name2(stringLengthComparator, "stringLengthComparator");
function stringLengthLessThan(length, options) {
  const expected = `expected.length < ${length}`;
  return stringLengthComparator(lessThan, "s.string().lengthLessThan()", expected, length, options);
}
__name(stringLengthLessThan, "stringLengthLessThan");
__name2(stringLengthLessThan, "stringLengthLessThan");
function stringLengthLessThanOrEqual(length, options) {
  const expected = `expected.length <= ${length}`;
  return stringLengthComparator(lessThanOrEqual, "s.string().lengthLessThanOrEqual()", expected, length, options);
}
__name(stringLengthLessThanOrEqual, "stringLengthLessThanOrEqual");
__name2(stringLengthLessThanOrEqual, "stringLengthLessThanOrEqual");
function stringLengthGreaterThan(length, options) {
  const expected = `expected.length > ${length}`;
  return stringLengthComparator(greaterThan, "s.string().lengthGreaterThan()", expected, length, options);
}
__name(stringLengthGreaterThan, "stringLengthGreaterThan");
__name2(stringLengthGreaterThan, "stringLengthGreaterThan");
function stringLengthGreaterThanOrEqual(length, options) {
  const expected = `expected.length >= ${length}`;
  return stringLengthComparator(greaterThanOrEqual, "s.string().lengthGreaterThanOrEqual()", expected, length, options);
}
__name(stringLengthGreaterThanOrEqual, "stringLengthGreaterThanOrEqual");
__name2(stringLengthGreaterThanOrEqual, "stringLengthGreaterThanOrEqual");
function stringLengthEqual(length, options) {
  const expected = `expected.length === ${length}`;
  return stringLengthComparator(equal, "s.string().lengthEqual()", expected, length, options);
}
__name(stringLengthEqual, "stringLengthEqual");
__name2(stringLengthEqual, "stringLengthEqual");
function stringLengthNotEqual(length, options) {
  const expected = `expected.length !== ${length}`;
  return stringLengthComparator(notEqual, "s.string().lengthNotEqual()", expected, length, options);
}
__name(stringLengthNotEqual, "stringLengthNotEqual");
__name2(stringLengthNotEqual, "stringLengthNotEqual");
function stringEmail(options) {
  return {
    run(input) {
      return validateEmail(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.string().email()",
          options?.message ?? "Invalid email address",
          input,
          "expected to be an email address"
        )
      );
    }
  };
}
__name(stringEmail, "stringEmail");
__name2(stringEmail, "stringEmail");
function stringRegexValidator(type, expected, regex, options) {
  return {
    run(input) {
      return regex.test(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError(type, options?.message ?? "Invalid string format", input, expected));
    }
  };
}
__name(stringRegexValidator, "stringRegexValidator");
__name2(stringRegexValidator, "stringRegexValidator");
function stringUrl(options, validatorOptions) {
  const validatorFn = createUrlValidators(options, validatorOptions);
  return {
    run(input) {
      let url;
      try {
        url = new URL(input);
      } catch {
        return Result.err(
          new ExpectedConstraintError("s.string().url()", validatorOptions?.message ?? "Invalid URL", input, "expected to match a URL")
        );
      }
      const validatorFnResult = validatorFn(input, url);
      if (validatorFnResult === null)
        return Result.ok(input);
      return Result.err(validatorFnResult);
    }
  };
}
__name(stringUrl, "stringUrl");
__name2(stringUrl, "stringUrl");
function stringIp(version2, options) {
  const ipVersion = version2 ? `v${version2}` : "";
  const validatorFn = version2 === 4 ? isIPv4 : version2 === 6 ? isIPv6 : isIP;
  const name = `s.string().ip${ipVersion}()`;
  const message = `Invalid IP${ipVersion} address`;
  const expected = `expected to be an IP${ipVersion} address`;
  return {
    run(input) {
      return validatorFn(input) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? message, input, expected));
    }
  };
}
__name(stringIp, "stringIp");
__name2(stringIp, "stringIp");
function stringRegex(regex, options) {
  return stringRegexValidator("s.string().regex()", `expected ${regex}.test(expected) to be true`, regex, options);
}
__name(stringRegex, "stringRegex");
__name2(stringRegex, "stringRegex");
function stringUuid({ version: version2 = 4, nullable = false } = {}, options) {
  version2 ?? (version2 = "1-5");
  const regex = new RegExp(
    `^(?:[0-9A-F]{8}-[0-9A-F]{4}-[${version2}][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}${nullable ? "|00000000-0000-0000-0000-000000000000" : ""})$`,
    "i"
  );
  const expected = `expected to match UUID${typeof version2 === "number" ? `v${version2}` : ` in range of ${version2}`}`;
  return stringRegexValidator("s.string().uuid()", expected, regex, options);
}
__name(stringUuid, "stringUuid");
__name2(stringUuid, "stringUuid");
function stringDate(options) {
  return {
    run(input) {
      const time4 = Date.parse(input);
      return Number.isNaN(time4) ? Result.err(
        new ExpectedConstraintError(
          "s.string().date()",
          options?.message ?? "Invalid date string",
          input,
          "expected to be a valid date string (in the ISO 8601 or ECMA-262 format)"
        )
      ) : Result.ok(input);
    }
  };
}
__name(stringDate, "stringDate");
__name2(stringDate, "stringDate");
function stringPhone(options) {
  return {
    run(input) {
      return validatePhoneNumber(input) ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.string().phone()",
          options?.message ?? "Invalid phone number",
          input,
          "expected to be a phone number"
        )
      );
    }
  };
}
__name(stringPhone, "stringPhone");
__name2(stringPhone, "stringPhone");
var _StringValidator = class _StringValidator2 extends BaseValidator {
  static {
    __name(this, "_StringValidator");
  }
  lengthLessThan(length, options = this.validatorOptions) {
    return this.addConstraint(stringLengthLessThan(length, options));
  }
  lengthLessThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(stringLengthLessThanOrEqual(length, options));
  }
  lengthGreaterThan(length, options = this.validatorOptions) {
    return this.addConstraint(stringLengthGreaterThan(length, options));
  }
  lengthGreaterThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(stringLengthGreaterThanOrEqual(length, options));
  }
  lengthEqual(length, options = this.validatorOptions) {
    return this.addConstraint(stringLengthEqual(length, options));
  }
  lengthNotEqual(length, options = this.validatorOptions) {
    return this.addConstraint(stringLengthNotEqual(length, options));
  }
  email(options = this.validatorOptions) {
    return this.addConstraint(stringEmail(options));
  }
  url(options, validatorOptions = this.validatorOptions) {
    const urlOptions = this.isUrlOptions(options);
    if (urlOptions) {
      return this.addConstraint(stringUrl(options, validatorOptions));
    }
    return this.addConstraint(stringUrl(void 0, validatorOptions));
  }
  uuid(options, validatorOptions = this.validatorOptions) {
    const stringUuidOptions = this.isStringUuidOptions(options);
    if (stringUuidOptions) {
      return this.addConstraint(stringUuid(options, validatorOptions));
    }
    return this.addConstraint(stringUuid(void 0, validatorOptions));
  }
  regex(regex, options = this.validatorOptions) {
    return this.addConstraint(stringRegex(regex, options));
  }
  date(options = this.validatorOptions) {
    return this.addConstraint(stringDate(options));
  }
  ipv4(options = this.validatorOptions) {
    return this.ip(4, options);
  }
  ipv6(options = this.validatorOptions) {
    return this.ip(6, options);
  }
  ip(version2, options = this.validatorOptions) {
    return this.addConstraint(stringIp(version2, options));
  }
  phone(options = this.validatorOptions) {
    return this.addConstraint(stringPhone(options));
  }
  handle(value) {
    return typeof value === "string" ? Result.ok(value) : Result.err(new ValidationError("s.string()", this.validatorOptions.message ?? "Expected a string primitive", value));
  }
  isUrlOptions(options) {
    return options?.message === void 0;
  }
  isStringUuidOptions(options) {
    return options?.message === void 0;
  }
};
__name2(_StringValidator, "StringValidator");
var StringValidator = _StringValidator;
var _TupleValidator = class _TupleValidator2 extends BaseValidator {
  static {
    __name(this, "_TupleValidator");
  }
  constructor(validators, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.validators = [];
    this.validators = validators;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validators, this.validatorOptions, this.constraints]);
  }
  handle(values) {
    if (!Array.isArray(values)) {
      return Result.err(new ValidationError("s.tuple(T)", this.validatorOptions.message ?? "Expected an array", values));
    }
    if (values.length !== this.validators.length) {
      return Result.err(
        new ValidationError("s.tuple(T)", this.validatorOptions.message ?? `Expected an array of length ${this.validators.length}`, values)
      );
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(values);
    }
    const errors = [];
    const transformed = [];
    for (let i3 = 0; i3 < values.length; i3++) {
      const result = this.validators[i3].run(values[i3]);
      if (result.isOk())
        transformed.push(result.value);
      else
        errors.push([i3, result.error]);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
  }
};
__name2(_TupleValidator, "TupleValidator");
var TupleValidator = _TupleValidator;
var _MapValidator = class _MapValidator2 extends BaseValidator {
  static {
    __name(this, "_MapValidator");
  }
  constructor(keyValidator, valueValidator2, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.keyValidator = keyValidator;
    this.valueValidator = valueValidator2;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.keyValidator, this.valueValidator, this.validatorOptions, this.constraints]);
  }
  handle(value) {
    if (!(value instanceof Map)) {
      return Result.err(new ValidationError("s.map(K, V)", this.validatorOptions.message ?? "Expected a map", value));
    }
    if (!this.shouldRunConstraints) {
      return Result.ok(value);
    }
    const errors = [];
    const transformed = /* @__PURE__ */ new Map();
    for (const [key, val] of value.entries()) {
      const keyResult = this.keyValidator.run(key);
      const valueResult = this.valueValidator.run(val);
      const { length } = errors;
      if (keyResult.isErr())
        errors.push([key, keyResult.error]);
      if (valueResult.isErr())
        errors.push([key, valueResult.error]);
      if (errors.length === length)
        transformed.set(keyResult.value, valueResult.value);
    }
    return errors.length === 0 ? Result.ok(transformed) : Result.err(new CombinedPropertyError(errors, this.validatorOptions));
  }
};
__name2(_MapValidator, "MapValidator");
var MapValidator = _MapValidator;
var _LazyValidator = class _LazyValidator2 extends BaseValidator {
  static {
    __name(this, "_LazyValidator");
  }
  constructor(validator, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.validator = validator;
  }
  clone() {
    return Reflect.construct(this.constructor, [this.validator, this.validatorOptions, this.constraints]);
  }
  handle(values) {
    return this.validator(values).run(values);
  }
};
__name2(_LazyValidator, "LazyValidator");
var LazyValidator = _LazyValidator;
var _UnknownEnumValueError = class _UnknownEnumValueError2 extends BaseError {
  static {
    __name(this, "_UnknownEnumValueError");
  }
  constructor(value, keys, enumMappings, validatorOptions) {
    super(validatorOptions?.message ?? "Expected the value to be one of the following enum values:");
    this.value = value;
    this.enumKeys = keys;
    this.enumMappings = enumMappings;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      value: this.value,
      enumKeys: this.enumKeys,
      enumMappings: [...this.enumMappings.entries()]
    };
  }
  [customInspectSymbolStackLess](depth, options) {
    const value = options.stylize(this.value.toString(), "string");
    if (depth < 0) {
      return options.stylize(`[UnknownEnumValueError: ${value}]`, "special");
    }
    const padding = `
  ${options.stylize("|", "undefined")} `;
    const pairs = this.enumKeys.map((key) => {
      const enumValue = this.enumMappings.get(key);
      return `${options.stylize(key, "string")} or ${options.stylize(
        enumValue.toString(),
        typeof enumValue === "number" ? "number" : "string"
      )}`;
    }).join(padding);
    const header = `${options.stylize("UnknownEnumValueError", "special")} > ${value}`;
    const message = options.stylize(this.message, "regexp");
    const pairsBlock = `${padding}${pairs}`;
    return `${header}
  ${message}
${pairsBlock}`;
  }
};
__name2(_UnknownEnumValueError, "UnknownEnumValueError");
var UnknownEnumValueError = _UnknownEnumValueError;
var _NativeEnumValidator = class _NativeEnumValidator2 extends BaseValidator {
  static {
    __name(this, "_NativeEnumValidator");
  }
  constructor(enumShape, validatorOptions = {}) {
    super(validatorOptions);
    this.hasNumericElements = false;
    this.enumMapping = /* @__PURE__ */ new Map();
    this.enumShape = enumShape;
    this.enumKeys = Object.keys(enumShape).filter((key) => {
      return typeof enumShape[enumShape[key]] !== "number";
    });
    for (const key of this.enumKeys) {
      const enumValue = enumShape[key];
      this.enumMapping.set(key, enumValue);
      this.enumMapping.set(enumValue, enumValue);
      if (typeof enumValue === "number") {
        this.hasNumericElements = true;
        this.enumMapping.set(`${enumValue}`, enumValue);
      }
    }
  }
  handle(value) {
    const typeOfValue = typeof value;
    if (typeOfValue === "number") {
      if (!this.hasNumericElements) {
        return Result.err(
          new ValidationError("s.nativeEnum(T)", this.validatorOptions.message ?? "Expected the value to be a string", value)
        );
      }
    } else if (typeOfValue !== "string") {
      return Result.err(
        new ValidationError("s.nativeEnum(T)", this.validatorOptions.message ?? "Expected the value to be a string or number", value)
      );
    }
    const casted = value;
    const possibleEnumValue = this.enumMapping.get(casted);
    return typeof possibleEnumValue === "undefined" ? Result.err(new UnknownEnumValueError(casted, this.enumKeys, this.enumMapping, this.validatorOptions)) : Result.ok(possibleEnumValue);
  }
  clone() {
    return Reflect.construct(this.constructor, [this.enumShape, this.validatorOptions]);
  }
};
__name2(_NativeEnumValidator, "NativeEnumValidator");
var NativeEnumValidator = _NativeEnumValidator;
function typedArrayByteLengthComparator(comparator, name, expected, length, options) {
  return {
    run(input) {
      return comparator(input.byteLength, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Typed Array byte length", input, expected));
    }
  };
}
__name(typedArrayByteLengthComparator, "typedArrayByteLengthComparator");
__name2(typedArrayByteLengthComparator, "typedArrayByteLengthComparator");
function typedArrayByteLengthLessThan(value, options) {
  const expected = `expected.byteLength < ${value}`;
  return typedArrayByteLengthComparator(lessThan, "s.typedArray(T).byteLengthLessThan()", expected, value, options);
}
__name(typedArrayByteLengthLessThan, "typedArrayByteLengthLessThan");
__name2(typedArrayByteLengthLessThan, "typedArrayByteLengthLessThan");
function typedArrayByteLengthLessThanOrEqual(value, options) {
  const expected = `expected.byteLength <= ${value}`;
  return typedArrayByteLengthComparator(lessThanOrEqual, "s.typedArray(T).byteLengthLessThanOrEqual()", expected, value, options);
}
__name(typedArrayByteLengthLessThanOrEqual, "typedArrayByteLengthLessThanOrEqual");
__name2(typedArrayByteLengthLessThanOrEqual, "typedArrayByteLengthLessThanOrEqual");
function typedArrayByteLengthGreaterThan(value, options) {
  const expected = `expected.byteLength > ${value}`;
  return typedArrayByteLengthComparator(greaterThan, "s.typedArray(T).byteLengthGreaterThan()", expected, value, options);
}
__name(typedArrayByteLengthGreaterThan, "typedArrayByteLengthGreaterThan");
__name2(typedArrayByteLengthGreaterThan, "typedArrayByteLengthGreaterThan");
function typedArrayByteLengthGreaterThanOrEqual(value, options) {
  const expected = `expected.byteLength >= ${value}`;
  return typedArrayByteLengthComparator(greaterThanOrEqual, "s.typedArray(T).byteLengthGreaterThanOrEqual()", expected, value, options);
}
__name(typedArrayByteLengthGreaterThanOrEqual, "typedArrayByteLengthGreaterThanOrEqual");
__name2(typedArrayByteLengthGreaterThanOrEqual, "typedArrayByteLengthGreaterThanOrEqual");
function typedArrayByteLengthEqual(value, options) {
  const expected = `expected.byteLength === ${value}`;
  return typedArrayByteLengthComparator(equal, "s.typedArray(T).byteLengthEqual()", expected, value, options);
}
__name(typedArrayByteLengthEqual, "typedArrayByteLengthEqual");
__name2(typedArrayByteLengthEqual, "typedArrayByteLengthEqual");
function typedArrayByteLengthNotEqual(value, options) {
  const expected = `expected.byteLength !== ${value}`;
  return typedArrayByteLengthComparator(notEqual, "s.typedArray(T).byteLengthNotEqual()", expected, value, options);
}
__name(typedArrayByteLengthNotEqual, "typedArrayByteLengthNotEqual");
__name2(typedArrayByteLengthNotEqual, "typedArrayByteLengthNotEqual");
function typedArrayByteLengthRange(start, endBefore, options) {
  const expected = `expected.byteLength >= ${start} && expected.byteLength < ${endBefore}`;
  return {
    run(input) {
      return input.byteLength >= start && input.byteLength < endBefore ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.typedArray(T).byteLengthRange()",
          options?.message ?? "Invalid Typed Array byte length",
          input,
          expected
        )
      );
    }
  };
}
__name(typedArrayByteLengthRange, "typedArrayByteLengthRange");
__name2(typedArrayByteLengthRange, "typedArrayByteLengthRange");
function typedArrayByteLengthRangeInclusive(start, end, options) {
  const expected = `expected.byteLength >= ${start} && expected.byteLength <= ${end}`;
  return {
    run(input) {
      return input.byteLength >= start && input.byteLength <= end ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.typedArray(T).byteLengthRangeInclusive()",
          options?.message ?? "Invalid Typed Array byte length",
          input,
          expected
        )
      );
    }
  };
}
__name(typedArrayByteLengthRangeInclusive, "typedArrayByteLengthRangeInclusive");
__name2(typedArrayByteLengthRangeInclusive, "typedArrayByteLengthRangeInclusive");
function typedArrayByteLengthRangeExclusive(startAfter, endBefore, options) {
  const expected = `expected.byteLength > ${startAfter} && expected.byteLength < ${endBefore}`;
  return {
    run(input) {
      return input.byteLength > startAfter && input.byteLength < endBefore ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.typedArray(T).byteLengthRangeExclusive()",
          options?.message ?? "Invalid Typed Array byte length",
          input,
          expected
        )
      );
    }
  };
}
__name(typedArrayByteLengthRangeExclusive, "typedArrayByteLengthRangeExclusive");
__name2(typedArrayByteLengthRangeExclusive, "typedArrayByteLengthRangeExclusive");
function typedArrayLengthComparator(comparator, name, expected, length, options) {
  return {
    run(input) {
      return comparator(input.length, length) ? Result.ok(input) : Result.err(new ExpectedConstraintError(name, options?.message ?? "Invalid Typed Array length", input, expected));
    }
  };
}
__name(typedArrayLengthComparator, "typedArrayLengthComparator");
__name2(typedArrayLengthComparator, "typedArrayLengthComparator");
function typedArrayLengthLessThan(value, options) {
  const expected = `expected.length < ${value}`;
  return typedArrayLengthComparator(lessThan, "s.typedArray(T).lengthLessThan()", expected, value, options);
}
__name(typedArrayLengthLessThan, "typedArrayLengthLessThan");
__name2(typedArrayLengthLessThan, "typedArrayLengthLessThan");
function typedArrayLengthLessThanOrEqual(value, options) {
  const expected = `expected.length <= ${value}`;
  return typedArrayLengthComparator(lessThanOrEqual, "s.typedArray(T).lengthLessThanOrEqual()", expected, value, options);
}
__name(typedArrayLengthLessThanOrEqual, "typedArrayLengthLessThanOrEqual");
__name2(typedArrayLengthLessThanOrEqual, "typedArrayLengthLessThanOrEqual");
function typedArrayLengthGreaterThan(value, options) {
  const expected = `expected.length > ${value}`;
  return typedArrayLengthComparator(greaterThan, "s.typedArray(T).lengthGreaterThan()", expected, value, options);
}
__name(typedArrayLengthGreaterThan, "typedArrayLengthGreaterThan");
__name2(typedArrayLengthGreaterThan, "typedArrayLengthGreaterThan");
function typedArrayLengthGreaterThanOrEqual(value, options) {
  const expected = `expected.length >= ${value}`;
  return typedArrayLengthComparator(greaterThanOrEqual, "s.typedArray(T).lengthGreaterThanOrEqual()", expected, value, options);
}
__name(typedArrayLengthGreaterThanOrEqual, "typedArrayLengthGreaterThanOrEqual");
__name2(typedArrayLengthGreaterThanOrEqual, "typedArrayLengthGreaterThanOrEqual");
function typedArrayLengthEqual(value, options) {
  const expected = `expected.length === ${value}`;
  return typedArrayLengthComparator(equal, "s.typedArray(T).lengthEqual()", expected, value, options);
}
__name(typedArrayLengthEqual, "typedArrayLengthEqual");
__name2(typedArrayLengthEqual, "typedArrayLengthEqual");
function typedArrayLengthNotEqual(value, options) {
  const expected = `expected.length !== ${value}`;
  return typedArrayLengthComparator(notEqual, "s.typedArray(T).lengthNotEqual()", expected, value, options);
}
__name(typedArrayLengthNotEqual, "typedArrayLengthNotEqual");
__name2(typedArrayLengthNotEqual, "typedArrayLengthNotEqual");
function typedArrayLengthRange(start, endBefore, options) {
  const expected = `expected.length >= ${start} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length >= start && input.length < endBefore ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.typedArray(T).lengthRange()",
          options?.message ?? "Invalid Typed Array length",
          input,
          expected
        )
      );
    }
  };
}
__name(typedArrayLengthRange, "typedArrayLengthRange");
__name2(typedArrayLengthRange, "typedArrayLengthRange");
function typedArrayLengthRangeInclusive(start, end, options) {
  const expected = `expected.length >= ${start} && expected.length <= ${end}`;
  return {
    run(input) {
      return input.length >= start && input.length <= end ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.typedArray(T).lengthRangeInclusive()",
          options?.message ?? "Invalid Typed Array length",
          input,
          expected
        )
      );
    }
  };
}
__name(typedArrayLengthRangeInclusive, "typedArrayLengthRangeInclusive");
__name2(typedArrayLengthRangeInclusive, "typedArrayLengthRangeInclusive");
function typedArrayLengthRangeExclusive(startAfter, endBefore, options) {
  const expected = `expected.length > ${startAfter} && expected.length < ${endBefore}`;
  return {
    run(input) {
      return input.length > startAfter && input.length < endBefore ? Result.ok(input) : Result.err(
        new ExpectedConstraintError(
          "s.typedArray(T).lengthRangeExclusive()",
          options?.message ?? "Invalid Typed Array length",
          input,
          expected
        )
      );
    }
  };
}
__name(typedArrayLengthRangeExclusive, "typedArrayLengthRangeExclusive");
__name2(typedArrayLengthRangeExclusive, "typedArrayLengthRangeExclusive");
var vowels = ["a", "e", "i", "o", "u"];
var aOrAn = /* @__PURE__ */ __name2((word) => {
  return `${vowels.includes(word[0].toLowerCase()) ? "an" : "a"} ${word}`;
}, "aOrAn");
var TypedArrays = {
  Int8Array: /* @__PURE__ */ __name((x2) => x2 instanceof Int8Array, "Int8Array"),
  Uint8Array: /* @__PURE__ */ __name((x2) => x2 instanceof Uint8Array, "Uint8Array"),
  Uint8ClampedArray: /* @__PURE__ */ __name((x2) => x2 instanceof Uint8ClampedArray, "Uint8ClampedArray"),
  Int16Array: /* @__PURE__ */ __name((x2) => x2 instanceof Int16Array, "Int16Array"),
  Uint16Array: /* @__PURE__ */ __name((x2) => x2 instanceof Uint16Array, "Uint16Array"),
  Int32Array: /* @__PURE__ */ __name((x2) => x2 instanceof Int32Array, "Int32Array"),
  Uint32Array: /* @__PURE__ */ __name((x2) => x2 instanceof Uint32Array, "Uint32Array"),
  Float32Array: /* @__PURE__ */ __name((x2) => x2 instanceof Float32Array, "Float32Array"),
  Float64Array: /* @__PURE__ */ __name((x2) => x2 instanceof Float64Array, "Float64Array"),
  BigInt64Array: /* @__PURE__ */ __name((x2) => x2 instanceof BigInt64Array, "BigInt64Array"),
  BigUint64Array: /* @__PURE__ */ __name((x2) => x2 instanceof BigUint64Array, "BigUint64Array"),
  TypedArray: /* @__PURE__ */ __name((x2) => ArrayBuffer.isView(x2) && !(x2 instanceof DataView), "TypedArray")
};
var _TypedArrayValidator = class _TypedArrayValidator2 extends BaseValidator {
  static {
    __name(this, "_TypedArrayValidator");
  }
  constructor(type, validatorOptions = {}, constraints = []) {
    super(validatorOptions, constraints);
    this.type = type;
  }
  byteLengthLessThan(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthLessThan(length, options));
  }
  byteLengthLessThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthLessThanOrEqual(length, options));
  }
  byteLengthGreaterThan(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthGreaterThan(length, options));
  }
  byteLengthGreaterThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthGreaterThanOrEqual(length, options));
  }
  byteLengthEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthEqual(length, options));
  }
  byteLengthNotEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthNotEqual(length, options));
  }
  byteLengthRange(start, endBefore, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthRange(start, endBefore, options));
  }
  byteLengthRangeInclusive(startAt, endAt, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthRangeInclusive(startAt, endAt, options));
  }
  byteLengthRangeExclusive(startAfter, endBefore, options = this.validatorOptions) {
    return this.addConstraint(typedArrayByteLengthRangeExclusive(startAfter, endBefore, options));
  }
  lengthLessThan(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthLessThan(length, options));
  }
  lengthLessThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthLessThanOrEqual(length, options));
  }
  lengthGreaterThan(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthGreaterThan(length, options));
  }
  lengthGreaterThanOrEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthGreaterThanOrEqual(length, options));
  }
  lengthEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthEqual(length, options));
  }
  lengthNotEqual(length, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthNotEqual(length, options));
  }
  lengthRange(start, endBefore, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthRange(start, endBefore, options));
  }
  lengthRangeInclusive(startAt, endAt, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthRangeInclusive(startAt, endAt, options));
  }
  lengthRangeExclusive(startAfter, endBefore, options = this.validatorOptions) {
    return this.addConstraint(typedArrayLengthRangeExclusive(startAfter, endBefore, options));
  }
  clone() {
    return Reflect.construct(this.constructor, [this.type, this.validatorOptions, this.constraints]);
  }
  handle(value) {
    return TypedArrays[this.type](value) ? Result.ok(value) : Result.err(new ValidationError("s.typedArray()", this.validatorOptions.message ?? `Expected ${aOrAn(this.type)}`, value));
  }
};
__name2(_TypedArrayValidator, "TypedArrayValidator");
var TypedArrayValidator = _TypedArrayValidator;
var _Shapes = class _Shapes2 {
  static {
    __name(this, "_Shapes");
  }
  string(options) {
    return new StringValidator(options);
  }
  number(options) {
    return new NumberValidator(options);
  }
  bigint(options) {
    return new BigIntValidator(options);
  }
  boolean(options) {
    return new BooleanValidator(options);
  }
  date(options) {
    return new DateValidator(options);
  }
  object(shape, options) {
    return new ObjectValidator(shape, 0, options);
  }
  undefined(options) {
    return this.literal(void 0, { equalsOptions: options });
  }
  null(options) {
    return this.literal(null, { equalsOptions: options });
  }
  nullish(options) {
    return new NullishValidator(options);
  }
  any(options) {
    return new PassthroughValidator(options);
  }
  unknown(options) {
    return new PassthroughValidator(options);
  }
  never(options) {
    return new NeverValidator(options);
  }
  enum(values, options) {
    return this.union(
      values.map((value) => this.literal(value, { equalsOptions: options })),
      options
    );
  }
  nativeEnum(enumShape, options) {
    return new NativeEnumValidator(enumShape, options);
  }
  literal(value, options) {
    if (value instanceof Date) {
      return this.date(options?.dateOptions).equal(value, options?.equalsOptions);
    }
    return new LiteralValidator(value, options?.equalsOptions);
  }
  instance(expected, options) {
    return new InstanceValidator(expected, options);
  }
  union(validators, options) {
    return new UnionValidator(validators, options);
  }
  array(validator, options) {
    return new ArrayValidator(validator, options);
  }
  typedArray(type = "TypedArray", options) {
    return new TypedArrayValidator(type, options);
  }
  int8Array(options) {
    return this.typedArray("Int8Array", options);
  }
  uint8Array(options) {
    return this.typedArray("Uint8Array", options);
  }
  uint8ClampedArray(options) {
    return this.typedArray("Uint8ClampedArray", options);
  }
  int16Array(options) {
    return this.typedArray("Int16Array", options);
  }
  uint16Array(options) {
    return this.typedArray("Uint16Array", options);
  }
  int32Array(options) {
    return this.typedArray("Int32Array", options);
  }
  uint32Array(options) {
    return this.typedArray("Uint32Array", options);
  }
  float32Array(options) {
    return this.typedArray("Float32Array", options);
  }
  float64Array(options) {
    return this.typedArray("Float64Array", options);
  }
  bigInt64Array(options) {
    return this.typedArray("BigInt64Array", options);
  }
  bigUint64Array(options) {
    return this.typedArray("BigUint64Array", options);
  }
  tuple(validators, options) {
    return new TupleValidator(validators, options);
  }
  set(validator, options) {
    return new SetValidator(validator, options);
  }
  record(validator, options) {
    return new RecordValidator(validator, options);
  }
  map(keyValidator, valueValidator2, options) {
    return new MapValidator(keyValidator, valueValidator2, options);
  }
  lazy(validator, options) {
    return new LazyValidator(validator, options);
  }
};
__name2(_Shapes, "Shapes");
var Shapes = _Shapes;
var s3 = new Shapes();

// node_modules/@discordjs/formatters/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __defProp3 = Object.defineProperty;
var __name3 = /* @__PURE__ */ __name((target, value) => __defProp3(target, "name", { value, configurable: true }), "__name");
function escapeMarkdown(text, options = {}) {
  const {
    codeBlock: codeBlock2 = true,
    inlineCode: inlineCode2 = true,
    bold: bold2 = true,
    italic: italic2 = true,
    underline: underline2 = true,
    strikethrough: strikethrough2 = true,
    spoiler: spoiler2 = true,
    codeBlockContent = true,
    inlineCodeContent = true,
    escape = true,
    heading: heading2 = false,
    bulletedList = false,
    numberedList = false,
    maskedLink = false
  } = options;
  if (!codeBlockContent) {
    return text.split("```").map((subString, index, array) => {
      if (index % 2 && index !== array.length - 1) return subString;
      return escapeMarkdown(subString, {
        inlineCode: inlineCode2,
        bold: bold2,
        italic: italic2,
        underline: underline2,
        strikethrough: strikethrough2,
        spoiler: spoiler2,
        inlineCodeContent,
        escape,
        heading: heading2,
        bulletedList,
        numberedList,
        maskedLink
      });
    }).join(codeBlock2 ? "\\`\\`\\`" : "```");
  }
  if (!inlineCodeContent) {
    return text.split(/(?<=^|[^`])`(?=[^`]|$)/g).map((subString, index, array) => {
      if (index % 2 && index !== array.length - 1) return subString;
      return escapeMarkdown(subString, {
        codeBlock: codeBlock2,
        bold: bold2,
        italic: italic2,
        underline: underline2,
        strikethrough: strikethrough2,
        spoiler: spoiler2,
        escape,
        heading: heading2,
        bulletedList,
        numberedList,
        maskedLink
      });
    }).join(inlineCode2 ? "\\`" : "`");
  }
  let res = text;
  if (escape) res = escapeEscape(res);
  if (inlineCode2) res = escapeInlineCode(res);
  if (codeBlock2) res = escapeCodeBlock(res);
  if (italic2) res = escapeItalic(res);
  if (bold2) res = escapeBold(res);
  if (underline2) res = escapeUnderline(res);
  if (strikethrough2) res = escapeStrikethrough(res);
  if (spoiler2) res = escapeSpoiler(res);
  if (heading2) res = escapeHeading(res);
  if (bulletedList) res = escapeBulletedList(res);
  if (numberedList) res = escapeNumberedList(res);
  if (maskedLink) res = escapeMaskedLink(res);
  return res;
}
__name(escapeMarkdown, "escapeMarkdown");
__name3(escapeMarkdown, "escapeMarkdown");
function escapeCodeBlock(text) {
  return text.replaceAll("```", "\\`\\`\\`");
}
__name(escapeCodeBlock, "escapeCodeBlock");
__name3(escapeCodeBlock, "escapeCodeBlock");
function escapeInlineCode(text) {
  return text.replaceAll(/(?<=^|[^`])``?(?=[^`]|$)/g, (match) => match.length === 2 ? "\\`\\`" : "\\`");
}
__name(escapeInlineCode, "escapeInlineCode");
__name3(escapeInlineCode, "escapeInlineCode");
function escapeItalic(text) {
  let idx = 0;
  const newText = text.replaceAll(
    /(?<=^|[^*])(?<!(?<!<)https?:\/\/\S*|<[^\s:]+:\/[^\s>]*)\*([^*]|\*\*|$)/g,
    (_2, match) => {
      if (match === "**") return ++idx % 2 ? `\\*${match}` : `${match}\\*`;
      return `\\*${match}`;
    }
  );
  idx = 0;
  return newText.replaceAll(
    /(?<=^|[^_])(?<!<a?:.+|(?<!<)https?:\/\/\S*|<[^\s:]:\/[^\s>]*)_(?!:\d+>)([^_]|__|$)/g,
    (_2, match) => {
      if (match === "__") return ++idx % 2 ? `\\_${match}` : `${match}\\_`;
      return `\\_${match}`;
    }
  );
}
__name(escapeItalic, "escapeItalic");
__name3(escapeItalic, "escapeItalic");
function escapeBold(text) {
  let idx = 0;
  return text.replaceAll(/\*\*(\*)?/g, (_2, match) => {
    if (match) return ++idx % 2 ? `${match}\\*\\*` : `\\*\\*${match}`;
    return "\\*\\*";
  });
}
__name(escapeBold, "escapeBold");
__name3(escapeBold, "escapeBold");
function escapeUnderline(text) {
  let idx = 0;
  return text.replaceAll(/(?<!<a?:.+|https?:\/\/\S+)__(_)?(?!:\d+>)/g, (_2, match) => {
    if (match) return ++idx % 2 ? `${match}\\_\\_` : `\\_\\_${match}`;
    return "\\_\\_";
  });
}
__name(escapeUnderline, "escapeUnderline");
__name3(escapeUnderline, "escapeUnderline");
function escapeStrikethrough(text) {
  return text.replaceAll("~~", "\\~\\~");
}
__name(escapeStrikethrough, "escapeStrikethrough");
__name3(escapeStrikethrough, "escapeStrikethrough");
function escapeSpoiler(text) {
  return text.replaceAll("||", "\\|\\|");
}
__name(escapeSpoiler, "escapeSpoiler");
__name3(escapeSpoiler, "escapeSpoiler");
function escapeEscape(text) {
  return text.replaceAll("\\", "\\\\");
}
__name(escapeEscape, "escapeEscape");
__name3(escapeEscape, "escapeEscape");
function escapeHeading(text) {
  return text.replaceAll(/^( {0,2})([*-] )?( *)(#{1,3} )/gm, "$1$2$3\\$4");
}
__name(escapeHeading, "escapeHeading");
__name3(escapeHeading, "escapeHeading");
function escapeBulletedList(text) {
  return text.replaceAll(/^( *)([*-])( +)/gm, "$1\\$2$3");
}
__name(escapeBulletedList, "escapeBulletedList");
__name3(escapeBulletedList, "escapeBulletedList");
function escapeNumberedList(text) {
  return text.replaceAll(/^( *\d+)\./gm, "$1\\.");
}
__name(escapeNumberedList, "escapeNumberedList");
__name3(escapeNumberedList, "escapeNumberedList");
function escapeMaskedLink(text) {
  return text.replaceAll(/\[.+]\(.+\)/gm, "\\$&");
}
__name(escapeMaskedLink, "escapeMaskedLink");
__name3(escapeMaskedLink, "escapeMaskedLink");
function codeBlock(language, content) {
  return content === void 0 ? `\`\`\`
${language}
\`\`\`` : `\`\`\`${language}
${content}
\`\`\``;
}
__name(codeBlock, "codeBlock");
__name3(codeBlock, "codeBlock");
function inlineCode(content) {
  return `\`${content}\``;
}
__name(inlineCode, "inlineCode");
__name3(inlineCode, "inlineCode");
function italic(content) {
  return `_${content}_`;
}
__name(italic, "italic");
__name3(italic, "italic");
function bold(content) {
  return `**${content}**`;
}
__name(bold, "bold");
__name3(bold, "bold");
function underscore(content) {
  return underline(content);
}
__name(underscore, "underscore");
__name3(underscore, "underscore");
function underline(content) {
  return `__${content}__`;
}
__name(underline, "underline");
__name3(underline, "underline");
function strikethrough(content) {
  return `~~${content}~~`;
}
__name(strikethrough, "strikethrough");
__name3(strikethrough, "strikethrough");
function quote(content) {
  return `> ${content}`;
}
__name(quote, "quote");
__name3(quote, "quote");
function blockQuote(content) {
  return `>>> ${content}`;
}
__name(blockQuote, "blockQuote");
__name3(blockQuote, "blockQuote");
function hideLinkEmbed(url) {
  return `<${url}>`;
}
__name(hideLinkEmbed, "hideLinkEmbed");
__name3(hideLinkEmbed, "hideLinkEmbed");
function hyperlink(content, url, title2) {
  return title2 ? `[${content}](${url} "${title2}")` : `[${content}](${url})`;
}
__name(hyperlink, "hyperlink");
__name3(hyperlink, "hyperlink");
function spoiler(content) {
  return `||${content}||`;
}
__name(spoiler, "spoiler");
__name3(spoiler, "spoiler");
function userMention(userId) {
  return `<@${userId}>`;
}
__name(userMention, "userMention");
__name3(userMention, "userMention");
function channelMention(channelId) {
  return `<#${channelId}>`;
}
__name(channelMention, "channelMention");
__name3(channelMention, "channelMention");
function roleMention(roleId) {
  return `<@&${roleId}>`;
}
__name(roleMention, "roleMention");
__name3(roleMention, "roleMention");
function linkedRoleMention(roleId) {
  return `<id:linked-roles:${roleId}>`;
}
__name(linkedRoleMention, "linkedRoleMention");
__name3(linkedRoleMention, "linkedRoleMention");
function chatInputApplicationCommandMention(commandName, subcommandGroupName, subcommandName, commandId) {
  if (commandId !== void 0) {
    return `</${commandName} ${subcommandGroupName} ${subcommandName}:${commandId}>`;
  }
  if (subcommandName !== void 0) {
    return `</${commandName} ${subcommandGroupName}:${subcommandName}>`;
  }
  return `</${commandName}:${subcommandGroupName}>`;
}
__name(chatInputApplicationCommandMention, "chatInputApplicationCommandMention");
__name3(chatInputApplicationCommandMention, "chatInputApplicationCommandMention");
function formatEmoji(emojiIdOrOptions, animated) {
  const options = typeof emojiIdOrOptions === "string" ? {
    id: emojiIdOrOptions,
    animated: animated ?? false
  } : emojiIdOrOptions;
  const { id, animated: isAnimated, name: emojiName } = options;
  return `<${isAnimated ? "a" : ""}:${emojiName ?? "emoji"}:${id}>`;
}
__name(formatEmoji, "formatEmoji");
__name3(formatEmoji, "formatEmoji");
function channelLink(channelId, guildId) {
  return `https://discord.com/channels/${guildId ?? "@me"}/${channelId}`;
}
__name(channelLink, "channelLink");
__name3(channelLink, "channelLink");
function messageLink(channelId, messageId, guildId) {
  return `${guildId === void 0 ? channelLink(channelId) : channelLink(channelId, guildId)}/${messageId}`;
}
__name(messageLink, "messageLink");
__name3(messageLink, "messageLink");
function heading(content, level) {
  switch (level) {
    case 3:
      return `### ${content}`;
    case 2:
      return `## ${content}`;
    default:
      return `# ${content}`;
  }
}
__name(heading, "heading");
__name3(heading, "heading");
function listCallback(element, startNumber, depth = 0) {
  if (Array.isArray(element)) {
    return element.map((element2) => listCallback(element2, startNumber, depth + 1)).join("\n");
  }
  return `${"  ".repeat(depth - 1)}${startNumber ? `${startNumber}.` : "-"} ${element}`;
}
__name(listCallback, "listCallback");
__name3(listCallback, "listCallback");
function orderedList(list, startNumber = 1) {
  return listCallback(list, Math.max(startNumber, 1));
}
__name(orderedList, "orderedList");
__name3(orderedList, "orderedList");
function unorderedList(list) {
  return listCallback(list);
}
__name(unorderedList, "unorderedList");
__name3(unorderedList, "unorderedList");
function subtext(content) {
  return `-# ${content}`;
}
__name(subtext, "subtext");
__name3(subtext, "subtext");
function time3(timeOrSeconds, style) {
  if (typeof timeOrSeconds !== "number") {
    timeOrSeconds = Math.floor((timeOrSeconds?.getTime() ?? Date.now()) / 1e3);
  }
  return typeof style === "string" ? `<t:${timeOrSeconds}:${style}>` : `<t:${timeOrSeconds}>`;
}
__name(time3, "time");
__name3(time3, "time");
function applicationDirectory(applicationId, skuId) {
  const url = `https://discord.com/application-directory/${applicationId}/store`;
  return skuId ? `${url}/${skuId}` : url;
}
__name(applicationDirectory, "applicationDirectory");
__name3(applicationDirectory, "applicationDirectory");
function email(email2, headers) {
  if (headers) {
    const searchParams = new URLSearchParams(
      Object.fromEntries(Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]))
    );
    return `<${email2}?${searchParams.toString()}>`;
  }
  return `<${email2}>`;
}
__name(email, "email");
__name3(email, "email");
function phoneNumber(phoneNumber2) {
  if (!phoneNumber2.startsWith("+")) {
    throw new Error('Phone number must start with a "+" sign.');
  }
  return `<${phoneNumber2}>`;
}
__name(phoneNumber, "phoneNumber");
__name3(phoneNumber, "phoneNumber");

// node_modules/discord-api-types/v10.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_v10 = __toESM(require_v106(), 1);
var APIApplicationCommandPermissionsConstant = import_v10.default.APIApplicationCommandPermissionsConstant;
var APIVersion = import_v10.default.APIVersion;
var ActivityFlags = import_v10.default.ActivityFlags;
var ActivityPlatform = import_v10.default.ActivityPlatform;
var ActivityType = import_v10.default.ActivityType;
var AllowedMentionsTypes = import_v10.default.AllowedMentionsTypes;
var ApplicationCommandOptionType = import_v10.default.ApplicationCommandOptionType;
var ApplicationCommandPermissionType = import_v10.default.ApplicationCommandPermissionType;
var ApplicationCommandType = import_v10.default.ApplicationCommandType;
var ApplicationFlags = import_v10.default.ApplicationFlags;
var ApplicationIntegrationType = import_v10.default.ApplicationIntegrationType;
var ApplicationRoleConnectionMetadataType = import_v10.default.ApplicationRoleConnectionMetadataType;
var ApplicationWebhookEventStatus = import_v10.default.ApplicationWebhookEventStatus;
var ApplicationWebhookEventType = import_v10.default.ApplicationWebhookEventType;
var ApplicationWebhookType = import_v10.default.ApplicationWebhookType;
var AttachmentFlags = import_v10.default.AttachmentFlags;
var AuditLogEvent = import_v10.default.AuditLogEvent;
var AuditLogOptionsType = import_v10.default.AuditLogOptionsType;
var AutoModerationActionType = import_v10.default.AutoModerationActionType;
var AutoModerationRuleEventType = import_v10.default.AutoModerationRuleEventType;
var AutoModerationRuleKeywordPresetType = import_v10.default.AutoModerationRuleKeywordPresetType;
var AutoModerationRuleTriggerType = import_v10.default.AutoModerationRuleTriggerType;
var ButtonStyle = import_v10.default.ButtonStyle;
var CDNRoutes = import_v10.default.CDNRoutes;
var ChannelFlags = import_v10.default.ChannelFlags;
var ChannelType = import_v10.default.ChannelType;
var ComponentType = import_v10.default.ComponentType;
var ConnectionService = import_v10.default.ConnectionService;
var ConnectionVisibility = import_v10.default.ConnectionVisibility;
var EmbedType = import_v10.default.EmbedType;
var EntitlementOwnerType = import_v10.default.EntitlementOwnerType;
var EntitlementType = import_v10.default.EntitlementType;
var EntryPointCommandHandlerType = import_v10.default.EntryPointCommandHandlerType;
var FormattingPatterns = import_v10.default.FormattingPatterns;
var ForumLayoutType = import_v10.default.ForumLayoutType;
var GatewayCloseCodes = import_v10.default.GatewayCloseCodes;
var GatewayDispatchEvents = import_v10.default.GatewayDispatchEvents;
var GatewayIntentBits = import_v10.default.GatewayIntentBits;
var GatewayOpcodes = import_v10.default.GatewayOpcodes;
var GatewayVersion = import_v10.default.GatewayVersion;
var GuildDefaultMessageNotifications = import_v10.default.GuildDefaultMessageNotifications;
var GuildExplicitContentFilter = import_v10.default.GuildExplicitContentFilter;
var GuildFeature = import_v10.default.GuildFeature;
var GuildHubType = import_v10.default.GuildHubType;
var GuildMFALevel = import_v10.default.GuildMFALevel;
var GuildMemberFlags = import_v10.default.GuildMemberFlags;
var GuildNSFWLevel = import_v10.default.GuildNSFWLevel;
var GuildOnboardingMode = import_v10.default.GuildOnboardingMode;
var GuildOnboardingPromptType = import_v10.default.GuildOnboardingPromptType;
var GuildPremiumTier = import_v10.default.GuildPremiumTier;
var GuildScheduledEventEntityType = import_v10.default.GuildScheduledEventEntityType;
var GuildScheduledEventPrivacyLevel = import_v10.default.GuildScheduledEventPrivacyLevel;
var GuildScheduledEventRecurrenceRuleFrequency = import_v10.default.GuildScheduledEventRecurrenceRuleFrequency;
var GuildScheduledEventRecurrenceRuleMonth = import_v10.default.GuildScheduledEventRecurrenceRuleMonth;
var GuildScheduledEventRecurrenceRuleWeekday = import_v10.default.GuildScheduledEventRecurrenceRuleWeekday;
var GuildScheduledEventStatus = import_v10.default.GuildScheduledEventStatus;
var GuildSystemChannelFlags = import_v10.default.GuildSystemChannelFlags;
var GuildVerificationLevel = import_v10.default.GuildVerificationLevel;
var GuildWidgetStyle = import_v10.default.GuildWidgetStyle;
var ImageFormat = import_v10.default.ImageFormat;
var IntegrationExpireBehavior = import_v10.default.IntegrationExpireBehavior;
var InteractionContextType = import_v10.default.InteractionContextType;
var InteractionResponseType = import_v10.default.InteractionResponseType;
var InteractionType = import_v10.default.InteractionType;
var InviteFlags = import_v10.default.InviteFlags;
var InviteTargetType = import_v10.default.InviteTargetType;
var InviteType = import_v10.default.InviteType;
var Locale = import_v10.default.Locale;
var MembershipScreeningFieldType = import_v10.default.MembershipScreeningFieldType;
var MessageActivityType = import_v10.default.MessageActivityType;
var MessageFlags = import_v10.default.MessageFlags;
var MessageReferenceType = import_v10.default.MessageReferenceType;
var MessageType = import_v10.default.MessageType;
var NameplatePalette = import_v10.default.NameplatePalette;
var OAuth2Routes = import_v10.default.OAuth2Routes;
var OAuth2Scopes = import_v10.default.OAuth2Scopes;
var OverwriteType = import_v10.default.OverwriteType;
var PermissionFlagsBits = import_v10.default.PermissionFlagsBits;
var PollLayoutType = import_v10.default.PollLayoutType;
var PresenceUpdateStatus = import_v10.default.PresenceUpdateStatus;
var RESTJSONErrorCodes = import_v10.default.RESTJSONErrorCodes;
var RPCCloseEventCodes = import_v10.default.RPCCloseEventCodes;
var RPCCommands = import_v10.default.RPCCommands;
var RPCDeviceType = import_v10.default.RPCDeviceType;
var RPCErrorCodes = import_v10.default.RPCErrorCodes;
var RPCEvents = import_v10.default.RPCEvents;
var RPCVersion = import_v10.default.RPCVersion;
var RPCVoiceSettingsModeType = import_v10.default.RPCVoiceSettingsModeType;
var RPCVoiceShortcutKeyComboKeyType = import_v10.default.RPCVoiceShortcutKeyComboKeyType;
var ReactionType = import_v10.default.ReactionType;
var RelationshipType = import_v10.default.RelationshipType;
var RoleFlags = import_v10.default.RoleFlags;
var RouteBases = import_v10.default.RouteBases;
var Routes = import_v10.default.Routes;
var SKUFlags = import_v10.default.SKUFlags;
var SKUType = import_v10.default.SKUType;
var SelectMenuDefaultValueType = import_v10.default.SelectMenuDefaultValueType;
var SeparatorSpacingSize = import_v10.default.SeparatorSpacingSize;
var SortOrderType = import_v10.default.SortOrderType;
var StageInstancePrivacyLevel = import_v10.default.StageInstancePrivacyLevel;
var StatusDisplayType = import_v10.default.StatusDisplayType;
var StickerFormatType = import_v10.default.StickerFormatType;
var StickerPackApplicationId = import_v10.default.StickerPackApplicationId;
var StickerType = import_v10.default.StickerType;
var SubscriptionStatus = import_v10.default.SubscriptionStatus;
var TeamMemberMembershipState = import_v10.default.TeamMemberMembershipState;
var TeamMemberRole = import_v10.default.TeamMemberRole;
var TextInputStyle = import_v10.default.TextInputStyle;
var ThreadAutoArchiveDuration = import_v10.default.ThreadAutoArchiveDuration;
var ThreadMemberFlags = import_v10.default.ThreadMemberFlags;
var UnfurledMediaItemLoadingState = import_v10.default.UnfurledMediaItemLoadingState;
var UserFlags = import_v10.default.UserFlags;
var UserPremiumType = import_v10.default.UserPremiumType;
var Utils = import_v10.default.Utils;
var VideoQualityMode = import_v10.default.VideoQualityMode;
var VoiceChannelEffectSendAnimationType = import_v10.default.VoiceChannelEffectSendAnimationType;
var VoiceConnectionStates = import_v10.default.VoiceConnectionStates;
var WebhookType = import_v10.default.WebhookType;
var urlSafeCharacters = import_v10.default.urlSafeCharacters;

// node_modules/@discordjs/util/dist/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __defProp4 = Object.defineProperty;
var __name4 = /* @__PURE__ */ __name((target, value) => __defProp4(target, "name", { value, configurable: true }), "__name");
function lazy(cb) {
  let defaultValue;
  return () => defaultValue ??= cb();
}
__name(lazy, "lazy");
__name4(lazy, "lazy");
function* range(range2) {
  let rangeEnd;
  let start = 0;
  let step = 1;
  if (typeof range2 === "number") {
    rangeEnd = range2;
  } else {
    start = range2.start;
    rangeEnd = range2.end;
    step = range2.step ?? 1;
  }
  for (let index = start; index < rangeEnd; index += step) {
    yield index;
  }
}
__name(range, "range");
__name4(range, "range");
function calculateShardId(guildId, shardCount) {
  return Number(BigInt(guildId) >> 22n) % shardCount;
}
__name(calculateShardId, "calculateShardId");
__name4(calculateShardId, "calculateShardId");
function shouldUseGlobalFetchAndWebSocket() {
  if (typeof globalThis.process === "undefined") {
    return "fetch" in globalThis && "WebSocket" in globalThis;
  }
  if ("versions" in globalThis.process) {
    return "deno" in globalThis.process.versions || "bun" in globalThis.process.versions;
  }
  return false;
}
__name(shouldUseGlobalFetchAndWebSocket, "shouldUseGlobalFetchAndWebSocket");
__name4(shouldUseGlobalFetchAndWebSocket, "shouldUseGlobalFetchAndWebSocket");
function getUserAgentAppendix() {
  if (typeof globalThis.EdgeRuntime !== "undefined") {
    return "Vercel-Edge-Functions";
  }
  if (typeof globalThis.R2 !== "undefined" && typeof globalThis.WebSocketPair !== "undefined") {
    return "Cloudflare-Workers";
  }
  if (typeof globalThis.Netlify !== "undefined") {
    return "Netlify-Edge-Functions";
  }
  if (typeof globalThis.process !== "object") {
    if (typeof globalThis.navigator === "object") {
      return globalThis.navigator.userAgent;
    }
    return "UnknownEnvironment";
  }
  if ("versions" in globalThis.process) {
    if ("deno" in globalThis.process.versions) {
      return `Deno/${globalThis.process.versions.deno}`;
    }
    if ("bun" in globalThis.process.versions) {
      return `Bun/${globalThis.process.versions.bun}`;
    }
    if ("node" in globalThis.process.versions) {
      return `Node.js/${globalThis.process.versions.node}`;
    }
  }
  return "UnknownEnvironment";
}
__name(getUserAgentAppendix, "getUserAgentAppendix");
__name4(getUserAgentAppendix, "getUserAgentAppendix");
function polyfillDispose() {
  Symbol.dispose ??= Symbol("Symbol.dispose");
  Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");
}
__name(polyfillDispose, "polyfillDispose");
__name4(polyfillDispose, "polyfillDispose");
function isJSONEncodable(maybeEncodable) {
  return maybeEncodable !== null && typeof maybeEncodable === "object" && "toJSON" in maybeEncodable;
}
__name(isJSONEncodable, "isJSONEncodable");
__name4(isJSONEncodable, "isJSONEncodable");
function isEquatable(maybeEquatable) {
  return maybeEquatable !== null && typeof maybeEquatable === "object" && "equals" in maybeEquatable;
}
__name(isEquatable, "isEquatable");
__name4(isEquatable, "isEquatable");
var GatewayRateLimitError = class _GatewayRateLimitError extends Error {
  static {
    __name(this, "_GatewayRateLimitError");
  }
  constructor(data, payload) {
    super(`Request with opcode ${data.opcode} was rate limited. Retry after ${data.retry_after} seconds.`);
    this.data = data;
    this.payload = payload;
  }
  static {
    __name4(this, "GatewayRateLimitError");
  }
  name = _GatewayRateLimitError.name;
};

// node_modules/@discordjs/builders/dist/index.mjs
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);

// node_modules/ts-mixer/dist/esm/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var copyProps = /* @__PURE__ */ __name((dest, src, exclude = []) => {
  const props = Object.getOwnPropertyDescriptors(src);
  for (let prop of exclude)
    delete props[prop];
  Object.defineProperties(dest, props);
}, "copyProps");
var protoChain = /* @__PURE__ */ __name((obj, currentChain = [obj]) => {
  const proto = Object.getPrototypeOf(obj);
  if (proto === null)
    return currentChain;
  return protoChain(proto, [...currentChain, proto]);
}, "protoChain");
var nearestCommonProto = /* @__PURE__ */ __name((...objs) => {
  if (objs.length === 0)
    return void 0;
  let commonProto = void 0;
  const protoChains = objs.map((obj) => protoChain(obj));
  while (protoChains.every((protoChain2) => protoChain2.length > 0)) {
    const protos = protoChains.map((protoChain2) => protoChain2.pop());
    const potentialCommonProto = protos[0];
    if (protos.every((proto) => proto === potentialCommonProto))
      commonProto = potentialCommonProto;
    else
      break;
  }
  return commonProto;
}, "nearestCommonProto");
var hardMixProtos = /* @__PURE__ */ __name((ingredients, constructor, exclude = []) => {
  var _a;
  const base = (_a = nearestCommonProto(...ingredients)) !== null && _a !== void 0 ? _a : Object.prototype;
  const mixedProto = Object.create(base);
  const visitedProtos = protoChain(base);
  for (let prototype of ingredients) {
    let protos = protoChain(prototype);
    for (let i3 = protos.length - 1; i3 >= 0; i3--) {
      let newProto = protos[i3];
      if (visitedProtos.indexOf(newProto) === -1) {
        copyProps(mixedProto, newProto, ["constructor", ...exclude]);
        visitedProtos.push(newProto);
      }
    }
  }
  mixedProto.constructor = constructor;
  return mixedProto;
}, "hardMixProtos");
var unique = /* @__PURE__ */ __name((arr) => arr.filter((e3, i3) => arr.indexOf(e3) == i3), "unique");
var getIngredientWithProp = /* @__PURE__ */ __name((prop, ingredients) => {
  const protoChains = ingredients.map((ingredient) => protoChain(ingredient));
  let protoDepth = 0;
  let protosAreLeftToSearch = true;
  while (protosAreLeftToSearch) {
    protosAreLeftToSearch = false;
    for (let i3 = ingredients.length - 1; i3 >= 0; i3--) {
      const searchTarget = protoChains[i3][protoDepth];
      if (searchTarget !== void 0 && searchTarget !== null) {
        protosAreLeftToSearch = true;
        if (Object.getOwnPropertyDescriptor(searchTarget, prop) != void 0) {
          return protoChains[i3][0];
        }
      }
    }
    protoDepth++;
  }
  return void 0;
}, "getIngredientWithProp");
var proxyMix = /* @__PURE__ */ __name((ingredients, prototype = Object.prototype) => new Proxy({}, {
  getPrototypeOf() {
    return prototype;
  },
  setPrototypeOf() {
    throw Error("Cannot set prototype of Proxies created by ts-mixer");
  },
  getOwnPropertyDescriptor(_2, prop) {
    return Object.getOwnPropertyDescriptor(getIngredientWithProp(prop, ingredients) || {}, prop);
  },
  defineProperty() {
    throw new Error("Cannot define new properties on Proxies created by ts-mixer");
  },
  has(_2, prop) {
    return getIngredientWithProp(prop, ingredients) !== void 0 || prototype[prop] !== void 0;
  },
  get(_2, prop) {
    return (getIngredientWithProp(prop, ingredients) || prototype)[prop];
  },
  set(_2, prop, val) {
    const ingredientWithProp = getIngredientWithProp(prop, ingredients);
    if (ingredientWithProp === void 0)
      throw new Error("Cannot set new properties on Proxies created by ts-mixer");
    ingredientWithProp[prop] = val;
    return true;
  },
  deleteProperty() {
    throw new Error("Cannot delete properties on Proxies created by ts-mixer");
  },
  ownKeys() {
    return ingredients.map(Object.getOwnPropertyNames).reduce((prev, curr) => curr.concat(prev.filter((key) => curr.indexOf(key) < 0)));
  }
}), "proxyMix");
var softMixProtos = /* @__PURE__ */ __name((ingredients, constructor) => proxyMix([...ingredients, { constructor }]), "softMixProtos");
var settings = {
  initFunction: null,
  staticsStrategy: "copy",
  prototypeStrategy: "copy",
  decoratorInheritance: "deep"
};
var mixins = /* @__PURE__ */ new WeakMap();
var getMixinsForClass = /* @__PURE__ */ __name((clazz) => mixins.get(clazz), "getMixinsForClass");
var registerMixins = /* @__PURE__ */ __name((mixedClass, constituents) => mixins.set(mixedClass, constituents), "registerMixins");
var mergeObjectsOfDecorators = /* @__PURE__ */ __name((o1, o22) => {
  var _a, _b;
  const allKeys = unique([...Object.getOwnPropertyNames(o1), ...Object.getOwnPropertyNames(o22)]);
  const mergedObject = {};
  for (let key of allKeys)
    mergedObject[key] = unique([...(_a = o1 === null || o1 === void 0 ? void 0 : o1[key]) !== null && _a !== void 0 ? _a : [], ...(_b = o22 === null || o22 === void 0 ? void 0 : o22[key]) !== null && _b !== void 0 ? _b : []]);
  return mergedObject;
}, "mergeObjectsOfDecorators");
var mergePropertyAndMethodDecorators = /* @__PURE__ */ __name((d1, d22) => {
  var _a, _b, _c, _d;
  return {
    property: mergeObjectsOfDecorators((_a = d1 === null || d1 === void 0 ? void 0 : d1.property) !== null && _a !== void 0 ? _a : {}, (_b = d22 === null || d22 === void 0 ? void 0 : d22.property) !== null && _b !== void 0 ? _b : {}),
    method: mergeObjectsOfDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.method) !== null && _c !== void 0 ? _c : {}, (_d = d22 === null || d22 === void 0 ? void 0 : d22.method) !== null && _d !== void 0 ? _d : {})
  };
}, "mergePropertyAndMethodDecorators");
var mergeDecorators = /* @__PURE__ */ __name((d1, d22) => {
  var _a, _b, _c, _d, _e, _f;
  return {
    class: unique([...(_a = d1 === null || d1 === void 0 ? void 0 : d1.class) !== null && _a !== void 0 ? _a : [], ...(_b = d22 === null || d22 === void 0 ? void 0 : d22.class) !== null && _b !== void 0 ? _b : []]),
    static: mergePropertyAndMethodDecorators((_c = d1 === null || d1 === void 0 ? void 0 : d1.static) !== null && _c !== void 0 ? _c : {}, (_d = d22 === null || d22 === void 0 ? void 0 : d22.static) !== null && _d !== void 0 ? _d : {}),
    instance: mergePropertyAndMethodDecorators((_e = d1 === null || d1 === void 0 ? void 0 : d1.instance) !== null && _e !== void 0 ? _e : {}, (_f = d22 === null || d22 === void 0 ? void 0 : d22.instance) !== null && _f !== void 0 ? _f : {})
  };
}, "mergeDecorators");
var decorators = /* @__PURE__ */ new Map();
var findAllConstituentClasses = /* @__PURE__ */ __name((...classes) => {
  var _a;
  const allClasses = /* @__PURE__ */ new Set();
  const frontier = /* @__PURE__ */ new Set([...classes]);
  while (frontier.size > 0) {
    for (let clazz of frontier) {
      const protoChainClasses = protoChain(clazz.prototype).map((proto) => proto.constructor);
      const mixinClasses = (_a = getMixinsForClass(clazz)) !== null && _a !== void 0 ? _a : [];
      const potentiallyNewClasses = [...protoChainClasses, ...mixinClasses];
      const newClasses = potentiallyNewClasses.filter((c3) => !allClasses.has(c3));
      for (let newClass of newClasses)
        frontier.add(newClass);
      allClasses.add(clazz);
      frontier.delete(clazz);
    }
  }
  return [...allClasses];
}, "findAllConstituentClasses");
var deepDecoratorSearch = /* @__PURE__ */ __name((...classes) => {
  const decoratorsForClassChain = findAllConstituentClasses(...classes).map((clazz) => decorators.get(clazz)).filter((decorators2) => !!decorators2);
  if (decoratorsForClassChain.length == 0)
    return {};
  if (decoratorsForClassChain.length == 1)
    return decoratorsForClassChain[0];
  return decoratorsForClassChain.reduce((d1, d22) => mergeDecorators(d1, d22));
}, "deepDecoratorSearch");
var directDecoratorSearch = /* @__PURE__ */ __name((...classes) => {
  const classDecorators = classes.map((clazz) => getDecoratorsForClass(clazz));
  if (classDecorators.length === 0)
    return {};
  if (classDecorators.length === 1)
    return classDecorators[0];
  return classDecorators.reduce((d1, d22) => mergeDecorators(d1, d22));
}, "directDecoratorSearch");
var getDecoratorsForClass = /* @__PURE__ */ __name((clazz) => {
  let decoratorsForClass = decorators.get(clazz);
  if (!decoratorsForClass) {
    decoratorsForClass = {};
    decorators.set(clazz, decoratorsForClass);
  }
  return decoratorsForClass;
}, "getDecoratorsForClass");
function Mixin(...constructors) {
  var _a, _b, _c;
  const prototypes = constructors.map((constructor) => constructor.prototype);
  const initFunctionName = settings.initFunction;
  if (initFunctionName !== null) {
    const initFunctions = prototypes.map((proto) => proto[initFunctionName]).filter((func) => typeof func === "function");
    const combinedInitFunction = /* @__PURE__ */ __name(function(...args) {
      for (let initFunction of initFunctions)
        initFunction.apply(this, args);
    }, "combinedInitFunction");
    const extraProto = { [initFunctionName]: combinedInitFunction };
    prototypes.push(extraProto);
  }
  function MixedClass(...args) {
    for (const constructor of constructors)
      copyProps(this, new constructor(...args));
    if (initFunctionName !== null && typeof this[initFunctionName] === "function")
      this[initFunctionName].apply(this, args);
  }
  __name(MixedClass, "MixedClass");
  MixedClass.prototype = settings.prototypeStrategy === "copy" ? hardMixProtos(prototypes, MixedClass) : softMixProtos(prototypes, MixedClass);
  Object.setPrototypeOf(MixedClass, settings.staticsStrategy === "copy" ? hardMixProtos(constructors, null, ["prototype"]) : proxyMix(constructors, Function.prototype));
  let DecoratedMixedClass = MixedClass;
  if (settings.decoratorInheritance !== "none") {
    const classDecorators = settings.decoratorInheritance === "deep" ? deepDecoratorSearch(...constructors) : directDecoratorSearch(...constructors);
    for (let decorator of (_a = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.class) !== null && _a !== void 0 ? _a : []) {
      const result = decorator(DecoratedMixedClass);
      if (result) {
        DecoratedMixedClass = result;
      }
    }
    applyPropAndMethodDecorators((_b = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.static) !== null && _b !== void 0 ? _b : {}, DecoratedMixedClass);
    applyPropAndMethodDecorators((_c = classDecorators === null || classDecorators === void 0 ? void 0 : classDecorators.instance) !== null && _c !== void 0 ? _c : {}, DecoratedMixedClass.prototype);
  }
  registerMixins(DecoratedMixedClass, constructors);
  return DecoratedMixedClass;
}
__name(Mixin, "Mixin");
var applyPropAndMethodDecorators = /* @__PURE__ */ __name((propAndMethodDecorators, target) => {
  const propDecorators = propAndMethodDecorators.property;
  const methodDecorators = propAndMethodDecorators.method;
  if (propDecorators)
    for (let key in propDecorators)
      for (let decorator of propDecorators[key])
        decorator(target, key);
  if (methodDecorators)
    for (let key in methodDecorators)
      for (let decorator of methodDecorators[key])
        decorator(target, key, Object.getOwnPropertyDescriptor(target, key));
}, "applyPropAndMethodDecorators");
var mix = /* @__PURE__ */ __name((...ingredients) => (decoratedClass) => {
  const mixedClass = Mixin(...ingredients.concat([decoratedClass]));
  Object.defineProperty(mixedClass, "name", {
    value: decoratedClass.name,
    writable: false
  });
  return mixedClass;
}, "mix");

// node_modules/@discordjs/builders/dist/index.mjs
var __defProp5 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __name5 = /* @__PURE__ */ __name((target, value) => __defProp5(target, "name", { value, configurable: true }), "__name");
var __export = /* @__PURE__ */ __name((target, all) => {
  for (var name in all)
    __defProp5(target, name, { get: all[name], enumerable: true });
}, "__export");
var __decorateClass = /* @__PURE__ */ __name((decorators2, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
  for (var i3 = decorators2.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators2[i3])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp5(target, key, result);
  return result;
}, "__decorateClass");
var Assertions_exports = {};
__export(Assertions_exports, {
  RGBPredicate: /* @__PURE__ */ __name(() => RGBPredicate, "RGBPredicate"),
  authorNamePredicate: /* @__PURE__ */ __name(() => authorNamePredicate, "authorNamePredicate"),
  colorPredicate: /* @__PURE__ */ __name(() => colorPredicate, "colorPredicate"),
  descriptionPredicate: /* @__PURE__ */ __name(() => descriptionPredicate, "descriptionPredicate"),
  embedAuthorPredicate: /* @__PURE__ */ __name(() => embedAuthorPredicate, "embedAuthorPredicate"),
  embedFieldPredicate: /* @__PURE__ */ __name(() => embedFieldPredicate, "embedFieldPredicate"),
  embedFieldsArrayPredicate: /* @__PURE__ */ __name(() => embedFieldsArrayPredicate, "embedFieldsArrayPredicate"),
  embedFooterPredicate: /* @__PURE__ */ __name(() => embedFooterPredicate, "embedFooterPredicate"),
  fieldInlinePredicate: /* @__PURE__ */ __name(() => fieldInlinePredicate, "fieldInlinePredicate"),
  fieldLengthPredicate: /* @__PURE__ */ __name(() => fieldLengthPredicate, "fieldLengthPredicate"),
  fieldNamePredicate: /* @__PURE__ */ __name(() => fieldNamePredicate, "fieldNamePredicate"),
  fieldValuePredicate: /* @__PURE__ */ __name(() => fieldValuePredicate, "fieldValuePredicate"),
  footerTextPredicate: /* @__PURE__ */ __name(() => footerTextPredicate, "footerTextPredicate"),
  imageURLPredicate: /* @__PURE__ */ __name(() => imageURLPredicate, "imageURLPredicate"),
  timestampPredicate: /* @__PURE__ */ __name(() => timestampPredicate, "timestampPredicate"),
  titlePredicate: /* @__PURE__ */ __name(() => titlePredicate, "titlePredicate"),
  urlPredicate: /* @__PURE__ */ __name(() => urlPredicate, "urlPredicate"),
  validateFieldLength: /* @__PURE__ */ __name(() => validateFieldLength, "validateFieldLength")
});
var validate = true;
function enableValidators() {
  return validate = true;
}
__name(enableValidators, "enableValidators");
__name5(enableValidators, "enableValidators");
function disableValidators() {
  return validate = false;
}
__name(disableValidators, "disableValidators");
__name5(disableValidators, "disableValidators");
function isValidationEnabled() {
  return validate;
}
__name(isValidationEnabled, "isValidationEnabled");
__name5(isValidationEnabled, "isValidationEnabled");
var fieldNamePredicate = s3.string().lengthLessThanOrEqual(256).setValidationEnabled(isValidationEnabled);
var fieldValuePredicate = s3.string().lengthLessThanOrEqual(1024).setValidationEnabled(isValidationEnabled);
var fieldInlinePredicate = s3.boolean().optional();
var embedFieldPredicate = s3.object({
  name: fieldNamePredicate,
  value: fieldValuePredicate,
  inline: fieldInlinePredicate
}).setValidationEnabled(isValidationEnabled);
var embedFieldsArrayPredicate = embedFieldPredicate.array().setValidationEnabled(isValidationEnabled);
var fieldLengthPredicate = s3.number().lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateFieldLength(amountAdding, fields) {
  fieldLengthPredicate.parse((fields?.length ?? 0) + amountAdding);
}
__name(validateFieldLength, "validateFieldLength");
__name5(validateFieldLength, "validateFieldLength");
var authorNamePredicate = fieldNamePredicate.lengthGreaterThanOrEqual(1).nullable().setValidationEnabled(isValidationEnabled);
var imageURLPredicate = s3.string().url({
  allowedProtocols: ["http:", "https:", "attachment:"]
}).nullish().setValidationEnabled(isValidationEnabled);
var urlPredicate = s3.string().url({
  allowedProtocols: ["http:", "https:"]
}).nullish().setValidationEnabled(isValidationEnabled);
var embedAuthorPredicate = s3.object({
  name: authorNamePredicate,
  iconURL: imageURLPredicate,
  url: urlPredicate
}).setValidationEnabled(isValidationEnabled);
var RGBPredicate = s3.number().int().greaterThanOrEqual(0).lessThanOrEqual(255).setValidationEnabled(isValidationEnabled);
var colorPredicate = s3.number().int().greaterThanOrEqual(0).lessThanOrEqual(16777215).or(s3.tuple([RGBPredicate, RGBPredicate, RGBPredicate])).nullable().setValidationEnabled(isValidationEnabled);
var descriptionPredicate = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(4096).nullable().setValidationEnabled(isValidationEnabled);
var footerTextPredicate = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(2048).nullable().setValidationEnabled(isValidationEnabled);
var embedFooterPredicate = s3.object({
  text: footerTextPredicate,
  iconURL: imageURLPredicate
}).setValidationEnabled(isValidationEnabled);
var timestampPredicate = s3.union([s3.number(), s3.date()]).nullable().setValidationEnabled(isValidationEnabled);
var titlePredicate = fieldNamePredicate.lengthGreaterThanOrEqual(1).nullable().setValidationEnabled(isValidationEnabled);
function normalizeArray(arr) {
  if (Array.isArray(arr[0])) return [...arr[0]];
  return arr;
}
__name(normalizeArray, "normalizeArray");
__name5(normalizeArray, "normalizeArray");
var EmbedBuilder = class {
  static {
    __name(this, "EmbedBuilder");
  }
  static {
    __name5(this, "EmbedBuilder");
  }
  /**
   * The API data associated with this embed.
   */
  data;
  /**
   * Creates a new embed from API data.
   *
   * @param data - The API data to create this embed with
   */
  constructor(data = {}) {
    this.data = { ...data };
    if (data.timestamp) this.data.timestamp = new Date(data.timestamp).toISOString();
  }
  /**
   * Appends fields to the embed.
   *
   * @remarks
   * This method accepts either an array of fields or a variable number of field parameters.
   * The maximum amount of fields that can be added is 25.
   * @example
   * Using an array:
   * ```ts
   * const fields: APIEmbedField[] = ...;
   * const embed = new EmbedBuilder()
   * 	.addFields(fields);
   * ```
   * @example
   * Using rest parameters (variadic):
   * ```ts
   * const embed = new EmbedBuilder()
   * 	.addFields(
   * 		{ name: 'Field 1', value: 'Value 1' },
   * 		{ name: 'Field 2', value: 'Value 2' },
   * 	);
   * ```
   * @param fields - The fields to add
   */
  addFields(...fields) {
    const normalizedFields = normalizeArray(fields);
    validateFieldLength(normalizedFields.length, this.data.fields);
    embedFieldsArrayPredicate.parse(normalizedFields);
    if (this.data.fields) this.data.fields.push(...normalizedFields);
    else this.data.fields = normalizedFields;
    return this;
  }
  /**
   * Removes, replaces, or inserts fields for this embed.
   *
   * @remarks
   * This method behaves similarly
   * to {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice | Array.prototype.splice()}.
   * The maximum amount of fields that can be added is 25.
   *
   * It's useful for modifying and adjusting order of the already-existing fields of an embed.
   * @example
   * Remove the first field:
   * ```ts
   * embed.spliceFields(0, 1);
   * ```
   * @example
   * Remove the first n fields:
   * ```ts
   * const n = 4;
   * embed.spliceFields(0, n);
   * ```
   * @example
   * Remove the last field:
   * ```ts
   * embed.spliceFields(-1, 1);
   * ```
   * @param index - The index to start at
   * @param deleteCount - The number of fields to remove
   * @param fields - The replacing field objects
   */
  spliceFields(index, deleteCount, ...fields) {
    validateFieldLength(fields.length - deleteCount, this.data.fields);
    embedFieldsArrayPredicate.parse(fields);
    if (this.data.fields) this.data.fields.splice(index, deleteCount, ...fields);
    else this.data.fields = fields;
    return this;
  }
  /**
   * Sets the fields for this embed.
   *
   * @remarks
   * This method is an alias for {@link EmbedBuilder.spliceFields}. More specifically,
   * it splices the entire array of fields, replacing them with the provided fields.
   *
   * You can set a maximum of 25 fields.
   * @param fields - The fields to set
   */
  setFields(...fields) {
    this.spliceFields(0, this.data.fields?.length ?? 0, ...normalizeArray(fields));
    return this;
  }
  /**
   * Sets the author of this embed.
   *
   * @param options - The options to use
   */
  setAuthor(options) {
    if (options === null) {
      this.data.author = void 0;
      return this;
    }
    embedAuthorPredicate.parse(options);
    this.data.author = { name: options.name, url: options.url, icon_url: options.iconURL };
    return this;
  }
  /**
   * Sets the color of this embed.
   *
   * @param color - The color to use
   */
  setColor(color) {
    colorPredicate.parse(color);
    if (Array.isArray(color)) {
      const [red, green, blue] = color;
      this.data.color = (red << 16) + (green << 8) + blue;
      return this;
    }
    this.data.color = color ?? void 0;
    return this;
  }
  /**
   * Sets the description of this embed.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    descriptionPredicate.parse(description);
    this.data.description = description ?? void 0;
    return this;
  }
  /**
   * Sets the footer of this embed.
   *
   * @param options - The footer to use
   */
  setFooter(options) {
    if (options === null) {
      this.data.footer = void 0;
      return this;
    }
    embedFooterPredicate.parse(options);
    this.data.footer = { text: options.text, icon_url: options.iconURL };
    return this;
  }
  /**
   * Sets the image of this embed.
   *
   * @param url - The image URL to use
   */
  setImage(url) {
    imageURLPredicate.parse(url);
    this.data.image = url ? { url } : void 0;
    return this;
  }
  /**
   * Sets the thumbnail of this embed.
   *
   * @param url - The thumbnail URL to use
   */
  setThumbnail(url) {
    imageURLPredicate.parse(url);
    this.data.thumbnail = url ? { url } : void 0;
    return this;
  }
  /**
   * Sets the timestamp of this embed.
   *
   * @param timestamp - The timestamp or date to use
   */
  setTimestamp(timestamp = Date.now()) {
    timestampPredicate.parse(timestamp);
    this.data.timestamp = timestamp ? new Date(timestamp).toISOString() : void 0;
    return this;
  }
  /**
   * Sets the title for this embed.
   *
   * @param title - The title to use
   */
  setTitle(title2) {
    titlePredicate.parse(title2);
    this.data.title = title2 ?? void 0;
    return this;
  }
  /**
   * Sets the URL of this embed.
   *
   * @param url - The URL to use
   */
  setURL(url) {
    urlPredicate.parse(url);
    this.data.url = url ?? void 0;
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    return { ...this.data };
  }
};
var Assertions_exports2 = {};
__export(Assertions_exports2, {
  buttonLabelValidator: /* @__PURE__ */ __name(() => buttonLabelValidator, "buttonLabelValidator"),
  buttonStyleValidator: /* @__PURE__ */ __name(() => buttonStyleValidator, "buttonStyleValidator"),
  channelTypesValidator: /* @__PURE__ */ __name(() => channelTypesValidator, "channelTypesValidator"),
  customIdValidator: /* @__PURE__ */ __name(() => customIdValidator, "customIdValidator"),
  defaultValidator: /* @__PURE__ */ __name(() => defaultValidator, "defaultValidator"),
  disabledValidator: /* @__PURE__ */ __name(() => disabledValidator, "disabledValidator"),
  emojiValidator: /* @__PURE__ */ __name(() => emojiValidator, "emojiValidator"),
  idValidator: /* @__PURE__ */ __name(() => idValidator, "idValidator"),
  jsonOptionValidator: /* @__PURE__ */ __name(() => jsonOptionValidator, "jsonOptionValidator"),
  labelValueDescriptionValidator: /* @__PURE__ */ __name(() => labelValueDescriptionValidator, "labelValueDescriptionValidator"),
  minMaxValidator: /* @__PURE__ */ __name(() => minMaxValidator, "minMaxValidator"),
  optionValidator: /* @__PURE__ */ __name(() => optionValidator, "optionValidator"),
  optionsLengthValidator: /* @__PURE__ */ __name(() => optionsLengthValidator, "optionsLengthValidator"),
  optionsValidator: /* @__PURE__ */ __name(() => optionsValidator, "optionsValidator"),
  placeholderValidator: /* @__PURE__ */ __name(() => placeholderValidator, "placeholderValidator"),
  urlValidator: /* @__PURE__ */ __name(() => urlValidator, "urlValidator"),
  validateRequiredButtonParameters: /* @__PURE__ */ __name(() => validateRequiredButtonParameters, "validateRequiredButtonParameters"),
  validateRequiredSelectMenuOptionParameters: /* @__PURE__ */ __name(() => validateRequiredSelectMenuOptionParameters, "validateRequiredSelectMenuOptionParameters"),
  validateRequiredSelectMenuParameters: /* @__PURE__ */ __name(() => validateRequiredSelectMenuParameters, "validateRequiredSelectMenuParameters")
});
var StringSelectMenuOptionBuilder = class {
  static {
    __name(this, "StringSelectMenuOptionBuilder");
  }
  /**
   * Creates a new string select menu option from API data.
   *
   * @param data - The API data to create this string select menu option with
   * @example
   * Creating a string select menu option from an API data object:
   * ```ts
   * const selectMenuOption = new SelectMenuOptionBuilder({
   * 	label: 'catchy label',
   * 	value: '1',
   * });
   * ```
   * @example
   * Creating a string select menu option using setters and API data:
   * ```ts
   * const selectMenuOption = new SelectMenuOptionBuilder({
   * 	default: true,
   * 	value: '1',
   * })
   * 	.setLabel('woah');
   * ```
   */
  constructor(data = {}) {
    this.data = data;
  }
  static {
    __name5(this, "StringSelectMenuOptionBuilder");
  }
  /**
   * Sets the label for this option.
   *
   * @param label - The label to use
   */
  setLabel(label) {
    this.data.label = labelValueDescriptionValidator.parse(label);
    return this;
  }
  /**
   * Sets the value for this option.
   *
   * @param value - The value to use
   */
  setValue(value) {
    this.data.value = labelValueDescriptionValidator.parse(value);
    return this;
  }
  /**
   * Sets the description for this option.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    this.data.description = labelValueDescriptionValidator.parse(description);
    return this;
  }
  /**
   * Sets whether this option is selected by default.
   *
   * @param isDefault - Whether this option is selected by default
   */
  setDefault(isDefault = true) {
    this.data.default = defaultValidator.parse(isDefault);
    return this;
  }
  /**
   * Sets the emoji to display for this option.
   *
   * @param emoji - The emoji to use
   */
  setEmoji(emoji) {
    this.data.emoji = emojiValidator.parse(emoji);
    return this;
  }
  /**
   * {@inheritDoc BaseSelectMenuBuilder.toJSON}
   */
  toJSON() {
    validateRequiredSelectMenuOptionParameters(this.data.label, this.data.value);
    return {
      ...this.data
    };
  }
};
var idValidator = s3.number().safeInt().greaterThanOrEqual(1).lessThan(4294967296).setValidationEnabled(isValidationEnabled);
var customIdValidator = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var emojiValidator = s3.object({
  id: s3.string(),
  name: s3.string(),
  animated: s3.boolean()
}).partial().strict().setValidationEnabled(isValidationEnabled);
var disabledValidator = s3.boolean();
var buttonLabelValidator = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(80).setValidationEnabled(isValidationEnabled);
var buttonStyleValidator = s3.nativeEnum(ButtonStyle);
var placeholderValidator = s3.string().lengthLessThanOrEqual(150).setValidationEnabled(isValidationEnabled);
var minMaxValidator = s3.number().int().greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
var labelValueDescriptionValidator = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var jsonOptionValidator = s3.object({
  label: labelValueDescriptionValidator,
  value: labelValueDescriptionValidator,
  description: labelValueDescriptionValidator.optional(),
  emoji: emojiValidator.optional(),
  default: s3.boolean().optional()
}).setValidationEnabled(isValidationEnabled);
var optionValidator = s3.instance(StringSelectMenuOptionBuilder).setValidationEnabled(isValidationEnabled);
var optionsValidator = optionValidator.array().lengthGreaterThanOrEqual(0).setValidationEnabled(isValidationEnabled);
var optionsLengthValidator = s3.number().int().greaterThanOrEqual(0).lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateRequiredSelectMenuParameters(options, customId) {
  customIdValidator.parse(customId);
  optionsValidator.parse(options);
}
__name(validateRequiredSelectMenuParameters, "validateRequiredSelectMenuParameters");
__name5(validateRequiredSelectMenuParameters, "validateRequiredSelectMenuParameters");
var defaultValidator = s3.boolean();
function validateRequiredSelectMenuOptionParameters(label, value) {
  labelValueDescriptionValidator.parse(label);
  labelValueDescriptionValidator.parse(value);
}
__name(validateRequiredSelectMenuOptionParameters, "validateRequiredSelectMenuOptionParameters");
__name5(validateRequiredSelectMenuOptionParameters, "validateRequiredSelectMenuOptionParameters");
var channelTypesValidator = s3.nativeEnum(ChannelType).array().setValidationEnabled(isValidationEnabled);
var urlValidator = s3.string().url({
  allowedProtocols: ["http:", "https:", "discord:"]
}).setValidationEnabled(isValidationEnabled);
function validateRequiredButtonParameters(style, label, emoji, customId, skuId, url) {
  if (style === ButtonStyle.Premium) {
    if (!skuId) {
      throw new RangeError("Premium buttons must have an SKU id.");
    }
    if (customId || label || url || emoji) {
      throw new RangeError("Premium buttons cannot have a custom id, label, URL, or emoji.");
    }
  } else {
    if (skuId) {
      throw new RangeError("Non-premium buttons must not have an SKU id.");
    }
    if (url && customId) {
      throw new RangeError("URL and custom id are mutually exclusive.");
    }
    if (!label && !emoji) {
      throw new RangeError("Non-premium buttons must have a label and/or an emoji.");
    }
    if (style === ButtonStyle.Link) {
      if (!url) {
        throw new RangeError("Link buttons must have a URL.");
      }
    } else if (url) {
      throw new RangeError("Non-premium and non-link buttons cannot have a URL.");
    }
  }
}
__name(validateRequiredButtonParameters, "validateRequiredButtonParameters");
__name5(validateRequiredButtonParameters, "validateRequiredButtonParameters");
var ComponentBuilder = class {
  static {
    __name(this, "ComponentBuilder");
  }
  static {
    __name5(this, "ComponentBuilder");
  }
  /**
   * The API data associated with this component.
   */
  data;
  /**
   * Constructs a new kind of component.
   *
   * @param data - The data to construct a component out of
   */
  constructor(data) {
    this.data = data;
  }
  /**
   * Sets the id (not the custom id) for this component.
   *
   * @param id - The id for this component
   */
  setId(id) {
    this.data.id = idValidator.parse(id);
    return this;
  }
  /**
   * Clears the id of this component, defaulting to a default incremented id.
   */
  clearId() {
    this.data.id = void 0;
    return this;
  }
};
var ButtonBuilder = class extends ComponentBuilder {
  static {
    __name(this, "ButtonBuilder");
  }
  static {
    __name5(this, "ButtonBuilder");
  }
  /**
   * Creates a new button from API data.
   *
   * @param data - The API data to create this button with
   * @example
   * Creating a button from an API data object:
   * ```ts
   * const button = new ButtonBuilder({
   * 	custom_id: 'a cool button',
   * 	style: ButtonStyle.Primary,
   * 	label: 'Click Me',
   * 	emoji: {
   * 		name: 'smile',
   * 		id: '123456789012345678',
   * 	},
   * });
   * ```
   * @example
   * Creating a button using setters and API data:
   * ```ts
   * const button = new ButtonBuilder({
   * 	style: ButtonStyle.Secondary,
   * 	label: 'Click Me',
   * })
   * 	.setEmoji({ name: '🙂' })
   * 	.setCustomId('another cool button');
   * ```
   */
  constructor(data) {
    super({ type: ComponentType.Button, ...data });
  }
  /**
   * Sets the style of this button.
   *
   * @param style - The style to use
   */
  setStyle(style) {
    this.data.style = buttonStyleValidator.parse(style);
    return this;
  }
  /**
   * Sets the URL for this button.
   *
   * @remarks
   * This method is only available to buttons using the `Link` button style.
   * Only three types of URL schemes are currently supported: `https://`, `http://`, and `discord://`.
   * @param url - The URL to use
   */
  setURL(url) {
    this.data.url = urlValidator.parse(url);
    return this;
  }
  /**
   * Sets the custom id for this button.
   *
   * @remarks
   * This method is only applicable to buttons that are not using the `Link` button style.
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Sets the SKU id that represents a purchasable SKU for this button.
   *
   * @remarks Only available when using premium-style buttons.
   * @param skuId - The SKU id to use
   */
  setSKUId(skuId) {
    this.data.sku_id = skuId;
    return this;
  }
  /**
   * Sets the emoji to display on this button.
   *
   * @param emoji - The emoji to use
   */
  setEmoji(emoji) {
    this.data.emoji = emojiValidator.parse(emoji);
    return this;
  }
  /**
   * Sets whether this button is disabled.
   *
   * @param disabled - Whether to disable this button
   */
  setDisabled(disabled = true) {
    this.data.disabled = disabledValidator.parse(disabled);
    return this;
  }
  /**
   * Sets the label for this button.
   *
   * @param label - The label to use
   */
  setLabel(label) {
    this.data.label = buttonLabelValidator.parse(label);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateRequiredButtonParameters(
      this.data.style,
      this.data.label,
      this.data.emoji,
      this.data.custom_id,
      this.data.sku_id,
      this.data.url
    );
    return {
      ...this.data
    };
  }
};
var Assertions_exports3 = {};
__export(Assertions_exports3, {
  fileUploadPredicate: /* @__PURE__ */ __name(() => fileUploadPredicate, "fileUploadPredicate")
});
var fileUploadPredicate = s3.object({
  type: s3.literal(ComponentType.FileUpload),
  id: idValidator.optional(),
  custom_id: customIdValidator,
  min_values: s3.number().greaterThanOrEqual(0).lessThanOrEqual(10).optional(),
  max_values: s3.number().greaterThanOrEqual(1).lessThanOrEqual(10).optional(),
  required: s3.boolean().optional()
});
var FileUploadBuilder = class extends ComponentBuilder {
  static {
    __name(this, "FileUploadBuilder");
  }
  static {
    __name5(this, "FileUploadBuilder");
  }
  /**
   * Creates a new file upload.
   *
   * @param data - The API data to create this file upload with
   * @example
   * Creating a file upload from an API data object:
   * ```ts
   * const fileUpload = new FileUploadBuilder({
   * 	custom_id: "file_upload",
   *  min_values: 2,
   *  max_values: 5,
   * });
   * ```
   * @example
   * Creating a file upload using setters and API data:
   * ```ts
   * const fileUpload = new FileUploadBuilder({
   * 	custom_id: "file_upload",
   *  min_values: 2,
   *  max_values: 5,
   * }).setRequired();
   * ```
   */
  constructor(data = {}) {
    super({ type: ComponentType.FileUpload, ...data });
  }
  /**
   * Sets the custom id for this file upload.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customId;
    return this;
  }
  /**
   * Sets the minimum number of file uploads required.
   *
   * @param minValues - The minimum values that must be uploaded
   */
  setMinValues(minValues) {
    this.data.min_values = minValues;
    return this;
  }
  /**
   * Clears the minimum values.
   */
  clearMinValues() {
    this.data.min_values = void 0;
    return this;
  }
  /**
   * Sets the maximum number of file uploads required.
   *
   * @param maxValues - The maximum values that can be uploaded
   */
  setMaxValues(maxValues) {
    this.data.max_values = maxValues;
    return this;
  }
  /**
   * Clears the maximum values.
   */
  clearMaxValues() {
    this.data.max_values = void 0;
    return this;
  }
  /**
   * Sets whether this file upload is required.
   *
   * @param required - Whether this file upload is required
   */
  setRequired(required = true) {
    this.data.required = required;
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    fileUploadPredicate.parse(this.data);
    return this.data;
  }
};
var Assertions_exports4 = {};
__export(Assertions_exports4, {
  labelValidator: /* @__PURE__ */ __name(() => labelValidator, "labelValidator"),
  maxLengthValidator: /* @__PURE__ */ __name(() => maxLengthValidator, "maxLengthValidator"),
  minLengthValidator: /* @__PURE__ */ __name(() => minLengthValidator, "minLengthValidator"),
  placeholderValidator: /* @__PURE__ */ __name(() => placeholderValidator2, "placeholderValidator"),
  requiredValidator: /* @__PURE__ */ __name(() => requiredValidator, "requiredValidator"),
  textInputPredicate: /* @__PURE__ */ __name(() => textInputPredicate, "textInputPredicate"),
  textInputStyleValidator: /* @__PURE__ */ __name(() => textInputStyleValidator, "textInputStyleValidator"),
  validateRequiredParameters: /* @__PURE__ */ __name(() => validateRequiredParameters, "validateRequiredParameters"),
  valueValidator: /* @__PURE__ */ __name(() => valueValidator, "valueValidator")
});
var textInputStyleValidator = s3.nativeEnum(TextInputStyle).setValidationEnabled(isValidationEnabled);
var minLengthValidator = s3.number().int().greaterThanOrEqual(0).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var maxLengthValidator = s3.number().int().greaterThanOrEqual(1).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var requiredValidator = s3.boolean().setValidationEnabled(isValidationEnabled);
var valueValidator = s3.string().lengthLessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var placeholderValidator2 = s3.string().lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var labelValidator = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
var textInputPredicate = s3.object({
  type: s3.literal(ComponentType.TextInput),
  custom_id: customIdValidator,
  style: textInputStyleValidator,
  id: idValidator.optional(),
  min_length: minLengthValidator.optional(),
  max_length: maxLengthValidator.optional(),
  placeholder: placeholderValidator2.optional(),
  value: valueValidator.optional(),
  required: requiredValidator.optional()
}).setValidationEnabled(isValidationEnabled);
function validateRequiredParameters(customId, style) {
  customIdValidator.parse(customId);
  textInputStyleValidator.parse(style);
}
__name(validateRequiredParameters, "validateRequiredParameters");
__name5(validateRequiredParameters, "validateRequiredParameters");
var BaseSelectMenuBuilder = class extends ComponentBuilder {
  static {
    __name(this, "BaseSelectMenuBuilder");
  }
  static {
    __name5(this, "BaseSelectMenuBuilder");
  }
  /**
   * Sets the placeholder for this select menu.
   *
   * @param placeholder - The placeholder to use
   */
  setPlaceholder(placeholder) {
    this.data.placeholder = placeholderValidator.parse(placeholder);
    return this;
  }
  /**
   * Sets the minimum values that must be selected in the select menu.
   *
   * @param minValues - The minimum values that must be selected
   */
  setMinValues(minValues) {
    this.data.min_values = minMaxValidator.parse(minValues);
    return this;
  }
  /**
   * Sets the maximum values that can be selected in the select menu.
   *
   * @param maxValues - The maximum values that can be selected
   */
  setMaxValues(maxValues) {
    this.data.max_values = minMaxValidator.parse(maxValues);
    return this;
  }
  /**
   * Sets the custom id for this select menu.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Sets whether this select menu is disabled.
   *
   * @param disabled - Whether this select menu is disabled
   */
  setDisabled(disabled = true) {
    this.data.disabled = disabledValidator.parse(disabled);
    return this;
  }
  /**
   * Sets whether this select menu is required.
   *
   * @remarks Only for use in modals.
   * @param required - Whether this select menu is required
   */
  setRequired(required = true) {
    this.data.required = requiredValidator.parse(required);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    customIdValidator.parse(this.data.custom_id);
    return {
      ...this.data
    };
  }
};
var ChannelSelectMenuBuilder = class extends BaseSelectMenuBuilder {
  static {
    __name(this, "ChannelSelectMenuBuilder");
  }
  static {
    __name5(this, "ChannelSelectMenuBuilder");
  }
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new ChannelSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new ChannelSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
   * 	.setMinValues(2);
   * ```
   */
  constructor(data) {
    super({ ...data, type: ComponentType.ChannelSelect });
  }
  /**
   * Adds channel types to this select menu.
   *
   * @param types - The channel types to use
   */
  addChannelTypes(...types) {
    const normalizedTypes = normalizeArray(types);
    this.data.channel_types ??= [];
    this.data.channel_types.push(...channelTypesValidator.parse(normalizedTypes));
    return this;
  }
  /**
   * Sets channel types for this select menu.
   *
   * @param types - The channel types to use
   */
  setChannelTypes(...types) {
    const normalizedTypes = normalizeArray(types);
    this.data.channel_types ??= [];
    this.data.channel_types.splice(0, this.data.channel_types.length, ...channelTypesValidator.parse(normalizedTypes));
    return this;
  }
  /**
   * Adds default channels to this auto populated select menu.
   *
   * @param channels - The channels to add
   */
  addDefaultChannels(...channels) {
    const normalizedValues = normalizeArray(channels);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    this.data.default_values ??= [];
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.Channel
      }))
    );
    return this;
  }
  /**
   * Sets default channels for this auto populated select menu.
   *
   * @param channels - The channels to set
   */
  setDefaultChannels(...channels) {
    const normalizedValues = normalizeArray(channels);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.Channel
    }));
    return this;
  }
  /**
   * {@inheritDoc BaseSelectMenuBuilder.toJSON}
   */
  toJSON() {
    customIdValidator.parse(this.data.custom_id);
    return {
      ...this.data
    };
  }
};
var MentionableSelectMenuBuilder = class extends BaseSelectMenuBuilder {
  static {
    __name(this, "MentionableSelectMenuBuilder");
  }
  static {
    __name5(this, "MentionableSelectMenuBuilder");
  }
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new MentionableSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new MentionableSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1);
   * ```
   */
  constructor(data) {
    super({ ...data, type: ComponentType.MentionableSelect });
  }
  /**
   * Adds default roles to this auto populated select menu.
   *
   * @param roles - The roles to add
   */
  addDefaultRoles(...roles) {
    const normalizedValues = normalizeArray(roles);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    this.data.default_values ??= [];
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.Role
      }))
    );
    return this;
  }
  /**
   * Adds default users to this auto populated select menu.
   *
   * @param users - The users to add
   */
  addDefaultUsers(...users) {
    const normalizedValues = normalizeArray(users);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    this.data.default_values ??= [];
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.User
      }))
    );
    return this;
  }
  /**
   * Adds default values to this auto populated select menu.
   *
   * @param values - The values to add
   */
  addDefaultValues(...values) {
    const normalizedValues = normalizeArray(values);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    this.data.default_values ??= [];
    this.data.default_values.push(...normalizedValues);
    return this;
  }
  /**
   * Sets default values for this auto populated select menu.
   *
   * @param values - The values to set
   */
  setDefaultValues(...values) {
    const normalizedValues = normalizeArray(values);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues;
    return this;
  }
};
var RoleSelectMenuBuilder = class extends BaseSelectMenuBuilder {
  static {
    __name(this, "RoleSelectMenuBuilder");
  }
  static {
    __name5(this, "RoleSelectMenuBuilder");
  }
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new RoleSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new RoleSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1);
   * ```
   */
  constructor(data) {
    super({ ...data, type: ComponentType.RoleSelect });
  }
  /**
   * Adds default roles to this auto populated select menu.
   *
   * @param roles - The roles to add
   */
  addDefaultRoles(...roles) {
    const normalizedValues = normalizeArray(roles);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    this.data.default_values ??= [];
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.Role
      }))
    );
    return this;
  }
  /**
   * Sets default roles for this auto populated select menu.
   *
   * @param roles - The roles to set
   */
  setDefaultRoles(...roles) {
    const normalizedValues = normalizeArray(roles);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.Role
    }));
    return this;
  }
};
var Assertions_exports5 = {};
__export(Assertions_exports5, {
  selectMenuChannelPredicate: /* @__PURE__ */ __name(() => selectMenuChannelPredicate, "selectMenuChannelPredicate"),
  selectMenuMentionablePredicate: /* @__PURE__ */ __name(() => selectMenuMentionablePredicate, "selectMenuMentionablePredicate"),
  selectMenuRolePredicate: /* @__PURE__ */ __name(() => selectMenuRolePredicate, "selectMenuRolePredicate"),
  selectMenuStringOptionPredicate: /* @__PURE__ */ __name(() => selectMenuStringOptionPredicate, "selectMenuStringOptionPredicate"),
  selectMenuStringPredicate: /* @__PURE__ */ __name(() => selectMenuStringPredicate, "selectMenuStringPredicate"),
  selectMenuUserPredicate: /* @__PURE__ */ __name(() => selectMenuUserPredicate, "selectMenuUserPredicate")
});
var selectMenuBasePredicate = s3.object({
  id: idValidator.optional(),
  placeholder: s3.string().lengthLessThanOrEqual(150).optional(),
  min_values: s3.number().greaterThanOrEqual(0).lessThanOrEqual(25).optional(),
  max_values: s3.number().greaterThanOrEqual(0).lessThanOrEqual(25).optional(),
  custom_id: customIdValidator,
  disabled: s3.boolean().optional()
});
var selectMenuChannelPredicate = selectMenuBasePredicate.extend({
  type: s3.literal(ComponentType.ChannelSelect),
  channel_types: s3.nativeEnum(ChannelType).array().optional(),
  default_values: s3.object({ id: s3.string(), type: s3.literal(SelectMenuDefaultValueType.Channel) }).array().lengthLessThanOrEqual(25).optional()
}).setValidationEnabled(isValidationEnabled);
var selectMenuMentionablePredicate = selectMenuBasePredicate.extend({
  type: s3.literal(ComponentType.MentionableSelect),
  default_values: s3.object({
    id: s3.string(),
    type: s3.union([s3.literal(SelectMenuDefaultValueType.Role), s3.literal(SelectMenuDefaultValueType.User)])
  }).array().lengthLessThanOrEqual(25).optional()
}).setValidationEnabled(isValidationEnabled);
var selectMenuRolePredicate = selectMenuBasePredicate.extend({
  type: s3.literal(ComponentType.RoleSelect),
  default_values: s3.object({ id: s3.string(), type: s3.literal(SelectMenuDefaultValueType.Role) }).array().lengthLessThanOrEqual(25).optional()
}).setValidationEnabled(isValidationEnabled);
var selectMenuUserPredicate = selectMenuBasePredicate.extend({
  type: s3.literal(ComponentType.UserSelect),
  default_values: s3.object({ id: s3.string(), type: s3.literal(SelectMenuDefaultValueType.User) }).array().lengthLessThanOrEqual(25).optional()
}).setValidationEnabled(isValidationEnabled);
var selectMenuStringOptionPredicate = s3.object({
  label: s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100),
  value: s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100),
  description: s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).optional(),
  emoji: emojiValidator.optional(),
  default: s3.boolean().optional()
}).setValidationEnabled(isValidationEnabled);
var selectMenuStringPredicate = selectMenuBasePredicate.extend({
  type: s3.literal(ComponentType.StringSelect),
  options: selectMenuStringOptionPredicate.array().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(25)
}).reshape((value) => {
  if (value.min_values !== void 0 && value.options.length < value.min_values) {
    return Result.err(new RangeError(`The number of options must be greater than or equal to min_values`));
  }
  if (value.min_values !== void 0 && value.max_values !== void 0 && value.min_values > value.max_values) {
    return Result.err(
      new RangeError(`The maximum amount of options must be greater than or equal to the minimum amount of options`)
    );
  }
  return Result.ok(value);
}).setValidationEnabled(isValidationEnabled);
var StringSelectMenuBuilder = class extends BaseSelectMenuBuilder {
  static {
    __name(this, "StringSelectMenuBuilder");
  }
  static {
    __name5(this, "StringSelectMenuBuilder");
  }
  /**
   * The options within this select menu.
   */
  options;
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new StringSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * 	options: [
   * 		{ label: 'option 1', value: '1' },
   * 		{ label: 'option 2', value: '2' },
   * 		{ label: 'option 3', value: '3' },
   * 	],
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new StringSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1)
   * 	.addOptions({
   * 		label: 'Catchy',
   * 		value: 'catch',
   * 	});
   * ```
   */
  constructor(data) {
    const { options, ...initData } = data ?? {};
    super({ ...initData, type: ComponentType.StringSelect });
    this.options = options?.map((option) => new StringSelectMenuOptionBuilder(option)) ?? [];
  }
  /**
   * Adds options to this select menu.
   *
   * @param options - The options to add
   */
  addOptions(...options) {
    const normalizedOptions = normalizeArray(options);
    optionsLengthValidator.parse(this.options.length + normalizedOptions.length);
    this.options.push(
      ...normalizedOptions.map(
        (normalizedOption) => normalizedOption instanceof StringSelectMenuOptionBuilder ? normalizedOption : new StringSelectMenuOptionBuilder(selectMenuStringOptionPredicate.parse(normalizedOption))
      )
    );
    return this;
  }
  /**
   * Sets the options for this select menu.
   *
   * @param options - The options to set
   */
  setOptions(...options) {
    return this.spliceOptions(0, this.options.length, ...options);
  }
  /**
   * Removes, replaces, or inserts options for this select menu.
   *
   * @remarks
   * This method behaves similarly
   * to {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice | Array.prototype.splice()}.
   * It's useful for modifying and adjusting the order of existing options.
   * @example
   * Remove the first option:
   * ```ts
   * selectMenu.spliceOptions(0, 1);
   * ```
   * @example
   * Remove the first n option:
   * ```ts
   * const n = 4;
   * selectMenu.spliceOptions(0, n);
   * ```
   * @example
   * Remove the last option:
   * ```ts
   * selectMenu.spliceOptions(-1, 1);
   * ```
   * @param index - The index to start at
   * @param deleteCount - The number of options to remove
   * @param options - The replacing option objects or builders
   */
  spliceOptions(index, deleteCount, ...options) {
    const normalizedOptions = normalizeArray(options);
    const clone = [...this.options];
    clone.splice(
      index,
      deleteCount,
      ...normalizedOptions.map(
        (normalizedOption) => normalizedOption instanceof StringSelectMenuOptionBuilder ? normalizedOption : new StringSelectMenuOptionBuilder(selectMenuStringOptionPredicate.parse(normalizedOption))
      )
    );
    optionsLengthValidator.parse(clone.length);
    this.options.splice(0, this.options.length, ...clone);
    return this;
  }
  /**
   * {@inheritDoc BaseSelectMenuBuilder.toJSON}
   */
  toJSON() {
    validateRequiredSelectMenuParameters(this.options, this.data.custom_id);
    return {
      ...this.data,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
var UserSelectMenuBuilder = class extends BaseSelectMenuBuilder {
  static {
    __name(this, "UserSelectMenuBuilder");
  }
  static {
    __name5(this, "UserSelectMenuBuilder");
  }
  /**
   * Creates a new select menu from API data.
   *
   * @param data - The API data to create this select menu with
   * @example
   * Creating a select menu from an API data object:
   * ```ts
   * const selectMenu = new UserSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * 	placeholder: 'select an option',
   * 	max_values: 2,
   * });
   * ```
   * @example
   * Creating a select menu using setters and API data:
   * ```ts
   * const selectMenu = new UserSelectMenuBuilder({
   * 	custom_id: 'a cool select menu',
   * })
   * 	.setMinValues(1);
   * ```
   */
  constructor(data) {
    super({ ...data, type: ComponentType.UserSelect });
  }
  /**
   * Adds default users to this auto populated select menu.
   *
   * @param users - The users to add
   */
  addDefaultUsers(...users) {
    const normalizedValues = normalizeArray(users);
    optionsLengthValidator.parse((this.data.default_values?.length ?? 0) + normalizedValues.length);
    this.data.default_values ??= [];
    this.data.default_values.push(
      ...normalizedValues.map((id) => ({
        id,
        type: SelectMenuDefaultValueType.User
      }))
    );
    return this;
  }
  /**
   * Sets default users for this auto populated select menu.
   *
   * @param users - The users to set
   */
  setDefaultUsers(...users) {
    const normalizedValues = normalizeArray(users);
    optionsLengthValidator.parse(normalizedValues.length);
    this.data.default_values = normalizedValues.map((id) => ({
      id,
      type: SelectMenuDefaultValueType.User
    }));
    return this;
  }
};
var TextInputBuilder = class extends ComponentBuilder {
  static {
    __name(this, "TextInputBuilder");
  }
  static {
    __name5(this, "TextInputBuilder");
  }
  /**
   * Creates a new text input from API data.
   *
   * @param data - The API data to create this text input with
   * @example
   * Creating a text input from an API data object:
   * ```ts
   * const textInput = new TextInputBuilder({
   * 	custom_id: 'a cool text input',
   * 	placeholder: 'Type something',
   * 	style: TextInputStyle.Short,
   * });
   * ```
   * @example
   * Creating a text input using setters and API data:
   * ```ts
   * const textInput = new TextInputBuilder({
   * 	placeholder: 'Type something else',
   * })
   * 	.setCustomId('woah')
   * 	.setStyle(TextInputStyle.Paragraph);
   * ```
   */
  constructor(data) {
    super({ type: ComponentType.TextInput, ...data });
  }
  /**
   * Sets the custom id for this text input.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Sets the label for this text input.
   *
   * @param label - The label to use
   * @deprecated Use a label builder to create a label (and optionally a description) instead.
   */
  setLabel(label) {
    this.data.label = labelValidator.parse(label);
    return this;
  }
  /**
   * Sets the style for this text input.
   *
   * @param style - The style to use
   */
  setStyle(style) {
    this.data.style = textInputStyleValidator.parse(style);
    return this;
  }
  /**
   * Sets the minimum length of text for this text input.
   *
   * @param minLength - The minimum length of text for this text input
   */
  setMinLength(minLength) {
    this.data.min_length = minLengthValidator.parse(minLength);
    return this;
  }
  /**
   * Sets the maximum length of text for this text input.
   *
   * @param maxLength - The maximum length of text for this text input
   */
  setMaxLength(maxLength) {
    this.data.max_length = maxLengthValidator.parse(maxLength);
    return this;
  }
  /**
   * Sets the placeholder for this text input.
   *
   * @param placeholder - The placeholder to use
   */
  setPlaceholder(placeholder) {
    this.data.placeholder = placeholderValidator2.parse(placeholder);
    return this;
  }
  /**
   * Sets the value for this text input.
   *
   * @param value - The value to use
   */
  setValue(value) {
    this.data.value = valueValidator.parse(value);
    return this;
  }
  /**
   * Sets whether this text input is required.
   *
   * @param required - Whether this text input is required
   */
  setRequired(required = true) {
    this.data.required = requiredValidator.parse(required);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateRequiredParameters(this.data.custom_id, this.data.style);
    return {
      ...this.data
    };
  }
  /**
   * Whether this is equal to another structure.
   */
  equals(other) {
    if (isJSONEncodable(other)) {
      return (0, import_fast_deep_equal.default)(other.toJSON(), this.data);
    }
    return (0, import_fast_deep_equal.default)(other, this.data);
  }
};
var Assertions_exports6 = {};
__export(Assertions_exports6, {
  labelPredicate: /* @__PURE__ */ __name(() => labelPredicate, "labelPredicate")
});
var labelPredicate = s3.object({
  id: idValidator.optional(),
  type: s3.literal(ComponentType.Label),
  label: s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45),
  description: s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).optional(),
  component: s3.union([
    textInputPredicate,
    selectMenuUserPredicate,
    selectMenuRolePredicate,
    selectMenuMentionablePredicate,
    selectMenuChannelPredicate,
    selectMenuStringPredicate,
    fileUploadPredicate
  ])
}).setValidationEnabled(isValidationEnabled);
var LabelBuilder = class extends ComponentBuilder {
  static {
    __name(this, "LabelBuilder");
  }
  static {
    __name5(this, "LabelBuilder");
  }
  /**
   * @internal
   */
  data;
  /**
   * Creates a new label.
   *
   * @param data - The API data to create this label with
   * @example
   * Creating a label from an API data object:
   * ```ts
   * const label = new LabelBuilder({
   * 	label: "label",
   * 	component,
   * });
   * ```
   * @example
   * Creating a label using setters and API data:
   * ```ts
   * const label = new LabelBuilder({
   * 	label: 'label',
   * 	component,
   * }).setLabel('new text');
   * ```
   */
  constructor(data = {}) {
    super({ type: ComponentType.Label });
    const { component, ...rest } = data;
    this.data = {
      ...rest,
      component: component ? createComponentBuilder(component) : void 0,
      type: ComponentType.Label
    };
  }
  /**
   * Sets the label for this label.
   *
   * @param label - The label to use
   */
  setLabel(label) {
    this.data.label = label;
    return this;
  }
  /**
   * Sets the description for this label.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    this.data.description = description;
    return this;
  }
  /**
   * Clears the description for this label.
   */
  clearDescription() {
    this.data.description = void 0;
    return this;
  }
  /**
   * Sets a string select menu component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setStringSelectMenuComponent(input) {
    this.data.component = resolveBuilder(input, StringSelectMenuBuilder);
    return this;
  }
  /**
   * Sets a user select menu component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setUserSelectMenuComponent(input) {
    this.data.component = resolveBuilder(input, UserSelectMenuBuilder);
    return this;
  }
  /**
   * Sets a role select menu component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setRoleSelectMenuComponent(input) {
    this.data.component = resolveBuilder(input, RoleSelectMenuBuilder);
    return this;
  }
  /**
   * Sets a mentionable select menu component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setMentionableSelectMenuComponent(input) {
    this.data.component = resolveBuilder(input, MentionableSelectMenuBuilder);
    return this;
  }
  /**
   * Sets a channel select menu component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setChannelSelectMenuComponent(input) {
    this.data.component = resolveBuilder(input, ChannelSelectMenuBuilder);
    return this;
  }
  /**
   * Sets a text input component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setTextInputComponent(input) {
    this.data.component = resolveBuilder(input, TextInputBuilder);
    return this;
  }
  /**
   * Sets a file upload component to this label.
   *
   * @param input - A function that returns a component builder or an already built builder
   */
  setFileUploadComponent(input) {
    this.data.component = resolveBuilder(input, FileUploadBuilder);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    const { component, ...rest } = this.data;
    const data = {
      ...rest,
      // The label predicate validates the component.
      component: component?.toJSON()
    };
    labelPredicate.parse(data);
    return data;
  }
};
var Assertions_exports7 = {};
__export(Assertions_exports7, {
  accessoryPredicate: /* @__PURE__ */ __name(() => accessoryPredicate, "accessoryPredicate"),
  assertReturnOfBuilder: /* @__PURE__ */ __name(() => assertReturnOfBuilder, "assertReturnOfBuilder"),
  containerColorPredicate: /* @__PURE__ */ __name(() => containerColorPredicate, "containerColorPredicate"),
  descriptionPredicate: /* @__PURE__ */ __name(() => descriptionPredicate2, "descriptionPredicate"),
  dividerPredicate: /* @__PURE__ */ __name(() => dividerPredicate, "dividerPredicate"),
  filePredicate: /* @__PURE__ */ __name(() => filePredicate, "filePredicate"),
  spacingPredicate: /* @__PURE__ */ __name(() => spacingPredicate, "spacingPredicate"),
  spoilerPredicate: /* @__PURE__ */ __name(() => spoilerPredicate, "spoilerPredicate"),
  textDisplayContentPredicate: /* @__PURE__ */ __name(() => textDisplayContentPredicate, "textDisplayContentPredicate"),
  unfurledMediaItemPredicate: /* @__PURE__ */ __name(() => unfurledMediaItemPredicate, "unfurledMediaItemPredicate"),
  validateComponentArray: /* @__PURE__ */ __name(() => validateComponentArray, "validateComponentArray")
});
var ThumbnailBuilder = class extends ComponentBuilder {
  static {
    __name(this, "ThumbnailBuilder");
  }
  static {
    __name5(this, "ThumbnailBuilder");
  }
  /**
   * Creates a new thumbnail from API data.
   *
   * @param data - The API data to create this thumbnail with
   * @example
   * Creating a thumbnail from an API data object:
   * ```ts
   * const thumbnail = new ThumbnailBuilder({
   * 	description: 'some text',
   *  media: {
   *      url: 'https://cdn.discordapp.com/embed/avatars/4.png',
   *  },
   * });
   * ```
   * @example
   * Creating a thumbnail using setters and API data:
   * ```ts
   * const thumbnail = new ThumbnailBuilder({
   * 	media: {
   *      url: 'attachment://image.png',
   *  },
   * })
   * 	.setDescription('alt text');
   * ```
   */
  constructor(data = {}) {
    super({
      type: ComponentType.Thumbnail,
      ...data,
      media: data.media ? { url: data.media.url } : void 0
    });
  }
  /**
   * Sets the description of this thumbnail.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    this.data.description = descriptionPredicate2.parse(description);
    return this;
  }
  /**
   * Clears the description of this thumbnail.
   */
  clearDescription() {
    this.data.description = void 0;
    return this;
  }
  /**
   * Sets the spoiler status of this thumbnail.
   *
   * @param spoiler - The spoiler status to use
   */
  setSpoiler(spoiler2 = true) {
    this.data.spoiler = spoilerPredicate.parse(spoiler2);
    return this;
  }
  /**
   * Sets the media URL of this thumbnail.
   *
   * @param url - The URL to use
   */
  setURL(url) {
    this.data.media = unfurledMediaItemPredicate.parse({ url });
    return this;
  }
  /**
   * {@inheritdoc ComponentBuilder.toJSON}
   */
  toJSON() {
    unfurledMediaItemPredicate.parse(this.data.media);
    return { ...this.data };
  }
};
var unfurledMediaItemPredicate = s3.object({
  url: s3.string().url(
    { allowedProtocols: ["http:", "https:", "attachment:"] },
    { message: "Invalid protocol for media URL. Must be http:, https:, or attachment:" }
  )
}).setValidationEnabled(isValidationEnabled);
var descriptionPredicate2 = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(1024).setValidationEnabled(isValidationEnabled);
var filePredicate = s3.object({
  url: s3.string().url({ allowedProtocols: ["attachment:"] }, { message: "Invalid protocol for file URL. Must be attachment:" })
}).setValidationEnabled(isValidationEnabled);
var spoilerPredicate = s3.boolean();
var dividerPredicate = s3.boolean();
var spacingPredicate = s3.nativeEnum(SeparatorSpacingSize);
var textDisplayContentPredicate = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
var accessoryPredicate = s3.instance(ButtonBuilder).or(s3.instance(ThumbnailBuilder)).setValidationEnabled(isValidationEnabled);
var containerColorPredicate = colorPredicate.nullish();
function assertReturnOfBuilder(input, ExpectedInstanceOf) {
  s3.instance(ExpectedInstanceOf).setValidationEnabled(isValidationEnabled).parse(input);
}
__name(assertReturnOfBuilder, "assertReturnOfBuilder");
__name5(assertReturnOfBuilder, "assertReturnOfBuilder");
function validateComponentArray(input, min, max, ExpectedInstanceOf) {
  (ExpectedInstanceOf ? s3.instance(ExpectedInstanceOf) : s3.instance(ComponentBuilder)).array().lengthGreaterThanOrEqual(min).lengthLessThanOrEqual(max).setValidationEnabled(isValidationEnabled).parse(input);
}
__name(validateComponentArray, "validateComponentArray");
__name5(validateComponentArray, "validateComponentArray");
var FileBuilder = class extends ComponentBuilder {
  static {
    __name(this, "FileBuilder");
  }
  static {
    __name5(this, "FileBuilder");
  }
  /**
   * Creates a new file from API data.
   *
   * @param data - The API data to create this file with
   * @example
   * Creating a file from an API data object:
   * ```ts
   * const file = new FileBuilder({
   * 	spoiler: true,
   * 	file: {
   * 		url: 'attachment://file.png',
   * 	},
   * });
   * ```
   * @example
   * Creating a file using setters and API data:
   * ```ts
   * const file = new FileBuilder({
   * 	file: {
   * 		url: 'attachment://image.jpg',
   * 	},
   * })
   * 	.setSpoiler(false);
   * ```
   */
  constructor(data = {}) {
    super({ type: ComponentType.File, ...data, file: data.file ? { url: data.file.url } : void 0 });
  }
  /**
   * Sets the spoiler status of this file.
   *
   * @param spoiler - The spoiler status to use
   */
  setSpoiler(spoiler2 = true) {
    this.data.spoiler = spoilerPredicate.parse(spoiler2);
    return this;
  }
  /**
   * Sets the media URL of this file.
   *
   * @param url - The URL to use
   */
  setURL(url) {
    this.data.file = filePredicate.parse({ url });
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    filePredicate.parse(this.data.file);
    return { ...this.data, file: { ...this.data.file } };
  }
};
var SeparatorBuilder = class extends ComponentBuilder {
  static {
    __name(this, "SeparatorBuilder");
  }
  static {
    __name5(this, "SeparatorBuilder");
  }
  /**
   * Creates a new separator from API data.
   *
   * @param data - The API data to create this separator with
   * @example
   * Creating a separator from an API data object:
   * ```ts
   * const separator = new SeparatorBuilder({
   * 	spacing: SeparatorSpacingSize.Small,
   *  divider: true,
   * });
   * ```
   * @example
   * Creating a separator using setters and API data:
   * ```ts
   * const separator = new SeparatorBuilder({
   * 	spacing: SeparatorSpacingSize.Large,
   * })
   * 	.setDivider(false);
   * ```
   */
  constructor(data = {}) {
    super({
      type: ComponentType.Separator,
      ...data
    });
  }
  /**
   * Sets whether this separator should show a divider line.
   *
   * @param divider - Whether to show a divider line
   */
  setDivider(divider = true) {
    this.data.divider = dividerPredicate.parse(divider);
    return this;
  }
  /**
   * Sets the spacing of this separator.
   *
   * @param spacing - The spacing to use
   */
  setSpacing(spacing) {
    this.data.spacing = spacingPredicate.parse(spacing);
    return this;
  }
  /**
   * Clears the spacing of this separator.
   */
  clearSpacing() {
    this.data.spacing = void 0;
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    return { ...this.data };
  }
};
var TextDisplayBuilder = class extends ComponentBuilder {
  static {
    __name(this, "TextDisplayBuilder");
  }
  static {
    __name5(this, "TextDisplayBuilder");
  }
  /**
   * Creates a new text display from API data.
   *
   * @param data - The API data to create this text display with
   * @example
   * Creating a text display from an API data object:
   * ```ts
   * const textDisplay = new TextDisplayBuilder({
   * 	content: 'some text',
   * });
   * ```
   * @example
   * Creating a text display using setters and API data:
   * ```ts
   * const textDisplay = new TextDisplayBuilder({
   * 	content: 'old text',
   * })
   * 	.setContent('new text');
   * ```
   */
  constructor(data = {}) {
    super({
      type: ComponentType.TextDisplay,
      ...data
    });
  }
  /**
   * Sets the text of this text display.
   *
   * @param content - The text to use
   */
  setContent(content) {
    this.data.content = textDisplayContentPredicate.parse(content);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    textDisplayContentPredicate.parse(this.data.content);
    return { ...this.data };
  }
};
var ContainerBuilder = class extends ComponentBuilder {
  static {
    __name(this, "ContainerBuilder");
  }
  static {
    __name5(this, "ContainerBuilder");
  }
  /**
   * The components within this container.
   */
  components;
  /**
   * Creates a new container from API data.
   *
   * @param data - The API data to create this container with
   * @example
   * Creating a container from an API data object:
   * ```ts
   * const container = new ContainerBuilder({
   * 	components: [
   * 		{
   * 			content: "Some text here",
   * 			type: ComponentType.TextDisplay,
   * 		},
   * 	],
   * });
   * ```
   * @example
   * Creating a container using setters and API data:
   * ```ts
   * const container = new ContainerBuilder({
   * 	components: [
   * 		{
   * 			content: "# Heading",
   * 			type: ComponentType.TextDisplay,
   * 		},
   * 	],
   * })
   *  .addSeparatorComponents(separator)
   *  .addSectionComponents(section);
   * ```
   */
  constructor({ components, ...data } = {}) {
    super({ type: ComponentType.Container, ...data });
    this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
  }
  /**
   * Sets the accent color of this container.
   *
   * @param color - The color to use
   */
  setAccentColor(color) {
    containerColorPredicate.parse(color);
    if (Array.isArray(color)) {
      const [red, green, blue] = color;
      this.data.accent_color = (red << 16) + (green << 8) + blue;
      return this;
    }
    this.data.accent_color = color;
    return this;
  }
  /**
   * Clears the accent color of this container.
   */
  clearAccentColor() {
    this.data.accent_color = void 0;
    return this;
  }
  /**
   * Adds action row components to this container.
   *
   * @param components - The action row components to add
   */
  addActionRowComponents(...components) {
    this.components.push(
      ...normalizeArray(components).map((component) => resolveBuilder(component, ActionRowBuilder))
    );
    return this;
  }
  /**
   * Adds file components to this container.
   *
   * @param components - The file components to add
   */
  addFileComponents(...components) {
    this.components.push(...normalizeArray(components).map((component) => resolveBuilder(component, FileBuilder)));
    return this;
  }
  /**
   * Adds media gallery components to this container.
   *
   * @param components - The media gallery components to add
   */
  addMediaGalleryComponents(...components) {
    this.components.push(
      ...normalizeArray(components).map((component) => resolveBuilder(component, MediaGalleryBuilder))
    );
    return this;
  }
  /**
   * Adds section components to this container.
   *
   * @param components - The section components to add
   */
  addSectionComponents(...components) {
    this.components.push(...normalizeArray(components).map((component) => resolveBuilder(component, SectionBuilder)));
    return this;
  }
  /**
   * Adds separator components to this container.
   *
   * @param components - The separator components to add
   */
  addSeparatorComponents(...components) {
    this.components.push(...normalizeArray(components).map((component) => resolveBuilder(component, SeparatorBuilder)));
    return this;
  }
  /**
   * Adds text display components to this container.
   *
   * @param components - The text display components to add
   */
  addTextDisplayComponents(...components) {
    this.components.push(
      ...normalizeArray(components).map((component) => resolveBuilder(component, TextDisplayBuilder))
    );
    return this;
  }
  /**
   * Removes, replaces, or inserts components for this container.
   *
   * @param index - The index to start removing, replacing or inserting components
   * @param deleteCount - The amount of components to remove
   * @param components - The components to set
   */
  spliceComponents(index, deleteCount, ...components) {
    this.components.splice(
      index,
      deleteCount,
      ...normalizeArray(components).map(
        (component) => component instanceof ComponentBuilder ? component : createComponentBuilder(component)
      )
    );
    return this;
  }
  /**
   * Sets the spoiler status of this container.
   *
   * @param spoiler - The spoiler status to use
   */
  setSpoiler(spoiler2 = true) {
    this.data.spoiler = spoilerPredicate.parse(spoiler2);
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
};
var MediaGalleryItemBuilder = class {
  static {
    __name(this, "MediaGalleryItemBuilder");
  }
  static {
    __name5(this, "MediaGalleryItemBuilder");
  }
  /**
   * The API data associated with this media gallery item.
   */
  data;
  /**
   * Creates a new media gallery item from API data.
   *
   * @param data - The API data to create this media gallery item with
   * @example
   * Creating a media gallery item from an API data object:
   * ```ts
   * const item = new MediaGalleryItemBuilder({
   * 	description: "Some text here",
   * 	media: {
   * 		url: 'https://cdn.discordapp.com/embed/avatars/2.png',
   * 	},
   * });
   * ```
   * @example
   * Creating a media gallery item using setters and API data:
   * ```ts
   * const item = new MediaGalleryItemBuilder({
   * 	media: {
   * 		url: 'https://cdn.discordapp.com/embed/avatars/5.png',
   * 	},
   * })
   * 	.setDescription("alt text");
   * ```
   */
  constructor(data = {}) {
    this.data = data;
  }
  /**
   * Sets the description of this media gallery item.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    this.data.description = descriptionPredicate2.parse(description);
    return this;
  }
  /**
   * Clears the description of this media gallery item.
   */
  clearDescription() {
    this.data.description = void 0;
    return this;
  }
  /**
   * Sets the spoiler status of this media gallery item.
   *
   * @param spoiler - The spoiler status to use
   */
  setSpoiler(spoiler2 = true) {
    this.data.spoiler = spoilerPredicate.parse(spoiler2);
    return this;
  }
  /**
   * Sets the media URL of this media gallery item.
   *
   * @param url - The URL to use
   */
  setURL(url) {
    this.data.media = unfurledMediaItemPredicate.parse({ url });
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    unfurledMediaItemPredicate.parse(this.data.media);
    return { ...this.data };
  }
};
var MediaGalleryBuilder = class extends ComponentBuilder {
  static {
    __name(this, "MediaGalleryBuilder");
  }
  static {
    __name5(this, "MediaGalleryBuilder");
  }
  /**
   * The components within this container.
   */
  items;
  /**
   * Creates a new media gallery from API data.
   *
   * @param data - The API data to create this media gallery with
   * @example
   * Creating a media gallery from an API data object:
   * ```ts
   * const mediaGallery = new MediaGalleryBuilder({
   * 	items: [
   * 		{
   * 			description: "Some text here",
   * 			media: {
   * 				url: 'https://cdn.discordapp.com/embed/avatars/2.png',
   * 			},
   * 		},
   * 	],
   * });
   * ```
   * @example
   * Creating a media gallery using setters and API data:
   * ```ts
   * const mediaGallery = new MediaGalleryBuilder({
   * 	items: [
   * 		{
   * 			description: "alt text",
   * 			media: {
   * 				url: 'https://cdn.discordapp.com/embed/avatars/5.png',
   * 			},
   * 		},
   * 	],
   * })
   * 	.addItems(item2, item3);
   * ```
   */
  constructor({ items, ...data } = {}) {
    super({ type: ComponentType.MediaGallery, ...data });
    this.items = items?.map((item) => new MediaGalleryItemBuilder(item)) ?? [];
  }
  /**
   * Adds items to this media gallery.
   *
   * @param items - The items to add
   */
  addItems(...items) {
    this.items.push(
      ...normalizeArray(items).map((input) => {
        const result = resolveBuilder(input, MediaGalleryItemBuilder);
        assertReturnOfBuilder(result, MediaGalleryItemBuilder);
        return result;
      })
    );
    return this;
  }
  /**
   * Removes, replaces, or inserts media gallery items for this media gallery.
   *
   * @param index - The index to start removing, replacing or inserting items
   * @param deleteCount - The amount of items to remove
   * @param items - The items to insert
   */
  spliceItems(index, deleteCount, ...items) {
    this.items.splice(
      index,
      deleteCount,
      ...normalizeArray(items).map((input) => {
        const result = resolveBuilder(input, MediaGalleryItemBuilder);
        assertReturnOfBuilder(result, MediaGalleryItemBuilder);
        return result;
      })
    );
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateComponentArray(this.items, 1, 10, MediaGalleryItemBuilder);
    return {
      ...this.data,
      items: this.items.map((item) => item.toJSON())
    };
  }
};
var SectionBuilder = class extends ComponentBuilder {
  static {
    __name(this, "SectionBuilder");
  }
  static {
    __name5(this, "SectionBuilder");
  }
  /**
   * The components within this section.
   */
  components;
  /**
   * The accessory of this section.
   */
  accessory;
  /**
   * Creates a new section from API data.
   *
   * @param data - The API data to create this section with
   * @example
   * Creating a section from an API data object:
   * ```ts
   * const section = new SectionBuilder({
   * 	components: [
   * 		{
   * 			content: "Some text here",
   * 			type: ComponentType.TextDisplay,
   * 		},
   * 	],
   *  accessory: {
   *      media: {
   *          url: 'https://cdn.discordapp.com/embed/avatars/3.png',
   *      },
   *  }
   * });
   * ```
   * @example
   * Creating a section using setters and API data:
   * ```ts
   * const section = new SectionBuilder({
   * 	components: [
   * 		{
   * 			content: "# Heading",
   * 			type: ComponentType.TextDisplay,
   * 		},
   * 	],
   * })
   * 	.setPrimaryButtonAccessory(button);
   * ```
   */
  constructor({ components, accessory, ...data } = {}) {
    super({ type: ComponentType.Section, ...data });
    this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
    this.accessory = accessory ? createComponentBuilder(accessory) : void 0;
  }
  /**
   * Sets the accessory of this section to a button.
   *
   * @param accessory - The accessory to use
   */
  setButtonAccessory(accessory) {
    Reflect.set(this, "accessory", accessoryPredicate.parse(resolveBuilder(accessory, ButtonBuilder)));
    return this;
  }
  /**
   * Sets the accessory of this section to a thumbnail.
   *
   * @param accessory - The accessory to use
   */
  setThumbnailAccessory(accessory) {
    Reflect.set(this, "accessory", accessoryPredicate.parse(resolveBuilder(accessory, ThumbnailBuilder)));
    return this;
  }
  /**
   * Adds text display components to this section.
   *
   * @param components - The text display components to add
   */
  addTextDisplayComponents(...components) {
    this.components.push(
      ...normalizeArray(components).map((input) => {
        const result = resolveBuilder(input, TextDisplayBuilder);
        assertReturnOfBuilder(result, TextDisplayBuilder);
        return result;
      })
    );
    return this;
  }
  /**
   * Removes, replaces, or inserts text display components for this section.
   *
   * @param index - The index to start removing, replacing or inserting text display components
   * @param deleteCount - The amount of text display components to remove
   * @param components - The text display components to insert
   */
  spliceTextDisplayComponents(index, deleteCount, ...components) {
    this.components.splice(
      index,
      deleteCount,
      ...normalizeArray(components).map((input) => {
        const result = resolveBuilder(input, TextDisplayBuilder);
        assertReturnOfBuilder(result, TextDisplayBuilder);
        return result;
      })
    );
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateComponentArray(this.components, 1, 3, TextDisplayBuilder);
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON()),
      accessory: accessoryPredicate.parse(this.accessory).toJSON()
    };
  }
};
function createComponentBuilder(data) {
  if (data instanceof ComponentBuilder) {
    return data;
  }
  switch (data.type) {
    case ComponentType.ActionRow:
      return new ActionRowBuilder(data);
    case ComponentType.Button:
      return new ButtonBuilder(data);
    case ComponentType.StringSelect:
      return new StringSelectMenuBuilder(data);
    case ComponentType.TextInput:
      return new TextInputBuilder(data);
    case ComponentType.UserSelect:
      return new UserSelectMenuBuilder(data);
    case ComponentType.RoleSelect:
      return new RoleSelectMenuBuilder(data);
    case ComponentType.MentionableSelect:
      return new MentionableSelectMenuBuilder(data);
    case ComponentType.ChannelSelect:
      return new ChannelSelectMenuBuilder(data);
    case ComponentType.File:
      return new FileBuilder(data);
    case ComponentType.Container:
      return new ContainerBuilder(data);
    case ComponentType.Section:
      return new SectionBuilder(data);
    case ComponentType.Separator:
      return new SeparatorBuilder(data);
    case ComponentType.TextDisplay:
      return new TextDisplayBuilder(data);
    case ComponentType.Thumbnail:
      return new ThumbnailBuilder(data);
    case ComponentType.MediaGallery:
      return new MediaGalleryBuilder(data);
    case ComponentType.Label:
      return new LabelBuilder(data);
    case ComponentType.FileUpload:
      return new FileUploadBuilder(data);
    default:
      throw new Error(`Cannot properly serialize component type: ${data.type}`);
  }
}
__name(createComponentBuilder, "createComponentBuilder");
__name5(createComponentBuilder, "createComponentBuilder");
function isBuilder(builder, Constructor) {
  return builder instanceof Constructor;
}
__name(isBuilder, "isBuilder");
__name5(isBuilder, "isBuilder");
function resolveBuilder(builder, Constructor) {
  if (isBuilder(builder, Constructor)) {
    return builder;
  }
  if (typeof builder === "function") {
    return builder(new Constructor());
  }
  return new Constructor(builder);
}
__name(resolveBuilder, "resolveBuilder");
__name5(resolveBuilder, "resolveBuilder");
var ActionRowBuilder = class extends ComponentBuilder {
  static {
    __name(this, "ActionRowBuilder");
  }
  static {
    __name5(this, "ActionRowBuilder");
  }
  /**
   * The components within this action row.
   */
  components;
  /**
   * Creates a new action row from API data.
   *
   * @param data - The API data to create this action row with
   * @example
   * Creating an action row from an API data object:
   * ```ts
   * const actionRow = new ActionRowBuilder({
   * 	components: [
   * 		{
   * 			custom_id: "custom id",
   * 			label: "Type something",
   * 			style: TextInputStyle.Short,
   * 			type: ComponentType.TextInput,
   * 		},
   * 	],
   * });
   * ```
   * @example
   * Creating an action row using setters and API data:
   * ```ts
   * const actionRow = new ActionRowBuilder({
   * 	components: [
   * 		{
   * 			custom_id: "custom id",
   * 			label: "Click me",
   * 			style: ButtonStyle.Primary,
   * 			type: ComponentType.Button,
   * 		},
   * 	],
   * })
   * 	.addComponents(button2, button3);
   * ```
   */
  constructor({ components, ...data } = {}) {
    super({ type: ComponentType.ActionRow, ...data });
    this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
  }
  /**
   * Adds components to this action row.
   *
   * @param components - The components to add
   */
  addComponents(...components) {
    this.components.push(...normalizeArray(components));
    return this;
  }
  /**
   * Sets components for this action row.
   *
   * @param components - The components to set
   */
  setComponents(...components) {
    this.components.splice(0, this.components.length, ...normalizeArray(components));
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
};
var Assertions_exports8 = {};
__export(Assertions_exports8, {
  componentsValidator: /* @__PURE__ */ __name(() => componentsValidator, "componentsValidator"),
  titleValidator: /* @__PURE__ */ __name(() => titleValidator, "titleValidator"),
  validateRequiredParameters: /* @__PURE__ */ __name(() => validateRequiredParameters2, "validateRequiredParameters")
});
var titleValidator = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
var componentsValidator = s3.union([s3.instance(ActionRowBuilder), s3.instance(LabelBuilder), s3.instance(TextDisplayBuilder)]).array().lengthGreaterThanOrEqual(1).setValidationEnabled(isValidationEnabled);
function validateRequiredParameters2(customId, title2, components) {
  customIdValidator.parse(customId);
  titleValidator.parse(title2);
  componentsValidator.parse(components);
}
__name(validateRequiredParameters2, "validateRequiredParameters2");
__name5(validateRequiredParameters2, "validateRequiredParameters");
var ModalBuilder = class {
  static {
    __name(this, "ModalBuilder");
  }
  static {
    __name5(this, "ModalBuilder");
  }
  /**
   * The API data associated with this modal.
   */
  data;
  /**
   * The components within this modal.
   */
  components = [];
  /**
   * Creates a new modal from API data.
   *
   * @param data - The API data to create this modal with
   */
  constructor({ components, ...data } = {}) {
    this.data = { ...data };
    this.components = components?.map((component) => createComponentBuilder(component)) ?? [];
  }
  /**
   * Sets the title of this modal.
   *
   * @param title - The title to use
   */
  setTitle(title2) {
    this.data.title = titleValidator.parse(title2);
    return this;
  }
  /**
   * Sets the custom id of this modal.
   *
   * @param customId - The custom id to use
   */
  setCustomId(customId) {
    this.data.custom_id = customIdValidator.parse(customId);
    return this;
  }
  /**
   * Adds components to this modal.
   *
   * @param components - The components to add
   * @deprecated Use {@link ModalBuilder.addLabelComponents} or {@link ModalBuilder.addTextDisplayComponents} instead
   */
  addComponents(...components) {
    this.components.push(
      ...normalizeArray(components).map((component, idx) => {
        if (component instanceof ActionRowBuilder || component instanceof LabelBuilder || component instanceof TextDisplayBuilder) {
          return component;
        }
        if (component instanceof TextInputBuilder) {
          return new ActionRowBuilder().addComponents(component);
        }
        if ("type" in component) {
          if (component.type === ComponentType.ActionRow) {
            return new ActionRowBuilder(component);
          }
          if (component.type === ComponentType.Label) {
            return new LabelBuilder(component);
          }
          if (component.type === ComponentType.TextDisplay) {
            return new TextDisplayBuilder(component);
          }
          if (component.type === ComponentType.TextInput) {
            return new ActionRowBuilder().addComponents(
              new TextInputBuilder(component)
            );
          }
        }
        throw new TypeError(`Invalid component passed in ModalBuilder.addComponents at index ${idx}!`);
      })
    );
    return this;
  }
  /**
   * Adds label components to this modal.
   *
   * @param components - The components to add
   */
  addLabelComponents(...components) {
    const normalized = normalizeArray(components);
    const resolved = normalized.map((label) => resolveBuilder(label, LabelBuilder));
    this.components.push(...resolved);
    return this;
  }
  /**
   * Adds text display components to this modal.
   *
   * @param components - The components to add
   */
  addTextDisplayComponents(...components) {
    const normalized = normalizeArray(components);
    const resolved = normalized.map((row) => resolveBuilder(row, TextDisplayBuilder));
    this.components.push(...resolved);
    return this;
  }
  /**
   * Adds action rows to this modal.
   *
   * @param components - The components to add
   * @deprecated Use {@link ModalBuilder.addLabelComponents} instead
   */
  addActionRowComponents(...components) {
    const normalized = normalizeArray(components);
    const resolved = normalized.map((row) => resolveBuilder(row, ActionRowBuilder));
    this.components.push(...resolved);
    return this;
  }
  /**
   * Sets the labels for this modal.
   *
   * @param components - The components to set
   */
  setLabelComponents(...components) {
    const normalized = normalizeArray(components);
    this.spliceLabelComponents(0, this.components.length, ...normalized);
    return this;
  }
  /**
   * Removes, replaces, or inserts labels for this modal.
   *
   * @remarks
   * This method behaves similarly
   * to {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice | Array.prototype.splice()}.
   * The maximum amount of labels that can be added is 5.
   *
   * It's useful for modifying and adjusting order of the already-existing labels of a modal.
   * @example
   * Remove the first label:
   * ```ts
   * modal.spliceLabelComponents(0, 1);
   * ```
   * @example
   * Remove the first n labels:
   * ```ts
   * const n = 4;
   * modal.spliceLabelComponents(0, n);
   * ```
   * @example
   * Remove the last label:
   * ```ts
   * modal.spliceLabelComponents(-1, 1);
   * ```
   * @param index - The index to start at
   * @param deleteCount - The number of labels to remove
   * @param labels - The replacing label objects
   */
  spliceLabelComponents(index, deleteCount, ...labels) {
    const resolved = labels.map((label) => resolveBuilder(label, LabelBuilder));
    this.components.splice(index, deleteCount, ...resolved);
    return this;
  }
  /**
   * Sets components for this modal.
   *
   * @param components - The components to set
   * @deprecated Use {@link ModalBuilder.setLabelComponents} instead
   */
  setComponents(...components) {
    this.components.splice(0, this.components.length, ...normalizeArray(components));
    return this;
  }
  /**
   * {@inheritDoc ComponentBuilder.toJSON}
   */
  toJSON() {
    validateRequiredParameters2(this.data.custom_id, this.data.title, this.components);
    return {
      ...this.data,
      components: this.components.map((component) => component.toJSON())
    };
  }
};
var Assertions_exports9 = {};
__export(Assertions_exports9, {
  assertReturnOfBuilder: /* @__PURE__ */ __name(() => assertReturnOfBuilder2, "assertReturnOfBuilder"),
  contextsPredicate: /* @__PURE__ */ __name(() => contextsPredicate, "contextsPredicate"),
  integrationTypesPredicate: /* @__PURE__ */ __name(() => integrationTypesPredicate, "integrationTypesPredicate"),
  localizationMapPredicate: /* @__PURE__ */ __name(() => localizationMapPredicate, "localizationMapPredicate"),
  validateChoicesLength: /* @__PURE__ */ __name(() => validateChoicesLength, "validateChoicesLength"),
  validateDMPermission: /* @__PURE__ */ __name(() => validateDMPermission, "validateDMPermission"),
  validateDefaultMemberPermissions: /* @__PURE__ */ __name(() => validateDefaultMemberPermissions, "validateDefaultMemberPermissions"),
  validateDefaultPermission: /* @__PURE__ */ __name(() => validateDefaultPermission, "validateDefaultPermission"),
  validateDescription: /* @__PURE__ */ __name(() => validateDescription, "validateDescription"),
  validateLocale: /* @__PURE__ */ __name(() => validateLocale, "validateLocale"),
  validateLocalizationMap: /* @__PURE__ */ __name(() => validateLocalizationMap, "validateLocalizationMap"),
  validateMaxOptionsLength: /* @__PURE__ */ __name(() => validateMaxOptionsLength, "validateMaxOptionsLength"),
  validateNSFW: /* @__PURE__ */ __name(() => validateNSFW, "validateNSFW"),
  validateName: /* @__PURE__ */ __name(() => validateName, "validateName"),
  validateRequired: /* @__PURE__ */ __name(() => validateRequired, "validateRequired"),
  validateRequiredParameters: /* @__PURE__ */ __name(() => validateRequiredParameters3, "validateRequiredParameters")
});
var namePredicate = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(32).regex(/^[\p{Ll}\p{Lm}\p{Lo}\p{N}\p{sc=Devanagari}\p{sc=Thai}_-]+$/u).setValidationEnabled(isValidationEnabled);
function validateName(name) {
  namePredicate.parse(name);
}
__name(validateName, "validateName");
__name5(validateName, "validateName");
var descriptionPredicate3 = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
var localePredicate = s3.nativeEnum(Locale);
function validateDescription(description) {
  descriptionPredicate3.parse(description);
}
__name(validateDescription, "validateDescription");
__name5(validateDescription, "validateDescription");
var maxArrayLengthPredicate = s3.unknown().array().lengthLessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateLocale(locale) {
  return localePredicate.parse(locale);
}
__name(validateLocale, "validateLocale");
__name5(validateLocale, "validateLocale");
function validateMaxOptionsLength(options) {
  maxArrayLengthPredicate.parse(options);
}
__name(validateMaxOptionsLength, "validateMaxOptionsLength");
__name5(validateMaxOptionsLength, "validateMaxOptionsLength");
function validateRequiredParameters3(name, description, options) {
  validateName(name);
  validateDescription(description);
  validateMaxOptionsLength(options);
}
__name(validateRequiredParameters3, "validateRequiredParameters3");
__name5(validateRequiredParameters3, "validateRequiredParameters");
var booleanPredicate = s3.boolean();
function validateDefaultPermission(value) {
  booleanPredicate.parse(value);
}
__name(validateDefaultPermission, "validateDefaultPermission");
__name5(validateDefaultPermission, "validateDefaultPermission");
function validateRequired(required) {
  booleanPredicate.parse(required);
}
__name(validateRequired, "validateRequired");
__name5(validateRequired, "validateRequired");
var choicesLengthPredicate = s3.number().lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateChoicesLength(amountAdding, choices) {
  choicesLengthPredicate.parse((choices?.length ?? 0) + amountAdding);
}
__name(validateChoicesLength, "validateChoicesLength");
__name5(validateChoicesLength, "validateChoicesLength");
function assertReturnOfBuilder2(input, ExpectedInstanceOf) {
  s3.instance(ExpectedInstanceOf).parse(input);
}
__name(assertReturnOfBuilder2, "assertReturnOfBuilder2");
__name5(assertReturnOfBuilder2, "assertReturnOfBuilder");
var localizationMapPredicate = s3.object(Object.fromEntries(Object.values(Locale).map((locale) => [locale, s3.string().nullish()]))).strict().nullish().setValidationEnabled(isValidationEnabled);
function validateLocalizationMap(value) {
  localizationMapPredicate.parse(value);
}
__name(validateLocalizationMap, "validateLocalizationMap");
__name5(validateLocalizationMap, "validateLocalizationMap");
var dmPermissionPredicate = s3.boolean().nullish();
function validateDMPermission(value) {
  dmPermissionPredicate.parse(value);
}
__name(validateDMPermission, "validateDMPermission");
__name5(validateDMPermission, "validateDMPermission");
var memberPermissionPredicate = s3.union([
  s3.bigint().transform((value) => value.toString()),
  s3.number().safeInt().transform((value) => value.toString()),
  s3.string().regex(/^\d+$/)
]).nullish();
function validateDefaultMemberPermissions(permissions) {
  return memberPermissionPredicate.parse(permissions);
}
__name(validateDefaultMemberPermissions, "validateDefaultMemberPermissions");
__name5(validateDefaultMemberPermissions, "validateDefaultMemberPermissions");
function validateNSFW(value) {
  booleanPredicate.parse(value);
}
__name(validateNSFW, "validateNSFW");
__name5(validateNSFW, "validateNSFW");
var contextsPredicate = s3.array(
  s3.nativeEnum(InteractionContextType).setValidationEnabled(isValidationEnabled)
);
var integrationTypesPredicate = s3.array(
  s3.nativeEnum(ApplicationIntegrationType).setValidationEnabled(isValidationEnabled)
);
var SharedNameAndDescription = class {
  static {
    __name(this, "SharedNameAndDescription");
  }
  static {
    __name5(this, "SharedNameAndDescription");
  }
  /**
   * The name of this command.
   */
  name;
  /**
   * The name localizations of this command.
   */
  name_localizations;
  /**
   * The description of this command.
   */
  description;
  /**
   * The description localizations of this command.
   */
  description_localizations;
  /**
   * Sets the name of this command.
   *
   * @param name - The name to use
   */
  setName(name) {
    validateName(name);
    Reflect.set(this, "name", name);
    return this;
  }
  /**
   * Sets the description of this command.
   *
   * @param description - The description to use
   */
  setDescription(description) {
    validateDescription(description);
    Reflect.set(this, "description", description);
    return this;
  }
  /**
   * Sets a name localization for this command.
   *
   * @param locale - The locale to set
   * @param localizedName - The localized name for the given `locale`
   */
  setNameLocalization(locale, localizedName) {
    if (!this.name_localizations) {
      Reflect.set(this, "name_localizations", {});
    }
    const parsedLocale = validateLocale(locale);
    if (localizedName === null) {
      this.name_localizations[parsedLocale] = null;
      return this;
    }
    validateName(localizedName);
    this.name_localizations[parsedLocale] = localizedName;
    return this;
  }
  /**
   * Sets the name localizations for this command.
   *
   * @param localizedNames - The object of localized names to set
   */
  setNameLocalizations(localizedNames) {
    if (localizedNames === null) {
      Reflect.set(this, "name_localizations", null);
      return this;
    }
    Reflect.set(this, "name_localizations", {});
    for (const args of Object.entries(localizedNames)) {
      this.setNameLocalization(...args);
    }
    return this;
  }
  /**
   * Sets a description localization for this command.
   *
   * @param locale - The locale to set
   * @param localizedDescription - The localized description for the given locale
   */
  setDescriptionLocalization(locale, localizedDescription) {
    if (!this.description_localizations) {
      Reflect.set(this, "description_localizations", {});
    }
    const parsedLocale = validateLocale(locale);
    if (localizedDescription === null) {
      this.description_localizations[parsedLocale] = null;
      return this;
    }
    validateDescription(localizedDescription);
    this.description_localizations[parsedLocale] = localizedDescription;
    return this;
  }
  /**
   * Sets the description localizations for this command.
   *
   * @param localizedDescriptions - The object of localized descriptions to set
   */
  setDescriptionLocalizations(localizedDescriptions) {
    if (localizedDescriptions === null) {
      Reflect.set(this, "description_localizations", null);
      return this;
    }
    Reflect.set(this, "description_localizations", {});
    for (const args of Object.entries(localizedDescriptions)) {
      this.setDescriptionLocalization(...args);
    }
    return this;
  }
};
var SharedSlashCommand = class {
  static {
    __name(this, "SharedSlashCommand");
  }
  static {
    __name5(this, "SharedSlashCommand");
  }
  name = void 0;
  name_localizations;
  description = void 0;
  description_localizations;
  options = [];
  contexts;
  /**
   * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
   */
  default_permission = void 0;
  default_member_permissions = void 0;
  /**
   * @deprecated Use {@link SharedSlashCommand.contexts} instead.
   */
  dm_permission = void 0;
  integration_types;
  nsfw = void 0;
  /**
   * Sets the contexts of this command.
   *
   * @param contexts - The contexts
   */
  setContexts(...contexts) {
    Reflect.set(this, "contexts", contextsPredicate.parse(normalizeArray(contexts)));
    return this;
  }
  /**
   * Sets the integration types of this command.
   *
   * @param integrationTypes - The integration types
   */
  setIntegrationTypes(...integrationTypes) {
    Reflect.set(this, "integration_types", integrationTypesPredicate.parse(normalizeArray(integrationTypes)));
    return this;
  }
  /**
   * Sets whether the command is enabled by default when the application is added to a guild.
   *
   * @remarks
   * If set to `false`, you will have to later `PUT` the permissions for this command.
   * @param value - Whether or not to enable this command by default
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
   */
  setDefaultPermission(value) {
    validateDefaultPermission(value);
    Reflect.set(this, "default_permission", value);
    return this;
  }
  /**
   * Sets the default permissions a member should have in order to run the command.
   *
   * @remarks
   * You can set this to `'0'` to disable the command by default.
   * @param permissions - The permissions bit field to set
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   */
  setDefaultMemberPermissions(permissions) {
    const permissionValue = validateDefaultMemberPermissions(permissions);
    Reflect.set(this, "default_member_permissions", permissionValue);
    return this;
  }
  /**
   * Sets if the command is available in direct messages with the application.
   *
   * @remarks
   * By default, commands are visible. This method is only for global commands.
   * @param enabled - Whether the command should be enabled in direct messages
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   * @deprecated
   * Use {@link SharedSlashCommand.setContexts} instead.
   */
  setDMPermission(enabled) {
    validateDMPermission(enabled);
    Reflect.set(this, "dm_permission", enabled);
    return this;
  }
  /**
   * Sets whether this command is NSFW.
   *
   * @param nsfw - Whether this command is NSFW
   */
  setNSFW(nsfw = true) {
    validateNSFW(nsfw);
    Reflect.set(this, "nsfw", nsfw);
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters3(this.name, this.description, this.options);
    validateLocalizationMap(this.name_localizations);
    validateLocalizationMap(this.description_localizations);
    return {
      ...this,
      type: ApplicationCommandType.ChatInput,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
var ApplicationCommandOptionBase = class extends SharedNameAndDescription {
  static {
    __name(this, "ApplicationCommandOptionBase");
  }
  static {
    __name5(this, "ApplicationCommandOptionBase");
  }
  /**
   * Whether this option is required.
   *
   * @defaultValue `false`
   */
  required = false;
  /**
   * Sets whether this option is required.
   *
   * @param required - Whether this option should be required
   */
  setRequired(required) {
    validateRequired(required);
    Reflect.set(this, "required", required);
    return this;
  }
  /**
   * This method runs required validators on this builder.
   */
  runRequiredValidations() {
    validateRequiredParameters3(this.name, this.description, []);
    validateLocalizationMap(this.name_localizations);
    validateLocalizationMap(this.description_localizations);
    validateRequired(this.required);
  }
};
var SlashCommandAttachmentOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandAttachmentOption");
  }
  static {
    __name5(this, "SlashCommandAttachmentOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Attachment;
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
var SlashCommandBooleanOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandBooleanOption");
  }
  static {
    __name5(this, "SlashCommandBooleanOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Boolean;
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
var allowedChannelTypes = [
  ChannelType.GuildText,
  ChannelType.GuildVoice,
  ChannelType.GuildCategory,
  ChannelType.GuildAnnouncement,
  ChannelType.AnnouncementThread,
  ChannelType.PublicThread,
  ChannelType.PrivateThread,
  ChannelType.GuildStageVoice,
  ChannelType.GuildForum,
  ChannelType.GuildMedia
];
var channelTypesPredicate = s3.array(s3.union(allowedChannelTypes.map((type) => s3.literal(type))));
var ApplicationCommandOptionChannelTypesMixin = class {
  static {
    __name(this, "ApplicationCommandOptionChannelTypesMixin");
  }
  static {
    __name5(this, "ApplicationCommandOptionChannelTypesMixin");
  }
  /**
   * The channel types of this option.
   */
  channel_types;
  /**
   * Adds channel types to this option.
   *
   * @param channelTypes - The channel types
   */
  addChannelTypes(...channelTypes) {
    if (this.channel_types === void 0) {
      Reflect.set(this, "channel_types", []);
    }
    this.channel_types.push(...channelTypesPredicate.parse(normalizeArray(channelTypes)));
    return this;
  }
};
var SlashCommandChannelOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandChannelOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Channel;
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
__name5(SlashCommandChannelOption, "SlashCommandChannelOption");
SlashCommandChannelOption = __decorateClass([
  mix(ApplicationCommandOptionChannelTypesMixin)
], SlashCommandChannelOption);
var ApplicationCommandNumericOptionMinMaxValueMixin = class {
  static {
    __name(this, "ApplicationCommandNumericOptionMinMaxValueMixin");
  }
  static {
    __name5(this, "ApplicationCommandNumericOptionMinMaxValueMixin");
  }
  /**
   * The maximum value of this option.
   */
  max_value;
  /**
   * The minimum value of this option.
   */
  min_value;
};
var booleanPredicate2 = s3.boolean();
var ApplicationCommandOptionWithAutocompleteMixin = class {
  static {
    __name(this, "ApplicationCommandOptionWithAutocompleteMixin");
  }
  static {
    __name5(this, "ApplicationCommandOptionWithAutocompleteMixin");
  }
  /**
   * Whether this option utilizes autocomplete.
   */
  autocomplete;
  /**
   * The type of this option.
   *
   * @privateRemarks Since this is present and this is a mixin, this is needed.
   */
  type;
  /**
   * Whether this option uses autocomplete.
   *
   * @param autocomplete - Whether this option should use autocomplete
   */
  setAutocomplete(autocomplete) {
    booleanPredicate2.parse(autocomplete);
    if (autocomplete && "choices" in this && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    Reflect.set(this, "autocomplete", autocomplete);
    return this;
  }
};
var stringPredicate = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(100);
var numberPredicate = s3.number().greaterThan(Number.NEGATIVE_INFINITY).lessThan(Number.POSITIVE_INFINITY);
var choicesPredicate = s3.object({
  name: stringPredicate,
  name_localizations: localizationMapPredicate,
  value: s3.union([stringPredicate, numberPredicate])
}).array();
var ApplicationCommandOptionWithChoicesMixin = class {
  static {
    __name(this, "ApplicationCommandOptionWithChoicesMixin");
  }
  static {
    __name5(this, "ApplicationCommandOptionWithChoicesMixin");
  }
  /**
   * The choices of this option.
   */
  choices;
  /**
   * The type of this option.
   *
   * @privateRemarks Since this is present and this is a mixin, this is needed.
   */
  type;
  /**
   * Adds multiple choices to this option.
   *
   * @param choices - The choices to add
   */
  addChoices(...choices) {
    const normalizedChoices = normalizeArray(choices);
    if (normalizedChoices.length > 0 && "autocomplete" in this && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(normalizedChoices);
    if (this.choices === void 0) {
      Reflect.set(this, "choices", []);
    }
    validateChoicesLength(normalizedChoices.length, this.choices);
    for (const { name, name_localizations, value } of normalizedChoices) {
      if (this.type === ApplicationCommandOptionType.String) {
        stringPredicate.parse(value);
      } else {
        numberPredicate.parse(value);
      }
      this.choices.push({ name, name_localizations, value });
    }
    return this;
  }
  /**
   * Sets multiple choices for this option.
   *
   * @param choices - The choices to set
   */
  setChoices(...choices) {
    const normalizedChoices = normalizeArray(choices);
    if (normalizedChoices.length > 0 && "autocomplete" in this && this.autocomplete) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    choicesPredicate.parse(normalizedChoices);
    Reflect.set(this, "choices", []);
    this.addChoices(normalizedChoices);
    return this;
  }
};
var numberValidator = s3.number().int();
var SlashCommandIntegerOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandIntegerOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Integer;
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
   */
  setMaxValue(max) {
    numberValidator.parse(max);
    Reflect.set(this, "max_value", max);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
   */
  setMinValue(min) {
    numberValidator.parse(min);
    Reflect.set(this, "min_value", min);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
__name5(SlashCommandIntegerOption, "SlashCommandIntegerOption");
SlashCommandIntegerOption = __decorateClass([
  mix(
    ApplicationCommandNumericOptionMinMaxValueMixin,
    ApplicationCommandOptionWithAutocompleteMixin,
    ApplicationCommandOptionWithChoicesMixin
  )
], SlashCommandIntegerOption);
var SlashCommandMentionableOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandMentionableOption");
  }
  static {
    __name5(this, "SlashCommandMentionableOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Mentionable;
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
var numberValidator2 = s3.number();
var SlashCommandNumberOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandNumberOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Number;
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMaxValue}
   */
  setMaxValue(max) {
    numberValidator2.parse(max);
    Reflect.set(this, "max_value", max);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandNumericOptionMinMaxValueMixin.setMinValue}
   */
  setMinValue(min) {
    numberValidator2.parse(min);
    Reflect.set(this, "min_value", min);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
__name5(SlashCommandNumberOption, "SlashCommandNumberOption");
SlashCommandNumberOption = __decorateClass([
  mix(
    ApplicationCommandNumericOptionMinMaxValueMixin,
    ApplicationCommandOptionWithAutocompleteMixin,
    ApplicationCommandOptionWithChoicesMixin
  )
], SlashCommandNumberOption);
var SlashCommandRoleOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandRoleOption");
  }
  static {
    __name5(this, "SlashCommandRoleOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.Role;
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
var minLengthValidator2 = s3.number().greaterThanOrEqual(0).lessThanOrEqual(6e3);
var maxLengthValidator2 = s3.number().greaterThanOrEqual(1).lessThanOrEqual(6e3);
var SlashCommandStringOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandStringOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.String;
  /**
   * The maximum length of this option.
   */
  max_length;
  /**
   * The minimum length of this option.
   */
  min_length;
  /**
   * Sets the maximum length of this string option.
   *
   * @param max - The maximum length this option can be
   */
  setMaxLength(max) {
    maxLengthValidator2.parse(max);
    Reflect.set(this, "max_length", max);
    return this;
  }
  /**
   * Sets the minimum length of this string option.
   *
   * @param min - The minimum length this option can be
   */
  setMinLength(min) {
    minLengthValidator2.parse(min);
    Reflect.set(this, "min_length", min);
    return this;
  }
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    if (this.autocomplete && Array.isArray(this.choices) && this.choices.length > 0) {
      throw new RangeError("Autocomplete and choices are mutually exclusive to each other.");
    }
    return { ...this };
  }
};
__name5(SlashCommandStringOption, "SlashCommandStringOption");
SlashCommandStringOption = __decorateClass([
  mix(ApplicationCommandOptionWithAutocompleteMixin, ApplicationCommandOptionWithChoicesMixin)
], SlashCommandStringOption);
var SlashCommandUserOption = class extends ApplicationCommandOptionBase {
  static {
    __name(this, "SlashCommandUserOption");
  }
  static {
    __name5(this, "SlashCommandUserOption");
  }
  /**
   * The type of this option.
   */
  type = ApplicationCommandOptionType.User;
  /**
   * {@inheritDoc ApplicationCommandOptionBase.toJSON}
   */
  toJSON() {
    this.runRequiredValidations();
    return { ...this };
  }
};
var SharedSlashCommandOptions = class {
  static {
    __name(this, "SharedSlashCommandOptions");
  }
  static {
    __name5(this, "SharedSlashCommandOptions");
  }
  options;
  /**
   * Adds a boolean option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addBooleanOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandBooleanOption);
  }
  /**
   * Adds a user option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addUserOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandUserOption);
  }
  /**
   * Adds a channel option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addChannelOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandChannelOption);
  }
  /**
   * Adds a role option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addRoleOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandRoleOption);
  }
  /**
   * Adds an attachment option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addAttachmentOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandAttachmentOption);
  }
  /**
   * Adds a mentionable option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addMentionableOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandMentionableOption);
  }
  /**
   * Adds a string option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addStringOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandStringOption);
  }
  /**
   * Adds an integer option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addIntegerOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandIntegerOption);
  }
  /**
   * Adds a number option.
   *
   * @param input - A function that returns an option builder or an already built builder
   */
  addNumberOption(input) {
    return this._sharedAddOptionMethod(input, SlashCommandNumberOption);
  }
  /**
   * Where the actual adding magic happens. ✨
   *
   * @param input - The input. What else?
   * @param Instance - The instance of whatever is being added
   * @internal
   */
  _sharedAddOptionMethod(input, Instance) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new Instance()) : input;
    assertReturnOfBuilder2(result, Instance);
    options.push(result);
    return this;
  }
};
var SlashCommandSubcommandGroupBuilder = class {
  static {
    __name(this, "SlashCommandSubcommandGroupBuilder");
  }
  /**
   * The name of this subcommand group.
   */
  name = void 0;
  /**
   * The description of this subcommand group.
   */
  description = void 0;
  /**
   * The subcommands within this subcommand group.
   */
  options = [];
  /**
   * Adds a new subcommand to this group.
   *
   * @param input - A function that returns a subcommand builder or an already built builder
   */
  addSubcommand(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
    assertReturnOfBuilder2(result, SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters3(this.name, this.description, this.options);
    return {
      type: ApplicationCommandOptionType.SubcommandGroup,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
__name5(SlashCommandSubcommandGroupBuilder, "SlashCommandSubcommandGroupBuilder");
SlashCommandSubcommandGroupBuilder = __decorateClass([
  mix(SharedNameAndDescription)
], SlashCommandSubcommandGroupBuilder);
var SlashCommandSubcommandBuilder = class {
  static {
    __name(this, "SlashCommandSubcommandBuilder");
  }
  /**
   * The name of this subcommand.
   */
  name = void 0;
  /**
   * The description of this subcommand.
   */
  description = void 0;
  /**
   * The options within this subcommand.
   */
  options = [];
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters3(this.name, this.description, this.options);
    return {
      type: ApplicationCommandOptionType.Subcommand,
      name: this.name,
      name_localizations: this.name_localizations,
      description: this.description,
      description_localizations: this.description_localizations,
      options: this.options.map((option) => option.toJSON())
    };
  }
};
__name5(SlashCommandSubcommandBuilder, "SlashCommandSubcommandBuilder");
SlashCommandSubcommandBuilder = __decorateClass([
  mix(SharedNameAndDescription, SharedSlashCommandOptions)
], SlashCommandSubcommandBuilder);
var SharedSlashCommandSubcommands = class {
  static {
    __name(this, "SharedSlashCommandSubcommands");
  }
  static {
    __name5(this, "SharedSlashCommandSubcommands");
  }
  options = [];
  /**
   * Adds a new subcommand group to this command.
   *
   * @param input - A function that returns a subcommand group builder or an already built builder
   */
  addSubcommandGroup(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandGroupBuilder()) : input;
    assertReturnOfBuilder2(result, SlashCommandSubcommandGroupBuilder);
    options.push(result);
    return this;
  }
  /**
   * Adds a new subcommand to this command.
   *
   * @param input - A function that returns a subcommand builder or an already built builder
   */
  addSubcommand(input) {
    const { options } = this;
    validateMaxOptionsLength(options);
    const result = typeof input === "function" ? input(new SlashCommandSubcommandBuilder()) : input;
    assertReturnOfBuilder2(result, SlashCommandSubcommandBuilder);
    options.push(result);
    return this;
  }
};
var SlashCommandBuilder = class {
  static {
    __name(this, "SlashCommandBuilder");
  }
  /**
   * The name of this command.
   */
  name = void 0;
  /**
   * The name localizations of this command.
   */
  name_localizations;
  /**
   * The description of this command.
   */
  description = void 0;
  /**
   * The description localizations of this command.
   */
  description_localizations;
  /**
   * The options of this command.
   */
  options = [];
  /**
   * The contexts for this command.
   */
  contexts;
  /**
   * Whether this command is enabled by default when the application is added to a guild.
   *
   * @deprecated Use {@link SharedSlashCommand.setDefaultMemberPermissions} or {@link SharedSlashCommand.setDMPermission} instead.
   */
  default_permission = void 0;
  /**
   * The set of permissions represented as a bit set for the command.
   */
  default_member_permissions = void 0;
  /**
   * Indicates whether the command is available in direct messages with the application.
   *
   * @remarks
   * By default, commands are visible. This property is only for global commands.
   * @deprecated
   * Use {@link SlashCommandBuilder.contexts} instead.
   */
  dm_permission = void 0;
  /**
   * The integration types for this command.
   */
  integration_types;
  /**
   * Whether this command is NSFW.
   */
  nsfw = void 0;
};
__name5(SlashCommandBuilder, "SlashCommandBuilder");
SlashCommandBuilder = __decorateClass([
  mix(SharedSlashCommandOptions, SharedNameAndDescription, SharedSlashCommandSubcommands, SharedSlashCommand)
], SlashCommandBuilder);
var Assertions_exports10 = {};
__export(Assertions_exports10, {
  contextsPredicate: /* @__PURE__ */ __name(() => contextsPredicate2, "contextsPredicate"),
  integrationTypesPredicate: /* @__PURE__ */ __name(() => integrationTypesPredicate2, "integrationTypesPredicate"),
  validateDMPermission: /* @__PURE__ */ __name(() => validateDMPermission2, "validateDMPermission"),
  validateDefaultMemberPermissions: /* @__PURE__ */ __name(() => validateDefaultMemberPermissions2, "validateDefaultMemberPermissions"),
  validateDefaultPermission: /* @__PURE__ */ __name(() => validateDefaultPermission2, "validateDefaultPermission"),
  validateName: /* @__PURE__ */ __name(() => validateName2, "validateName"),
  validateRequiredParameters: /* @__PURE__ */ __name(() => validateRequiredParameters4, "validateRequiredParameters"),
  validateType: /* @__PURE__ */ __name(() => validateType, "validateType")
});
var namePredicate2 = s3.string().lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(32).regex(/\S/).setValidationEnabled(isValidationEnabled);
var typePredicate = s3.union([s3.literal(ApplicationCommandType.User), s3.literal(ApplicationCommandType.Message)]).setValidationEnabled(isValidationEnabled);
var booleanPredicate3 = s3.boolean();
function validateDefaultPermission2(value) {
  booleanPredicate3.parse(value);
}
__name(validateDefaultPermission2, "validateDefaultPermission2");
__name5(validateDefaultPermission2, "validateDefaultPermission");
function validateName2(name) {
  namePredicate2.parse(name);
}
__name(validateName2, "validateName2");
__name5(validateName2, "validateName");
function validateType(type) {
  typePredicate.parse(type);
}
__name(validateType, "validateType");
__name5(validateType, "validateType");
function validateRequiredParameters4(name, type) {
  validateName2(name);
  validateType(type);
}
__name(validateRequiredParameters4, "validateRequiredParameters4");
__name5(validateRequiredParameters4, "validateRequiredParameters");
var dmPermissionPredicate2 = s3.boolean().nullish();
function validateDMPermission2(value) {
  dmPermissionPredicate2.parse(value);
}
__name(validateDMPermission2, "validateDMPermission2");
__name5(validateDMPermission2, "validateDMPermission");
var memberPermissionPredicate2 = s3.union([
  s3.bigint().transform((value) => value.toString()),
  s3.number().safeInt().transform((value) => value.toString()),
  s3.string().regex(/^\d+$/)
]).nullish();
function validateDefaultMemberPermissions2(permissions) {
  return memberPermissionPredicate2.parse(permissions);
}
__name(validateDefaultMemberPermissions2, "validateDefaultMemberPermissions2");
__name5(validateDefaultMemberPermissions2, "validateDefaultMemberPermissions");
var contextsPredicate2 = s3.array(
  s3.nativeEnum(InteractionContextType).setValidationEnabled(isValidationEnabled)
);
var integrationTypesPredicate2 = s3.array(
  s3.nativeEnum(ApplicationIntegrationType).setValidationEnabled(isValidationEnabled)
);
var ContextMenuCommandBuilder = class {
  static {
    __name(this, "ContextMenuCommandBuilder");
  }
  static {
    __name5(this, "ContextMenuCommandBuilder");
  }
  /**
   * The name of this command.
   */
  name = void 0;
  /**
   * The name localizations of this command.
   */
  name_localizations;
  /**
   * The type of this command.
   */
  type = void 0;
  /**
   * The contexts for this command.
   */
  contexts;
  /**
   * Whether this command is enabled by default when the application is added to a guild.
   *
   * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
   */
  default_permission = void 0;
  /**
   * The set of permissions represented as a bit set for the command.
   */
  default_member_permissions = void 0;
  /**
   * Indicates whether the command is available in direct messages with the application.
   *
   * @remarks
   * By default, commands are visible. This property is only for global commands.
   * @deprecated
   * Use {@link ContextMenuCommandBuilder.contexts} instead.
   */
  dm_permission = void 0;
  /**
   * The integration types for this command.
   */
  integration_types;
  /**
   * Sets the contexts of this command.
   *
   * @param contexts - The contexts
   */
  setContexts(...contexts) {
    Reflect.set(this, "contexts", contextsPredicate2.parse(normalizeArray(contexts)));
    return this;
  }
  /**
   * Sets integration types of this command.
   *
   * @param integrationTypes - The integration types
   */
  setIntegrationTypes(...integrationTypes) {
    Reflect.set(this, "integration_types", integrationTypesPredicate2.parse(normalizeArray(integrationTypes)));
    return this;
  }
  /**
   * Sets the name of this command.
   *
   * @param name - The name to use
   */
  setName(name) {
    validateName2(name);
    Reflect.set(this, "name", name);
    return this;
  }
  /**
   * Sets the type of this command.
   *
   * @param type - The type to use
   */
  setType(type) {
    validateType(type);
    Reflect.set(this, "type", type);
    return this;
  }
  /**
   * Sets whether the command is enabled by default when the application is added to a guild.
   *
   * @remarks
   * If set to `false`, you will have to later `PUT` the permissions for this command.
   * @param value - Whether to enable this command by default
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   * @deprecated Use {@link ContextMenuCommandBuilder.setDefaultMemberPermissions} or {@link ContextMenuCommandBuilder.setDMPermission} instead.
   */
  setDefaultPermission(value) {
    validateDefaultPermission2(value);
    Reflect.set(this, "default_permission", value);
    return this;
  }
  /**
   * Sets the default permissions a member should have in order to run this command.
   *
   * @remarks
   * You can set this to `'0'` to disable the command by default.
   * @param permissions - The permissions bit field to set
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   */
  setDefaultMemberPermissions(permissions) {
    const permissionValue = validateDefaultMemberPermissions2(permissions);
    Reflect.set(this, "default_member_permissions", permissionValue);
    return this;
  }
  /**
   * Sets if the command is available in direct messages with the application.
   *
   * @remarks
   * By default, commands are visible. This method is only for global commands.
   * @param enabled - Whether the command should be enabled in direct messages
   * @see {@link https://discord.com/developers/docs/interactions/application-commands#permissions}
   * @deprecated Use {@link ContextMenuCommandBuilder.setContexts} instead.
   */
  setDMPermission(enabled) {
    validateDMPermission2(enabled);
    Reflect.set(this, "dm_permission", enabled);
    return this;
  }
  /**
   * Sets a name localization for this command.
   *
   * @param locale - The locale to set
   * @param localizedName - The localized name for the given `locale`
   */
  setNameLocalization(locale, localizedName) {
    if (!this.name_localizations) {
      Reflect.set(this, "name_localizations", {});
    }
    const parsedLocale = validateLocale(locale);
    if (localizedName === null) {
      this.name_localizations[parsedLocale] = null;
      return this;
    }
    validateName2(localizedName);
    this.name_localizations[parsedLocale] = localizedName;
    return this;
  }
  /**
   * Sets the name localizations for this command.
   *
   * @param localizedNames - The object of localized names to set
   */
  setNameLocalizations(localizedNames) {
    if (localizedNames === null) {
      Reflect.set(this, "name_localizations", null);
      return this;
    }
    Reflect.set(this, "name_localizations", {});
    for (const args of Object.entries(localizedNames))
      this.setNameLocalization(...args);
    return this;
  }
  /**
   * Serializes this builder to API-compatible JSON data.
   *
   * @remarks
   * This method runs validations on the data before serializing it.
   * As such, it may throw an error if the data is invalid.
   */
  toJSON() {
    validateRequiredParameters4(this.name, this.type);
    validateLocalizationMap(this.name_localizations);
    return { ...this };
  }
};
function embedLength(data) {
  return (data.title?.length ?? 0) + (data.description?.length ?? 0) + (data.fields?.reduce((prev, curr) => prev + curr.name.length + curr.value.length, 0) ?? 0) + (data.footer?.text.length ?? 0) + (data.author?.name.length ?? 0);
}
__name(embedLength, "embedLength");
__name5(embedLength, "embedLength");

// src/commands/ping.ts
var pingCommand = new SlashCommandBuilder().setName("ping").setDescription("Check if this interaction is responsive");
var pingHandler = {
  async execute(interaction, helper) {
    await helper.respond(interaction.id, interaction.token, {
      type: 4,
      data: {
        content: "\u{1F3D3} Pong! This interaction is responsive."
      }
    });
  }
};

// src/commands/boop.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var boopCommand = new SlashCommandBuilder().setName("boop").setDescription("Boops the specified user, as many times as you want").addUserOption(
  (option) => option.setName("user").setDescription("The user to boop").setRequired(true)
).addIntegerOption(
  (option) => option.setName("boop_amount").setDescription("How many times should the user be booped (defaults to 1)")
).addIntegerOption(
  (option) => option.setName("boop_reminder").setDescription("How often should we remind you to boop the user").addChoices(
    { name: "Every day", value: 1 },
    { name: "Weekly", value: 7 }
  )
);
var boopHandler = {
  async execute(interaction, helper) {
    const options = interaction.data?.options || [];
    const userOption = options.find((opt) => opt.name === "user");
    const boopAmountOption = options.find((opt) => opt.name === "boop_amount");
    const boopReminderOption = options.find((opt) => opt.name === "boop_reminder");
    const userId = userOption?.value;
    const boopAmount = boopAmountOption?.value || 1;
    const boopReminder = boopReminderOption?.value;
    const boopText = `<@${userId}>`;
    const boops = "\u{1F446} ".repeat(Math.min(boopAmount, 10));
    let response = `${boops}${boopText} has been booped ${boopAmount} time${boopAmount !== 1 ? "s" : ""}!`;
    if (boopReminder) {
      const reminderText = boopReminder === 1 ? "every day" : "weekly";
      response += `

\u{1F514} Reminder set: ${reminderText}`;
    }
    await helper.respond(interaction.id, interaction.token, {
      type: 4,
      data: {
        content: response
      }
    });
  }
};

// src/commands/points.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var pointsCommand = new SlashCommandBuilder().setName("points").setDescription("Lists or manages user points").addSubcommandGroup(
  (group3) => group3.setName("manage").setDescription("Shows or manages points in the server").addSubcommand(
    (subcommand) => subcommand.setName("user_points").setDescription("Alters a user's points").addUserOption(
      (option) => option.setName("user").setDescription("The user whose points to alter").setRequired(true)
    ).addStringOption(
      (option) => option.setName("action").setDescription("What action should be taken with the users points?").addChoices(
        { name: "Add points", value: "add" },
        { name: "Remove points", value: "remove" },
        { name: "Reset points", value: "reset" }
      ).setRequired(true)
    ).addIntegerOption(
      (option) => option.setName("points").setDescription("Points to add or remove")
    )
  )
).addSubcommandGroup(
  (group3) => group3.setName("info").setDescription("Shows information about points in the guild").addSubcommand(
    (subcommand) => subcommand.setName("total").setDescription("Tells you the total amount of points given in the guild")
  ).addSubcommand(
    (subcommand) => subcommand.setName("user").setDescription("Lists a user's points").addUserOption(
      (option) => option.setName("user").setDescription("The user whose points to list").setRequired(true)
    )
  )
);
var pointsHandler = {
  async execute(interaction, helper) {
    const options = interaction.data?.options || [];
    const subcommandGroup = options[0];
    if (!subcommandGroup || !subcommandGroup.options) {
      return;
    }
    const subcommand = subcommandGroup.options[0];
    const subcommandName = subcommand.name;
    const groupName = subcommandGroup.name;
    if (groupName === "manage" && subcommandName === "user_points") {
      const userOption = subcommand.options?.find((opt) => opt.name === "user");
      const actionOption = subcommand.options?.find((opt) => opt.name === "action");
      const pointsOption = subcommand.options?.find((opt) => opt.name === "points");
      const userId = userOption?.value;
      const action = actionOption?.value;
      const points = pointsOption?.value || 0;
      let response = `Points management for <@${userId}>:
Action: ${action}
`;
      if (action === "add" || action === "remove") {
        response += `Points: ${points}
`;
      }
      response += `
_Note: This is a demo. Points are not actually stored._`;
      await helper.respond(interaction.id, interaction.token, {
        type: 4,
        data: {
          content: response
        }
      });
    } else if (groupName === "info") {
      if (subcommandName === "total") {
        await helper.respond(interaction.id, interaction.token, {
          type: 4,
          data: {
            content: "\u{1F4CA} Total points in the guild: 0\n\n_Note: This is a demo. Points are not actually stored._"
          }
        });
      } else if (subcommandName === "user") {
        const userOption = subcommand.options?.find((opt) => opt.name === "user");
        const userId = userOption?.value;
        await helper.respond(interaction.id, interaction.token, {
          type: 4,
          data: {
            content: `\u{1F4CA} Points for <@${userId}>: 0

_Note: This is a demo. Points are not actually stored._`
          }
        });
      }
    }
  }
};

// src/commands/index.ts
var commands = [
  { builder: pingCommand, handler: pingHandler },
  { builder: boopCommand, handler: boopHandler },
  { builder: pointsCommand, handler: pointsHandler }
];
function getCommandHandlers() {
  return {
    ping: pingHandler,
    boop: boopHandler,
    points: pointsHandler
  };
}
__name(getCommandHandlers, "getCommandHandlers");
function getCommandBuilders() {
  return commands.map((cmd) => cmd.builder);
}
__name(getCommandBuilders, "getCommandBuilders");

// src/handlers/interaction-handler.ts
var InteractionHandler = class {
  static {
    __name(this, "InteractionHandler");
  }
  handlers = getCommandHandlers();
  async handle(interaction, helper) {
    if (interaction.type !== 2) {
      return;
    }
    const commandName = interaction.data?.name;
    if (!commandName) {
      return;
    }
    const handler = this.handlers[commandName];
    if (!handler) {
      await helper.respond(interaction.id, interaction.token, {
        type: 4,
        data: {
          content: `\u274C Unknown command: ${commandName}`,
          flags: 64
        }
      });
      return;
    }
    try {
      await handler.execute(interaction, helper);
    } catch (error3) {
      console.error(`Error handling command ${commandName}:`, error3);
      await helper.respond(interaction.id, interaction.token, {
        type: 4,
        data: {
          content: `\u274C An error occurred while processing your command: ${error3 instanceof Error ? error3.message : "Unknown error"}`,
          flags: 64
        }
      });
    }
  }
};

// src/bot.ts
var SlashCommandsBot = class extends DurableObject {
  static {
    __name(this, "SlashCommandsBot");
  }
  client;
  interactionHelper = null;
  interactionHandler;
  applicationId = null;
  constructor(ctx, env2) {
    super(ctx, env2);
    this.interactionHandler = new InteractionHandler();
    this.client = new DiscordClient(ctx, {
      token: env2.DISCORD_BOT_TOKEN,
      intents: GatewayIntents.GUILDS | GatewayIntents.GUILD_MESSAGES | GatewayIntents.MESSAGE_CONTENT,
      onReady: /* @__PURE__ */ __name((data) => this.onReady(data), "onReady"),
      onDispatch: /* @__PURE__ */ __name((event, data) => this.onDispatch(event, data), "onDispatch"),
      onError: /* @__PURE__ */ __name((error3) => this.onError(error3), "onError")
    });
  }
  async fetch(request) {
    return this.client.fetch(request);
  }
  async alarm() {
    return this.client.alarm();
  }
  async onReady(data) {
    this.applicationId = data.application.id;
    this.interactionHelper = new InteractionHelper(this.client.getToken());
    await this.registerCommands();
  }
  async registerCommands() {
    if (!this.applicationId || !this.interactionHelper) {
      return;
    }
    const commands2 = getCommandBuilders().map((builder) => builder.toJSON());
    try {
      const guildId = this.env?.GUILD_ID;
      await this.interactionHelper.registerCommands(
        this.applicationId,
        commands2,
        guildId
      );
    } catch (error3) {
      console.error("Failed to register commands:", error3);
    }
  }
  async onDispatch(event, data) {
    if (event !== GatewayEvent.INTERACTION_CREATE) {
      return;
    }
    if (!this.interactionHelper) {
      return;
    }
    const interaction = data;
    await this.interactionHandler.handle(interaction, this.interactionHelper);
  }
  onError(error3) {
    console.error("\u274C Bot error:", error3.message);
    if (error3.stack) {
      console.error(error3.stack);
    }
  }
};

// src/index.ts
var src_default = {
  async fetch(request, env2) {
    const url = new URL(request.url);
    if (url.pathname === "/bot" || url.pathname === "/") {
      const id = env2.SLASH_COMMANDS_BOT.idFromName("slash-commands-bot-instance");
      const stub = env2.SLASH_COMMANDS_BOT.get(id);
      return stub.fetch(request);
    }
    return new Response("Slash Commands Bot worker - visit /bot to initialize", {
      headers: { "Content-Type": "text/plain" }
    });
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError(e3.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e3) {
    const error3 = reduceError(e3);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-IXZArt/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-IXZArt/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  SlashCommandsBot,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*! Bundled license information:

@sapphire/shapeshift/dist/esm/index.mjs:
  (**
   * @license MIT
   * @copyright 2020 Colin McDonnell
   * @see https://github.com/colinhacks/zod/blob/master/LICENSE
   *)
*/
//# sourceMappingURL=index.js.map
