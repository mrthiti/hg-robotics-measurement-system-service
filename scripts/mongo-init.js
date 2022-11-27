conn = new Mongo();
db = conn.getDB('MyDatabase');

db.measurement.insert({
  id: 'b17be207-f175-4eb0-bbbe-5177457fest7',
  contextName: 'area',
  measurementSystems: [
    { name: 'Imperial', unit: 'acre' },
    { name: 'Metric (SI)', unit: 'm2' },
    { name: 'Customized', unit: 'rai' },
  ],
});
db.measurement.insert({
  id: 'b17be207-f175-4eb0-bbbe-5177457pppb7',
  contextName: 'Distance',
  measurementSystems: [
    { name: 'Imperial', unit: 'mile' },
    { name: 'Metric (SI)', unit: 'metre' },
    { name: 'Customized', unit: 'wa' },
  ],
});
db.measurement.insert({
  id: 'b17be207-f175-4eb0-bbbe-5177457fsxa7',
  contextName: 'Volume',
  measurementSystems: [
    { name: 'Imperial', unit: 'fl oz.' },
    { name: 'Metric (SI)', unit: 'cm3' },
    { name: 'Customized', unit: 'mL' },
  ],
});
db.measurement.insert({
  id: 'b17be207-f175-4eb0-bbbe-517iko7fsxa7',
  contextName: 'Speed',
  measurementSystems: [
    { name: 'Imperial', unit: 'mph' },
    { name: 'Metric (SI)', unit: 'm/s' },
    { name: 'Customized', unit: 'km/h' },
  ],
});
