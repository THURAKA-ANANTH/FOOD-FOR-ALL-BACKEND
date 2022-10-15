const Donation = require("../../models/donationRequest.model");

const getAllPendingDonations = async (req, res) => {
    await Donation.find({ requestStatus: "pending"})
      .then((donations) => {
        res.json(donations);
      })
      .catch((err) => {
        res.json({
          errror: err,
        });
      });
  };

  module.exports={
    getAllPendingDonations
  };