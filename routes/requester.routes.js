const express = require("express");

const { createRequest } = require("../controllers/requester/CreateRequest");
const { requesterSignUp } = require("../controllers/requester/RequesterSignup");
const { viewUserProfile } = require("../controllers/requester/ViewProfile");
const { updateProfile } = require("../controllers/requester/UpdateProfile");

const router = express.Router();

router.post("/requesterSignUp", requesterSignUp);
router.post("/createRequest", createRequest);
router.post("/viewProfile", viewUserProfile);
router.post("/updateProfile", updateProfile);

module.exports = router;
