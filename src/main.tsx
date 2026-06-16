import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { initAnalytics } from "./lib/analytics";

try {
  initAnalytics();
} catch (err) {
  console.error("Analytics init failed:", err);
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  state = { hasError: false, error: undefined as Error | undefined };
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          background: "#fff",
          color: "#111827",
        }}>
          <div style={{ maxWidth: 560, textAlign: "center" }}>
            <h1 style={{ fontSize: 28, margin: "0 0 12px" }}>Nešto je pošlo po zlu</h1>
            <p style={{ color: "#6b7280", margin: "0 0 16px" }}>
              Stranica se nije uspjela učitati. Otvorite konzolu (F12) za detalje.
            </p>
            {this.state.error?.message && (
              <pre style={{
                textAlign: "left",
                background: "#f1f5f9",
                padding: 12,
                borderRadius: 8,
                fontSize: 12,
                whiteSpace: "pre-wrap",
              }}>{this.state.error.message}</pre>
            )}
            <a
              href="tel:+385958655213"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "12px 24px",
                background: "#0EA5E9",
                color: "#fff",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Nazovi 095 865 5213
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
