'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./formik-with-sync.cjs.production.js');
} else {
  module.exports = require('./formik-with-sync.cjs.development.js');
}