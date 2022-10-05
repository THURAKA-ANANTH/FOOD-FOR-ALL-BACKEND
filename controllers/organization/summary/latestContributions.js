const FundDonation = require("../../../models/fundDonation.model");
const User = require("../../../models/user");

// Get latest n contributions
const getNContributions = async (req, res) => {
    const { limit, organizationID } = req.params;
    const result = []

    try {
        await FundDonation.find({
            organizationID: organizationID
        }).sort({ _id: -1 }).limit(limit)
            .then(async(contributions) => {
                for (const contribution of contributions) {
                    await User.findById(contribution.userID)
                        .then(async (user) => {
                            // add user name to contribution
                            contribution.userID = user.name
                            result.push(contribution)
                            // console.log(result);
                        }).catch(err => {
                            res.status(500).send({
                                msg: "Error fetching data",
                                error: err,
                            });
                        })
                }
                res.status(200).send({
                    contributions: result
                })
            }).catch((err) => {
                res.status(500).send({
                    msg: "Error fetching data",
                    error: err,
                });
            });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getNContributions
};