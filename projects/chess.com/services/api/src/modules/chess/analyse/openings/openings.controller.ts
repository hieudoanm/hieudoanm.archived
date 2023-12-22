import { Opening } from '@prisma/client';
import { Controller, Get, Query, Route, Tags } from 'tsoa';
import { OpeningsRepository } from './openings.repository';

@Route('chess')
@Tags('API - Openings')
export class OpeningsController extends Controller {
  private openingsRepository: OpeningsRepository;

  constructor() {
    super();
    this.openingsRepository = new OpeningsRepository();
  }

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
