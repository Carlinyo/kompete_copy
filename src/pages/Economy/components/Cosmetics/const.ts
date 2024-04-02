import { ICosmeticsItem } from "../../../../types/interfaces/Cosmetics.ts"
import { IRedWhiteTitle } from "../../../../types/interfaces/RedWhiteTitle.ts"

export const COSMETICS_ITEMS: ICosmeticsItem[] = [
    {
        TITLE: 'LIMITED TIME SHOP',
        DESC: 'The Limited Time Shop is your go-to destination to stay drippy on Mahzookoo Island. The shop options rotate regularly and may sometimes include items that will never be available again! Time is ticking, so dont be a bot – grab some gear.',
        IMAGE: '/images/Economy/Persons/limited.png',
        LEFT: false,
        NAME: 'limited',
    },
    {
        TITLE: 'DIVINE SHOP',
        DESC: 'The Divine Shop is a website-exclusive store that offers cosmetics of the highest rarity: Divine. Youll need Ethereum to acquire these unique items. Act quickly when we release them because once theyre gone, theyre gone.',
        IMAGE: '/images/Economy/Persons/divine.png',
        LEFT: true,
        NAME: 'divine',
    },
    {
        TITLE: 'FAME',
        DESC: 'FAME is a free progression system that allows players to earn rewards. As you level up, youll unlock exclusive rewards for that Fame cycle. The early levels are easy, but as you progress further, it becomes more challenging. The top rewards are limited and reserved exclusively for KOMPETE GOATS! Your Fame resets every three months. ',
        IMAGE: '/images/Economy/Persons/fame.png',
        LEFT: false,
        NAME: 'fame',
    },
    {
        TITLE: 'TICKET',
        DESC: 'The Ticket is a paid progression system that allows players to unlock rewards and bonuses. Youll work hard to earn exclusive rewards available only during that Ticket season. As you advance, each level becomes progressively more challenging. A new Ticket starts on the 1st of each month!',
        IMAGE: '/images/Economy/Persons/ticket.png',
        LEFT: true,
        NAME: 'ticket',
    },
    {
        TITLE: 'BAZAAR',
        DESC: 'The Bazaar is a peer-to-peer marketplace that enables players to buy and sell cosmetics with each other. Here, cosmetics find their true value. If you want to sell your cosmetics to cash out or acquire items you missed out on, this is the place to be! The Bazaar exclusively operates with KOMPETE Token.',
        IMAGE: '/images/Economy/Persons/bazaar.png',
        LEFT: false,
        NAME: 'bazaar',
    }
]

export const COSMETICS_TITLE_TEXT: IRedWhiteTitle = {
    FIRST: 'Collecting',
    LAST: 'COSMETICS'
}