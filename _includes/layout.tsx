export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <html>
    <head>
      <title>{title}</title>
    </head>
    <body class="un-text-sky-300">
      {children}
    </body>
  </html>
);
