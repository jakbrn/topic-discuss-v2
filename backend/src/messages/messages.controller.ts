import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto, MessageParams } from './dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  messages() {
    return this.messagesService.messages({});
  }

  @Get(':id')
  message(@Param() params: MessageParams) {
    const { id } = params;
    return this.messagesService.message({ id });
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto, @Request() req) {
    return this.messagesService.createMessage({
      content: body.content,
      author: { connect: { id: req.user.id } },
      topic: { connect: { id: body.topicId } },
    });
  }
}
