import * as React from 'react';

declare module 'shop/Header' {
  const RemoteHeader: React.ComponentType<{ title?: string }>;
  export default RemoteHeader;
}
declare module 'shop/Header';
declare module 'shop/*';
