const API_BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

export const API_ENDPOINTS = {
  journey: `${API_BASE_URL}/journey`,
  roles: `${API_BASE_URL}/roles`,
  inquiryCategories: `${API_BASE_URL}/inquiry-categories`,
  faqs: `${API_BASE_URL}/faqs`,
  stats: `${API_BASE_URL}/stats`,
  navigation: `${API_BASE_URL}/navigation`,
} as const;