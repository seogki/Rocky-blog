const advancedFormat = require("dayjs/plugin/advancedFormat");
import dayjs from "dayjs";

dayjs.extend(advancedFormat);

export function convertFormat(str: string, format = "Do MM.YYYY") {
  return dayjs(str).format(format);
}

export function stringToDate(str: string, format: string) {
  return dayjs(str, format).toDate();
}
