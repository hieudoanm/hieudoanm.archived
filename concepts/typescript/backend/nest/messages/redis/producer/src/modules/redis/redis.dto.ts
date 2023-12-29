import { ApiProperty } from '@nestjs/swagger';

export class RedisResponseDto {
  @ApiProperty()
  status: string;
}
