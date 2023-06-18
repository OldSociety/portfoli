"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import { useState } from 'react';
const react_router_dom_1 = require("react-router-dom");
//Routes.jsx replaces App.jsx as the central hub of this the Application.
//Core Components
const Header_js_1 = __importDefault(require("../components/Core/Header.js"));
const Footer_js_1 = __importDefault(require("../components/Core/Footer.js"));
const Home_js_1 = __importDefault(require("../components/Core/Home.js"));
const NotFound_js_1 = __importDefault(require("./NotFound.js"));
const Layout = () => {
    // Sets up the web address routes
    return ((0, jsx_runtime_1.jsxs)("div", { className: "Layout", children: [(0, jsx_runtime_1.jsx)(Header_js_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "main__container", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_js_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_js_1.default, {}) })] }) }), (0, jsx_runtime_1.jsx)(Footer_js_1.default, {})] }));
};
exports.default = Layout;
