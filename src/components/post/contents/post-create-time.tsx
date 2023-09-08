import { convertFormat } from "@/utils/date";

export default function PostCreateTime({
  date,
  className = ""
}: {
  date: string;
  className?: string;
}) {
  return <time className={`${className}`}>{convertFormat(date)}</time>;
}
