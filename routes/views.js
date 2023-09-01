const express = require('express');
const router = express.Router();
const fs = require('fs');
const pattern = /\.html$/i;
let filteredViews = [];

try {
  const files = fs.readdirSync('./views/');

  files.forEach((file) => {
    if (pattern.test(file)) {
      filteredViews.push({
        name: file,
        path: `/${file.replace(pattern, '')}`
      });
    }
  });
} catch (err) {
  console.log(err);
}

router.get('/', function (req, res, next) {
  res.render('service/views', {
    title: 'Views List',
    views: filteredViews
  });
});

module.exports = router;
