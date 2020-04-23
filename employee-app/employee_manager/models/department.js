var mongoose = require('mongoose');
// Setup schema
var departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    create_date: {
        type: Date,
        default: Date.now()
    }
});
// Export Contact model
var Department = module.exports = mongoose.model('departments', departmentSchema);
module.exports.get = function (callback, limit) {
    Department.find(callback).limit(limit);
}