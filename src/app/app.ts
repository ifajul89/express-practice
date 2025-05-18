import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = 3000;

// parser
app.use(express.json());
app.use(express.text());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

// router
const userRouter = express.Router();

app.use("/api/v1/users", userRouter);

userRouter.get(
  "/create-users",
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;

    console.log(user);

    try {
      res.json({
        status: true,
        message: "User created successfully",
        data: usehr,
      });
    } catch (error) {
      next(error);
    }
  }
);

// app.get("/:userId", (req: Request, res: Response) => {
//   console.log(req.params); // { userId: '89' }
//   res.send("Server is running ⚡️");
// });

// app.get("/:userId/:userId2", (req: Request, res: Response) => {
//   console.log(req.params); // { userId: '89', userId2: '29' }
//   res.send("Server is running ⚡️");
// });

// app.get("/", (req: Request, res: Response) => {
//   console.log(req.query); // { email: 'test@email.com' }
//   res.send("Server is running ⚡️");
// });

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Server is running ⚡️");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  // res.send("Send Request");
  res.json({
    message: "Request sent",
  });
});

// global error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      status: false,
      message: "Something went wrong",
    });
  }
});

export default app;
