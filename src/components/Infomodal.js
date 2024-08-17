import React,{useState,useEffect} from 'react';

function Infomodal(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        title: 'HISTORY OF THE ASSOCIATION',
        content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum has been the industrys standard dummy test ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        bgColor: 'bg-slate-300',
      },
      {
        title: 'About',
        content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum has been the industrys standard dummy test ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        bgColor: 'bg-green-100',
      },
      {
        title: 'Our Goals',
        content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum has been the industrys standard dummy test ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        bgColor: 'bg-cyan-100',
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [slides.length]);
  
    return (
        
      <div className="relative w-100">
        <div className="overflow-hidden flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`w-full h-96 p-8 ${slide.bgColor} transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'block' : 'hidden'
              }`}
            >
              <div className="text-center">
                <h1 className="font-bold text-3xl mb-4">{slide.title}</h1>
                <p className="text-lg">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-4 flex justify-center">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-1 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-white w-5 h-5' : 'bg-gray-500 opacity-50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    
    );
}

export default Infomodal;