class AppError {
    private readonly message: string;
    private readonly httpcode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.httpcode = statusCode;
    }
}

export { AppError };