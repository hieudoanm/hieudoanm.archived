import axios from 'axios';
import { getWeather, Weather } from '.';

describe('OpenWeatherMapClient', () => {
  describe('getWeather', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await getWeather('city');
      expect(data).toEqual({} as Weather);
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await getWeather('city');
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });
});
