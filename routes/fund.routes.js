const express = require("express");
const { getAllFunds } = require("../controllers/fund/allFunds");

const { createFund } = require("../controllers/fund/createFund");
const { deleteFund } = require("../controllers/fund/deleteFund");
const { getFund, getFundByStatus } = require("../controllers/fund/getFund");
const { getOrganizationFunds, getFundByOrganizationAndStatus, getNFunds } = require("../controllers/fund/getOrganizationFunds");
const { updateFund } = require("../controllers/fund/updateFund");

const router = express.Router();

router.get("/", getAllFunds);
router.get("/:organizationId/limit/:limit", getNFunds);
router.get("/:id", getFund);
router.post("/create", createFund);
router.put("/update/:id", updateFund);
router.delete("/delete/:id", deleteFund);
router.get("/:oranizationID/:fundID", getOrganizationFunds);
router.get("/:organizationID/status/:status", getFundByOrganizationAndStatus);
router.get("/status/:status", getFundByStatus);

module.exports = router;