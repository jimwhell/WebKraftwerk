export interface Project {
  name: string;
  role: string | string[];
  description: string;
  technologiesSVGs: string[];
  links: {
    repoLink: string;
    liveSiteLink: string;
  };
}
