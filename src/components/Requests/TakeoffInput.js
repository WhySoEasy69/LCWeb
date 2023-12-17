import React from "react"


class TakeoffInput extends React.Component {
    render() {
        return (<form>
            <label for="send_takeoffreq">{"Send:"}</label>
            <input name="send_takeoffreq" type="checkbox"></input>
            <label for="takeoff_coef">{"Takeoff Cy:"}</label>
            <input name="takeoff_coef" placeholder="exmpl: 1.002 (in ..)" type="text"></input>
            <label for="airport">{"Airport (name/IATA/ICAO):"}</label>
            <input name="airport" placeholder="DME (UUDD, Domodedovo)" type="text"></input>
        </form>)
    }
}

export default TakeoffInput