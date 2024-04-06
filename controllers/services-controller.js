const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
require('dotenv').config();
const {Configs} = require("../utils/config_assests")


exports.getListOfServices = customRapper(async (req, res, next) => {
    try {
      const detailService = []
      const response = await apiAxios.get(Configs.LIST_OF_SERVICES_API_URL, {
        params: {
          TenantId: req.body.TenantId,
          LocationId: req.body.LocationId,
        },
        headers: { 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        }
      });
      for(let data of response.data.data) {
        const response = await apiAxios.get(`/service/${data.serviceId}/addons`, {
          params: {
            TenantId: req.body.TenantId,
            LocationId: req.body.LocationId,
          },
          headers: { 
            'Accept': 'application/json', 
            'Authorization': req.body.token
          }
        });
        const Detailresponse = await apiAxios.get(Configs.SERVICE_LOOKUP_API_URL, {
          params: {
            TenantId: req.body.TenantId,
            LocationId: req.body.LocationId,
            ServiceIds: data.serviceId
          },
          headers: { 
            'Accept': 'application/json', 
            'Authorization': req.body.token
          }
        });
        const Maindata = {
          service:data,
          serviceDetail:Detailresponse.data,
          addOns:response.data
        }
        detailService.push(Maindata);
      }
      res.json({
        status: 'success',
        data: detailService,
        token: req.body.isReAuthUsed === true ? req.body.token : false,
      });
    } catch (e) {
      return next(new AppError(`Error while getting all services ${e}`, 500));
    }
});

