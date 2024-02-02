import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

const protoPath = join(__dirname, '../../../../proto/grpc.proto');

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        transport: Transport.GRPC,
        options: { package: 'hello', protoPath },
      },
    ]),
  ],
})
export class GrpcModule {}
