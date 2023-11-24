import { Position } from '@prisma/client';
import { Body, Controller, Get, Post, Query, Route, Tags } from 'tsoa';
import { PositionService } from './position.service';

@Route('chess')
@Tags('API - Position', 'external - lichess.org')
export class PositionController extends Controller {
  private positionService: PositionService;

  constructor() {
    super();
    this.positionService = new PositionService();
  }

  @Get('position')
  async getPosition(@Query('fen') fen: string): Promise<Position> {
    return this.positionService.getPosition(fen);
  }

  @Post('position')
  async syncPosition(@Body() { fen }: { fen: string }): Promise<Position> {
    return this.positionService.syncPosition(fen);
  }
}
