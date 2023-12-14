/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  fetchMiddlewares,
  FieldErrors,
  HttpStatusCodeLiteral,
  TsoaResponse,
  TsoaRoute,
  ValidateError,
  ValidationService,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AnalyseController } from './modules/chess/analyse/analyse.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { OpeningsController } from './modules/chess/analyse/openings/openings.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PositionController } from './modules/chess/analyse/position/position.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GamesController } from './modules/chess/player/games/games.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MovesController } from './modules/chess/player/games/moves/moves.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { InsightsController } from './modules/chess/player/insights/insights.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PlayerController } from './modules/chess/player/player.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StreamersController } from './modules/chess/player/steamers/streamers.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CountriesController } from './modules/chess/titled/countries/countries.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TitledController } from './modules/chess/titled/titled.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { RequestHandler, Router } from 'express';
import { HealthController } from './modules/health/health.controller';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  PrincipalVariationSearch: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        pawn: { dataType: 'double', required: true },
        centipawn: { dataType: 'double', required: true },
        nextMoves: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  FullCloudEvaluation: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        principalVariationSearch: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'PrincipalVariationSearch' },
          required: true,
        },
        depth: { dataType: 'double', required: true },
        knodes: { dataType: 'double', required: true },
        fen: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'GetResult_any.any.any_': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {},
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'runtime.Types.DefaultSelection_OpeningPayload_': {
    dataType: 'refAlias',
    type: {
      dataType: 'intersection',
      subSchemas: [
        { ref: 'GetResult_any.any.any_' },
        { dataType: 'nestedObjectLiteral', nestedProperties: {} },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Opening: {
    dataType: 'refAlias',
    type: {
      ref: 'runtime.Types.DefaultSelection_OpeningPayload_',
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'runtime.Types.DefaultSelection_PositionPayload_': {
    dataType: 'refAlias',
    type: {
      dataType: 'intersection',
      subSchemas: [
        { ref: 'GetResult_any.any.any_' },
        { dataType: 'nestedObjectLiteral', nestedProperties: {} },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Position: {
    dataType: 'refAlias',
    type: {
      ref: 'runtime.Types.DefaultSelection_PositionPayload_',
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'runtime.Types.DefaultSelection_GamePayload_': {
    dataType: 'refAlias',
    type: {
      dataType: 'intersection',
      subSchemas: [
        { ref: 'GetResult_any.any.any_' },
        { dataType: 'nestedObjectLiteral', nestedProperties: {} },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Game: {
    dataType: 'refAlias',
    type: {
      ref: 'runtime.Types.DefaultSelection_GamePayload_',
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'runtime.Types.DefaultSelection_MovePayload_': {
    dataType: 'refAlias',
    type: {
      dataType: 'intersection',
      subSchemas: [
        { ref: 'GetResult_any.any.any_' },
        { dataType: 'nestedObjectLiteral', nestedProperties: {} },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Move: {
    dataType: 'refAlias',
    type: {
      ref: 'runtime.Types.DefaultSelection_MovePayload_',
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GamesByPeriod: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        period: { dataType: 'double', required: true },
        games: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GamesByTimeOfDay: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        timeOfDay: { dataType: 'string', required: true },
        games: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GamesByDayOfWeek: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        dayOfWeek: { dataType: 'string', required: true },
        games: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Games: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        daysOfWeek: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'GamesByDayOfWeek' },
          required: true,
        },
        timeOfDays: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'GamesByTimeOfDay' },
          required: true,
        },
        periods: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'GamesByPeriod' },
          required: true,
        },
        loss: { dataType: 'double', required: true },
        draw: { dataType: 'double', required: true },
        win: { dataType: 'double', required: true },
        total: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  AccuracyByPeriod: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        period: { dataType: 'double', required: true },
        average: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  AccuracyByTimeOfDay: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        timeOfDay: { dataType: 'string', required: true },
        average: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  AccuracyByDayOfWeek: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        dayOfWeek: { dataType: 'string', required: true },
        average: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Accuracy: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        daysOfWeek: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'AccuracyByDayOfWeek' },
          required: true,
        },
        timeOfDays: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'AccuracyByTimeOfDay' },
          required: true,
        },
        periods: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'AccuracyByPeriod' },
          required: true,
        },
        loss: { dataType: 'double', required: true },
        draw: { dataType: 'double', required: true },
        win: { dataType: 'double', required: true },
        average: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Result: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        count: { dataType: 'double', required: true },
        result: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ResultsByTimeOfDay: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        timeOfDay: { dataType: 'string', required: true },
        loss: { dataType: 'double', required: true },
        draw: { dataType: 'double', required: true },
        win: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ResultsByDayOfWeek: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        dayOfWeek: { dataType: 'string', required: true },
        loss: { dataType: 'double', required: true },
        draw: { dataType: 'double', required: true },
        win: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Results: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        daysOfWeek: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'ResultsByDayOfWeek' },
          required: true,
        },
        timeOfDays: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'ResultsByTimeOfDay' },
          required: true,
        },
        loss: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Result' },
          required: true,
        },
        draw: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Result' },
          required: true,
        },
        win: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Result' },
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Opponent: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        loss: { dataType: 'double', required: true },
        draw: { dataType: 'double', required: true },
        win: { dataType: 'double', required: true },
        games: { dataType: 'double', required: true },
        opponent: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Insights: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        opponents: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Opponent' },
          required: true,
        },
        results: { ref: 'Results', required: true },
        accuracy: { ref: 'Accuracy', required: true },
        games: { ref: 'Games', required: true },
        username: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Pick_Insights.username-or-games_': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        username: { dataType: 'string', required: true },
        games: { ref: 'Games', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Pick_Insights.username-or-accuracy_': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        username: { dataType: 'string', required: true },
        accuracy: { ref: 'Accuracy', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Pick_Insights.username-or-results_': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        username: { dataType: 'string', required: true },
        results: { ref: 'Results', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'Pick_Insights.username-or-opponents_': {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        username: { dataType: 'string', required: true },
        opponents: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Opponent' },
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  'runtime.Types.DefaultSelection_PlayerPayload_': {
    dataType: 'refAlias',
    type: {
      dataType: 'intersection',
      subSchemas: [
        { ref: 'GetResult_any.any.any_' },
        { dataType: 'nestedObjectLiteral', nestedProperties: {} },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Player: {
    dataType: 'refAlias',
    type: {
      ref: 'runtime.Types.DefaultSelection_PlayerPayload_',
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  StreamersResponse: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        countries: {
          dataType: 'array',
          array: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
              country: { dataType: 'string', required: true },
              countryCode: { dataType: 'string', required: true },
            },
          },
          required: true,
        },
        players: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Player' },
          required: true,
        },
        total: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Title: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['GM'] },
        { dataType: 'enum', enums: ['WGM'] },
        { dataType: 'enum', enums: ['IM'] },
        { dataType: 'enum', enums: ['WIM'] },
        { dataType: 'enum', enums: ['FM'] },
        { dataType: 'enum', enums: ['WFM'] },
        { dataType: 'enum', enums: ['CM'] },
        { dataType: 'enum', enums: ['WCM'] },
        { dataType: 'enum', enums: ['NM'] },
        { dataType: 'enum', enums: ['WNM'] },
        { dataType: 'enum', enums: ['AGM'] },
        { dataType: 'enum', enums: ['AIM'] },
        { dataType: 'enum', enums: ['AFM'] },
        { dataType: 'enum', enums: ['ACM'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CountryCount: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        total: { dataType: 'string', required: true },
        country: { dataType: 'string', required: true },
        countryCode: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CountriesResponse: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        titles: {
          dataType: 'array',
          array: {
            dataType: 'nestedObjectLiteral',
            nestedProperties: {
              total: { dataType: 'double', required: true },
              title: { dataType: 'string', required: true },
            },
          },
          required: true,
        },
        players: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Player' },
          required: true,
        },
        total: { dataType: 'double', required: true },
        maxBulletRating: { dataType: 'double', required: true },
        maxBlitzRating: { dataType: 'double', required: true },
        maxRapidRating: { dataType: 'double', required: true },
        averageBulletRating: { dataType: 'double', required: true },
        averageBlitzRating: { dataType: 'double', required: true },
        averageRapidRating: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TitledStats: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        players: {
          dataType: 'array',
          array: { dataType: 'refAlias', ref: 'Player' },
          required: true,
        },
        total: { dataType: 'double', required: true },
        maxBulletRating: { dataType: 'double', required: true },
        averageBulletRating: { dataType: 'double', required: true },
        maxBlitzRating: { dataType: 'double', required: true },
        averageBlitzRating: { dataType: 'double', required: true },
        maxRapidRating: { dataType: 'double', required: true },
        averageRapidRating: { dataType: 'double', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ChessTitle: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['GM'] },
        { dataType: 'enum', enums: ['WGM'] },
        { dataType: 'enum', enums: ['IM'] },
        { dataType: 'enum', enums: ['WIM'] },
        { dataType: 'enum', enums: ['FM'] },
        { dataType: 'enum', enums: ['WFM'] },
        { dataType: 'enum', enums: ['CM'] },
        { dataType: 'enum', enums: ['WCM'] },
        { dataType: 'enum', enums: ['NM'] },
        { dataType: 'enum', enums: ['WNM'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TimeRange: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['WEEK'] },
        { dataType: 'enum', enums: ['MONTH'] },
        { dataType: 'enum', enums: ['QUARTER'] },
        { dataType: 'enum', enums: ['YEAR'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.post(
    '/chess/analyse',
    ...fetchMiddlewares<RequestHandler>(AnalyseController),
    ...fetchMiddlewares<RequestHandler>(AnalyseController.prototype.analyse),
    function AnalyseController_analyse(request: any, response: any, next: any) {
      const args = {
        undefined: {
          in: 'body',
          required: true,
          dataType: 'nestedObjectLiteral',
          nestedProperties: { fen: { dataType: 'string', required: true } },
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new AnalyseController();

        const promise = controller.analyse.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/openings',
    ...fetchMiddlewares<RequestHandler>(OpeningsController),
    ...fetchMiddlewares<RequestHandler>(
      OpeningsController.prototype.getOpenings
    ),
    function OpeningsController_getOpenings(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        eco: { default: '', in: 'query', name: 'eco', dataType: 'string' },
        name: { default: '', in: 'query', name: 'name', dataType: 'string' },
        firstMove: {
          default: '',
          in: 'query',
          name: 'firstMove',
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new OpeningsController();

        const promise = controller.getOpenings.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/openings/ecos',
    ...fetchMiddlewares<RequestHandler>(OpeningsController),
    ...fetchMiddlewares<RequestHandler>(OpeningsController.prototype.getECOs),
    function OpeningsController_getECOs(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new OpeningsController();

        const promise = controller.getECOs.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/position',
    ...fetchMiddlewares<RequestHandler>(PositionController),
    ...fetchMiddlewares<RequestHandler>(
      PositionController.prototype.getPosition
    ),
    function PositionController_getPosition(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        fen: { in: 'query', name: 'fen', required: true, dataType: 'string' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new PositionController();

        const promise = controller.getPosition.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/chess/position',
    ...fetchMiddlewares<RequestHandler>(PositionController),
    ...fetchMiddlewares<RequestHandler>(
      PositionController.prototype.syncPosition
    ),
    function PositionController_syncPosition(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        undefined: {
          in: 'body',
          required: true,
          dataType: 'nestedObjectLiteral',
          nestedProperties: { fen: { dataType: 'string', required: true } },
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new PositionController();

        const promise = controller.syncPosition.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/games',
    ...fetchMiddlewares<RequestHandler>(GamesController),
    ...fetchMiddlewares<RequestHandler>(GamesController.prototype.getGames),
    function GamesController_getGames(request: any, response: any, next: any) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
        month: { in: 'query', name: 'month', dataType: 'double' },
        year: { in: 'query', name: 'year', dataType: 'double' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new GamesController();

        const promise = controller.getGames.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/chess/player/:username/games',
    ...fetchMiddlewares<RequestHandler>(GamesController),
    ...fetchMiddlewares<RequestHandler>(GamesController.prototype.syncGames),
    function GamesController_syncGames(request: any, response: any, next: any) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
        undefined: {
          in: 'body',
          required: true,
          dataType: 'nestedObjectLiteral',
          nestedProperties: {
            year: { dataType: 'double', required: true },
            month: { dataType: 'double', required: true },
          },
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new GamesController();

        const promise = controller.syncGames.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/games/:gameId',
    ...fetchMiddlewares<RequestHandler>(GamesController),
    ...fetchMiddlewares<RequestHandler>(GamesController.prototype.getGame),
    function GamesController_getGame(request: any, response: any, next: any) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
        gameId: {
          in: 'path',
          name: 'gameId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new GamesController();

        const promise = controller.getGame.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/games/:gameId/pgn',
    ...fetchMiddlewares<RequestHandler>(GamesController),
    ...fetchMiddlewares<RequestHandler>(GamesController.prototype.getGamePGN),
    function GamesController_getGamePGN(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
        gameId: {
          in: 'path',
          name: 'gameId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new GamesController();

        const promise = controller.getGamePGN.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/games/:gameId/moves',
    ...fetchMiddlewares<RequestHandler>(MovesController),
    ...fetchMiddlewares<RequestHandler>(MovesController.prototype.getGameMoves),
    function MovesController_getGameMoves(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
        gameId: {
          in: 'path',
          name: 'gameId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new MovesController();

        const promise = controller.getGameMoves.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/chess/player/:username/games/:gameId/moves',
    ...fetchMiddlewares<RequestHandler>(MovesController),
    ...fetchMiddlewares<RequestHandler>(
      MovesController.prototype.syncGameMoves
    ),
    function MovesController_syncGameMoves(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
        gameId: {
          in: 'path',
          name: 'gameId',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new MovesController();

        const promise = controller.syncGameMoves.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/insights',
    ...fetchMiddlewares<RequestHandler>(InsightsController),
    ...fetchMiddlewares<RequestHandler>(
      InsightsController.prototype.getInsights
    ),
    function InsightsController_getInsights(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new InsightsController();

        const promise = controller.getInsights.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/insights/games',
    ...fetchMiddlewares<RequestHandler>(InsightsController),
    ...fetchMiddlewares<RequestHandler>(
      InsightsController.prototype.getGamesInsights
    ),
    function InsightsController_getGamesInsights(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new InsightsController();

        const promise = controller.getGamesInsights.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/insights/accuracy',
    ...fetchMiddlewares<RequestHandler>(InsightsController),
    ...fetchMiddlewares<RequestHandler>(
      InsightsController.prototype.getAccuracyInsights
    ),
    function InsightsController_getAccuracyInsights(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new InsightsController();

        const promise = controller.getAccuracyInsights.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/insights/results',
    ...fetchMiddlewares<RequestHandler>(InsightsController),
    ...fetchMiddlewares<RequestHandler>(
      InsightsController.prototype.getResultsInsights
    ),
    function InsightsController_getResultsInsights(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new InsightsController();

        const promise = controller.getResultsInsights.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username/insights/opponents',
    ...fetchMiddlewares<RequestHandler>(InsightsController),
    ...fetchMiddlewares<RequestHandler>(
      InsightsController.prototype.getResultsOpponents
    ),
    function InsightsController_getResultsOpponents(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new InsightsController();

        const promise = controller.getResultsOpponents.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/player/:username',
    ...fetchMiddlewares<RequestHandler>(PlayerController),
    ...fetchMiddlewares<RequestHandler>(PlayerController.prototype.getPlayer),
    function PlayerController_getPlayer(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new PlayerController();

        const promise = controller.getPlayer.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/chess/player/:username',
    ...fetchMiddlewares<RequestHandler>(PlayerController),
    ...fetchMiddlewares<RequestHandler>(PlayerController.prototype.syncPlayer),
    function PlayerController_syncPlayer(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        username: {
          in: 'path',
          name: 'username',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new PlayerController();

        const promise = controller.syncPlayer.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/streamers',
    ...fetchMiddlewares<RequestHandler>(StreamersController),
    ...fetchMiddlewares<RequestHandler>(
      StreamersController.prototype.getStreamers
    ),
    function StreamersController_getStreamers(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        title: { in: 'query', name: 'title', ref: 'Title' },
        country: { in: 'query', name: 'country', dataType: 'string' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new StreamersController();

        const promise = controller.getStreamers.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/countries',
    ...fetchMiddlewares<RequestHandler>(CountriesController),
    ...fetchMiddlewares<RequestHandler>(
      CountriesController.prototype.getCountries
    ),
    function CountriesController_getCountries(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        cache: {
          default: true,
          in: 'query',
          name: 'cache',
          dataType: 'boolean',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new CountriesController();

        const promise = controller.getCountries.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/countries/:code',
    ...fetchMiddlewares<RequestHandler>(CountriesController),
    ...fetchMiddlewares<RequestHandler>(
      CountriesController.prototype.getTitledPlayersByCountry
    ),
    function CountriesController_getTitledPlayersByCountry(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        code: { in: 'path', name: 'code', required: true, dataType: 'string' },
        cache: {
          default: true,
          in: 'query',
          name: 'cache',
          dataType: 'boolean',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new CountriesController();

        const promise = controller.getTitledPlayersByCountry.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/chess/titled/:title',
    ...fetchMiddlewares<RequestHandler>(TitledController),
    ...fetchMiddlewares<RequestHandler>(
      TitledController.prototype.getTitledStats
    ),
    function TitledController_getTitledStats(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        title: {
          in: 'path',
          name: 'title',
          required: true,
          ref: 'ChessTitle',
        },
        cache: {
          default: true,
          in: 'query',
          name: 'cache',
          dataType: 'boolean',
        },
        timeRange: {
          default: 'YEAR',
          in: 'query',
          name: 'timeRange',
          ref: 'TimeRange',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TitledController();

        const promise = controller.getTitledStats.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/health',
    ...fetchMiddlewares<RequestHandler>(HealthController),
    ...fetchMiddlewares<RequestHandler>(HealthController.prototype.getHealth),
    function HealthController_getHealth(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new HealthController();

        const promise = controller.getHealth.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, undefined, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      'getHeaders' in object && 'getStatus' in object && 'setStatus' in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    successStatus: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers);
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    response: any,
    statusCode?: number,
    data?: any,
    headers: any = {}
  ) {
    if (response.headersSent) {
      return;
    }
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (
      data &&
      typeof data.pipe === 'function' &&
      data.readable &&
      typeof data._read === 'function'
    ) {
      response.status(statusCode || 200);
      data.pipe(response);
    } else if (data !== null && data !== undefined) {
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    response: any
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any, response: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'queries':
          return validationService.ValidateParam(
            args[key],
            request.query,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            'body.',
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              request.file,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              request.files,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              request.body[name],
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          }
        case 'res':
          return responder(response);
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
