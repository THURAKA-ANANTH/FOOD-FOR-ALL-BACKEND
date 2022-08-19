const express = require("express");
const { createDonation } = require("../../controllers/donator/createDonation");

const router = express.Router();

router.post("/upload", createDonation);

module.exports = router;
