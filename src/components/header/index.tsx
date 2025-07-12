import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="pl-3 pt-30"
      border="b-solid 2 orange50"
      bg="opacity-100"
      flex="~ items-end"
    >
      <Link
        className="items-center underline-transparent gap-3"
        font="serif"
        flex="~ row"
        to="/"
      >
        <h2 className="fw500" text="orange50 hover:orange200">
          📝
        </h2>
        <h2 className="fw500" text="orange100">
          Index
        </h2>
      </Link>
    </div>
  );
}
