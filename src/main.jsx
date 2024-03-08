import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/index.css"
import "./locale/i18n.js"
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
