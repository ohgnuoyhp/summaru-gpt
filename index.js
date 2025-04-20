import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [emotion, setEmotion] = useState('');
  const [tone, setTone] = useState('1');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>숨마루: 감정을 말씀으로</h1>
      <textarea rows="4" cols="50" placeholder="오늘 하루 어땠나요?" value={emotion} onChange={e => setEmotion(e.target.value)} />
      <div>
        <label>묵상 톤 선택:</label>
        <select value={tone} onChange={e => setTone(e.target.value)}>
          <option value="1">따뜻한 위로형</option>
          <option value="2">믿음 회복형</option>
          <option value="3">위트 중화형</option>
          <option value="4">문학적 여운형</option>
        </select>
      </div>
      <Link href={{ pathname: '/result', query: { emotion, tone } }}>
        <button>숨마루에게 보내기</button>
      </Link>
    </div>
  );
}
