(function () {
  const Redux = require('redux')
  const d3 = require('d3')
  const moment = require('moment')
  const React = require('react')
  const ReactDOM = require('react-dom')

  require('../render').render(Redux, d3, moment, React, ReactDOM)
})()
