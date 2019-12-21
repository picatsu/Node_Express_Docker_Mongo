"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const bodyParser = __importStar(require("body-parser"));
class App {
    constructor() {
        this.app = express_1.default();
        this.config();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(express_1.default.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.set("view engine", "ejs");
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
}
exports.default = new App().app;
