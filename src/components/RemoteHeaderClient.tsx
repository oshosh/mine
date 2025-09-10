// src/components/RemoteHeaderClient.tsx
"use client";

import { useEffect, useState } from "react";

type Props = { title?: string };

export default function RemoteHeaderClient(props: Props) {
  const [Comp, setComp] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    (async () =>
      // @ts-ignore
      const mod = await import("shop/Header");
      if (mounted) setComp(() => mod.default);
    })();
    return () => { mounted = false; };
  }, []);

  if (!Comp) return <div>Remote Header 로딩중…</div>;
  return <Comp {...props} />;
}
