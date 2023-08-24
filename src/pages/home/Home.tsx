import { Link } from "react-router-dom";

const links = [
  {
    name: "☁ Soundcloud",
    url: "https://example.com",
  },
  {
    name: "✒ Blog",
    url: "https://blog.kusako.de",
  },
  {
    name: "✒ Devnotes",
    url: "https://dev.kusako.de",
  },
];

const links2 = [
  {
    name: "ASCII Effect",
    url: "https://3waffel.github.io/asciieffect",
  },
  {
    name: "Shader Showcase",
    url: "https://3waffel.github.io/shader-showcase",
  },
  {
    name: "Gallery",
    url: "https://3waffel.github.io/gallery",
  },
];

export default function Home() {
  return (
    <div
      className="min-w-60 p-5 pt-3"
      flex="~ col"
      text="orange50"
      font="serif"
    >
      <h2>Links</h2>

      <p>You could ( possibly ) find me on:</p>
      <div
        className="mb-5 pl-3"
        text="orange50 opacity-80"
        font="mono"
        grid="~ cols-1 gap-2"
      >
        {links.map((link, i) => (
          <Link
            to={link.url}
            key={i}
            className="link-text-orange100 visited-text-orange100"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <p>Things of little importance:</p>
      <div
        className="mb-5 pl-3"
        text="orange50 opacity-80"
        font="mono"
        grid="~ cols-1 gap-2"
      >
        {links2.map((link, i) => (
          <a
            href={link.url}
            key={i}
            className="link-text-orange100 visited-text-orange100"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
