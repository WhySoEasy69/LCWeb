import React from "react"


class TakeoffOutput extends React.Component {
    render() {
        return (<div>
            <label for="takeoff_speed">{"V (takeoff speed):"}</label>
            <input name="takeoff_speed" placeholder="exmpl: 350 (in km/h)" type="text" readonly></input>
            <label for="takeoff_runway">{"L (takeoff runway length):"}</label>
            <input name="takeoff_runway" placeholder="exmpl: 2500 (in m)" type="text" readonly></input>
        </div>)
    }
}

export default TakeoffOutput