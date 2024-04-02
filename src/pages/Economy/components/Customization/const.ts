import { ICustomizationItem } from "../../../../types/interfaces/Customization.ts";
import { IRedWhiteTitle } from "../../../../types/interfaces/RedWhiteTitle.ts"


export const TITLE_TEXTS: IRedWhiteTitle = {
    FIRST: 'Modular',
    LAST: 'Character Customization'
}

export const CUSTOMIZATION_DATA : ICustomizationItem[]= [
    {
        TITLE: 'Look Good. Feel good. Play Good.',
        DESC: 'Customize your character with modular options! Edit your avatars hair, color, clothing, shoes, equipment, and more!',
        LEFT: false,
        IMAGE: '/images/Economy/Customization/video.png',
        NAME: 'video'
    },
    {
        TITLE: 'Tons of unique cosmetics to use',
        DESC: 'We have a boatload of cosmetics for you to collect, equip, and express yourself with! You can gear up with weapons, karts, apparel, accessories, stickers, dances, and more.',
        LEFT: true,
        IMAGE: '/images/Economy/Customization/images.png',
        NAME: 'cosmetics'
    },
    {
        TITLE: 'six different cosmetic rarities',
        DESC: 'Not all cosmetics are cut from the same cloth! KOMPETE has six different cosmetic rarities: Ordinary, Common, Rare, Elite, Legendary, and Divine.',
        LEFT: false,
        IMAGE: '/images/Economy/Customization/rarity.png',
        NAME: 'parties'
    }
]