import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopContextProvider from "./Context/ShopContext";
import { ClerkProvider } from "@clerk/clerk-react";


const clerkFrontendApi = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Frontend API Key:", clerkFrontendApi); // Debugging line to check if the key is loaded

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
