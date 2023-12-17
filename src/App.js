import React from "react"
import Request from "./components/Requests/Request"
import Response from "./components/Responses/Response"
import "./css/app.css"


class App extends React.Component {
  headerTxt = "Landing Control"
  render() {
    return (<div className="app">
      <h1>{this.headerTxt}</h1>
      <div className="Request">
        <Request />
      </div>
      <div className="Response">
        <Response />
      </div>
    </div>)
  }
}

export default App
