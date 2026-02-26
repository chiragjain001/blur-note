type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogContext {
  [key: string]: unknown
}

/** Serialize an Error into a plain object so its non-enumerable properties are visible in logs. */
function serializeError(err: unknown): Record<string, unknown> {
  if (err instanceof Error) {
    return {
      name: err.name,
      message: err.message,
      stack: err.stack,
      // Preserve any extra enumerable fields (e.g. FirebaseError.code)
      ...(err as unknown as Record<string, unknown>),
    }
  }
  return { error: String(err) }
}

function log(level: LogLevel, message: string, context?: LogContext) {
  // Serialize any Error values so non-enumerable properties are not lost
  const safeContext = context
    ? Object.fromEntries(
      Object.entries(context).map(([k, v]) => [
        k,
        v instanceof Error ? serializeError(v) : v,
      ])
    )
    : undefined

  const payload = {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...safeContext,
  }

  // Log message as the first arg so it's readable in the browser console header.
  // eslint-disable-next-line no-console
  const fn = level === 'warn' ? 'warn' : level === 'error' ? 'error' : 'log'
  // eslint-disable-next-line no-console
  console[fn](`[${level.toUpperCase()}] ${message}`, payload)
}

export const logger = {
  debug: (message: string, context?: LogContext) => log('debug', message, context),
  info: (message: string, context?: LogContext) => log('info', message, context),
  warn: (message: string, context?: LogContext) => log('warn', message, context),
  error: (message: string, context?: LogContext) => log('error', message, context),
}

