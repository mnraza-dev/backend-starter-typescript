"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
server_1.default.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL
}));
const port = process.env.PORT || 3000;
server_1.default.listen(3000, () => {
    console.log(` ✨ Server started at http://localhost:${port}`);
});
