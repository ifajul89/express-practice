import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// parser
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running ⚡️");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("Send Request");
  res.json({
    message: "Request sent",
  });
});

export default app;
