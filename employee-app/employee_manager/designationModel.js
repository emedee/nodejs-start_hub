var mongoose = require('mongoose');
// Setup schema
var designationsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Designation = module.exports = mongoose.model('designations', designationsSchema);
module.exports.get = function (callback, limit) {
    Designation.find(callback).limit(limit);
}