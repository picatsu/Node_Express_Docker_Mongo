"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const socket_service_1 = require("./socket.service");
describe('SocketService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [socket_service_1.SocketService]
        });
    });
    it('should ...', testing_1.inject([socket_service_1.SocketService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=socket.service.spec.js.map