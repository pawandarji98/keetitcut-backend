const { apiAxios, apiAuthAxios } = require("../axios/base-api");
const customRapper = require("../utils/catch-error");
const { Configs } = require("../utils/config_assests");
require("dotenv").config();

exports.reAuthStratergy = customRapper(async (req, res, next) => {
  let numberOfRetries = 0;
  let maxNumberOfRetries = process.env.RE_AUTH_RETRIES;
  try {
    await apiAxios.get(Configs.RE_AUTH_API_URL, {
      params: {
        TenantId: 4,
        LocationId: 3,
      },
      headers: {
        Accept: "application/json",
        Authorization: req.body.token,
      },
    });
  } catch (e) {
    if ((e.message = Configs.RE_AUTH_MSG)) {
      if (numberOfRetries <= maxNumberOfRetries) {
        const response = await apiAuthAxios.post(Configs.AUTH_API_URL, {
          client_id: process.env.MEEVO_CLIENT_ID,
          client_secret: process.env.MEEVO_CLIENT_SECRET,
        });
        req.body.token = "Bearer " + response.data.access_token;
        req.body.isReAuthUsed = true;
        next();
      }
    }
  }
});
