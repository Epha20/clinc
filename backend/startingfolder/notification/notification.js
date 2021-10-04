let connection = null;
class Notification {
  constructor() {
    this._socket = null;
  }
  connect(server) {
    const io = require("socket.io")(server);
    io.on("connection", (socket) => {
      //   console.log(socket);
      this._socket = socket;
      socket.on("message", (msg) => {
        console.log("message:", msg);
        socket.emit("message", "your message received");
      });
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
  sendEvent(event, handler) {
    console.log(event, handler);
    this._socket.emit(event, handler);
  }
  registerEvent(event, handler) {
    this._socket.on(event, handler);
  }
  static init(server) {
    if (!connection) {
      connection = new Notification();
      connection.connect(server);
      console.log("connectionestablished");
    }
  }
  static getConnection() {
    if (!connection) {
      throw new Error("no active connection");
    }
    return connection;
  }
}
module.exports = {
  connect: Notification.init,
  connection: Notification.getConnection,
};
