import React from "react"


class App extends React.Component {
  headerTxt = "hello"
  render() {
    return (<div className="app">
      <h1>{this.headerTxt}</h1>
    </div>)
  }
}

export default App
