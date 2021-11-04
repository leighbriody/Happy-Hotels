export interface IPropertyDetails {
    result: string
    data: IData
    transportation: Transportation
    neighborhood: Neighborhood
  }
  
  export interface IData {
    body: IPropertyBody
    common: Common
  }
  
  export interface IPropertyBody {
    pdpHeader: PdpHeader
    overview: Overview
    hotelWelcomeRewards: HotelWelcomeRewards
    propertyDescription: PropertyDescription
    guestReviews: GuestReviews
    atAGlance: AtAglance
    amenities: Amenity[]
    hygieneAndCleanliness: HygieneAndCleanliness
    smallPrint: SmallPrint
    specialFeatures: SpecialFeatures
    miscellaneous: Miscellaneous
    pageInfo: PageInfo
    unavailable: Unavailable
  }
  
  export interface PdpHeader {
    hotelId: string
    destinationId: string
    pointOfSaleId: string
    currencyCode: string
    occupancyKey: string
    hotelLocation: HotelLocation
  }
  
  export interface HotelLocation {
    coordinates: Coordinates
    resolvedLocation: string
    locationName: string
  }
  
  export interface Coordinates {
    latitude: number
    longitude: number
  }
  
  export interface Overview {
    overviewSections: OverviewSection[]
  }
  
  export interface OverviewSection {
    title?: string
    type: string
    content: string[]
    contentType: string
  }
  
  export interface HotelWelcomeRewards {
    applies: boolean
    info: string
  }
  
  export interface PropertyDescription {
    clientToken: string
    address: Address
    priceMatchEnabled: boolean
    name: string
    starRatingTitle: string
    starRating: number
    featuredPrice: FeaturedPrice
    mapWidget: MapWidget
    renovationInfo: string
    roomTypeNames: string[]
    tagline: string[]
    freebies: string[]
  }
  
  export interface Address {
    countryName: string
    cityName: string
    provinceName: string
    addressLine1: string
    countryCode: string
    pattern: string
    fullAddress: string
  }
  
  export interface FeaturedPrice {
    beforePriceText: string
    afterPriceText: string
    pricingAvailability: string
    pricingTooltip: string
    currentPrice: CurrentPrice
    taxInclusiveFormatting: boolean
    bookNowButton: boolean
  }
  
  export interface CurrentPrice {
    formatted: string
    plain: number
  }
  
  export interface MapWidget {
    staticMapUrl: string
  }
  
  export interface GuestReviews {
    brands: Brands
  }
  
  export interface Brands {
    scale: number
    formattedScale: string
    rating: number
    formattedRating: string
    lowRating: boolean
    badgeText: string
    total: number
  }
  
  export interface AtAglance {
    keyFacts: KeyFacts
    travellingOrInternet: TravellingOrInternet
    transportAndOther: TransportAndOther
  }
  
  export interface KeyFacts {
    hotelSize: string[]
    arrivingLeaving: string[]
    specialCheckInInstructions: string[]
    requiredAtCheckIn: string[]
  }
  
  export interface TravellingOrInternet {
    travelling: Travelling
    internet: string[]
  }
  
  export interface Travelling {
    children: string[]
    pets: string[]
    extraPeople: any[]
  }
  
  export interface TransportAndOther {
    transport: Transport
    otherInformation: string[]
    otherInclusions: any[]
  }
  
  export interface Transport {
    transfers: any[]
    parking: string[]
    offsiteTransfer: any[]
  }
  
  export interface Amenity {
    heading: string
    listItems: ListItem[]
  }
  
  export interface ListItem {
    heading: string
    listItems: string[]
  }
  
  export interface HygieneAndCleanliness {
    title: string
    healthAndSafetyMeasures: HealthAndSafetyMeasures
  }
  
  export interface HealthAndSafetyMeasures {
    title: string
    description: string
    measures: string[]
  }
  
  export interface SmallPrint {
    alternativeNames: string[]
    mandatoryFees: any[]
    optionalExtras: any[]
    policies: string[]
    mandatoryTaxesOrFees: boolean
    display: boolean
  }
  
  export interface SpecialFeatures {
    sections: any[]
  }
  
  export interface Miscellaneous {
    pimmsAttributes: string
    showLegalInfoForStrikethroughPrices: boolean
    legalInfoForStrikethroughPrices: string
  }
  
  export interface PageInfo {
    pageType: string
    errors: any[]
    errorKeys: any[]
  }
  
  export interface Unavailable {}
  
  export interface Common {
    pointOfSale: PointOfSale
    tracking: Tracking
  }
  
  export interface PointOfSale {
    numberSeparators: string
    brandName: string
  }
  
  export interface Tracking {
    omniture: Omniture
    pageViewBeaconUrl: string
  }
  
  export interface Omniture {
    "s.prop34": string
    "s.eVar69": string
    "s.currencyCode": string
    "s.eVar26": string
    "s.eVar16": string
    "s.products": string
    "s.eVar29": string
    "s.eVar40": string
    "s.eVar95": string
    "s.eVar41": string
    "s.eVar31": string
    "s.eVar4": string
    "s.eVar43": string
    "s.eVar32": string
    "s.eVar34": string
    "s.eVar13": string
    "s.server": string
    "s.prop28": string
    "s.prop27": string
    "s.prop5": string
    "s.eVar80": string
    "s.prop48": string
    "s.prop36": string
    "s.eVar93": string
  }
  
  export interface Transportation {
    transportLocations: TransportLocation[]
  }
  
  export interface TransportLocation {
    category: string
    locations: Location[]
  }
  
  export interface Location {
    name: string
    distance: string
    distanceInTime: string
  }
  
  export interface Neighborhood {
    neighborhoodName: string
    neighborhoodImage: string
    neighborhoodShortDescription: string
    neighborhoodLongDescription: string
  }
  