"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Observable_1 = require("rxjs/Observable");
const socketIo = require("socket.io-client");
const SERVER_URL = 'http://localhost:8080';
let SocketService = class SocketService {
    initSocket() {
        this.socket = socketIo(SERVER_URL);
    }
    send(message) {
        this.socket.emit('message', message);
    }
    onMessage() {
        return new Observable_1.Observable(observer => {
            this.socket.on('message', (data) => observer.next(data));
        });
    }
    onEvent(event) {
        return new Observable_1.Observable(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
};
SocketService = __decorate([
    core_1.Injectable()
], SocketService);
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map