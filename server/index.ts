import express from 'express';
import cors from 'cors';
import {planetsRouter} from "./src/controllers/planets.controller";

const app = express();
const PORT = 8000;

// For this project we can make this a public API
// For a project that has private data and/or endpoints
// which could change the state of the application I would
// always use a strict approach
app.use(cors({
  origin: '*'
}));

app.use("/", planetsRouter);

module.exports = app.listen(PORT, () => {
  console.log(`API Server is running @ http://localhost:${PORT}`);
});

