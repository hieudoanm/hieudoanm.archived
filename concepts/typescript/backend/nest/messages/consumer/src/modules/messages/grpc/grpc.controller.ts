import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class GrpcController {
  private readonly logger = new Logger(GrpcController.name);

  @GrpcMethod('HelloService', 'SayHello')
  findOne(message: string) {
    this.logger.log(message);
  }
}
