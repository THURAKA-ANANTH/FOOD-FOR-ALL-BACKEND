const Donation = require("../../models/donationRequest.model");

const getAllAcceptedDonations = async (req, res) => {
    await Donation.find({ requestStatus: "accepted"})
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
    getAllAcceptedDonations
  };