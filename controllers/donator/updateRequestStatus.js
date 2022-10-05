const Donation = require("../../models/donation.model");
const DonationRequest = require("../../models/donationRequest.model");

const acceptDonationRequest = async (req, res) => {
  try {
    const updateRequest = {
      requestStatus: "accepted",
    };
    await DonationRequest.findByIdAndUpdate(req.params.id, updateRequest)
      .then(() => {
        res.status(201).json({
          message: "Requetsted updated",
        });
      })
      .catch((err) => {
        res.status(201).json({
          message: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const rejectDonationRequest = async (req, res) => {
  try {
    const updateRequest = {
      requestStatus: "rejected",
    };
    await DonationRequest.findByIdAndUpdate(req.params.id, updateRequest)
      .then(() => {
        res.status(201).json({
          message: "Requetsted updated",
        });
      })
      .catch((err) => {
        res.status(201).json({
          message: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  acceptDonationRequest,
  rejectDonationRequest,
};
