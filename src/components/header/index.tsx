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
        font="mono"
        flex="~ row"
        to="/"
      >
        <h2
          className="tracking-1 scale-x-[4] scale-y-[2] origin-[0]"
          text="orange100"
          hover="text-orange200"
        >
          Index
        </h2>
      </Link>
    </div>
  );
}
