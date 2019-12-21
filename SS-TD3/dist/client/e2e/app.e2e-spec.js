"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_po_1 = require("./app.po");
describe('typescript-chat-client App', () => {
    let page;
    beforeEach(() => {
        page = new app_po_1.TypescriptChatClientPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to tcc!!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map