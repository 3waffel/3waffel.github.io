import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { linksAtom } from "../../store";

export default function Links() {
  const [{ data, isPending, isError }] = useAtom(linksAtom);

  const buildLinks = (links) => (
    <div className="pl-3" grid="~ cols-1 gap-2">
      {links?.map((item, i) => (
        <div className="items-center flex flex-row font-italic">
          <a className="min-w-6">{item.icon}</a>
          <a
            className="link-text-orange200 visited-text-orange300"
            href={item.url}
            key={i}
          >
            {item.name}
          </a>
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
    const links = data["links"];
    content = Object.entries(links).map(([key, value]) => (
      <fieldset key={key} className="fieldset">
        <legend font="bold">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </legend>
        {buildLinks(value)}
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
      <h2>Links</h2>
      {content}
    </div>
  );
}
