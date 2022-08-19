const { imageUpload } = require("../../common/imageUpload");

const createDonation = async (req, res) => {
  try {
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
