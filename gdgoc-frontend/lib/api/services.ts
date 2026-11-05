
import { apiRequest } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/lib/api/endpoints";

import type {
  ApiListResponse,
  ApiObjectResponse,
  Journey,
  CommunityRole,
  InquiryCategory,
  FAQ,
  CommunityStats,
  NavigationItem,
} from "@/types/api";

export function getJourney() {
  return apiRequest<ApiListResponse<Journey>>(
    API_ENDPOINTS.journey,
  );
}

export function getRoles() {
  return apiRequest<ApiListResponse<CommunityRole>>(
    API_ENDPOINTS.roles,
  );
}

export function getInquiryCategories() {
  return apiRequest<ApiListResponse<InquiryCategory>>(
    API_ENDPOINTS.inquiryCategories,
  );
}

export function getFaqs() {
  return apiRequest<ApiListResponse<FAQ>>(
    API_ENDPOINTS.faqs,
  );
}

export function getCommunityStats() {
  return apiRequest<ApiObjectResponse<CommunityStats>>(
    API_ENDPOINTS.stats,
  );
}

export function getNavigation() {
  return apiRequest<ApiListResponse<NavigationItem>>(
    API_ENDPOINTS.navigation,
  );
}
