import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router"
import UserProvider from "./contexts/userContext.jsx"
import ReduxProvider from "./redux/reduxProviders.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReduxProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </ReduxProvider>
  </StrictMode>
)
