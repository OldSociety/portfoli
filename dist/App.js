"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timesThree = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Routes_1 = __importDefault(require("./Layout/Routes"));
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap");
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
//Test Code used for JEST !!! DO NOT DELETE !!!
function timesThree(numberToMultiply) {
    return numberToMultiply * 3;
}
exports.timesThree = timesThree;
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(Routes_1.default, {}) }) }));
}
exports.default = App;
