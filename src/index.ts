import * as express from "express";
import * as userController from './controllers/UserController';
import * as AppServer from './server'

// Our Express APP config
const app = express();
const port = process.env.PORT || 2500
app.use(express.json());
app.set("port", port);


// DATABASE CONNECTION function call
AppServer.connect()
// connection();



// API Endpoints
app.get("/", (req: any, res: any) => {
  res.send(`Server is runnng on port ${port}`);

});

app.get("/users", userController.allUsers);
app.get("/user/:id", userController.getUser);
app.post("/user/", userController.addUser);
app.post("/user/:id", userController.updateUser);
app.delete("/user/:id", userController.deleteUser);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});

// disconnect();