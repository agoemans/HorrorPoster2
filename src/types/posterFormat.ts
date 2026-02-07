export type PosterFormatType = 'omen' | 'face' | 'corridor' | 'chaos';

export interface PosterFormat {
  type: PosterFormatType;
  name: string;
}

export const POSTER_FORMATS: PosterFormat[] = [
  { type: 'omen', name: 'The Omen - Minimal Symbol Horror' },
  { type: 'face', name: 'The Face - Character-Centric Terror' },
  { type: 'corridor', name: 'The Corridor - Environmental Horror' },
  { type: 'chaos', name: 'The Chaos - Aggressive Modern Horror' }
];
