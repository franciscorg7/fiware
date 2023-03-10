const fs = require("fs");

//TODO: export mock data to a mockupData file
const vehicleEntityMock = {
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

const HEADER = '<?xml version="1.0" encoding="UTF-8"?>';
const GENERATED_ON = `<!-- automatically generated on ${new Date()} by jsonToXML script (by Francisco Gonçalves) -->`;

const jsonToXML = (json) => {
  // If json is not valid return with error
  if (!json || !json.id) {
    return console.error(
      `Parsing Error: Invalid JSON, ${JSON.stringify(json)}`
    );
  }

  let buffer = "";
  buffer += HEADER + "\n\n";
  buffer += GENERATED_ON + "\n\n";

  buffer += "<routes>\n";
  buffer += `<vType id="${json.vehicleType.value}" accel="${
    json.accel?.value ?? 0
  }"/>\n`;
  buffer += `<vehicle id="${json.id}" type="${json.vehicleType?.value}">\n`;
  buffer += "</vehicle>\n\n";
  buffer += "</routes>\n";
  try {
    fs.writeFileSync(`${json.id}.rou.xml`, buffer);
  } catch (error) {
    console.log(error);
  }
};

// Test runner
jsonToXML(vehicleEntityMock);
