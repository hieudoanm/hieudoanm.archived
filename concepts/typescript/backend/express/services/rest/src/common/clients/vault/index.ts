import axios from 'axios';

export class VaultClient {
  private endpoint = '';
  private token = '';

  constructor({ endpoint, token }: { endpoint: string; token: string }) {
    this.endpoint = endpoint;
    this.token = token;
  }

  public async getSecret<T>(path: string): Promise<T> {
    const url = `${this.endpoint}/v1/secret/data/${path}`;
    const headers = { 'X-Vault-Token': this.token };
    const response = await axios.get<{ data: T }>(url, { headers });
    return response.data.data;
  }

  public async setSecret<D>(path: string, requestData: D): Promise<boolean> {
    const url = `${this.endpoint}/v1/secret/data/${path}`;
    const headers = { 'X-Vault-Token': this.token };
    const configs = { headers };
    const { data } = await axios.post<{ destroyed: boolean }>(
      url,
      requestData,
      configs
    );
    return data.destroyed;
  }
}
