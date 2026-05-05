export interface DatoCmsImage {
  url: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: {
    x: number;
    y: number;
  };
}

export interface Skill {
  title: string | string[];
  slug: string;
}

export interface Client {
  slug: string;
  clientImage: DatoCmsImage;
}

export interface GridProject {
  id: string;
  slug: string;
  title: string | string[];
  client: string;
  skill: Skill[];
  headerImage: DatoCmsImage | null;
}

export interface LinkItem {
  title: string;
  url: string;
  page: {
    id: string;
    slug: string;
  };
}

export interface CardItem {
  title: string;
  slug: string;
  icon: string;
  description: string;
}

interface BaseSection {
  id: string;
  _modelApiKey: string;
  title: string;
}

export interface CardsSectionRecord extends BaseSection {
  cards: CardItem[];
}

export interface GridSectionRecord extends BaseSection {
  items: GridProject[];
  links: LinkItem[];
}

export interface TextSectionRecord extends BaseSection {
  subtitle: string;
  description: string;
}

export type ProjectSection = CardsSectionRecord | GridSectionRecord | TextSectionRecord;

export interface ProjectData {
  slug: string;
  title: string;
  client: string;
  clientImage: DatoCmsImage;
  headerImage: DatoCmsImage;
  skill: Skill[];
  sections: ProjectSection[];
}

export interface HeaderLink {
  title: string;
  slug: string;
}

export interface HeaderData {
  links: HeaderLink[];
  siteLogo: DatoCmsImage;
}

export interface FooterData {
  copyrightTag: string;
}

export interface ProjectPage {
  slug: string;
  title: string;
}

export interface ProjectenData {
  projectPage: ProjectPage;
  allProjects: GridProject[];
}
