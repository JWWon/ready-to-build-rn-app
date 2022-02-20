import React from 'react';

interface ErrorBoundaryProps {
  fallback: JSX.Element;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  public render() {
    const { fallback, children } = this.props;
    const { hasError } = this.state;

    return hasError ? fallback : children;
  }
}

export default ErrorBoundary;
