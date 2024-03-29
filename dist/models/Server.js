"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listenner on port ${this.port}`);
        });
    }
}
exports.default = Server;
