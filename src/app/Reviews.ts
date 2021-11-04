export interface IReviews {
    result: string
    reviewData: ReviewData
  }
  
  export interface ReviewData {
    guestReviewGroups: GuestReviewGroups
    hotelId: string
    omniture: Omniture
  }
  
  export interface GuestReviewGroups {
    guestReviewPagination: GuestReviewPagination
    guestReviewOverview: GuestReviewOverview
    guestReviews: GuestReview[]
  }
  
  export interface GuestReviewPagination {
    page: number
    previousPage: boolean
    nextPage: boolean
  }
  
  export interface GuestReviewOverview {
    totalCount: number
    overall: number
    formattedOverall: string
    overallScoreBreakdown: OverallScoreBreakdown[]
    qualitativeBadgeText: string
    hotelService: number
    roomComfort: number
    hotelCondition: number
    cleanliness: number
    neighbourhood: number
    formattedHotelService: string
    formattedRoomComfort: string
    formattedHotelCondition: string
    formattedCleanliness: string
  }
  
  export interface OverallScoreBreakdown {
    score: number
    formattedScore: string
    amount: number
  }
  
  export interface GuestReview {
    id: string
    title: string
    reviews: Review[]
  }
  
  export interface Review {
    recommendedBy: string
    rating: number
    formattedRating: string
    qualitativeBadgeText: string
    postedOn: string
    title: string
    summary: string
    reviewType: string
  }
  
  export interface Omniture {
    evar34: string
  }
  