import { LISTINGS_DATA } from '../data/listings';

export const listingData = () => {
    return Object.values(JSON.parse(LISTINGS_DATA.preloadedState).listings.cache);
}