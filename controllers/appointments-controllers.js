const customRapper = require("../utils/catch-error");
const { apiAxios } = require("../axios/base-api");
require("dotenv").config();

exports.getListOfAppointmentCategories = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.get(
        "/book/appointmentCategories?TenantId=4&LocationId=3",
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(`Error while getting all appointment categories ${e}`, 500)
      );
    }
  }
);

exports.getListOfAppointmentCancellationReasons = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.get(
        "/book/appointmentCancellationReasons?TenantId=4&LocationId=3",
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(
          `Error while getting all appointmentCancellationReasons ${e}`,
          500
        )
      );
    }
  }
);

exports.getDetailOfBookedService = customRapper(async (req, res, next) => {
  try {
    const response = await apiAxios.get(
      `/book/service/${req.body.AppointmentServiceId}?TenantId=4&LocationId=3`,
      {
        headers: {
          Accept: "application/json",
          Authorization: req.body.token,
        },
      }
    );

    res.json({
      status: "success",
      data: response.data,
    });
  } catch (e) {
    return next(
      new AppError(`Error while getting detail of booked service ${e}`, 500)
    );
  }
});

exports.getDetailOfAppointment = customRapper(async (req, res, next) => {
  try {
    const response = await apiAxios.get(
      `/book/appointment/${req.body.AppointmentId}?TenantId=4&LocationId=3`,
      {
        headers: {
          Accept: "application/json",
          Authorization: req.body.token,
        },
      }
    );

    res.json({
      status: "success",
      data: response.data,
    });
  } catch (e) {
    return next(
      new AppError(`Error while getting detail of Appointment ${e}`, 500)
    );
  }
});

exports.getDetailOfAppointmentCategory = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.get(
        `/book/appointmentCategory/${req.body.AppointmentCategoryId}?TenantId=4&LocationId=3`,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(
          `Error while getting detail of Appointment category ${e}`,
          500
        )
      );
    }
  }
);

exports.getDetailOfAppointmentCancellationReason = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.get(
        `/book/appointmentCancellationReason/${req.body.AppointmentCancellationReasonId}?TenantId=4&LocationId=3`,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(
          `Error while getting detail of Appointment cancellation ${e}`,
          500
        )
      );
    }
  }
);

exports.getListOfBookedAppointmentServices = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.get(
        `/book/appointment/${req.body.AppointmentId}/services?TenantId=4&LocationId=3`,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(
          `Error while getting list of booked Appointment services ${e}`,
          500
        )
      );
    }
  }
);


exports.createAppointmentBookService = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.post(
        `/book/service?TenantId=4&LocationId=3`,
        req.body.data,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(
          `Error while creating book Appointment services ${e}`,
          500
        )
      );
    }
  }
);

exports.updateAppointmentBookService = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.put(
        `/book/service/${req.body.AppointmentServiceId}?TenantId=4&LocationId=3`,
        req.body.data,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });
    } catch (e) {
      return next(
        new AppError(
          `Error while updating book Appointment services ${e}`,
          500
        )
      );
    }
  }
);


exports.cancleAppointmentBookService = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.put(
        `/book/service/${req.body.AppointmentServiceId}?ConcurrencyCheckDigits=${req.body.ConcurrencyCheckDigits}&TenantId=4&LocationId=3`,
        req.body.data,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });

    } catch (e) {
      return next(
        new AppError(
          `Error while cancelling Appointment services ${e}`,
          500
        )
      );
    }
  }
);

exports.updateAppointment = customRapper(
  async (req, res, next) => {
    try {
      const response = await apiAxios.put(
        `/book/appointment/${req.body.AppointmentId}?TenantId=4&LocationId=3`,
        req.body.data,
        {
          headers: {
            Accept: "application/json",
            Authorization: req.body.token,
          },
        }
      );

      res.json({
        status: "success",
        data: response.data,
      });

    } catch (e) {
      return next(
        new AppError(
          `Error while cancelling Appointment services ${e}`,
          500
        )
      );
    }
  }
);


