import { Request, Response } from "express";
import {User} from '../models/users';
 
// - GET - /users returns all users
export let  allUsers = async (req: Request, res: Response) => {

  await User.find((error: any, users:any ) => {
    if (error) {
      res.send(` Error ${error}`);
    } else {
      res.send(users);
    }
  });
};

// - GET - /user{1}  returns one user with id 1
export let getUser = async (req: Request, res: Response) => {
   await User.findOne({_id: req.params.id}, (error: any, user: any) => {
    if (error) {
      res.send(error);
    } else {
      res.send(user);
    }
  });
};
// - DELETE - /user{1}  deletes one user with id 1
export let deleteUser = async (req: Request, res: Response) => {
  await User.findByIdAndDelete({_id: req.params.id}, req.body, (err:any)  => {
    if (err) {
      res.send(err);
    } else {
      res.send(`Successfully Deleted User`);
    }
  });
};

// - POST - /user{1}  updates one user with id 1
export let updateUser = async (req: Request, res: Response) => {

 await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, user: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`Successfully updated ${user}!`);
      }
    }
  );
};

// - PUT- /user{1}  inserts a new user into the table
export let addUser = (req: Request, res: Response) => {
    var user = new User(req.body);
  user.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });

};