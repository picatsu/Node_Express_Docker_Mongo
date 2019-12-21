"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const material_1 = require("@angular/material");
const forms_1 = require("@angular/forms");
let DialogUserComponent = class DialogUserComponent {
    constructor(dialogRef, params) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.usernameFormControl = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.previousUsername = params.username ? params.username : undefined;
    }
    ngOnInit() {
    }
    onSave() {
        this.dialogRef.close({
            username: this.params.username,
            dialogType: this.params.dialogType,
            previousUsername: this.previousUsername
        });
    }
};
DialogUserComponent = __decorate([
    core_1.Component({
        selector: 'tcc-dialog-user',
        templateUrl: './dialog-user.component.html',
        styleUrls: ['./dialog-user.component.css']
    }),
    __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA))
], DialogUserComponent);
exports.DialogUserComponent = DialogUserComponent;
//# sourceMappingURL=dialog-user.component.js.map