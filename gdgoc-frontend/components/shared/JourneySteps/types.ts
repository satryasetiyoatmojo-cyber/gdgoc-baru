
export interface JourneyStepItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface JourneyStepsProps {
  steps: JourneyStepItem[];
  columns: 3 | 4;
}
