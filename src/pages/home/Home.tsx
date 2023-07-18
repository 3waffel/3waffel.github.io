import Showcase from "../../components/showcase/Showcase";

export default function Home() {
  return (
    <div className="p-5 pt-3 min-h-80 min-w-60" flex="~ col">
      <div className="invert" font="serif">
        <h2>Links</h2>
        <p>You could ( possibly ) find me on:</p>
      </div>

      <div
        className="pl-3 underline"
        text="white opacity-80"
        grid="~ cols-1 gap-2"
        font="mono"
      >
        <a href="">first </a>
        <a>first</a>
        <a>first</a>
        <a>first</a>
      </div>

      <div>
        <Showcase />
      </div>
    </div>
  );
}
