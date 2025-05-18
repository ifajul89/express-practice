import { Server } from "http";
import app from "./app";

const PORT = 5000;

const server: Server;

async function main() {
  const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

main();
