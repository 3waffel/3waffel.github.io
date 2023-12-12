import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="pl-3 pt-30"
      border="b-solid 2 orange50"
      bg="opacity-100"
      flex="~ items-end"
    >
      <Link className="flex underline-transparent" to="/">
        <h2
          className="pr-3 fw500"
          text="orange50"
          hover="text-orange200"
          font="serif italic"
        >
          Wafu
        </h2>
        <h2 className="fw500" text="orange100 opacity-90" font="serif">
          Index
        </h2>
      </Link>
    </div>
  );
}
