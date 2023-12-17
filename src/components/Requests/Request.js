import React from "react"
import GeneralInput from "./GeneralInput"
import LandingInput from "./LandingInput"
import TakeoffInput from "./TakeoffInput"
import "./css/requests.css"

class Request extends React.Component {
    render() {
        return (<div>
            <h2>{"General data input:"}</h2>
            <GeneralInput />
            <h2>{"Landing data input:"}</h2>
            <LandingInput />
            <h2>{"Takeoff data input:"}</h2>
            <TakeoffInput />
        </div>)
    }
}

export default Request