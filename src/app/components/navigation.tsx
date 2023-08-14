import { Category } from "../interface/posts.interface";

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler;
  list?: Category[];
};

export default function Navigation({ className, onClick, list }: Props) {
  return (
    <nav className={`${className}`} onClick={onClick}>
      <ul>
        {list?.map(({ _id, name }) => (
          <li key={_id} className="text-base py-4 px-4">
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
