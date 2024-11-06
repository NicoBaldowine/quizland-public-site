'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "How does Quizland work?",
    answer: "Quizland is a unique quiz app powered by advanced AI technology. It allows you to create personalized quizzes on any topic you desire. Simply input your topic of interest, and our AI generates a customized quiz for you to enjoy. Whether you're testing your knowledge or learning something new, Quizland makes it easy and fun."
  },
  {
    question: "How many quizzes can I create with Quizland?",
    answer: "With the free version of Quizland, you can create up to six quizzes. We are currently working on a premium version that will allow you to create an unlimited number of quizzes, giving you endless opportunities to explore and learn about any subject you're passionate about."
  },
  {
    question: "What are the levels in Quizland, and how do they work?",
    answer: (
      <div className="space-y-4">
        <p>Quizland features a Progressive Difficulty System where you start as an Egg and evolve through ten exciting levels as you play and improve:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Egg - Begin your journey</li>
          <li>Chick - Take your first steps</li>
          <li>Seedling - Watch your knowledge grow</li>
          <li>Young Tree - Build strong foundations</li>
          <li>Mountain - Rise to new heights</li>
          <li>Volcano - Ignite your expertise</li>
          <li>Wizard - Master your craft</li>
          <li>Phoenix - Rise above challenges</li>
          <li>Dragon - Command your subject</li>
          <li>Ultimate Dragon - Achieve mastery</li>
        </ul>
        <p>As you complete quizzes and earn points, you'll advance through these levels, unlocking new challenges and achievements along the way.</p>
      </div>
    )
  },
  {
    question: "How can I use Quizland?",
    answer: (
      <div className="space-y-4">
        <p>Quizland is perfect for both entertainment and learning. Here are some ways you can use the app:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Entertainment on the Go: Enjoy fun quizzes while waiting for appointments or commuting.</li>
          <li>Learning New Topics: Explore new subjects by creating quizzes on any topic you're curious about.</li>
          <li>Social Interaction: Challenge friends and family by sharing quizzes and comparing scores.</li>
          <li>Educational Tool: Use it as a study aid to prepare for exams or interviews by generating practice quizzes.</li>
          <li>Brain Training: Keep your mind sharp with daily quizzes that challenge your memory and critical thinking skills.</li>
        </ul>
        <p>With Quizland, you have a versatile tool that fits into any part of your day, turning idle moments into opportunities for fun and learning.</p>
      </div>
    )
  },
  {
    question: "What is the future of Quizland?",
    answer: (
      <div className="space-y-4">
        <p>We are committed to continually improving Quizland to enhance your experience. Our future plans include:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Premium Version: Introducing a premium option with unlimited quiz creation and exclusive features.</li>
          <li>New Features: Adding more game modes, challenges, and interactive elements to keep the app exciting.</li>
          <li>Enhanced AI Capabilities: Improving our AI to provide even more accurate and personalized quizzes.</li>
          <li>Community Engagement: Developing features that allow you to share quizzes and compete with other users worldwide.</li>
          <li>Educational Partnerships: Collaborating with educators to make Quizland a valuable learning resource.</li>
        </ul>
      </div>
    )
  }
];

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2E394E]">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-300 space-y-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1090px] mx-auto px-4">
        <h2 className="font-outfit font-semibold text-4xl md:text-[56px] leading-[1.1] text-center gradient-text mb-12 md:mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
