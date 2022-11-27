import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MeasurementDto } from './measurement.dto';
import { MeasurementInterface } from './measurement.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Measurement, MeasurementDocument } from './measurement.schema';
import { Error, Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MeasurementService {
  constructor(
    @InjectModel(Measurement.name)
    private measurementModel: Model<MeasurementDocument>,
  ) {}

  private async findOne(
    contextName: string,
  ): Promise<MeasurementDto | undefined> {
    return await this.measurementModel.findOne(
      {
        contextName,
      },
      { _id: 0 },
    );
  }

  async addContext(
    context: MeasurementInterface,
  ): Promise<MeasurementInterface> {
    const existContext = await this.findOne(context.contextName);

    if (existContext)
      throw new HttpException('Existing context', HttpStatus.BAD_REQUEST);

    context.id = uuidv4();
    const createMeasurement = new this.measurementModel(context);
    const responseAdd = await createMeasurement.save();
    if (!responseAdd)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    return responseAdd;
  }

  async updateContext(
    id: string,
    context: MeasurementInterface,
  ): Promise<void> {
    delete context.contextName;
    const updateResult = await this.measurementModel
      .findOneAndUpdate({ id }, context)
      .exec();

    if (!updateResult)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  async deleteContext(id: string): Promise<void> {
    const deleteResult = await this.measurementModel
      .findOneAndDelete({ id })
      .exec();

    if (!deleteResult)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  async getContext(contextName: string): Promise<MeasurementDto | undefined> {
    const context = await this.findOne(contextName);

    if (!context) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return context;
  }

  async convertUnit(unitName: string): Promise<MeasurementDto | undefined> {
    const context = await this.measurementModel.findOne(
      {
        'measurementSystems.unit': { $eq: unitName },
      },
      { _id: 0 },
    );

    if (!context) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return context;
  }
}
