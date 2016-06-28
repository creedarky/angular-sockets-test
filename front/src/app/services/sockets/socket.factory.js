import io from 'socket.io-client';

export default function(socketFactory) {
  // socket.io now auto-configures its connection when we ommit a connection url
  var ioSocket = io('', {
    // Send auth token on connection, you will need to DI the Auth service above
    // 'query': 'token=' + Auth.getToken()
    path: '/api/socket.io-client'
  });

  var socket = socketFactory({
    ioSocket
  });

  return {
    socket
  };
}
