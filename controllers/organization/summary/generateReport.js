const Fund = require("../../../models/fund.model");
const FundDonation = require("../../../models/fundDonation.model");
const User = require("../../../models/user");

const generateReport = async (req, res) => {
    const { organizationID, month } = req.params;
    console.log(month);
    console.log(organizationID);

    const result = []
    FundDonation.find(
        {
            organizationID: organizationID,
            donatedDate: {
                $gte: new Date(new Date().getFullYear(), month - 1, 1),
                $lt: new Date(new Date().getFullYear(), month, 1)
            }
        }
    ).then(async (donations) => {
        var index = 1
        for (const donation of donations) {
            const row = []
            row.push(index)

            await Fund.findById(donation.fundID)
                .then((fund) => {
                    row.push(fund.title)
                }).catch((err) => {
                    res.status(500).send({
                        msg: "Error fund data",
                        error: err,
                    });
                })

            await User.findById(donation.userID)
                .then((user) => {
                    row.push(user.name)
                }).catch((err) => {
                    res.status(500).send({
                        msg: "Error user data",
                        error: err,
                    });
                })

            // convert date to string
            const date = new Date(donation.donatedDate)
            const dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

            row.push(donation.amount)
            row.push(dateString)
            result.push(row)
            index++
        }
        // console.log(result);
        res.status(200).send({
            report: result
        })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({
            msg: "Error fund donation data",
            error: err,
        });
    }
    )

}

module.exports = {
    generateReport
}