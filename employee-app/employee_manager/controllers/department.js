// Import contact model
Department = require('../models/department');
// Handle index actions
exports.index = (req, res) => {
    Department.get((err, department) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Departments retrieved successfully",
            data: department
        });
    });
};
// Handle create department actions
exports.new = (req, res) => {
    var department = new Department();
    department.name = req.body.name ? req.body.name : employee.name;
    department.description = req.body.description;
// save the department and check for errors
    department.save((err) => {
        if (err)
            res.json(err);
        res.json({
            message: 'New department created!',
            data: department
        });
    });
};
// Handle view department info
exports.view = (req, res) => {
    Department.findById(req.params.department_id, (err, department) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Department details loading..',
            data: department
        });
    });
};
// Handle update department info
exports.update = (req, res) => {
    Department.findById(req.params.department_id, (err, department) => {
        if (err)
            res.send(err);
            department.name = req.body.name ? req.body.name : employee.name;
            department.description = req.body.description;
// save the department and check for errors
        department.save((err) => {
            if (err)
                res.json(err);
            res.json({
                message: 'Department Info updated',
                data: department
            });
        });
    });
};
// Handle delete department
exports.delete = (req, res) => {
    Department.remove({
        _id: req.params.department_id
    }, (err, department) => {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Department deleted'
        });
    });
};