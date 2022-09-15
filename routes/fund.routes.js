const express = require("express");
const { getAllFunds } = require("../controllers/fund/allFunds");

const { createFund } = require("../controllers/fund/createFund");
const { deleteFund } = require("../controllers/fund/deleteFund");
const { getFund } = require("../controllers/fund/getFund");
const { getOrganizationFunds } = require("../controllers/fund/getOrganizationFunds");
const { updateFund } = require("../controllers/fund/updateFund");

const router = express.Router();

router.get("/", getAllFunds);
router.get("/:id", getFund);
router.post("/create", createFund);
router.put("/update/:id", updateFund);
router.delete("/delete/:id", deleteFund);
router.get("/:oranizationID/:fundID", getOrganizationFunds);

module.exports = router;