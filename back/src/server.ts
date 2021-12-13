console.log("About to start the server...");
import express from "express";
import serveIndex from "serve-index";
import serve from "serve-index";
const app = express();
const port: number = 3000;
const publicDir = "../front/dist";

app.use((req, res, next) => {
  console.log("req: ", req.url, this);
  next();
});

/* app.get("/", (req, res) => {
  res.json({ titi: 123 });
}); */

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
