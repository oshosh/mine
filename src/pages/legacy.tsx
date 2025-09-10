import dynamic from "next/dynamic";

// @ts-ignore
const RemoteHeader = dynamic(() => import("shop/Header"), {
  ssr: false,
  loading: () => <div>Remote Header 로딩중…</div>,
});

export default function LegacyPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Host Pages Router (/legacy)</h1>
      <RemoteHeader title="호스트에서 불러옴" />
    </div>
  );
}
