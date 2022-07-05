import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function AdminPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App1 />} />
                <Route path="/admin" element={<App2 />} />
            </Routes>
        </BrowserRouter>
    )
}
function App1() {
    return (
        <div>
            <h1>home1</h1>
        </div>
    )
}
function App2() {
    return (
        <div>
            <h1>home2</h1>
        </div>
    )
}