// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

// Import employee controller
var employeeController = require('../controllers/employee');
//Import department controller
var departmentController = require('../controllers/department');
//Import designation controller
var designationController = require('../controllers/designation');
// Contact routes
router.route('/employees')
    .get(employeeController.index)
    .post(employeeController.new);
router.route('/employees/:employee_id')
    .get(employeeController.view)
    .patch(employeeController.update)
    .put(employeeController.update)
    .delete(employeeController.delete);
router.route('/departments')
    .get(departmentController.index)
    .post(departmentController.new);
router.route('/departments/:department_id')
    .get(departmentController.view)
    .patch(departmentController.update)
    .put(departmentController.update)
    .delete(departmentController.delete);
router.route('/designations')
    .get(designationController.index)
    .post(designationController.new);
router.route('/designations/:designation_id')
    .get(designationController.view)
    .patch(designationController.update)
    .put(designationController.update)
    .delete(designationController.delete);
// Export API routes
module.exports = router;