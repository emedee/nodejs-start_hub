var mongoose = require('mongoose');
// Setup schema
var employeesSchema = mongoose.Schema({
    employee_no:{
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    gender: String,
    email: String,
    phone: String,
    city: String,
    designation_id: String,
    department_id: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Employee = module.exports = mongoose.model('employees', employeesSchema);
module.exports.get = function (callback, limit) {
    Employee.find(callback).limit(limit);
}