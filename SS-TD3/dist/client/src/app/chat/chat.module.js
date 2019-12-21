"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const material_module_1 = require("../shared/material/material.module");
const chat_component_1 = require("./chat.component");
const socket_service_1 = require("./shared/services/socket.service");
const dialog_user_component_1 = require("./dialog-user/dialog-user.component");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            material_module_1.MaterialModule
        ],
        declarations: [chat_component_1.ChatComponent, dialog_user_component_1.DialogUserComponent],
        providers: [socket_service_1.SocketService],
        entryComponents: [dialog_user_component_1.DialogUserComponent]
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map