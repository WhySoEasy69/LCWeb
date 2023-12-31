import React from "react"


class TakeoffInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleStateChange = props.handleStateChange
    }

    render() {
        return (<form className="RequestInput">
            <div className="CheckSend">
                <label htmlFor="send_takeoffreq">{"Send:"}</label>
                <input name="send_takeoffreq" type="checkbox"
                       onChange={(e) => this.handleStateChange({ send_takeoffreq: e.target.checked })}></input>
            </div>
            <label htmlFor="takeoff_coef">{"Takeoff Cy:"}</label>
            <input name="takeoff_coef" placeholder="exmpl: 1.002 (in ..)" type="text"
                onChange={(e) => this.handleStateChange({ takeoff_coef: e.target.value })} required pattern="^[+]?\d+([.]\d+)?$"></input>
            <label htmlFor="airport">{"Airport (name/IATA/ICAO):"}</label>
            <input name="airport" placeholder="DME (UUDD, Domodedovo)" type="text"
                onChange={(e) => this.handleStateChange({ airport: e.target.value })}></input>
        </form>)
    }
}

export default TakeoffInput