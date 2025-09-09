import { Component, inject, CUSTOM_ELEMENTS_SCHEMA, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, Subject, takeUntil } from 'rxjs';
import { Coin, CoinService } from '@ng-crypto-dashboard/features/coins/data-access';
import { CoinTable } from '@ng-crypto-dashboard/features/coins/ui';

@Component({
  selector: 'app-coin-list',
  imports: [CommonModule, CoinTable],
  templateUrl: './coin-list.html',
  styleUrl: './coin-list.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoinList implements OnInit, OnDestroy {
  private readonly coinService = inject(CoinService);
  private readonly destroy$ = new Subject<void>();
  
  coins$: Observable<Coin[]> = of([]);
  columns: any[] = [];
  lastUpdate: Date | null = null;
  isAutoUpdateEnabled = true;
  updateInterval = 30000;

  ngOnInit(): void {
    this.loadCoinsWithAutoUpdate();
    this.setupColumns();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadCoinsWithAutoUpdate(): void {
    this.coins$ = this.coinService.getCoinsWithAutoUpdate();
    
    this.coins$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((coins) => {
      this.lastUpdate = new Date();
      console.log('Datos actualizados automáticamente:', this.lastUpdate.toLocaleTimeString());
    });
  }

  private setupColumns(): void {
    this.columns = [
      { field: 'name', headerName: 'Criptomoneda', width: 300 },
      { field: 'currentPrice', headerName: 'Precio Actual', width: 150 },
      { field: 'marketCap', headerName: 'Capitalización', width: 200 },
    ];
  }

  refreshData(): void {
    this.coins$ = this.coinService.getCoins();
    this.coins$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((coins) => {
      this.lastUpdate = new Date();
      console.log('Datos actualizados manualmente:', this.lastUpdate.toLocaleTimeString());
    });
  }

  onIntervalChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const intervalMs = +target.value;
    this.changeUpdateInterval(intervalMs);
  }

  changeUpdateInterval(intervalMs: number): void {
    this.updateInterval = intervalMs;
    this.coins$ = this.coinService.getCoinsWithCustomInterval(intervalMs);
    
    this.coins$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((coins) => {
      this.lastUpdate = new Date();
      console.log(`Datos actualizados cada ${intervalMs/1000} segundos:`, this.lastUpdate.toLocaleTimeString());
    });
  }

  toggleAutoUpdate(): void {
    this.isAutoUpdateEnabled = !this.isAutoUpdateEnabled;
    
    if (this.isAutoUpdateEnabled) {
      this.loadCoinsWithAutoUpdate();
    } else {
      this.coins$ = this.coinService.getCoins();
    }
  }
}
