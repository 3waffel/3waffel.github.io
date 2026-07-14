import { Link } from "react-router-dom";

type NavbarProps = {
  navigators: { to: string; name: string }[];
};

export default function Navbar({ navigators }: NavbarProps) {
  return (
    <div
      className="min-w-4rem mb-7 ml-4 mt-7 pr-3 b-2 b-r-dashed overflow-y-auto"
      text="orange50"
      font="serif"
      flex="~ col"
    >
      {navigators.map((item) => (
        <Link
          className="pb-2 no-underline"
          text="right orange50 hover:orange200"
          to={item.to}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
