interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  }
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  backgroundInfo: string;
  email: string;
  expertiseDesc: string;
  heroImage: Image;
  linkedIn: string;
  linkedInUrl: string;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  linkToCV: string;
  role: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  order: number;
  title: string;
}

export interface Expertise extends SanityBody {
  _type: 'expertise';
  expertiseImage: Image;
  expertiseInfo: string;
  expertiseTitle: string;
}

export interface Project extends SanityBody {
  _type: 'project';
  linkToBuild: string;
  linkToCode: string;
  order: number;
  summary: string;
  technologies: string[];
  technologiesMobile: string;
  image: string;
  title: string;
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
