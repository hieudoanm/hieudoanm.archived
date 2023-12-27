import amqp, { Channel, Connection, Message } from 'amqplib/callback_api';

export class RabbitClient {
  private url: string = '';
  private queue: string = '';
  private connection: Connection | undefined;
  private channel: Channel | undefined;

  constructor(url: string, queue: string) {
    this.url = url;
    this.queue = queue;
  }

  public async connect(): Promise<void> {
    if (!this.connection) this.connection = await this.amqpConnect();
    if (!this.channel) {
      this.channel = await this.createChannel();
      this.channel?.assertQueue(this.queue, { durable: false });
    }
  }

  private async amqpConnect(): Promise<Connection> {
    return new Promise((resolve, reject) => {
      amqp.connect(this.url, (error, connection) => {
        if (error) {
          return reject(error);
        }
        return resolve(connection);
      });
    });
  }

  private async createChannel(): Promise<Channel> {
    return new Promise((resolve, reject) => {
      this.connection?.createChannel((error, channel) => {
        if (error) {
          return reject(error);
        }
        return resolve(channel);
      });
    });
  }

  public async sendToQueue(message: string): Promise<void> {
    this.channel?.sendToQueue(this.queue, Buffer.from(message));
  }

  public async consume(
    queue: string,
    callback: (msg: Message | null) => void
  ): Promise<void> {
    this.channel?.consume(queue, callback, { noAck: true });
  }
}
