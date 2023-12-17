import React from "react"


class LandingInput extends React.Component {
    render() {
        return (<form>
            <label for="send_landingreq">{"Send:"}</label>
            <input name="send_landingreq" type="checkbox"></input>
            <label for="land_coef">{"Landing Cy:"}</label>
            <input name="land_coef" placeholder="exmpl: 1.002 (in ..)" type="text"></input>
            <label for="airport">{"Airport (name/IATA/ICAO):"}</label>
            <input name="airport" placeholder="DME (UUDD, Domodedovo)" type="text"></input>
        </form>)
    }
}

export default LandingInput