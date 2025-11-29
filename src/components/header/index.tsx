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
        <h2
          className="tracking-1 scale-x-[2] scale-y-[1.4] origin-[0] fw-black"
          text="orange100"
          hover="text-orange200"
        >
          Index
        </h2>
      </Link>
    </div>
  );
}
