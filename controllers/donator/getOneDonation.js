const Donation = require("../../models/donation.model");

const getOneDonationDetails = async (req, res) => {
  try {
    const donationId = req.params.id;

    await Donation.findOne(donationId)
      .then((donation) => {
        res
          .status(200)
          .send({ message: "Donation fetched", donation: donation });
      })
      .catch((err) => {
        res.status(500).send({ status: "error" });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOneDonationDetails;
