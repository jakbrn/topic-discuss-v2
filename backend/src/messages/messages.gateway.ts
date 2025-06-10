import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Message } from 'generated/prisma';
import { Server } from 'socket.io';

@WebSocketGateway()
export class MessagesGateway {
  @WebSocketServer()
  private server: Server;

  newMessage(message: Message): void {
    this.server.emit('newMessage', message);
  }
}
