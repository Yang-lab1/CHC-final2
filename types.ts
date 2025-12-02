
export interface Translation {
  zh: string;
  en: string;
}

export interface TeamMember {
  name: Translation;
  title: Translation;
  avatar: string;
  email: string;
  linkedin: string;
  objectPosition?: string; // Optional custom cropping position (e.g. 'center 20%')
}

export interface JourneyPoint {
  y: number;
  n: string;
  lat: number;
  lng: number;
}

export interface PoemRecord {
  y: number;
  l: string;
  m: string;
  t: string;
}

export interface EmotionData {
  label: string;
  enLabel: string;
  color: string;
  points: { lat: number; lng: number; intensity: number; period: string }[];
}

export interface AnalyticsItem {
  name: string;
  enName: string;
  value: number;
  emotion: string;
  enEmotion: string;
  color: string;
  [key: string]: any;
}

export interface DrinkMood {
  moodKey: string;
  poem: string;
  img: string;
  desc: string;
}

export interface NetworkNodeData {
  id: string;
  name: string;
  rel: string;
  color: string;
  location: string;
  mood: string;
}

declare global {
  interface Window {
    L: any;
    vis: any;
    marked: any;
  }
}