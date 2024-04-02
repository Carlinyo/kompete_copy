import { ITokenomicsData, ITitleTexts } from "../../types/interfaces/Tokenomics"

export const TokenomicsData: ITokenomicsData[] = [
    {
        image: '/images/tokenomics/supply.png',
        title: 'Token Supply',
        desc: 'Only 850 million KOMPETE Token will ever be in circulation. There is a wallet limit set to 10 million tokens.'
    },
    {
        image: '/images/tokenomics/tax.png',
        title: 'Token Tax',
        desc: 'There’s a 3% development and marketing tax on all swaps.'
    }
]

export const TITLE_TEXTS: ITitleTexts = {
    THE: 'the',
    TOKENOMICS: 'Tokenomics'
}