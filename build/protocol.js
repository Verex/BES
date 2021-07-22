"use strict";
exports.__esModule = true;
exports.Response = exports.ErrorCode = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["COMPLETE"] = 0] = "COMPLETE";
    Status[Status["ERROR"] = 1] = "ERROR";
})(Status = exports.Status || (exports.Status = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NONE"] = 0] = "NONE";
    ErrorCode[ErrorCode["INVALID_ID"] = 1] = "INVALID_ID";
    ErrorCode[ErrorCode["IN_USE"] = 2] = "IN_USE";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var Response = /** @class */ (function () {
    function Response(status, errorCode, error) {
        if (errorCode === void 0) { errorCode = ErrorCode.NONE; }
        this.status = status;
        this.errorCode = errorCode;
        this.error = error;
    }
    Response.Complete = function () {
        return new Response(Status.COMPLETE);
    };
    Response.Error = function (errorCode, error) {
        return new Response(Status.ERROR, errorCode, error);
    };
    return Response;
}());
exports.Response = Response;
