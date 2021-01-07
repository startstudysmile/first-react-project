import React from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends React.Component {
  state = {}

  static propTypes = {}

  handleClick = () => {}

  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  UNSAFE_componentWillUpdate() {}

  UNSAFE_componentWillReceiveProps() {}

  shouldComponentUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>就这？？？？</p>
        </header>
      </div>
    )
  }
}
