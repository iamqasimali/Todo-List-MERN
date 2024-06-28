require("dotenv").config();
const { date } = require("joi");
const { verify } = require("jsonwebtoken");

module.exports = {
  protected: async (req, res, next) => {
    try {
      const token = req.cookies.auth;
      if (token == "undefined") {
        return res.send({
          response: {
            message: "unauthorized user!",
            response: false,
          },
        });
      }

      verify(token, process.env.SECRET, (error, data) => {
        if (error) {
          return res.send({
            response: {
              message: "Forbidden access!",
              response: false,
            },
          });
        }

        // seesion get session from the token using token

        req.userData = data;
        next();
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};