export enum Status {
  MAIN = '',
  LOADING = 'loading',
  SUCCESS = 'completed',
}

export type State = {
  acticle: Arcticle[];
  status: string;
  error: string;
};

export type Arcticle = {
  id: number;
  imageUrl: string;
  title: string;
  summary: string;
};