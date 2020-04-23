// Import contact model
Employee = require('../models/employee');
// Handle index actions
exports.index = function (req, res) {
    Employee.get((err, employee) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Employees retrieved successfully",
            data: employee
        });
    });
};
// Handle create employee actions
exports.new = (req, res) => {
    var employee = new Employee();
    employee.first_name = req.body.first_name ? req.body.first_name : employee.first_name;
    employee.last_name = req.body.last_name ? req.body.last_name : employee.last_name;
    employee.employee_no = req.body.employee_no;
    employee.gender = req.body.gender;
    employee.email = req.body.email;
    employee.phone = req.body.phone;
    employee.city = req.body.city;
    employee.designation_id = req.body.designation_id
    employee.department_id = req.body.department_id
// save the employee and check for errors
    employee.save((err) => {
        if (err)
            res.json(err);
        res.json({
            message: 'New employee created!',
            data: employee
        });
    });
};
// Handle view employee info
exports.view = function (req, res) {
    Employee.findById(req.params.employee_id, (err, employee) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Employee details loading..',
            data: employee
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
    Employee.findById(req.params.employee_id, (err, employee) => {
        if (err)
            res.send(err);
            employee.first_name = req.body.first_name ? req.body.first_name : employee.first_name;
            employee.last_name = req.body.first_name ? req.body.last_name : employee.last_name;
            employee.gender = req.body.gender;
            employee.email = req.body.email;
            employee.phone = req.body.phone;
            employee.city = req.body.city;
// save the employee and check for errors
        employee.save((err) => {
            if (err)
                res.json(err);
            res.json({
                message: 'Employee Info updated',
                data: employee
            });
        });
    });
};
// Handle delete contact
exports.delete = (req, res) => {
    Employee.remove({
        _id: req.params.employee_id
    }, (err, employee) => {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Employee deleted'
        });
    });
};