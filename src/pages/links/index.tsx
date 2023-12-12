import { Link } from "react-router-dom";

const links = [
  {
    icon: "☁",
    name: "Soundcloud",
    url: "https://example.com",
  },
  {
    icon: "✒",
    name: "Blog",
    url: "https://example.com",
  },
  {
    icon: "✒",
    name: "Devnotes",
    url: "https://dev.kusako.de",
  },
];

export default function Links() {
  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif bold"
    >
      <h2>Links</h2>
      <div className="mb-5 pl-3" grid="~ cols-1 gap-2">
        {links.map((link, i) => (
          <Link
            to={link.url}
            key={i}
            className="link-text-orange100 visited-text-orange100"
          >
            {link.icon} {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
