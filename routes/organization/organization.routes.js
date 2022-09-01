const express = require("express");
const verifyJWT=require("../../middleware/verifyJWT")

const {
  createOrganization,
} = require("../../controllers/organization/organization");
const { validate } = require("../../middleware/donationValidation");
const{
  viewAllOrganizations,
}=require("../../controllers/organization/organization")

const router = express.Router();

router.post("/register", createOrganization);
router.get("/view",verifyJWT,viewAllOrganizations)
module.exports = router;
