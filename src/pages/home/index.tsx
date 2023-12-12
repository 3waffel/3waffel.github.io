export default function Home() {
  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2>Home</h2>
      <p text="orange100" font="bold">
        Recently interested topics:
      </p>
      <li>Frontend development, web design</li>
      <li>Graphics development, including Game Engines and Generative Art</li>
      <li>DevOps, CI/CD</li>
      <li>Low level development, including hardware and operating system</li>

      <p text="orange100" font="bold">
        Languages I usually use:
      </p>
      <li>Experienced: C++, C#, Python, Typescript</li>
      <li>Hobby: Rust</li>
    </div>
  );
}
