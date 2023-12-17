const net = require('net');

class Client {
  static msg_id = 0;

  constructor(srvAdr, SendCallback, ReceiveCallback, ConnectCallback) {
    this.socket = new net.Socket();

    this.OnRequest = SendCallback
    this.OnResponse = ReceiveCallback
    this.OnConnect = ConnectCallback

    this.socket.on('data', data => {
      this.OnResponseReceived(data)
    })

    /*
    this.socket.connect({
      port: srvAdr.port,
      host: srvAdr.ip
    }, this.OnConnect)
    */

    this.SendRequest = this.SendRequest.bind(this)
  }

  SendRequest() {
    const data = this.OnRequest();
    this.socket.write(data);
  }

  OnResponseReceived(data) {
    this.OnResponse(data)
  }

}

export default Client
