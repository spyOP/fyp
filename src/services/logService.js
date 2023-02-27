import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
function init() {
  Sentry.init({
    dsn: "https://2a7b403c6fe3421182a5516676cd6495@o4504746820894720.ingest.sentry.io/4504746830004224",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
