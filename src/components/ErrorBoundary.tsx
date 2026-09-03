import { ReactNode, Component, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Chronos Scripture caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center parchment-bg">
          <div className="manuscript-card rounded-xl p-8 max-w-md">
            <h2
              className="text-2xl font-bold burgundy-text mb-3"
              style={{ fontFamily: '"EB Garamond", serif' }}
            >
              A crack appeared in the parchment
            </h2>
            <p className="text-ink-200/70 text-sm mb-4 leading-relaxed">
              An unexpected error occurred while rendering the page. Your reading progress is safely preserved.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="btn-burgundy px-5 py-2 rounded-lg text-sm font-medium"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Restore the page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
