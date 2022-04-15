export class NotFoundError extends Error {
  constructor(message: string = 'not found') {
    super(message)
    this.name = 'NotFoundError'
  }
}
