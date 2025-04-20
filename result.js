import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();
  const { emotion, tone } = router.query;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>오늘의 숨마루 응답</h2>
      <p><strong>감정:</strong> {emotion}</p>
      <p><strong>톤:</strong> {tone}</p>
      <p>※ 실제 GPT 응답은 연결 필요</p>
    </div>
  );
}
