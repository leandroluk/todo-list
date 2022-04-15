export class InvalidQueryError extends Error {
  constructor(message: string = 'invalid query') {
    super(message)
    this.name = 'InvalidQueryError'
  }
}
