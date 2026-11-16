let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/aboutus', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET Contact page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;