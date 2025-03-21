import { useAtom } from "jotai";
import { getLinksAtom } from "../../store";

export default function Projects() {
  const [response] = useAtom(getLinksAtom);

  const buildProjects = (projects) => (
    <div className="pl-3 pr-3" grid="~ cols-2 gap-4">
      {projects?.map((item, i) => (
        <div key={i}>
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
  if (response.state === "loading") {
    content = <div>Loading</div>;
  } else if (response.state === "hasError") {
    content = <div>Failed to load</div>;
  } else if (response.state === "hasData") {
    const projects = response.data["projects"];
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
    <div className="outlet">
      <h2>Projects</h2>
      {content}
    </div>
  );
}
