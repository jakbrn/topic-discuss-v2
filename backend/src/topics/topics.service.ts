import { Injectable } from '@nestjs/common';
import { Message, Prisma, Topic } from 'generated/prisma';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TopicsService {
  constructor(private prisma: PrismaService) {}

  async topic(
    topicWhereUniqueInput: Prisma.TopicWhereUniqueInput,
  ): Promise<Topic | null> {
    return this.prisma.topic.findUnique({
      where: topicWhereUniqueInput,
    });
  }

  async topics(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TopicWhereUniqueInput;
    where?: Prisma.TopicWhereInput;
    orderBy?: Prisma.TopicOrderByWithRelationInput;
  }): Promise<{ id: string; title: string; content: string }[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.topic.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createTopic(data: Prisma.TopicCreateInput): Promise<Topic> {
    return this.prisma.topic.create({
      data,
    });
  }

  async updateTopic(params: {
    where: Prisma.TopicWhereUniqueInput;
    data: Prisma.TopicUpdateInput;
  }): Promise<Topic> {
    const { where, data } = params;
    return this.prisma.topic.update({
      data,
      where,
    });
  }

  async deleteTopic(where: Prisma.TopicWhereUniqueInput): Promise<Topic> {
    return this.prisma.topic.delete({
      where,
    });
  }

  async messages(
    topicWhereUniqueInput: Prisma.TopicWhereUniqueInput,
  ): Promise<Message[]> {
    return this.prisma.message.findMany({
      where: {
        topic: topicWhereUniqueInput,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}
