import { useAtom } from "jotai";
import { getLinksAtom } from "../../store";

export default function Links() {
  const [response] = useAtom(getLinksAtom);

  const buildLinks = (links) => (
    <div className="pl-3 pr-3" grid="~ cols-1 gap-2">
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
  if (response.state === "loading") {
    content = <div>Loading</div>;
  } else if (response.state === "hasError") {
    content = <div>Failed to load</div>;
  } else if (response.state === "hasData") {
    const links = response.data["links"];
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
    <div className="outlet">
      <h2>Links</h2>
      {content}
    </div>
  );
}
