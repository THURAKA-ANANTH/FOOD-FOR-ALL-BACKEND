const express = require("express");
const verifyJWT = require("../../middleware/verifyJWT")


const {getRequestedOrganizations}=require("../../controllers/admin/requestedOrganization");
const {getApprovedOrganizations}=require("../../controllers/admin/approvedOrganization");
const {deleteReqOrganization}=require("../../controllers/admin/deleteReqOrg")
const {getOneOrganizationDetails}=require("../../controllers/admin/oneOrganizationiDetails");
const {getRequestedFunds}=require("../../controllers/admin/fundlist");
const{getApprovedFunds}=require("../../controllers/admin/fundlist");
const{editOrganization}=require("../../controllers/admin/updateOrg");
const{updateDonationStatus}=require("../../controllers/admin/updateDonationStatus");
const{getAllPendingDonations}=require("../../controllers/admin/pendingDonationList")

const router = express.Router();

router.get("/reqorglist",getRequestedOrganizations);
router.get("/approvedorg",getApprovedOrganizations);
router.get("/vieworg/:id",getOneOrganizationDetails);
router.get("/reqfunds",getRequestedFunds);
router.get("/approvedfunds",getApprovedFunds);
router.delete("/deletereqorg/:id",deleteReqOrganization);
router.put("/editorg/:id",editOrganization);
router.put("/updostauts/:id",updateDonationStatus);
router.get("/getpdon/", getAllPendingDonations);


module.exports = router;
