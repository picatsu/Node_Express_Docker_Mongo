"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = require("http");
const socket_io_1 = __importDefault(require("socket.io"));
class SocketServer {
    constructor() {
        this.port = 3000;
        this.config();
        this.listen();
    }
    config() {
        this.app = express_1.default();
        this.server = http_1.createServer(this.app);
        this.io = socket_io_1.default(this.server);
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        this.app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on('connect', (socket) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });
            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }
    getApp() {
        return this.app;
    }
}
exports.SocketServer = SocketServer;
