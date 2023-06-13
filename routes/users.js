import express from "express";
import {
  deleteUser,
  enrollCourse,
  getTotalCoursesCreated,
  getTotalEnrolledCount,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyTeacher, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello, You are now logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello User, You are now logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, You are now logged in and you can delete all accounts");
// });

//UPDATE
router.put("/:id",  updateUser);

//DELETE
router.delete("/:id",  deleteUser);

//GET
router.get("/:id", getUser);

//GETALL
router.get("/", getUsers);

//ENROLL COURSE
router.post("/enroll", verifyToken, enrollCourse);

//GET TOTAL ENROLLMENT COUNT CERTAIN COURSE
router.get("/:courseId/student-count",  getTotalEnrolledCount);

//GET TOTAL COURSE COUNT BY TEACHER
router.get("/:userId/total-courses-created",  getTotalCoursesCreated);

export default router;
