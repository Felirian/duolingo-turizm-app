export type AdminPanelCode = 'idle' | 'good' | 'bad' | 'edit' | 'add' | 'sending';

export interface Course {
  id?: string;
  name: string;
  slug?: string;
}

export interface OptionType {
  value: string;
  label: string;
}

export interface Section {
  id?: string;
  course_id?: string;
  name: string;
  images?: string[];
  slug?: string;
}

export interface Point {
  id?: string;
  section_id: string;
  number: number;
  xp: number;
  money: number;
}

export interface PointsData {
  section: {
    name: string;
    images: string[];
  };
  points: Point[];
  progress: null | { point: number };
}

export interface Question {
  id?: string;
  text: string;
  hint: string;
}

export interface Answer {
  id?: string;
  type: number;
  true_type0: number[];
  cont_type0: string[];
  true_type1: boolean;
  true_type2: string[];
}

export interface useGetQueryProps {
  endPoint: string;
  options: any;
}
