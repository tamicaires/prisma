import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(4003, () => console.log("Serve in running on PORT 4003"));
