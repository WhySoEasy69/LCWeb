import React from "react"


class LandingOutput extends React.Component {
    render() {
        return (<div>
            <label for="land_speed">{"V (landing speed):"}</label>
            <input name="land_speed" placeholder="exmpl: 350 (in km/h)" type="text" readonly></input>
            <label for="land_runway">{"L (landing runway length):"}</label>
            <input name="land_runway" placeholder="exmpl: 2500 (in m)" type="text" readonly></input>
        </div>)
    }
}

export default LandingOutput