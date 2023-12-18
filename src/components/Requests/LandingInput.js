import React from "react"


class LandingInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleStateChange = props.handleStateChange
    }

    render() {
        return (<form className="RequestInput">
            <div className="CheckSend">
                <label htmlFor="send_landingreq">{"Send:"}</label>
                <input name="send_landingreq" type="checkbox"
                       onChange={(e) => this.handleStateChange({ send_landingreq: e.target.checked })}></input>
            </div>
            <label htmlFor="land_coef">{"Landing Cy:"}</label>
            <input name="land_coef" placeholder="exmpl: 1.002 (in ..)" type="text"
                onChange={(e) => this.handleStateChange({ land_coef: e.target.value })} required pattern="^[+]?\d+([.]\d+)?$"></input>
            <label htmlFor="airport">{"Airport (name/IATA/ICAO):"}</label>
            <input name="airport" placeholder="DME (UUDD, Domodedovo)" type="text"
                onChange={(e) => this.handleStateChange({ airport: e.target.checked })}></input>
        </form>)
    }
}

export default LandingInput