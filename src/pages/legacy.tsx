import dynamic from 'next/dynamic';

const RemoteHeader = dynamic(() => import('shop/Header'), {
  ssr: false,
  loading: () => <div>Remote Header 로딩중…</div>,
});

export default function TestPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Host Pages Router (/test)</h1>
      <RemoteHeader title="호스트에서 불러옴" />
    </div>
  );
}
