import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTopicDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  content: string;
}

export class UpdateTopicDto {
  @ApiProperty()
  @Optional()
  title: string;

  @ApiProperty()
  @Optional()
  content: string;
}

export class TopicParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
