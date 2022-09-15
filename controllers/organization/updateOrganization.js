const { imageUpload } = require("../../common/imageUpload");
const { sendEmail } = require("../../common/sendEmail");

const Organization = require("../../models/organization.model");

const updateOrganization = async (req, res) => {
    const formData = req.body;
    const organizationId = req.params.id;

    Organization.findOne({ email: formData.email })
        .then(async (organization) => {
            if (organization) {
                res.status(400).json({
                    message: "Organization already exists"
                })
            } else {
                try {
                    // if company registration image can update, uncomment the following line
                    // const imageBase64 = formData.registrationCertificate;
                    // const imageIsUpdated = formData.imageIsUpdated;
                    // if (imageIsUpdated) {
                    //     formData.registrationCertificate = await imageUpload(imageBase64);
                    // } else {
                    //     formData.registrationCertificate = await Organization.findById(organizationId).select('registrationCertificate');
                    // }

                    await Organization.findByIdAndUpdate(organizationId, formData)
                        .then(organization => {
                            res.status(201).json({
                                message: "Organization updated successfully",
                                organization: organization
                            })
                        }
                        ).catch(err => {
                            console.log(err.message);
                            res.status(500).json({
                                message: "Error updating organization",
                                error: err
                            })
                        }
                        )

                } catch (error) {
                    console.log(error);
                }
            }

        })
}

module.exports = {
    updateOrganization
}