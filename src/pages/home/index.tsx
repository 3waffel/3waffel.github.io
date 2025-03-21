import Markdown from "react-markdown";

const markdown = `
## Home

**Recently interested topics:**
- Frontend development, web design
- Graphics development, including Game Engines and Generative Art
- DevOps, CI/CD
- Low level development, including hardware and operating system

**Languages I usually use:**
- Experienced: C++, C#, Python, Typescript
- Hobby: Rust
`;

export default function Home() {
  return (
    <div className="outlet">
      <div>
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
}
