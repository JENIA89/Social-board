import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { ThemeProvider } from "app/providers/ThemeProviders";
import { BrowserRouter } from "react-router-dom";
import "shared/config/routeConfig/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoundary";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
);
