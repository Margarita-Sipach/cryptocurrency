export interface CryptoType {
  changePercent24Hr: string;
  explorer: string;
  id: string;
  marketCapUsd: string;
  maxSupply: string;
  name: string;
  priceUsd: string;
  rank: string;
  supply: string;
  symbol: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
}

export interface GraphPropertiesType {
  title: string;
  labelOptios: Intl.DateTimeFormatOptions;
  interval: string;
  start: number;
}

export interface HistoryType {
  priceUsd: string;
  time: number;
}

export interface ChangeType {
  id: string;
  value: number;
}

export interface ContextType {
  changes: ChangeType[];
  setChanges: (arg: ChangeType[]) => void;
  oldValue: number;
  setOldValue: (arg: number) => void;
  isLoading: boolean;
  setIsLoading: (arg: boolean) => void;
}
