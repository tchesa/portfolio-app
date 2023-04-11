import { Entry } from "contentful";

export type EmploymentType =
  | "fullTime"
  | "partTime"
  | "freelance"
  | "selfEmployed"
  | "internship"
  | "contract";

export type LocationType = "onSite" | "hybrid" | "remote";

export type ContentfulMedia = {
  title: string;
  description: string;
  file: {
    contentType: string;
    details: {
      image: { width: number; height: number };
      size: number;
    };
    fileName: string;
    url: string;
  };
};

export type Employment = {
  title?: string;
  employmentType?: EmploymentType;
  companyName?: string;
  companyUrl?: string;
  companyLogo?: Entry<ContentfulMedia>;
  companyLocation?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorkingHere?: boolean;
  description?: string;
  technologies?: string[];
  locationType?: LocationType;
};

export type Attachment = {
  title?: string;
  description?: string;
  link?: string;
};

export type Education = {
  school?: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  attachments?: Entry<Attachment>[];
  schoolLocation?: string;
};
