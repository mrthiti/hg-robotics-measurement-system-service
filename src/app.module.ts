import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeasurementService } from './measurement/measurement.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  Measurement,
  MeasurementSchema,
} from './measurement/measurement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Measurement.name, schema: MeasurementSchema },
    ]),
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('MONGODB'));
        return {
          uri: configService.get('MONGODB'),
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MeasurementService],
})
export class AppModule {}
