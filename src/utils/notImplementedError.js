class NotImplementedError extends Error {
  constructor(message = 'Method not yet implemented') {
    super(message);
  }
}

export { NotImplementedError }