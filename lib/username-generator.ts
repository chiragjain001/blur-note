/**
 * Generate unique anonymous usernames
 * Pattern: @silentwave57, @ghostuser42, etc.
 */

const adjectives = [
  'silent', 'ghost', 'shadow', 'mystic', 'hidden', 'quiet', 'whisper',
  'dark', 'lonely', 'empty', 'void', 'secret', 'anonymous', 'unknown',
  'lost', 'broken', 'faded', 'distant', 'cold', 'warm', 'soft', 'gentle',
  'wild', 'free', 'brave', 'bold', 'calm', 'peaceful', 'serene'
]

const nouns = [
  'wave', 'ocean', 'soul', 'spirit', 'heart', 'mind', 'dream', 'night',
  'day', 'star', 'moon', 'sun', 'wind', 'storm', 'rain', 'cloud',
  'river', 'lake', 'forest', 'mountain', 'valley', 'desert', 'island',
  'bird', 'wolf', 'fox', 'deer', 'cat', 'dog', 'lion', 'tiger',
  'user', 'ghost', 'shadow', 'phantom', 'wanderer', 'traveler', 'explorer'
]

/**
 * Generate a random username
 * Format: {adjective}{noun}{randomNumber}
 * Example: silentwave57, ghostuser42
 */
export function generateUsername(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const number = Math.floor(Math.random() * 100) // 0-99
  
  return `${adjective}${noun}${number}`
}

/**
 * Generate a username with @ prefix for display
 */
export function generateDisplayUsername(): string {
  return `@${generateUsername()}`
}

