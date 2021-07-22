import { io, Socket } from 'socket.io-client';
import { Response, Status } from './protocol';

const defaultHost = 'ws://192.168.1.19:3000';

class Client {
  deviceId?: string;
  host: string = defaultHost;
  socket?: Socket;

  constructor(deviceId?: string, host?: string) {
    this.deviceId = deviceId;

    // Assign the host.
    if (host) this.host = host;
  }

  connect = () => {
    return new Promise<void>((resolve, reject) => {
      let query = {};

      if (this.deviceId)
        query = { deviceId: this.deviceId };

      // Assign the socket.
      this.socket = io(this.host, {timeout: 5000, reconnectionAttempts: 3, query: query});

      this.socket.on('connect', () => {
        resolve();
      });

      this.socket.on('disconnect', () => {
        console.log('disconnect');
      });

      this.socket.on('connect_error', () => {
        reject('Connection timed out.');
      });
    });
  };

  disconnect = () => {
    this.socket?.disconnect();
  }

  pairDevice = (deviceId: string) => {
    return new Promise<void>((resolve, reject) => {
      this.socket?.emit('pairDevice', {id: deviceId}, (result: Response) => {
        if (result.status == Status.COMPLETE) { 
          resolve();
        }
        console.log(result);
      });
    })
  }
}

export default Client;
