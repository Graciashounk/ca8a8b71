/**
 * Base URL for API calls
 * Uses environment variable in production, falls back to proxy in development
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Generic API call function with error handling
 */
export async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
} 