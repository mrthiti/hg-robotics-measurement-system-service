import { IsNotEmpty, IsString } from 'class-validator';

export class MeasurementDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  contextName: string;

  @IsNotEmpty()
  measurementSystems: MeasurementSystemDto[];
}

export class MeasurementSystemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  unit: string;
}
