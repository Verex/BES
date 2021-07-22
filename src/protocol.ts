export enum Status {
    COMPLETE,
    ERROR
}

export enum ErrorCode {
    NONE = 0,
    INVALID_ID = 1,
    IN_USE = 2
}

export class Response {
    status: Status;
    errorCode: ErrorCode
    error?: Error;

    constructor(status: Status, errorCode: ErrorCode = ErrorCode.NONE, error?: Error) {
        this.status = status;
        this.errorCode = errorCode;
        this.error = error;
    }

    static Complete = () => {
        return new Response(Status.COMPLETE);
    }

    static Error = (errorCode: ErrorCode, error?: Error) => {
        return new Response(Status.ERROR, errorCode, error);
    }
}