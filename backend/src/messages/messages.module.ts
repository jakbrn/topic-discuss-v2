import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { MessagesController } from './messages.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, MessagesService, MessagesGateway],
  controllers: [MessagesController],
})
export class MessagesModule {}
