const customRapper = require("../utils/catch-error");
const {apiAxios} = require("../axios/base-api");
const AppError = require("../utils/app-error");
const { Configs } = require("../utils/config_assests");
require('dotenv').config();

exports.getListOfEmployees = customRapper(async (req, res, next) => {
    try {
      const response = await apiAxios.get(Configs.LIST_OF_EMPLOYEEE, {
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
      return next(new AppError(`Error while getting all Employee ${e}`, 500));
    }
});

exports.EmployeeChangesDDS = customRapper(async (req, res, next) => {
  try {
    const response = await apiAxios.get(Configs.EMPLOYEE_DDS_API_URL, {
      params: {
        TenantId: req.body.TenantId,
        LocationId: req.body.LocationId,
        StartDate: req.body.StartDate
      },
      headers: {
        Accept: "application/json",
        Authorization: req.body.token,
      },
    });

    res.json({
      status: "success",
      data: response.data,
    });
  } catch (e) {
    return next(new AppError(`Error while getting all employee changes from DDS ${e}`, 500));
  }
});