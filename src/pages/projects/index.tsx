const projects_toys = [
  {
    name: "Pixel Filter",
    url: "https://3waffel.github.io/pixel-filter",
    description: "Filter images in certain pattern (browser version)",
  },
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

const projects_others = [
  {
    name: "3waffel.github.io",
    url: "https://3waffel.github.io",
    description: "This site",
  },
  {
    name: "nixconfig",
    url: "https://github.com/3waffel/nixconfig",
    description: "Managed Nix configuration",
  },
];

export default function Projects() {
  const projectsRenderer = (
    projects: { name: string; url: string; description: string }[]
  ) => (
    <div grid="~ cols-2 gap-2">
      {projects.map((project, i) => (
        <div key={i} className="pt3 pb3" border="t-2 0 dashed">
          <li>
            <a
              className="link-text-orange100 visited-text-orange100"
              font="bold"
              href={project.url}
            >
              {project.name}
            </a>
          </li>
          <div>{project.description}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2>Projects</h2>
      <div>
        <p font="bold">Toys</p>
        {projectsRenderer(projects_toys)}
        <p font="bold">Others</p>
        {projectsRenderer(projects_others)}
      </div>
    </div>
  );
}
