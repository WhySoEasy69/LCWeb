import React from "react"
import LandingOutput from "./LandingOutput"
import TakeoffOutput from "./TakeoffOutput"
import "./css/responses.css"

class Response extends React.Component {
    render() {
        return (
            <div>
                <h2>{"Landing Output:"}</h2>
                <LandingOutput />
                <h2>{"Takeoff Output:"}</h2>
                <TakeoffOutput />
            </div>
        )
    }
}

export default Response