const express = require("express");
const connectToDB = require("./db/MongoDB");
require("dotenv").config();
const authRoute = require("./routes/AuthRoutes");
const userRoute = require("./routes/UserRoutes");
const projectRoute = require("./routes/ProjectRoutes");
const cors = require("cors");
const path = require("path");

// Resolving direname for ES module
const dirname = path.resolve();

// MongoDB connection
connectToDB();

// Init app
const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    credentials: true,
  })
);

// Routes
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", projectRoute);

// use the client app
app.use(
  express.static(
    path.join(dirname, "/animated-portfolio-boilerplate-master/build")
  )
);

app.get("*", (req, res) => {
  res.sendFile(
    path.join(
      dirname,
      "animated-portfolio-boilerplate-master",
      "build",
      "index.html "
    )
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `App is running in ${process.env.NODE_ENV} mode at Port http://localhost:${PORT}`
  );
});
