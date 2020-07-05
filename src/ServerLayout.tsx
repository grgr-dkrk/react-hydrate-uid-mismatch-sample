export const ServerLayout = (component: string) => `<html lang="en">
      <title>react-hydrate-uid-mismatch-sample</title>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="/style.css" rel="stylesheet" />
      </head>
      <body>
        <div id="app">${component}</div>
        <script src="/index.js"></script>
      </body>
    </html>`
