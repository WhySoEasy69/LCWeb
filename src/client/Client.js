import io from 'socket.io-client'

class Client {
  static msg_id = 0;

  constructor(srvAdr, SendCallback, ReceiveCallback, ConnectCallback) {
    this.socket = io.connect(`http://${srvAdr.ip}:${srvAdr.port}`);

    this.OnRequest = SendCallback;
    this.OnResponse = ReceiveCallback;
    this.OnConnect = ConnectCallback;

    this.socket.on('data', data => {
      this.OnResponseReceived(data);
    });

    this.socket.on('connect', this.OnConnect);

    this.SendRequest = this.SendRequest.bind(this);
  }

  SendRequest() {
    const data = this.OnRequest();
    this.socket.emit('request', data);
  }

  OnResponseReceived(data) {
    this.OnResponse(data);
  }
}

export default Client
