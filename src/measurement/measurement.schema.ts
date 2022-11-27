import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  MeasurementInterface,
  MeasurementSystemInterface,
} from './measurement.interface';

export type MeasurementDocument = Measurement & Document;

@Schema({ collection: 'measurement' })
export class Measurement implements MeasurementInterface {
  @Prop()
  id: string;

  @Prop()
  contextName: string;

  @Prop()
  measurementSystems: MeasurementSystemInterface[];
}

export const MeasurementSchema = SchemaFactory.createForClass(Measurement);
