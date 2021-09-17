import * as React from "react"
import { ErrorBoundary } from "@sentry/react"
import { Link } from "gatsby"

interface FallBackInterface {
  error: any,
  resetError: any
}

const Fallback = ({ error, resetError }: FallBackInterface) => (
  <div role="alert">
    <p>Something went wrong</p>
    <pre>{error.message}</pre>
    <Link to="/" onClick={resetError}>Try again</Link>
  </div>
)
const ErrorBoundaryContainer = ({ children }: any) => <ErrorBoundary fallback={Fallback}>{children}</ErrorBoundary>
export default ErrorBoundaryContainer
