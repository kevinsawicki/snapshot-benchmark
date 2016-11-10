// Assign without var/let/const so it ends up as a global in the browserify
// wrapper
snapshot = {
  Redux: require('redux'),
  d3: require('d3'),
  moment: require('moment'),
  React: require('react'),
  ReactDOM: require('react-dom')
}
