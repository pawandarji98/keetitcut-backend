const customRapper = require("../utils/catch-error");
const { apiAxios } = require("../axios/base-api");
const AppError = require("../utils/app-error");
require("dotenv").config();
const { Configs } = require("../utils/config_assests");

exports.getListOfBusinesses = customRapper(async (req, res, next) => {
  try {
    let detailDataList = [];
    const response = await apiAxios.get(Configs.LIST_OF_BUSINESS_API_URL, {
      params: {
        TenantId: req.body.TenantId,
        LocationId: req.body.LocationId,
      },
      headers: {
        Accept: "application/json",
        Authorization: req.body.token,
      },
    });
    for (let element of response.data.data) {
      const detailDataResponse = await apiAxios.get(
        Configs.LIST_OF_BUSINESS_WITH_DETAIL_API_URL,
        {
          params: {
            TenantId: req.body.TenantId,
            LocationId: element.locationId,
          },
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );
      detailDataList.push(detailDataResponse.data);
    }
    res.json({
      status: "success",
      data: detailDataList,
      token: req.body.isReAuthUsed === true ? req.body.token : false,
    });
  } catch (e) {
    return next(new AppError(`Error while getting all businesses ${e}`, 500));
  }
});
