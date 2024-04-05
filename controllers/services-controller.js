const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
require('dotenv').config();

exports.getListOfServices = customRapper(async (req, res, next) => {
    try {
      const detailService = []
      const response = await apiAxios.get("/services?TenantId=4&LocationId=3", {
        headers: { 
          'Accept': 'application/json', 
          'Authorization': req.body.token
        }
      });

      for(let data of response.data.data) {
        const response = await apiAxios.get(`/service/${data.serviceId}/addons?TenantId=4&LocationId=3`, {
          headers: { 
            'Accept': 'application/json', 
            'Authorization': req.body.token
          }
        });
        const Detailresponse = await apiAxios.get(`/services/lookup/?ServiceIds=${data.serviceId}&TenantId=4&LocationId=3`, {
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
        data: detailService
      });
  
    } catch (e) {
      return next(new AppError(`Error while getting all services ${e}`, 500));
    }
});


exports.getListOfAddonsOnService = customRapper(async (req, res, next) => {
    try {
      const response = await apiAxios.get(`/service/${req.body.serviceId}/addons?TenantId=4&LocationId=3`, {
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
      return next(new AppError(`Error while getting all services ${e}`, 500));
    }
});

