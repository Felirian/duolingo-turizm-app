export type AdminPanelCode = 'idle' | 'good' | 'bad' | 'edit' | 'add' | 'sending';
// @ts-nocheck
export interface Answer {
  //@ts-ignore
  id: string;
  question_id: string;
  type: number;
  //@ts-ignore
  true_type0?: number[];
  //@ts-ignore
  cont_type0?: string[];
  //@ts-ignore
  true_type1?: boolean;
  //@ts-ignore
  true_type2?: string[];
}

export interface Question {
  //@ts-ignore
  id: string;
  point_id: string;
  text: string;
  hint: string;
  image?: string;
  answer: Answer;
}

export interface Course {
  id: string;
  name: string;
  descr: string;
  slug: string;
  count: number;
  achievement: string;
  unachievement: string;
  bgimage: string;
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
  progress: { point: number };
}

export interface Question {
  //@ts-ignore
  id?: string;
  text: string;
  hint: string;
}

export interface Answer {
  //@ts-ignore
  id?: string;
  type: number;
  //@ts-ignore
  true_type0: number[];
  //@ts-ignore
  cont_type0: string[];
  //@ts-ignore
  true_type1: boolean;
  //@ts-ignore
  true_type2: string[];
}

export interface ICourses {
  data: Course[];
}

export interface IAchievement {
  achievement_image: string;
  course_slug: string;
  course_name: string;
  is_completed: boolean;
  achievement_name?: string;
}

export interface IAchievements {
  data: IAchievement[];
}
