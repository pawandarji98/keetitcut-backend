const customRapper = require("../utils/catch-error");
const {apiAuthAxios} = require("../axios/base-api");
require('dotenv').config();

exports.generateToken = customRapper(async (req, res, next) => {
  try {
    const response = await apiAuthAxios.post("/oauth2/token", {
      client_id: process.env.MEEVO_CLIENT_ID,
      client_secret: process.env.MEEVO_CLIENT_SECRET
    });

    res.json({
      status: 'success',
      data: response.data
    });

  } catch (e) {
    return next(new AppError(`Error while generating access token ${e}`, 500));
  }
});
