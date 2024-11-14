import { MoveLeft, MoveRight } from 'lucide-react';
import { TestimonialCard } from '..';
import { useState } from 'react';
import { useWindowSize } from 'react-use';
import { getCardStyle, getPositionClass } from '../../utils';

export function Testimonials() {
  const { width: windowWidth } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      gradientStart: '#FFA07A',
      gradientEnd: '#FF6347',
      colors: {
        light: 'red-light',
        lighter: 'red-lighter',
        lightest: 'red-lightest',
      },
    },
    {
      gradientStart: '#4487ff',
      gradientEnd: '#015f91',
      colors: {
        light: 'blue',
        lighter: 'blue-lighter',
        lightest: 'blue-lightest',
      },
    },
    {
      gradientStart: '#FFA07A',
      gradientEnd: '#FF6347',
      colors: {
        light: 'red-light',
        lighter: 'red-lighter',
        lightest: 'red-lightest',
      },
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative md:py-16 px-4 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-red-light mb-12 max-w-3xl mx-auto">
        Here's what pet owners have to say about Fetch! Pet Care...
      </h2>
      <div className="relative flex justify-center max-w-5xl mx-auto h-[600px] md:h-[400px]">
        {testimonials.map((testimonial, index) => {
          const position = (index - currentIndex + testimonials.length) % testimonials.length;
          const isCenter = position === 1;
          return (
            <div
              key={index + 1}
              className={`absolute flex justify-center items-center w-full md:w-[80%] left-0 right-0 mx-auto ${getPositionClass(
                position,
                isCenter,
              )}`}
              style={getCardStyle(index, currentIndex, testimonials.length, windowWidth)}
            >
              <TestimonialCard
                gradientStart={testimonial.gradientStart}
                gradientEnd={testimonial.gradientEnd}
                colors={testimonial.colors}
              />
            </div>
          );
        })}
        <button
          onClick={handlePrev}
          className="absolute bottom-28 -left-0 sm:left-40 md:left-0 xl:-left-32 2xl:-left-40 sm:bottom-32 md:bottom-40 transform -translate-y-1/2 bg-red-light text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10 shadow-sm shadow-red-light"
          aria-label="Previous testimonial"
        >
          <MoveLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute bottom-28 -right-0 sm:right-40 md:right-0 xl:-right-32 2xl:-right-40 sm:bottom-32 md:bottom-40 transform -translate-y-1/2 bg-red-light text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10 shadow-sm shadow-red-light"
          aria-label="Next testimonial"
        >
          <MoveRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
