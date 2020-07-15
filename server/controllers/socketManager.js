const io = require("../socket").getIo;

let connectedUsers = [];

module.exports = function (socket) {
  socket.on("join", ({user}) => {
    user = { id: socket.id, user };
    connectedUsers.push(user);
    console.log(connectedUsers)
    // socket.join(username+'-'+reciver);
  });

  socket.on("private message", ({sender, reciver, message}, cb) => {
    const getReciver = connectedUsers.find((d) => d.user === reciver);
    if(getReciver){
      const {id} = getReciver;
      // console.log(id); 
      const msg = {message, sender, reciver}
      socket.emit('recive message', msg);
      socket.to(id).emit('recive message', msg);
      cb();
    }
  })


  socket.on("disconnect", () => {
    console.log("disconnect user");
  });
};
