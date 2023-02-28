export const vehicleEntityMock = {
  id: "urn:ngsi-ld:Vehicle:vehicle:WasteManagement:1",
  type: "Vehicle",
  category: {
    type: "Property",
    value: ["municipalServices"],
  },
  vehicleType: {
    type: "Property",
    value: "lorry",
  },
  name: {
    type: "Property",
    value: "C Recogida 1",
  },
  vehiclePlateIdentifier: {
    type: "Property",
    value: "3456ABC",
  },
  refVehicleModel: {
    type: "Relationship",
    object: "urn:ngsi-ld:VehicleModel:vehiclemodel:econic",
  },
  location: {
    type: "GeoProperty",
    value: {
      type: "Point",
      coordinates: [-3.164485591715449, 40.62785133667262],
    },
    observedAt: "2018-09-27T12:00:00Z",
  },
  areaServed: {
    type: "Property",
    value: "Centro",
  },
  serviceStatus: {
    type: "Property",
    value: "onRoute",
  },
  cargoWeight: {
    type: "Property",
    value: 314,
  },
  speed: {
    type: "Property",
    value: 50,
    observedAt: "2018-09-27T12:00:00Z",
  },
  serviceProvided: {
    type: "Property",
    value: ["gargabeCollection", "wasteContainerCleaning"],
  },
  "@context": [
    "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld",
    "https://schema.lab.fiware.org/ld/context",
  ],
};
