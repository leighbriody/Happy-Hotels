

export interface IEntity {
    geoId: string;
    destinationId: string;
    landmarkCityDestinationId: string;
    type: string;
    redirectPage: string;
    latitude: number;
    longitude: number;
    searchDetail?: any;
    caption: string;
    name: string;
}

export interface ISuggestions {
    group: string;
    entities: IEntity[];
   
}

export interface ISearchLocation {
    term: string;
    moresuggestions: number;
    autoSuggestInstance?: any;
    trackingID: string;
    misspellingfallback: boolean;
    suggestions: ISuggestions[];
    geocodeFallback: boolean;
}

