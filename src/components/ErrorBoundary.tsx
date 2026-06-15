import { Component, type ReactNode } from "react";

type State = { error: Error | null };

export class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="min-h-screen grid place-items-center p-6 bg-cream text-ink-900">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold">Nešto je krenulo po zlu.</h1>
          <p className="mt-2 text-ink-700">
            Pokušajte osvježiti stranicu. Ako i dalje ne radi, nazovite nas na{" "}
            <a className="font-bold underline" href="tel:+385958655213">095 865 5213</a>.
          </p>
        </div>
      </div>
    );
  }
}
