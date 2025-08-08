import express from "express"
import { getCompany, getCompanyId, registerCompany, updateCompany } from "../controllers/companyControllers.js"
import isAuth from "../middleware/isAuth.js"

const router = express.Router()



router.route("/registerCompany").post(isAuth, registerCompany)
router.route("/getCompany").get(isAuth, getCompany)
router.route("/getCompany/:id").get(isAuth, getCompanyId)
router.route("/profile/update/:id").put(isAuth, updateCompany)



export default router