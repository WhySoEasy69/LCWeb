import React from "react"


class GeneralInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleStateChange = props.handleStateChange
    }

    render() {
        return (<form className="RequestInput">
            <label htmlFor="wing_area">{"S (wing area):"}</label>
            <input name="wing_area" placeholder="exmpl: 250 (in m2)" type="text"
                onChange={(e) => this.handleStateChange({ wing_area: e.target.value })}></input>
            <label htmlFor="airplane_weight">{"M (airplane weight):"}</label>
            <input name="airplane_weight" placeholder="exmpl: 25000 (in kg)" type="text"
                onChange={(e) => this.handleStateChange({ airplane_weight: e.target.value })}></input>
            <label htmlFor="airplain_thrust">{"P (thrust):"}</label>
            <input name="airplain_thrust" placeholder="exmpl: 1000 (in ...)" type="text"
                onChange={(e) => this.handleStateChange({ airplain_thrust: e.target.value })}></input>
        </form>)
    }

}

export default GeneralInput