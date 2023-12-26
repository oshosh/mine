import { toast } from 'sonner';

import { CustomToast } from '@/components/toaster/components/CustomToast';
import { ToastProps } from '@/components/toaster/type';

export function useToast() {
  const showToast = ({ description, duration = 1000, type = 'success', ...rest }: ToastProps) => {
    toast.custom(() => <CustomToast description={description} type={type} {...rest} />, {
      duration: duration,
    });
  };

  return { showToast };
}
