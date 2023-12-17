import React from "react"
import Request from "./components/Requests/Request"
import Response from "./components/Responses/Response"


class App extends React.Component {
  headerTxt = "Landing Control"
  render() {
    return (<div className="app">
      <h1>{this.headerTxt}</h1>
      <div className="Content">
        <div className="Request">
          <Request />
        </div>
        <div className="Response">
          <Response />
        </div>
      </div>
    </div>)
  }
}

export default App
