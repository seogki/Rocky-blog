import dayjs from "dayjs";

export function convertFormat(str: string, format = "DD/mm/YYYY HH:mm:ss") {
  return dayjs(str).format(format);
}
