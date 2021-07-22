"use strict";
exports.__esModule = true;
var socket_io_client_1 = require("socket.io-client");
var defaultHost = 'ws://192.168.1.19:3000';
var Client = /** @class */ (function () {
    function Client(deviceId, host) {
        var _this = this;
        this.host = defaultHost;
        this.connect = function () {
            return new Promise(function (resolve, reject) {
                var query = {};
                if (_this.deviceId)
                    query = { deviceId: _this.deviceId };
                // Assign the socket.
                _this.socket = socket_io_client_1.io(_this.host, { timeout: 5000, reconnectionAttempts: 3, query: query });
                _this.socket.on('connect', function () {
                    resolve();
                });
                _this.socket.on('disconnect', function () {
                    console.log('disconnect');
                });
                _this.socket.on('connect_error', function () {
                    reject('Connection timed out.');
                });
            });
        };
        this.disconnect = function () {
            var _a;
            (_a = _this.socket) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
        this.pairDevice = function (deviceId) {
            var _a;
            (_a = _this.socket) === null || _a === void 0 ? void 0 : _a.emit('pairDevice', { id: deviceId }, function (result) {
                console.log(result);
            });
        };
        this.deviceId = deviceId;
        // Assign the host.
        if (host)
            this.host = host;
    }
    return Client;
}());
exports["default"] = Client;
