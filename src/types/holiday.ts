export type Holiday = {
  date: string;
  name: string;
};

export type HolidaysOfYear = {
  year: number;
  holidayList: Holiday[];
};
