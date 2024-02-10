const routes = require('express').Router();
const controller = require('../controllers/membersController');

routes.get('/', controller.getMembers);
routes.get('/:id', controller.getMemberById);
/* routes.get('/', controller.getMembersByPrayerDate); */
/* routes.get('/', controller.getMembersByTalkDate);   */
/* routes.get('/', controller.getMembersByAgeRange);   */
/* routes.get('/', controller.getMembersByGender);     */
/* routes.get('/', controller.getMemberByLname); */
/* routes.get('/', controller.getMemberByFname); */


routes.post('/', controller.addMember);

routes.put('/:id', controller.updateMemberRecord);
/* routes.put('/:id', controller.updateMemberPrayerDate; */
/* routes.put('/:id', controller.updateMemberTalkDate);  */

/* routes.delete('/:id', controller.deleteMember); */




module.exports = routes;