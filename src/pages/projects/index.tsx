import { useAtom } from "jotai";
import { linksAtom } from "../../store";

export default function Projects() {
  const [{ data, isPending, isError }] = useAtom(linksAtom);

  const buildProjects = (projects) => (
    <div grid="~ cols-2 gap-2">
      {projects?.map((item, i) => (
        <div key={i} className="pt3 pb3" border="t-2 0 dashed">
          <li>
            <a
              className="link-text-orange100 visited-text-orange100"
              font="bold"
              href={item.url}
            >
              {item.name}
            </a>
          </li>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );

  let content;
  if (isPending) {
    content = <div>Loading</div>;
  } else if (isError) {
    content = <div>Failed to load</div>;
  } else {
    const projects = data["projects"];
    content = Object.entries(projects).map(([key, value]) => (
      <div key={key}>
        <p font="bold">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
        {buildProjects(value)}
      </div>
    ));
  }

  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2>Projects</h2>
      {content}
    </div>
  );
}
