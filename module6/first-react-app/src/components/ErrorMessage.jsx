import { ErrorBoundary } from "react-error-boundary";

<ErrorBoundary FallbackComponent={ErrorMessage}>
  <App />
</ErrorBoundary>;

function ErrorMessage({ error, resetErrorBoundary }) {
  console.error(error);

  return (
    <div className="ErrorMessage">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>Try Again?</button>
    </div>
  );
}
export default ErrorMessage;
