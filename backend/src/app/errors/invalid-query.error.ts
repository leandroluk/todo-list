export class InvalidQueryError extends Error {
  constructor(message = 'invalid query') {
    super(message)
    this.name = 'InvalidQueryError'
  }
}
