const express = require("express");
const { createDonation } = require("../../controllers/donator/createDonation");
const { validate } = require("../../middleware/donationValidation");

const router = express.Router();

router.post("/upload", validate("createDonation"), createDonation);

module.exports = router;
