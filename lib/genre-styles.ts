/**
 * Genre color mapping and styling helper
 * Used for dynamic post card styling based on genre
 */

export type Genre = 
  | 'Confession'
  | 'Motivation'
  | 'Love / Heartbreak'
  | 'Dark Thoughts'
  | 'Friendship'
  | 'Life Advice'
  | 'Humor'
  | 'Storytime'

export const GENRES: Genre[] = [
  'Confession',
  'Motivation',
  'Love / Heartbreak',
  'Dark Thoughts',
  'Friendship',
  'Life Advice',
  'Humor',
  'Storytime',
]

export const GENRE_COLORS: Record<Genre, string> = {
  'Confession': '#FF6B6B',
  'Motivation': '#6BCB77',
  'Love / Heartbreak': '#A66CFF',
  'Dark Thoughts': '#FF4C4C',
  'Friendship': '#4D96FF',
  'Life Advice': '#FFD93D',
  'Humor': '#FF9F1C',
  'Storytime': '#845EC2',
}

/**
 * Get dynamic styles for a genre
 * Dark Thoughts has special styling (dark bg + red border)
 */
export function getGenreStyles(genre: string): string {
  switch (genre) {
    case 'Dark Thoughts':
      return 'bg-[#2D2D2D] border-2 border-[#FF4C4C]'
    case 'Confession':
      return 'bg-[#FF6B6B]'
    case 'Motivation':
      return 'bg-[#6BCB77]'
    case 'Love / Heartbreak':
      return 'bg-[#A66CFF]'
    case 'Friendship':
      return 'bg-[#4D96FF]'
    case 'Life Advice':
      return 'bg-[#FFD93D]'
    case 'Humor':
      return 'bg-[#FF9F1C]'
    case 'Storytime':
      return 'bg-[#845EC2]'
    default:
      return 'bg-dark-card border border-dark-border'
  }
}

/**
 * Get genre color for text or other uses
 */
export function getGenreColor(genre: string): string {
  return GENRE_COLORS[genre as Genre] || '#8b5cf6'
}

