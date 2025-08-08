import express from "express"
import isAuth from "../middleware/isAuth.js"
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/applicationControllers.js"

const router = express.Router()



router.route("/apply/:id").post(isAuth, applyJob)
router.route("/get").get(isAuth, getAppliedJobs)
router.route("/:id/applications").get(isAuth, getApplicants)
router.route("/status/:id/update").get(isAuth, updateStatus)



export default router