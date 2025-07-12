import { atomWithStorage, loadable } from "jotai/utils";
import { SketchEnum } from "./sketches";
import { atomWithCache } from "jotai-cache";
import { faker } from "@faker-js/faker";

export type SettingsType = {
  sketchOption: SketchEnum;
};

export type LinksDataType = {
  links: {
    [key: string]: { icon: string; name: string; url: string }[];
  };
  projects: {
    [key: string]: { name: string; url: string; description: string }[];
  };
};

function generateDummyLinksData(
  linkCats = 3,
  linksPerCat = 5,
  projectCats = 2,
  projectsPerCat = 4
) {
  const links: LinksDataType["links"] = {};
  for (let i = 0; i < linkCats; i++) {
    const cat = faker.commerce.department();
    links[cat] = Array.from({ length: linksPerCat }).map(() => ({
      icon: faker.internet.emoji(),
      name: faker.commerce.productName(),
      url: faker.internet.url(),
    }));
  }

  const projects: LinksDataType["projects"] = {};
  for (let i = 0; i < projectCats; i++) {
    const cat = faker.commerce.department();
    projects[cat] = Array.from({ length: projectsPerCat }).map(() => ({
      name: faker.commerce.productName(),
      url: faker.internet.url(),
      description: faker.commerce.productDescription(),
    }));
  }

  return { links, projects };
}

export const settingsAtom = atomWithStorage<SettingsType>("settings", {
  sketchOption: SketchEnum.Void,
});

export const linksAtom = atomWithCache(async (get) => {
  if (import.meta.env.DEV) {
    return generateDummyLinksData();
  } else {
    const res: LinksDataType = await fetch(
      "https://gist.githubusercontent.com/3waffel/1fda54edefabc5f416031a3546ce1611/raw/links.json"
    ).then((result) => result.json());
    return res;
  }
});

export const getLinksAtom = loadable(linksAtom);
