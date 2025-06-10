import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto, TopicParams, UpdateTopicDto } from './dto';

@Controller('topics')
export class TopicsController {
  constructor(private topicsService: TopicsService) {}

  @Get()
  async topics() {
    return this.topicsService.topics({});
  }

  @Get(':id')
  async topic(@Param() params: TopicParams) {
    const { id } = params;
    return this.topicsService.topic({
      id,
    });
  }

  @Post()
  async createTopic(@Body() body: CreateTopicDto, @Request() req) {
    return this.topicsService.createTopic({
      title: body.title,
      content: body.content,
      author: { connect: { id: req.user.id } },
    });
  }

  @Patch(':id')
  async updateTopic(
    @Body() body: UpdateTopicDto,
    @Param() params: TopicParams,
  ) {
    const { id } = params;
    return this.topicsService.updateTopic({ where: { id }, data: body });
  }

  @Delete(':id')
  async deleteTopic(@Param() params: TopicParams) {
    const { id } = params;
    return this.topicsService.deleteTopic({
      id,
    });
  }

  @Get(':id/messages')
  async messages(@Param() params: TopicParams) {
    const { id } = params;
    return this.topicsService.messages({
      id,
    });
  }
}
