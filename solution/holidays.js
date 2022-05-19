import { format } from 'date-fns';
import { getValentinesDay, getChristmas, getEaster } from 'date-fns-holiday-us';
import ps from 'prompt-sync';

const getHoliday = (f, year) => format(f(year), 'EEEE, dd.MM.yyyy');

export function holidaysInRange(start, end) {
  if (start < 325) {
    return [];
  }
  const holidays = [];
  for (let year = start; year <= end; year++) {
    holidays.push({
      valentinesDay: getHoliday(getValentinesDay, year),
      easter: getHoliday(getEaster, year),
      christmas: getHoliday(getChristmas, year),
    });
  }
  return holidays;
}

export function main() {
  const prompt = ps();
  const start = parseInt(prompt('Enter start: '));
  const end = parseInt(prompt('Enter end: '));
  const holidays = holidaysInRange(start, end);
  console.log(holidays);
}
