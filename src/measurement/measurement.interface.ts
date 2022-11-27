export interface MeasurementInterface {
  id: string;
  contextName: string;
  measurementSystems: MeasurementSystemInterface[];
}

export interface MeasurementSystemInterface {
  name: string;
  unit: string;
}
