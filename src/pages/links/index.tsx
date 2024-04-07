import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { linksAtom } from "../../store";

export default function Links() {
  const [{ data, isPending, isError }] = useAtom(linksAtom);

  const buildLinks = (links) => (
    <div className="mb-5 pl-3" grid="~ cols-1 gap-2">
      {links?.map((item, i) => (
        <a
          className="link-text-orange100 visited-text-orange100"
          href={item.url}
          key={i}
        >
          {item.icon} {item.name}
        </a>
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
      <div key={key}>{buildLinks(value)}</div>
    ));
  }

  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif bold"
    >
      <h2>Links</h2>
      {content}
    </div>
  );
}
