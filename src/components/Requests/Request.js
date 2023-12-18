import React from "react"
//import WebSocket from 'websocket';

import GeneralInput from "./GeneralInput"
import LandingInput from "./LandingInput"
import TakeoffInput from "./TakeoffInput"

import "./css/requests.css"

import Client from "../../client/Client"

const General = require('./proto-out/general_pb.js');
const Landing = require('./proto-out/landing_pb.js');
const Takeoff = require('./proto-out/takeoff_pb.js');

class Request extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            generalInput: {
                wing_area: '',
                airplane_weight: '',
                airplane_thrust: ''
            },
            landingInput: {
                send_landingreq: false,
                land_coef: '',
                airport: ''
            },
            takeoffInput: {
                send_takeoffreq: false,
                takeoff_coef: '',
                airport: ''
            }
        }

        this.handleGeneralState = this.handleGeneralState.bind(this)
        this.handleLandingState = this.handleLandingState.bind(this)
        this.handleTakeoffState = this.handleTakeoffState.bind(this)
        this.OnRequest = this.OnRequest.bind(this)
        this.OnResponse = this.OnResponse.bind(this)
        this.SendRequest = this.SendRequest.bind(this)
        //this.client = null
    }

    componentDidMount() {
        //this.socket = new WebSocket('ws://localhost:1237');
        console.log("Component did mount")
    }

    /*
    componentDidMount() {
        if (!this.client) {
            const server = {
                ip: '127.0.0.1',
                port: 1237
            };
            this.client = new Client(server, this.OnRequest, this.OnResponse, this.OnConnection);
            //this.client.setState(this.state); // Set the client's state to have access to the component's state data
        }
    }
    */

    render() {
        return (<div className="RequestInput">
            <h2>{"General data input:"}</h2>
            <GeneralInput handleStateChange={this.handleGeneralState} />
            <h2>{"Landing data input:"}</h2>
            <LandingInput handleStateChange={this.handleLandingState} />
            <h2>{"Takeoff data input:"}</h2>
            <TakeoffInput handleStateChange={this.handleTakeoffState} />
            <button onClick={this.SendRequest}>{"Send request"}</button>
        </div>)
    }

    SendRequest() {
        const data = this.OnRequest()
        //this.socket.send(data)
    }

    handleGeneralState(newGeneralInput) {
        this.setState({
            generalInput: { ...this.state.generalInput, ...newGeneralInput }
        })
    }


    handleLandingState(newLandingInput) {
        this.setState({
            landingInput: { ...this.state.landingInput, ...newLandingInput }
        })
    }

    handleTakeoffState(newTakeoffInput) {
        this.setState({
            takeoffInput: { ...this.state.takeoffInput, ...newTakeoffInput }
        })
    }

    OnRequest() {
        console.log('request initiated')

        const request = new General.Request();

        const landingData = this.state.landingInput
        const takeoffData = this.state.takeoffInput
        const generalData = this.state.generalInput

        if (takeoffData.send_takeoffreq) {
            const takeoffRequest = new Takeoff.TakeoffRequest();

            takeoffRequest.setM(parseFloat(generalData.airplane_weight));
            takeoffRequest.setS(parseFloat(generalData.wing_area));
            takeoffRequest.setP(parseFloat(generalData.airplane_thrust));
            takeoffRequest.setCyLand(parseFloat(takeoffData.takeoff_coef));
            takeoffRequest.setAirport(takeoffData.airport);

            request.setTakeoffreq(takeoffRequest);
        }
        if (landingData.send_landingreq) {
            const landingRequest = new Landing.LandingRequest();

            landingRequest.setM(parseFloat(generalData.airplane_weight));
            landingRequest.setS(parseFloat(generalData.wing_area));
            landingRequest.setP(parseFloat(generalData.airplane_thrust));
            landingRequest.setCyLand(parseFloat(landingData.land_coef));
            landingRequest.setAirport(landingData.airport);

            request.setLandingreq(landingRequest);
        }

        return request.serializeBinary();
    }

    OnResponse(data) {
        console.log('response received')

        const decodedData = General.Response.deserializeBinary(data);

        if (decodedData.hasLandingresp()) {
            console.log("l land: ", decodedData.getLandingresp().getLLand());
            console.log("v land: ", decodedData.getLandingresp().getVLand());
        }
        if (decodedData.hasTakeoffresp()) {
            console.log("l takeoff: ", decodedData.getTakeoffresp().getLTakeoff());
            console.log("v takeoff: ", decodedData.getTakeoffresp().getVTakeoff());
        }
    }

    OnConnection() {
        console.log('connection initiated')
    }
}

export default Request