const express = require("express");

const {
  createOrganization,
} = require("../../controllers/organization/createOrganization");

const router = express.Router();

router.post("/register", createOrganization);

module.exports = router;
