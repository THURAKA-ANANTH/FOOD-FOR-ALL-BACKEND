const express = require("express");

const {
  createOrganization,
} = require("../../controllers/organization/organization");
const { validate } = require("../../middleware/donationValidation");

const router = express.Router();

router.post("/register", createOrganization);

module.exports = router;
