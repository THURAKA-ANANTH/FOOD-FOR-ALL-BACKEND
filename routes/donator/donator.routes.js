const express = require("express");
const { getAllDonations } = require("../../controllers/donator/allDonations");
const { createDonation } = require("../../controllers/donator/createDonation");
const { deleteDonation } = require("../../controllers/donator/deleteDonation");
const {
  getCompletedDonations,
  getOngoingDonations,
  getPendingDonations,
  getRejectedDonations,
} = require("../../controllers/donator/getDonations");
const { validate } = require("../../middleware/donationValidation");

const router = express.Router();

router.post("/upload", validate("createDonation"), createDonation);
router.get("/getDonations", getAllDonations);
router.delete("/deleteDonation/:id", deleteDonation);
router.get("/getCompletedDonations", getCompletedDonations);
router.get("/getOngoingDonations", getOngoingDonations);
router.get("/getPendingDonations", getPendingDonations);
router.get("/getRejectedDonations", getRejectedDonations);

module.exports = router;
