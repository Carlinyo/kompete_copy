import { IRedWhiteTitle } from "../../../../types/interfaces/RedWhiteTitle.ts";
import { IShopTicket } from "../../../../types/interfaces/ShopTicket.ts";

export const SHOP_TICKETS_DATA: IShopTicket[] = [
    {
        IMAGE: '/images/Economy/Tokens/volah.png',
        TITLE: 'voolah',
        DESC: 'Voolah is KOMPETEs in-game currency for players who prefer using fiat to purchase cosmetics in the shop. It is available on all marketplaces and the KOMPETE website.',
        BTN_TEXT: 'GET VOOLAH'
    },
    {
        IMAGE: '/images/Economy/Tokens/ethereum.png',
        TITLE: 'ethereum',
        DESC: 'The KOMPETE shops are compatible with Etheruem for players who prefer full ownership of their cosmetic items. Exclusively available on the KOMPETE website.',
        BTN_TEXT: 'GET ETHEREUM'
    }
]

export const TITLE_TEXT: IRedWhiteTitle = {
    FIRST: 'YOU PAY YOUR WAY AT THE',
    LAST: 'SHOP & Ticket'
}