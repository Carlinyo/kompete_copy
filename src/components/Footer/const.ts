import { IFooterTexts, ISocialIconData } from "../../types/interfaces/Footer.ts"
import { IRedWhiteTitle } from "../../types/interfaces/RedWhiteTitle.ts"

export const SocialIconsData: ISocialIconData[] = [
    { icon: '/images/footer/discord.png' },
    { icon: '/images/footer/twitter.png' },
    { icon: '/images/footer/facebook.png' },
    { icon: '/images/footer/youtube.png' },
    { icon: '/images/footer/tiktok.png' },
    { icon: '/images/footer/telegram.png' }
]

export const TITLE_TEXT: IRedWhiteTitle = {
    FIRST: 'follow',
    LAST: 'us'
}

export const FOOTER_ABOUT_TEXTS: IFooterTexts = {
    TITLE: '© 2022 Modernize Games, KOMPETE and any other logos or trademarks of Modernize Games. All Rights Reserved.',
    PRIVACY: 'privacy',
    TERMS: 'terms',
    COOKIES: 'cookies'
}