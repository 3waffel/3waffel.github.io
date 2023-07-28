import { Link } from "react-router-dom";

type NavbarProps = {
  navigators: { to: string; name: string }[];
};

export default function Navbar({ navigators }: NavbarProps) {
  return (
    <div
      className="width-100 mb-7 ml-1 mt-7 b-2 b-r-dashed pr-3"
      text="orange50"
      font="serif"
      flex="~ col"
    >
      {navigators.map((item, i) => (
        <Link
          className="no-underline link-text-orange50 visited-text-orange50 pb-2"
          text="right"
          hover="text-orange200"
          to={item.to}
          key={i}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
