export interface IHotelImages {
    hotelId: number
    hotelImages: HotelImage[]
    roomImages: RoomImage[]
    featuredImageTrackingDetails: FeaturedImageTrackingDetails
    propertyImageTrackingDetails: PropertyImageTrackingDetails
  }
  
  export interface HotelImage {
    baseUrl: string
    imageId: number
    mediaGUID: string
    sizes: Size[]
    trackingDetails: TrackingDetails
  }
  
  export interface Size {
    type: number
    suffix: string
  }
  
  export interface TrackingDetails {
    version: string
    namespace: string
    algorithmName: string
  }
  
  export interface RoomImage {
    roomId: number
    images: Image[]
  }
  
  export interface Image {
    baseUrl: string
    imageId: number
    mediaGUID: string
    sizes: Size2[]
  }
  
  export interface Size2 {
    type: number
    suffix: string
  }
  
  export interface FeaturedImageTrackingDetails {
    version: string
    namespace: string
    algorithmName: string
  }
  
  export interface PropertyImageTrackingDetails {
    version: string
    namespace: string
    algorithmName: string
  }