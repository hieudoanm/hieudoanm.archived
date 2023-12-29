import { ApiProperty } from '@nestjs/swagger';

export class ProduceResponseDto {
  @ApiProperty()
  status: string;
}
