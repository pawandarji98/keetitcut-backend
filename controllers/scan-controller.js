const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
require('dotenv').config();
const {Configs} = require("../utils/config_assests")

exports.getListOfScanned = customRapper(async (req, res, next) => {
    try {
      const response = await apiAxios.post(Configs.GET_LIST_OF_SCANNED, req.body.data , {
        params: {
          TenantId: req.body.TenantId,
          LocationId: req.body.LocationId,
        },
        headers: { 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        }
      });
      res.json({
        status: 'success',
        data: response.data
      });
    } catch (e) {
      return next(new AppError(`Error while getting all Scanned ${e}`, 500));
    }
});