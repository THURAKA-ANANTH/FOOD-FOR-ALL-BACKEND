const { imageUpload } = require("../../common/imageUpload")
const { sendEmail } = require("../../common/sendEmail")

const Fund = require("../../models/fund.model")

const updateFund = async (req, res) => {
    try {
        const formData = req.body;
        const fundId = req.params.id;
        const imageBase64 = formData.fundImage;
        const imageIsUpdated = formData.imageIsUpdated;
        if (imageIsUpdated) {
            formData.fundImage = await imageUpload(imageBase64);
        } else {
            formData.fundImage = await Fund.findById(fundId).select('fundImage');
        }

        await Fund.findByIdAndUpdate(fundId, formData)
            .then(fund => {
                res.status(201).json({
                    message: "Fund updated successfully",
                    fund: fund
                })
            }
            ).catch(err => {
                console.log(err.message);
                res.status(500).json({
                    message: "Error updating fund",
                    error: err
                })
            }
            )

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    updateFund
}
