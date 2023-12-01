const toy_links = [
  {
    name: "ASCII Effect",
    url: "https://3waffel.github.io/asciieffect",
    description: "Play ASCII style video (browser version)",
  },
  {
    name: "Shader Showcase",
    url: "https://3waffel.github.io/shader-showcase",
    description: "Godot shader playground (browser version)",
  },
  {
    name: "Gallery",
    url: "https://3waffel.github.io/gallery",
    description: "Model viewer (browser version)",
  },
];

export default function Projects() {
  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2>Projects</h2>

      <div border="t-2 0 dashed">
        <div
          className="mb-5 pl-3 pt-5"
          text="orange50 opacity-80"
          grid="~ cols-2 gap-2"
        >
          (Placeholder)
        </div>
      </div>

      <div border="t-2 0 dashed">
        <div
          className="mb-5 pl-3 pt-5"
          text="orange50 opacity-80"
          grid="~ cols-2 gap-2"
        >
          {toy_links.map((link, i) => (
            <div key={i} className="">
              <li>
                <a
                  href={link.url}
                  className="link-text-orange100 visited-text-orange100"
                  font="bold"
                >
                  {link.name}
                </a>
              </li>
              <div>{link.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
