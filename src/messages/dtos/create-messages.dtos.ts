import { IsString } from 'class-validator';

export class CreatMessagesDto {
  @IsString()
  content: string;
}
