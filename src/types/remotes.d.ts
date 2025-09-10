import * as React from 'react';

declare module 'shop/Header' {
  const C: React.ComponentType<{ title?: string }>;
  export default C;
}
