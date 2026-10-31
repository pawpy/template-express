import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 8080);

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/health", (_req, res) => {
  res.type("text").send("ok\n");
});

// No host: Node listens on :: (every IPv6 and IPv4 address).
const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));
