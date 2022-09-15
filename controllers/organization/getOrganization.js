const Organization = require("../../models/organization.model");

const getOrganization = (req, res) => {
    try {
        Organization.findById(req.params.id)
            .then((organization) => {
                res.status(500).send({
                    organization
                });
            })
            .catch((err) => {
                res.status(500).send({
                    msg: "Error fetching data",
                    error: err,
                });
            });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getOrganization,
};
