const UserDetails = require("../../models/requester.model");

const updateProfile = async (req, res) => {
    try {
        const userID = req.params.id;
    
        const { firstName, lastName, email, contactNumber } =
          req.body;
    
        const updateDetails = {
            firstName,
            lastName,
            email,
            contactNumber,
        };
    
        await UserDetails.findByIdAndUpdate(userID, updateDetails)
          .then((details) => {
            console.log(details);
            res.status(200).send({ status: "profile updated" });
          })
          .catch(() => {
            res.status(500).send({ status: "error" });
          });
      } catch (error) {
        console.log(error);
      }

};

module.exports = { updateProfile };