import { FadeInSection } from './FadeInSection';

interface TestimonialCardProps {
  quote: string;
  author: string;
  emoji: string;
}

function TestimonialCard({ quote, author, emoji }: TestimonialCardProps) {
  return (
    <div className="bg-[#182236] p-8 rounded-2xl flex flex-col h-full">
      <div className="text-3xl mb-6">
        {emoji}
      </div>
      <p className="font-outfit text-white/80 text-lg leading-[1.7] mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="font-outfit font-semibold text-gradient text-lg">
        {author}
      </p>
    </div>
  );
}

export default function CustomerStories() {
  const testimonials = [
    {
      quote: "I'm a huge movie buff, and Quizland lets me put my film knowledge to the test! I've created quizzes on everything from classic films to obscure trivia. It's my favorite new obsession!",
      author: "Jamie T.",
      emoji: "👽"
    },
    {
      quote: "Perfect for family game nights! We create quizzes on random topics, and everyone from the kids to grandparents has a blast. Highly recommend!",
      author: "Josh W.",
      emoji: "👨‍👩‍👧‍👦"
    },
    {
      quote: "Quizland has become my favorite companion! I create quizzes on everything from old-time music to gardening. It keeps my mind sharp and gives me something fun to look forward to every day.",
      author: "Margarita L.",
      emoji: "👵"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1090px] mx-auto px-4">
        <h2 className="font-outfit font-semibold text-4xl md:text-[56px] leading-[1.1] text-center gradient-text mb-12 md:mb-16">
          Customer Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <TestimonialCard 
                quote={testimonial.quote} 
                author={testimonial.author}
                emoji={testimonial.emoji}
              />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
