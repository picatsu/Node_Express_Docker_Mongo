"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class TypescriptChatClientPage {
    navigateTo() {
        return protractor_1.browser.get('/');
    }
    getParagraphText() {
        return protractor_1.element(protractor_1.by.css('tcc-root h1')).getText();
    }
}
exports.TypescriptChatClientPage = TypescriptChatClientPage;
//# sourceMappingURL=app.po.js.map