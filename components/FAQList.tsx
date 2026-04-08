type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: readonly FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
