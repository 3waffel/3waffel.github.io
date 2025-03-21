import { useAtom } from "jotai";
import { linksAtom } from "../../store";

export default function Projects() {
  const [{ data, isPending, isError }] = useAtom(linksAtom);

  const buildProjects = (projects) => (
    <div grid="~ cols-2 gap-4">
      {projects?.map((item, i) => (
        <div key={i} className="">
          <a
            className="link-text-orange200 visited-text-orange300"
            font="italic"
            href={item.url}
          >
            {item.name}
          </a>
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
      <fieldset key={key} className="fieldset">
        <legend font="bold">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </legend>
        {buildProjects(value)}
      </fieldset>
    ));
  }

  return (
    <div
      className="min-w-60 p-5 pt-3 gap-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2>Projects</h2>
      {content}
    </div>
  );
}
