import axios from 'axios';
import { HttpClient } from './http.client';

jest.mock('axios');

describe('axios', () => {
  const url = 'https://example.com';
  const httpClient = new HttpClient();

  describe('get', () => {
    it('should return success', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.get(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should retry', async () => {
      jest
        .spyOn(axios, 'get')
        .mockRejectedValueOnce(new Error('error message'))
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.get(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'get')
        .mockRejectedValueOnce(new Error('error message'));
      try {
        await httpClient.get(url, {}, { max: 1 });
      } catch (error) {
        expect((error as Error).message).toEqual('error message');
      }
    });
  });

  describe('post', () => {
    it('should return success', async () => {
      jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.post(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should retry', async () => {
      jest
        .spyOn(axios, 'post')
        .mockRejectedValueOnce(new Error('error message'))
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.post(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'post')
        .mockRejectedValueOnce(new Error('error message'));
      try {
        await httpClient.post(url, {}, {}, { max: 1 });
      } catch (error) {
        expect((error as Error).message).toEqual('error message');
      }
    });
  });

  describe('patch', () => {
    it('should return success', async () => {
      jest
        .spyOn(axios, 'patch')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.patch(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should retry', async () => {
      jest
        .spyOn(axios, 'patch')
        .mockRejectedValueOnce(new Error('error message'))
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.patch(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'patch')
        .mockRejectedValueOnce(new Error('error message'));
      try {
        await httpClient.patch(url, {}, {}, { max: 1 });
      } catch (error) {
        expect((error as Error).message).toEqual('error message');
      }
    });
  });

  describe('put', () => {
    it('should return success', async () => {
      jest
        .spyOn(axios, 'put')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.put(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should retry', async () => {
      jest
        .spyOn(axios, 'put')
        .mockRejectedValueOnce(new Error('error message'))
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.put(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'put')
        .mockRejectedValueOnce(new Error('error message'));
      try {
        await httpClient.put(url, {}, {}, { max: 1 });
      } catch (error) {
        expect((error as Error).message).toEqual('error message');
      }
    });
  });

  describe('delete', () => {
    it('should return success', async () => {
      jest
        .spyOn(axios, 'delete')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.delete(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should retry', async () => {
      jest
        .spyOn(axios, 'delete')
        .mockRejectedValueOnce(new Error('error message'))
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await httpClient.delete(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'delete')
        .mockRejectedValueOnce(new Error('error message'));
      try {
        await httpClient.delete(url, {}, { max: 1 });
      } catch (error) {
        expect((error as Error).message).toEqual('error message');
      }
    });
  });
});
