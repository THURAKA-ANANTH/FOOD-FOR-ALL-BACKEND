const express = require("express");
// const verifyJWT = require("../middleware/verifyJWT")

// const { validate } = require("../middleware/donationValidation");

const { createOrganization } = require("../controllers/organization/createOrganization");
const { getAllOrganizations } = require("../controllers/organization/allOrganizations");
const { updateOrganization, changePassword } = require("../controllers/organization/updateOrganization");
const { getOrganization } = require("../controllers/organization/getOrganization");
const { deleteOrganization } = require("../controllers/organization/deleteOrganization");

const router = express.Router();

router.get("/", getAllOrganizations)
router.get("/:id", getOrganization)
router.post("/register", createOrganization);
router.get("/view", getAllOrganizations)
router.put("/update/:id", updateOrganization)
router.put("/update/changePassword/:id", changePassword)
router.delete("/delete/:id", deleteOrganization)

module.exports = router;
