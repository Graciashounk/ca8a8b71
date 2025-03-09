/**
 * Formats a phone number string into a standardized format
 * Handles both 10-digit (domestic) and 11-digit (international) numbers
 * Example: "1234567890" -> "(123) 456-7890"
 * Example: "11234567890" -> "+1 (123) 456-7890"
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  // Format the number based on length
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11) {
    return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phoneNumber; // Return original if format doesn't match
};

/**
 * Formats a timestamp into a human-readable date and time
 * Uses the US locale and includes month, day, hour, and minute
 * Example: "2024-03-15T10:30:00Z" -> "Mar 15, 10:30 AM"
 */
export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    month: 'short',
    day: 'numeric'
  }).format(date);
};

/**
 * Formats a duration in seconds into a human-readable string
 * Shows minutes and seconds for durations >= 60 seconds
 * Shows only seconds for durations < 60 seconds
 * Example: 125 -> "2m 5s"
 * Example: 45 -> "45s"
 */
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  
  if (minutes === 0) {
    return `${seconds}s`;
  }
  
  return `${minutes}m ${remainingSeconds}s`;
}; 