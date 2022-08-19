const { imageUpload } = require("../../common/imageUpload");
const { body, validationResult } = require("express-validator");

const createDonation = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const donationData = req.body;
    const imageBase64 = donationData.image;
    const imageUploaded = await imageUpload(imageBase64);
    // var imageUploaded = await imageUpload(imageBase64);
    console.log(imageUploaded);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createDonation,
};
