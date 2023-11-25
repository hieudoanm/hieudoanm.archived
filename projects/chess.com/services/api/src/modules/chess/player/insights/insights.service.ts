import { Insights } from './insights.types';
import { AccuracyService } from './services/accuracy/accuracy.service';
import { GamesService } from './services/games/games.service';
import { OpponentsService } from './services/opponents/opponents.service';
import { Opponent } from './services/opponents/opponents.types';
import { ResultsService } from './services/results/results.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(BigInt.prototype as any).toJSON = function() {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

export class InsightsService {
  private gamesService: GamesService;
  private resultsService: ResultsService;
  private accuracyService: AccuracyService;
  private opponentsService: OpponentsService;

  constructor() {
    this.gamesService = new GamesService();
    this.resultsService = new ResultsService();
    this.accuracyService = new AccuracyService();
    this.opponentsService = new OpponentsService();
  }

  public async getGamesInsights(
    username: string
  ): Promise<Pick<Insights, 'username' | 'games'>> {
    const games = await this.gamesService.getGames(username);
    return { username, games };
  }

  public async getAccuracyInsights(
    username: string
  ): Promise<Pick<Insights, 'username' | 'accuracy'>> {
    const accuracy = await this.accuracyService.getAccuracy(username);
    return { username, accuracy };
  }

  public async getResultsInsights(
    username: string
  ): Promise<Pick<Insights, 'username' | 'results'>> {
    const results = await this.resultsService.getResults(username);
    return { username, results };
  }

  public async getOpponentsInsights(
    username: string
  ): Promise<Pick<Insights, 'username' | 'opponents'> & { total: number; }> {
    const opponents: Opponent[] = await this.opponentsService.getOpponents(
      username
    );
    const total: number = opponents.length;
    return { username, total, opponents };
  }

  public async getInsights(username: string): Promise<Insights> {
    const games = await this.gamesService.getGames(username);
    const accuracy = await this.accuracyService.getAccuracy(username);
    const results = await this.resultsService.getResults(username);
    const opponents = await this.opponentsService.getOpponents(username);
    return { username, games, accuracy, results, opponents };
  }
}
