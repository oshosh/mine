import { type ExternalToast } from 'sonner';

/**
 * 커스텀 토스트의 props를 담당
 */
export interface ToastProps extends ExternalToast {
  type: 'error' | 'success' | 'warning';
  description?: string;
  callback?: () => void;
}
