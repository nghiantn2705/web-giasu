export interface IDisctrict {
  provinceName: string;
  provinceId: number;
  district: [
    {
      districtName: string;
      districtId: number;
      ward: [
        {
          name: string;
          wardId: number;
        },
      ];
    },
  ];
}
