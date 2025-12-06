export const MEMORY_ICONS = [
  '🦁', '🐘', '🦒', '🦓', '🐒', '🐯', '🐨', '🐼',
  '🦊', '🐰', '🐸', '🐙', '🐬', '🐳', '🦈', '🦅',
  '🦉', '🦜', '🦢', '🦩', '🦚', '🦃', '🦆', '🐓',
  '🐕', '🐈', '🐹', '🐢', '🦎', '🐍', '🦕', '🦖',
];

export type GridSize = 4 | 6 | 8;

export interface MemoryCard {
  id: string;
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
}
