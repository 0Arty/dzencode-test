import {
   ConnectedSocket,
   OnGatewayConnection,
   OnGatewayDisconnect,
   WebSocketGateway,
   WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

@WebSocketGateway({
   cors: {
      origin: '*',
   },
})
export class ActiveTabsGateway
   implements OnGatewayConnection, OnGatewayDisconnect
{
   @WebSocketServer()
   server!: Server

   handleConnection(@ConnectedSocket() socket: Socket) {
      console.log('Connected:', socket.id)

      this.emitActiveTabs()
   }

   handleDisconnect(@ConnectedSocket() socket: Socket) {
      console.log('Disconnected:', socket.id)

      this.emitActiveTabs()
   }

   private emitActiveTabs() {
      const activeTabs = this.server.sockets.sockets.size

      this.server.emit('activeTabs', activeTabs)
   }
}
