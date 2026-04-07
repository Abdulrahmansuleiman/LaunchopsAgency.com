'use client';

import { useState } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

interface ChatMessage {
  type: 'bot' | 'user';
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      text: 'Hi there! 👋 I\'m here to help you understand if LaunchOps is right for your business. Got a quick minute?',
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const questions = [
    {
      id: 'business_type',
      question: 'What type of business are you running?',
      options: ['Agency', 'Local Business', 'Solopreneur', 'Other'],
    },
    {
      id: 'monthly_leads',
      question: 'How many leads do you get per month currently?',
      options: ['Less than 10', '10-50', '50-100', '100+'],
    },
    {
      id: 'main_challenge',
      question: 'What\'s your biggest challenge with leads?',
      options: ['Not enough leads', 'Slow response time', 'Low conversion rate', 'Manual follow-ups'],
    },
    {
      id: 'name',
      question: 'What\'s your name?',
      options: null, // Text input
    },
    {
      id: 'email',
      question: 'What\'s your email address?',
      options: null, // Text input
    },
  ];

  const handleOptionClick = (response: string) => {
    const question = questions[currentQuestion];
    setUserResponses({
      ...userResponses,
      [question.id]: response,
    });

    // Add user message
    setMessages([
      ...messages,
      { type: 'user', text: response },
    ]);

    // Move to next question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        const nextQuestion = questions[currentQuestion + 1];
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            text: nextQuestion.question,
          },
        ]);
      }, 500);
    } else {
      // All questions answered, submit
      submitResponses({
        ...userResponses,
        [question.id]: response,
      });
    }
  };

  const handleTextSubmit = () => {
    if (!inputValue.trim()) return;

    const question = questions[currentQuestion];
    setUserResponses({
      ...userResponses,
      [question.id]: inputValue,
    });

    setMessages([
      ...messages,
      { type: 'user', text: inputValue },
    ]);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        const nextQuestion = questions[currentQuestion + 1];
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            text: nextQuestion.question,
          },
        ]);
      }, 500);
    } else {
      submitResponses({
        ...userResponses,
        [question.id]: inputValue,
      });
    }

    setInputValue('');
  };

  const submitResponses = async (allResponses: Record<string, string>) => {
    try {
      await fetch('/api/send-chatbot-responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessType: allResponses.business_type,
          monthlyLeads: allResponses.monthly_leads,
          mainChallenge: allResponses.main_challenge,
          name: allResponses.name,
          email: allResponses.email,
        }),
      });

      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: 'Perfect! I\'ve sent your info to our team. We\'ll reach out shortly with a personalized plan. 🎯',
        },
      ]);

      setIsSubmitted(true);

      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting responses:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: 'Oops, something went wrong. Please try again.',
        },
      ]);
    }
  };

  const currentQ = questions[currentQuestion];
  const isTextInput = currentQ && !currentQ.options;

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110"
          title="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-40 w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold">LaunchOps Assistant</h3>
              <p className="text-sm text-blue-100">We'll find the right solution for you</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-500/30 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          {!isSubmitted && (
            <div className="border-t border-gray-200 p-4 space-y-3">
              {isTextInput ? (
                <div className="flex gap-2">
                  <input
                    type={currentQ.id === 'email' ? 'email' : 'text'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleTextSubmit()}
                    placeholder={currentQ.question}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    autoFocus
                  />
                  <button
                    onClick={handleTextSubmit}
                    disabled={!inputValue.trim()}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  {currentQ.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionClick(option)}
                      className="w-full p-3 text-left rounded-lg border border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-colors font-medium text-gray-700"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Success State */}
          {isSubmitted && (
            <div className="p-4 text-center">
              <p className="text-sm text-gray-600">
                Thanks for chatting with us! Check your email for next steps.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
