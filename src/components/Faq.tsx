import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Faq.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can apply for LSPP?",
    answer:
      "Any currently enrolled college or university student with an interest in technology, leadership, or community building can apply.",
  },
  {
    question: "Is there any cost to join the program?",
    answer:
      "No, the Leapfrog Student Partnership Program is completely free to join for all selected students.",
  },
  {
    question: "How long does the program run?",
    answer:
      "The program typically runs for one academic semester, with ongoing sessions, workshops, and mentorship throughout.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes, all student partners who complete the program receive a certificate of participation along with other goodies.",
  },
  {
    question: "Can I get hired after the program?",
    answer:
      "Outstanding student partners are sometimes offered internship or job opportunities at Leapfrog based on performance.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="faq-item" key={item.question}>
              <button
                className={`faq-question ${isOpen ? "faq-question-open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}
                />
              </button>
              <div className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
