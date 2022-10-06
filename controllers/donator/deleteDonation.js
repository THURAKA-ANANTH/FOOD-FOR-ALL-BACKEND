const Donation = require("../../models/donation.model");
const DonationRequest = require("../../models/donationRequest.model");

const deleteDonation = async (req, res) => {
  try {
    var emailArray = [];
    const donationID = req.params.id;
    console.log(donationID);
    await DonationRequest.find({ donationID: donationID }).then((donation) => {
      // const emailArray = donation.numberOfRequests;

      for (let index = 0; index < donation.length; index++) {
        console.log(index.requesterEmail);
        var element = index.requesterEmail;
        emailArray.push(element);
      }
      console.log(emailArray);
      console.log(donation);
    });

    await Donation.findByIdAndDelete(donationID)
      .then(() => {
        res.status(200).send({
          msg: "donation succesfully deleted",
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "error with deletion",
          error: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteDonation,
};
