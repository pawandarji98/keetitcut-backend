const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const app = express();
const authRouter = require("./routes/auth.router");
const appointmentRouter = require("./routes/appointment.router");
const businessRouter = require("./routes/business.router");
const clientRouter = require("./routes/client.router");
const employeeRouter = require("./routes/employee.router");
const scannedRouter = require("./routes/scanned.router");
const servicesRouter = require("./routes/services.router");

const routesList = require('express-list-routes')


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use((req , res,  next) => {
    req.date = new Date().toISOString();
    next();
});
app.get('/', (req, res) => {
    res.status(201).json({
        status:'success',
        data: {
            message:'server running perfectly'
        }
    });
});

// MAIN ROUTES
app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/appointment' , appointmentRouter);
app.use('/api/v1/business' , businessRouter);
app.use('/api/v1/client' , clientRouter);
app.use('/api/v1/employee' , employeeRouter);
app.use('/api/v1/scanned' , scannedRouter);
app.use('/api/v1/services' , servicesRouter);

routesList(app);

module.exports = app;
