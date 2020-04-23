// Import contact model
Designation = require('./designationModel');
// Handle index actions
exports.index = (req, res) => {
    Designation.get((err, designation) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Designations retrieved successfully",
            data: designation
        });
    });
};
// Handle create designation actions
exports.new = (req, res) => {
    var designation = new Designation();
    designation.name = req.body.name ? req.body.name : designation.name;
// save the employee and check for errors
    designation.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New designation created!',
            data: designation
        });
    });
};
// Handle view designation info
exports.view = (req, res) => {
    Designation.findById(req.params.designation_id, (err, designation) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Designation details loading..',
            data: {
                Name: designation.name
            }
        });
    });
};
// Handle update designation info
exports.update = (req, res) => {
    Designation.findById(req.params.designation_id, (err, designation) => {
        if (err)
            res.send(err);
            designation.name = req.body.name ? req.body.name : designation.name;
            designation.description = designation.description;
// save the designation and check for errors
        designation.save((err) => {
            if (err)
                res.json(err);
            res.json({
                message: 'Designation Info updated',
                data: designation
            });
        });
    });
};
// Handle delete designation
exports.delete = (req, res) => {
    Designation.remove({
        _id: req.params.designation_id
    }, (err, designation) => {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Designation deleted'
        });
    });
};