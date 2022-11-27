import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MeasurementService } from './measurement/measurement.service';
import { MeasurementDto } from './measurement/measurement.dto';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly measurementService: MeasurementService) {}

  @Get('/context/:contextName')
  async getContext(@Param() params): Promise<MeasurementDto> {
    return this.measurementService.getContext(params.contextName);
  }

  @Get('/convert_unit/:unitName')
  async convertUnit(@Param() params): Promise<MeasurementDto> {
    return this.measurementService.convertUnit(params.unitName);
  }

  @Post('/context')
  async addContext(
    @Body() measurementData: MeasurementDto,
  ): Promise<MeasurementDto> {
    return this.measurementService.addContext(measurementData);
  }

  @Put('/context/:id')
  async updateContext(
    @Param() params,
    @Body() measurementData: MeasurementDto,
  ): Promise<void> {
    await this.measurementService.updateContext(params.id, measurementData);
  }

  @Delete('/context/:id')
  async deleteContext(@Param() params): Promise<void> {
    await this.measurementService.deleteContext(params.id);
  }
}
