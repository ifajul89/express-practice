import { Server } from "http";
import app from "./app";

const PORT = 5000;

let server: Server;

async function startServer() {
  const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

startServer();
