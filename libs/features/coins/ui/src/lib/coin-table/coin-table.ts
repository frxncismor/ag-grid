import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  AllCommunityModule,
  GridApi,
  GridOptions,
  ModuleRegistry,
  createGrid,
} from "ag-grid-community";
import { CommonModule } from '@angular/common';
import { Coin } from '@ng-crypto-dashboard/features/coins/data-access';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-coin-table',
  imports: [CommonModule],
  templateUrl: './coin-table.html',
  styleUrl: './coin-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoinTable implements OnInit {
  @Input() coins: Coin[] = [];
  @Input() columns: any[] = [];

  gridApi: GridApi | null = null;
  gridOptions: GridOptions = {
    columnDefs: [],
    rowData: [],
  };

  ngOnInit(): void {
    this.initializeGridAPI();
    this.refreshGrid();
  }

  refreshGrid(): void {
    this.gridOptions = {
      columnDefs: [...this.columns],
      rowData: [...this.coins],
    };
    this.gridApi?.setGridOption('columnDefs', this.gridOptions.columnDefs);
    this.gridApi?.setGridOption('rowData', this.gridOptions.rowData);
  }

  initializeGridAPI(): void {
    this.setColumns();
    const gridElement = document.getElementById('myGrid') as HTMLElement;
    this.gridApi = createGrid(gridElement, this.gridOptions);
  }

  exportToExcel(): void {
    this.gridApi?.exportDataAsExcel();
  }

  nameCellRenderer(params: any): string {
    return `<div class="flex items-center gap-2">
      <img src="${params.data.image}" alt="Image" class="w-4 h-4" />
      <span class="text-sm font-bold">${params.value}</span>
      <span class="text-sm text-gray-500">${params.data.symbol.toUpperCase()}</span>
    </div>`;
  }

  currencyFormatter(params: any): string {
    return `$ ${params.value.toLocaleString()}`;
  }

  uppercaseFormatter(params: any): string {
    return params.value.toUpperCase();
  }

  setColumns(): void {
    this.columns.forEach((column) => {
      if (column.field === 'name') {
        column.cellRenderer = this.nameCellRenderer;
      }
      if (column.field === 'currentPrice' || column.field === 'marketCap') {
        column.valueFormatter = this.currencyFormatter;
      }
      if (column.field === 'symbol') {
        column.valueFormatter = this.uppercaseFormatter;
      } 
    });
  }


}
