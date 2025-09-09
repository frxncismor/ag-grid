import { Coin } from "./coin.interface";

export function mapToCoin(response: any): Coin {
    return {
        id: response.id,
        name: response.name,
        symbol: response.symbol.toUpperCase(),
        image: response.image,
        currentPrice: response.current_price,
        marketCap: response.market_cap,
    };
}