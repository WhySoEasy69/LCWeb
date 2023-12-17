import React from "react"


class GeneralInput extends React.Component {
    render() {
        return (<form>
            <label for="wing_area">{"S (wing area):"}</label>
            <input name="wing_area" placeholder="exmpl: 250 (in m2)" type="text"></input>
            <label for="airplane_weight">{"M (airplane weight):"}</label>
            <input name="airplane_weight" placeholder="exmpl: 25000 (in kg)" type="text"></input>
            <label for="airplain_thrust">{"P (thrust):"}</label>
            <input name="airplain_thrust" placeholder="exmpl: 1000 (in ...)" type="text"></input>
        </form>)
    }
}

export default GeneralInput