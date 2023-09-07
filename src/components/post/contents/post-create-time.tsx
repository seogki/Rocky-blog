import { convertFormat } from "@/utils/date";

export default function PostCreateTime({ date }: { date: string }) {
  return <time>{convertFormat(date)}</time>;
}
