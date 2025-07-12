import Markdown from "react-markdown";

const markdown = `
## Home

**Recently interested topics:**
- Frontend development, Web Design
- Graphics development, Game Engines and Generative Art
- DevOps, CI/CD
- Low level development, Hardware and Operating System

**Languages I usually use:**
- Experienced: C++, C#, Python, Typescript
- Hobby: Rust, Haskell
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
