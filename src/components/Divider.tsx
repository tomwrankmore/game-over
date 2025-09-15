import React from 'react';

const Divider: React.FC = () => {
  const words = [
    { text: 'BOYCOTT ISRAEL.', bold: true },
    { text: 'BOYCOTT ISRAEL.', bold: false },
  ];

  // Repeat words enough times to cover large screens
  const repeatedWords = Array.from({ length: 30 }, (_, i) => ({
    ...words[i % words.length],
    id: i,
  }));

  return (
    <div className="relative w-full overflow-hidden py-2 bg-boycott-black text-boycott-light ">
      <div className="flex whitespace-nowrap justify-center">
        {repeatedWords.map((word) => (
          <span
            key={word.id}
            className={`mr-2 text-lg ${
              word.bold ? 'font-extrabold' : 'font-light'
            }`}
            style={{ fontFamily: "'poster-gothic-round-atf', sans-serif" }}
          >
            {word.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Divider;
