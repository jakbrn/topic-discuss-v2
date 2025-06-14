import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  topicId: string;
}

export class MessageParams {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
