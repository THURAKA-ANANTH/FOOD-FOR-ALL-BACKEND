const Fund = require("../../models/fund.model");

const getFund = (req, res) => {
    try {
        Fund.findById(req.params.id)
            .then((fund) => {
                res.status(500).send({
                    fund
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
}

module.exports = {
    getFund,
};