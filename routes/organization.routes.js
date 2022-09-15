const express = require("express");
const verifyJWT = require("../middleware/verifyJWT")

const { validate } = require("../middleware/donationValidation");

const { createOrganization } = require("../controllers/organization/createOrganization");
const { getAllOrganizations } = require("../controllers/organization/allOrganizations");
const { updateOrganization } = require("../controllers/organization/updateOrganization");
const { getOrganization } = require("../controllers/organization/getOrganization");
const { deleteOrganization } = require("../controllers/organization/deleteOrganization");

const router = express.Router();

router.get("/", verifyJWT, getAllOrganizations)
router.get("/:id", verifyJWT, getOrganization)
router.post("/register", createOrganization);
router.put("/update/:id", updateOrganization)
router.delete("/delete/:id", verifyJWT, deleteOrganization)

module.exports = router;
