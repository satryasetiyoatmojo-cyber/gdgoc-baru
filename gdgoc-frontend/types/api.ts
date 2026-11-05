
export interface ApiListResponse<T> {
  success: boolean;
  count?: number;
  filter?: string | null;
  data: T[];
}

export interface Journey {
  step: number;
  id: string;
  title: string;
  description: string;
}

export interface CommunityRole {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
}

export interface InquiryCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  guidance: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CommunityStats {
  community_members: number;
  workshops_held: number;
  projects_shipped: number;
  active_tracks: number;
  university: string;
  city: string;
  country: string;
  founded_year: number;
  social: {
    instagram: string;
    linkedin: string;
    github: string;
  };
  tagline: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ApiObjectResponse<T> {
  success: boolean;
  data: T;
}
