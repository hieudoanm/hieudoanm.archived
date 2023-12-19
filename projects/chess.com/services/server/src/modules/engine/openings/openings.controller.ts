import { Opening } from '@prisma/client';
import { OpeningsRepository } from './openings.repository';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('chess')
@ApiTags('API - openings')
export class OpeningsController {
  constructor(private readonly openingsRepository: OpeningsRepository) {}

  @Get('openings')
  public async getOpenings(
    @Query('eco') eco: string = '',
    @Query('name') name: string = '',
    @Query('firstMove') firstMove: string = ''
  ): Promise<{ total: number; openings: Opening[] }> {
    return this.openingsRepository.getOpenings({ eco, name, firstMove });
  }

  @Get('openings/ecos')
  public async getECOs(): Promise<{ total: number; ecos: string[] }> {
    return this.openingsRepository.getECOs();
  }
}
