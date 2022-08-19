const { body, validationResult } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "createDonation": {
      return [body("test", "test not exist").exists()];
    }
  }
};
