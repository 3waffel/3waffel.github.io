import { Link } from "react-router-dom";

type NavbarProps = {
  navigators: { to: string; name: string }[];
};

export default function Navbar({ navigators }: NavbarProps) {
  return (
    <div
      className="mb-7 ml-1 mt-7 b-2 b-r-dashed pr-3 overflow-y-auto"
      text="orange50"
      font="serif"
      flex="~ col"
    >
      {navigators.map((item, i) => (
        <Link
          className="pb-2 no-underline"
          text="right orange50 hover:orange200"
          to={item.to}
          key={i}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
