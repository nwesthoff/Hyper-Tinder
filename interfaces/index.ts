// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type ATThumb = {
  url: string;
  width: number;
  height: number;
};

export type ATImage = {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: MimeType;
  thumbnails: {
    small: ATThumb;
    large: ATThumb;
    full: ATThumb;
  };
};

export type User = {
  id: number;
  fields: {
    firstName?: string;
    lastName?: string;
    images?: ATImage[];
    masterProgramme?: "DXD" | "DM";
    urlLinkedin?: string;
    urlPortfolio?: string;
    email?: string;
    companyPosition?: string;
    researchThis?: string;
    interestedIn?: string;
  };
};
