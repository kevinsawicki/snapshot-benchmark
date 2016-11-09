exports.render = (Redux, d3, moment, React, ReactDOM) => {
  class Versions extends React.Component {
    render() {
      return React.createElement('div', null, `React v${this.props.reactVersion}, moment v${this.props.momentVersion}, d3 v${this.props.d3Version}`);
    }
  }

  const store = Redux.createStore((state, action) => {
    if (state == null) {
      return {
        reactVersion: React.version,
        momentVersion: moment.version,
        d3Version: d3.version
      }
    }
    return state
  })

  ReactDOM.render(
    React.createElement(Versions, store.getState(), null),
    document.getElementById('root')
  )
}
