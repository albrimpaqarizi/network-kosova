import { ReactElement, ReactNode } from 'react';

export interface LoadDataProps {
  loading: boolean;
  condition: boolean;
  time?: number;
  children: ReactNode | ReactElement;
  fallback?: ReactNode;
}
