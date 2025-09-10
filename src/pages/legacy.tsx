// src/app/legacy/page.tsx  (RSC 파일)
import dynamic from "next/dynamic";

// 클라이언트 경계로 감싸서 서버에서는 절대 로드 안 함
const RemoteHeaderClient = dynamic(() => import("@/components/RemoteHeaderClient"), {
  ssr: false,
});

export default function Page() {
  return (
    <main style={{ padding: 20 }}>
      <h1>App Router Host (/legacy)</h1>
      <RemoteHeaderClient title="호스트에서 불러옴" />
    </main>
  );
}
