import { toast } from 'sonner';

import { CustomToast } from '@/components/ui/toaster/components/CustomToast';
import { ToastProps } from '@/components/ui/toaster/type';

export function useToast() {
  const showToast = ({ description, duration = 1000, type = 'success', ...rest }: ToastProps) => {
    toast.custom(() => <CustomToast description={description} type={type} {...rest} />, {
      duration: duration,
    });
  };

  return { showToast };
}
