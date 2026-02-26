export type AppErrorCode =
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'RATE_LIMIT'
  | 'VALIDATION'
  | 'CONFLICT'
  | 'UNKNOWN'

export class AppError extends Error {
  code: AppErrorCode
  status: number

  constructor(code: AppErrorCode, message: string, status?: number) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.status = status ?? AppError.defaultStatusForCode(code)
  }

  private static defaultStatusForCode(code: AppErrorCode): number {
    switch (code) {
      case 'UNAUTHORIZED':
        return 401
      case 'FORBIDDEN':
        return 403
      case 'NOT_FOUND':
        return 404
      case 'RATE_LIMIT':
        return 429
      case 'VALIDATION':
        return 400
      case 'CONFLICT':
        return 409
      default:
        return 500
    }
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError
}

