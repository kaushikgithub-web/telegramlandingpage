import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Singh",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    text: "I've been playing color prediction for 3 months now and have already won over ₹50,000! The payouts are instant and the community is amazing. This is by far the best platform I've used."
  },
  {
    id: 2,
    name: "FIZA",
    location: "GURGAON",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    text: "I was skeptical at first, but after my first win and quick payout, I was convinced. The game is simple yet exciting, and their customer support is top-notch. Highly recommended!"
  },
  {
    id: 3,
    name: "Arun Kumar",
    location: "Bangalore",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 4,
    text: "The color prediction game is addictive! I love the thrill of guessing the next color. I've had consistent wins and their platform is very user-friendly. Great job!"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Hyderabad",
    image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    text: "I've tried many prediction games but this one is the best. Fast withdrawals, no hidden fees, and amazing odds. I've already referred all my friends to join!"
  },
  {
    id: 5,
    name: "Vikram Reddy",
    location: "Chennai",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    text: "Started playing just for fun, but the winnings became serious quickly! ₹20,000 in my first week. Their Telegram bot is super easy to use and payouts are lightning fast."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 3;
  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? totalSlides - slidesToShow : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Winners Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our community of successful players.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-teal-500/30 transition-all">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-teal-500"
                      />
                      <div>
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full border border-gray-700 hover:border-teal-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full border border-gray-700 hover:border-teal-500 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;