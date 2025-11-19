// src/server.ts
// Entrypoint - starts the server

import { app } from "./app";

const PORT = process.env.PORT || 5000;

app.listen(Number(PORT), () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
