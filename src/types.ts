export type State = {
  identifiers: { type: string; name: string; source: string }[]
  sessionId?: {
    b: string
    j: string
    e: string
    i: false
  }
  clientSessionId?: string
  tempCreds?: TempCredResponse
  submitPhoneResponse?: SubmitPhoneResponse
  submitOTPResponse?: SubmitOTPResponse
  submitChallengeResp?: SubmitChallengeResponse
  getProfileResp?: UserProfileResponse
  profileSignature?: string
  ridesSignature?: string
  phone_number?: string
  OTP?: string
  email?: string
  access_token?: string
  proxyId?: string
}

export interface TempCredResponse {
  token_type: string
  access_token: string
  expires_in: number
  scope: string
}

export interface SubmitPhoneResponse {
  verification_code_length: number
}

export interface SubmitOTPResponse {
  token_type: string
  access_token: string
  expires_in: number
  refresh_token: string
  user_id: string
  scope: string
  extension_code: string
  error?: string
  error_description?: string
  challenges?: any
  prompt_actions?: any[]
}

export interface SubmitChallengeResponse {
  token_type: string
  access_token: string
  expires_in: number
  refresh_token: string
  user_id: string
  scope: string
  extension_code: string
  error?: string
  error_description?: string
  challenges?: any
  prompt_actions?: any[]
}

interface AcceptedTerm {
  accepted_at_ms: number
  country: string
  provider: string
  terms_to_display: boolean
  url: string
  version: string
}

export interface UserProfileResponse {
  acceptedTerms: AcceptedTerm[]
  accepted_terms: AcceptedTerm[]
  approved_driver: boolean
  email: string
  email_verified_at_ms: number
  first_name: string
  has_business_profile: boolean
  id: string
  is_driver_applicant: boolean
  join_date_ms: number
  last_name: string
  needs_user_photo: boolean
  phone_number: string
  phone_verification_needed: boolean
  profiles: any[]
  redirect_to_driver_application: boolean
  referral_code: string
  region: string
  rides_taken: number
  user_photo: string
  wheelchair: boolean
}

export interface Callback {
  user: UserProfileResponse
  signature: string
}
