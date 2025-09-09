import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, interval, switchMap, startWith, shareReplay } from 'rxjs';
import { mapToCoin } from './coin.mapper';
import { Coin } from './coin.interface';
import { API_CONFIG } from './api.config';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private readonly http = inject(HttpClient);
  private readonly config = API_CONFIG.COINGECKO;
  private readonly UPDATE_INTERVAL = 30000;
  private readonly CACHE_SIZE = 1;

  getCoins(): Observable<Coin[]> {
    const params = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '100',
      page: '1',
      sparkline: 'false'
    };
    
    return this.http.get(`${this.config.BASE_URL}${this.config.ENDPOINTS.COINS}`, { params }).pipe(
      map((response: any) => {
        console.log('Datos actualizados:', new Date().toLocaleTimeString());
        return response.map((coin: any) => mapToCoin(coin))
      })
    );
  }

  getCoinsWithAutoUpdate(): Observable<Coin[]> {
    return interval(this.UPDATE_INTERVAL).pipe(
      startWith(0),
      switchMap(() => this.getCoins()),
      shareReplay(this.CACHE_SIZE)
    );
  }

  getCoinsWithCustomInterval(intervalMs: number): Observable<Coin[]> {
    return interval(intervalMs).pipe(
      startWith(0),
      switchMap(() => this.getCoins()),
      shareReplay(this.CACHE_SIZE)
    );
  }

  getCoin(id: string): Observable<any> {
    return this.http.get(`${this.config.BASE_URL}${this.config.ENDPOINTS.COIN_DETAIL}/${id}`);
  }
}