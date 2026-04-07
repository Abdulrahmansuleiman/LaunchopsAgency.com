export function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to set up LaunchOps?",
      answer: "7 business days. We handle everything from AI configuration to integrations. You just provide your business details and we deliver a fully working system."
    },
    {
      question: "Will the AI understand my business?",
      answer: "Yes. We customize the AI with your specific industry, target customers, and qualifying criteria. It learns your business rules and sales process."
    },
    {
      question: "What happens after my support period ends?",
      answer: "The system keeps working 24/7. You get ongoing support with all packages. Premium includes monthly check-ins and optimization."
    },
    {
      question: "Do I own the system?",
      answer: "You own your leads, customer data, and integrations. The infrastructure stays with us so you don't have to manage servers or updates."
    },
    {
      question: "Can I see a demo first?",
      answer: "Absolutely. Schedule a 30-minute call and we'll show you exactly how it works for your business model."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 100% money-back guarantee if you're not happy with the system within 14 days of delivery."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Everything you need to know about LaunchOps
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="border border-gray-300 rounded-lg p-6 cursor-pointer group hover:border-blue-600 transition-colors">
              <summary className="font-bold text-gray-900 flex items-center justify-between">
                {faq.question}
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-gray-900 font-medium mb-4">Still have questions?</p>
          <a 
            href="https://calendly.com/launchops-automation/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
}
