import type { StaticImageData } from "next/image";

export interface LearningTrack {
  id: string;
  title: string;
  label: string;
  description: string;
  topics: string[];
  image: StaticImageData;
  href: string;
}