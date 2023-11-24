export interface IAddress {
  predictions: [
    {
      place_id: string;
      description: string;
    },
  ];
}

export interface IDistrict {
  result: {
    name: string;
    formatted_address: string;
    geometry: {
      location: {
        lat: string;
        lng: string;
      };
    };
  };
}
