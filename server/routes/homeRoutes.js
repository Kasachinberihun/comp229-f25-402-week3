import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Home route</h1>");
});

router.get("/hello", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

router.get("/goodbye", (req, res) => {
  res.send("<h1>Goodbye World</h1>");
});

export default router;
