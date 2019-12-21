"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const action_1 = require("./shared/model/action");
const event_1 = require("./shared/model/event");
const dialog_user_component_1 = require("./dialog-user/dialog-user.component");
const dialog_user_type_1 = require("./dialog-user/dialog-user-type");
const AVATAR_URL = 'https://api.adorable.io/avatars/285';
let ChatComponent = class ChatComponent {
    constructor(socketService, dialog) {
        this.socketService = socketService;
        this.dialog = dialog;
        this.action = action_1.Action;
        this.messages = [];
        this.defaultDialogUserParams = {
            disableClose: true,
            data: {
                title: 'Welcome',
                dialogType: dialog_user_type_1.DialogUserType.NEW
            }
        };
    }
    ngOnInit() {
        this.initModel();
        // Using timeout due to https://github.com/angular/angular/issues/14748
        setTimeout(() => {
            this.openUserPopup(this.defaultDialogUserParams);
        }, 0);
    }
    ngAfterViewInit() {
        // subscribing to any changes in the list of items / messages
        this.matListItems.changes.subscribe(elements => {
            this.scrollToBottom();
        });
    }
    // auto-scroll fix: inspired by this stack overflow post
    // https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style
    scrollToBottom() {
        try {
            this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
        }
        catch (err) {
        }
    }
    initModel() {
        const randomId = this.getRandomId();
        this.user = {
            id: randomId,
            avatar: `${AVATAR_URL}/${randomId}.png`
        };
    }
    initIoConnection() {
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe((message) => {
            this.messages.push(message);
        });
        this.socketService.onEvent(event_1.Event.CONNECT)
            .subscribe(() => {
            console.log('connected');
        });
        this.socketService.onEvent(event_1.Event.DISCONNECT)
            .subscribe(() => {
            console.log('disconnected');
        });
    }
    getRandomId() {
        return Math.floor(Math.random() * (1000000)) + 1;
    }
    onClickUserInfo() {
        this.openUserPopup({
            data: {
                username: this.user.name,
                title: 'Edit Details',
                dialogType: dialog_user_type_1.DialogUserType.EDIT
            }
        });
    }
    openUserPopup(params) {
        this.dialogRef = this.dialog.open(dialog_user_component_1.DialogUserComponent, params);
        this.dialogRef.afterClosed().subscribe(paramsDialog => {
            if (!paramsDialog) {
                return;
            }
            this.user.name = paramsDialog.username;
            if (paramsDialog.dialogType === dialog_user_type_1.DialogUserType.NEW) {
                this.initIoConnection();
                this.sendNotification(paramsDialog, action_1.Action.JOINED);
            }
            else if (paramsDialog.dialogType === dialog_user_type_1.DialogUserType.EDIT) {
                this.sendNotification(paramsDialog, action_1.Action.RENAME);
            }
        });
    }
    sendMessage(message) {
        if (!message) {
            return;
        }
        this.socketService.send({
            from: this.user,
            content: message
        });
        this.messageContent = null;
    }
    sendNotification(params, action) {
        let message;
        if (action === action_1.Action.JOINED) {
            message = {
                from: this.user,
                action: action
            };
        }
        else if (action === action_1.Action.RENAME) {
            message = {
                action: action,
                content: {
                    username: this.user.name,
                    previousUsername: params.previousUsername
                }
            };
        }
        this.socketService.send(message);
    }
};
__decorate([
    core_1.ViewChild(material_1.MatList, { read: core_1.ElementRef })
], ChatComponent.prototype, "matList", void 0);
__decorate([
    core_1.ViewChildren(material_1.MatListItem, { read: core_1.ElementRef })
], ChatComponent.prototype, "matListItems", void 0);
ChatComponent = __decorate([
    core_1.Component({
        selector: 'tcc-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css']
    })
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map