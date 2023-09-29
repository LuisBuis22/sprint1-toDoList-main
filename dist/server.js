"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (_req, res) => {
    console.log('me han llamado');
    res.send('¡Hola, mundo!');
});
app.get('/ping', (_req, res) => {
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
//# sourceMappingURL=server.js.map