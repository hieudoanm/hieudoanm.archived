import axios from 'axios';
import { OpenWeatherMapClient, Weather } from '..';

describe('OpenWeatherMap', () => {
  const openWeatherMapClient = new OpenWeatherMapClient({ apiKey: '' });

  describe('getWeather', () => {
    it('success', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: {} });
      const data = await openWeatherMapClient.getWeather('city');
      expect(data).toEqual({} as Weather);
    });

    it('error', async () => {
      jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('error'));
      try {
        await openWeatherMapClient.getWeather('city');
      } catch (error) {
        expect((error as Error).message).toEqual('error');
      }
    });
  });
});
