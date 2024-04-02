import { IRedWhiteTitle } from "../../types/interfaces/RedWhiteTitle.ts"
import { ISteps, IUseKompete, IWhitepaperTexts } from "../../types/interfaces/Utility.ts"

export const STEPS: ISteps[] = [
    {
        step: 'Closed testing with the devs'        
    },
    {
        step: 'Exclusive giveaways'        
    },
    {
        step: 'Special cosmetic drops'        
    }
]

export const TITLE_TEXTS: IRedWhiteTitle = {
    FIRST: 'Kompete Token',
    LAST: 'utility'
}

export const USE_KOMPETE_TITLE_TEXTS: IRedWhiteTitle = {
    FIRST: 'Use KOMPETE TOKEN',
    LAST: 'on The Bazaar'
}

export const GAIN_EXCLUSIVE_ACCESS_TITLE_TEXTS: IRedWhiteTitle = {
    FIRST: 'GAIN EXCLUSIVE',
    LAST: 'ACCESS'
}

export const WHITEPAPER_TITLE_TEXTS: IRedWhiteTitle = {
    FIRST: 'Be sure to',
    LAST: 'read'
}

export const WHITEPAPER_TEXTS: IWhitepaperTexts = {
    TITLE: 'whitepaper V1',
    BTN_TEXT: 'now released!',
    DESC: 'Read our whitepaper for a breakdown of the game economy, technical details, and our plans for the future!'
}

export const USE_KOMPETE_TEXTS: IUseKompete = {
    DESC: 'Players can seamlessly buy and sell cosmetics with each other at the Bazaar exclusively using KOMPETE Token.',
    BTN_TEXT: 'bazaar Coming Soon!'
}
