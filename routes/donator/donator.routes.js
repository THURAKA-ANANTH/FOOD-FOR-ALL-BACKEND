const express = require("express");
const { getAllDonations } = require("../../controllers/donator/allDonations");
const { createDonation } = require("../../controllers/donator/createDonation");
const { deleteDonation } = require("../../controllers/donator/deleteDonation");
const { editDonation } = require("../../controllers/donator/editDonation");
const {
  getCompletedDonations,
  getOngoingDonations,
  getPendingDonations,
  getRejectedDonations,
} = require("../../controllers/donator/getDonations");
const getOneDonationDetails = require("../../controllers/donator/getOneDonation");
const {
  sendDonationRequest,
} = require("../../controllers/donator/sendDonationRequest");
const { testBase64 } = require("../../controllers/donator/test");
const { validate } = require("../../middleware/donationValidation");

const router = express.Router();

router.post("/createDonation", validate("createDonation"), createDonation);
router.get("/getDonations", getAllDonations);
router.delete("/deleteDonation/:id", deleteDonation);
router.get("/getCompletedDonations/;id", getCompletedDonations);
router.get("/getOngoingDonations/:id", getOngoingDonations);
router.get("/getPendingDonations/:id", getPendingDonations);
router.get("/getRejectedDonations/:id", getRejectedDonations);
router.get("/getOneDonation/:id", getOneDonationDetails);
router.put("/updateDonation/:id", editDonation);
router.post("/sendRequest", sendDonationRequest);

router.post("/test", testBase64);

module.exports = router;
