import TransparentNavbar from "./components/Navbar";
import { useState } from 'react';
import Carousel from "./components/Carousel";

export default function App() {
  // State management
  const [activeId, setActiveId] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState(null); // Changed from activeCarouselId

  // Fixed carousel configuration
  const carouselConfig = {
    1: {  // dev projects
      images: [  // Fixed typo from 'iimages' to 'images'
        {
          id: 1,
          image: "/project1.jpg",
          title: "Vida Plena Web App",
          description: "Health app project"
        },
        {
          id: 2, 
          image: "/project2.jpg",
          title: "Mexican Sign Language Admin Web App",
          description: "Investment calculator"
        },
        {
          id: 3, 
          image: "/project2.jpg",
          title: "VantTec Web Page",
          description: "Investment calculator"
        },
        {
          id: 4, 
          image: "/project2.jpg",
          title: "SDV Car Web Page",
          description: "Investment calculator"
        }
      ],
      height: "550px"
    },
    2: { // ios projects
      images: [  // Fixed typo from 'iimages' to 'images'
        {
          id: 1,
          image: "/project1.jpg",
          title: "Us in Stem",
          description: "Health app project"
        },
        {
          id: 2, 
          image: "/project2.jpg",
          title: "Safe Sisters",
          description: "Investment calculator"
        },
        {
          id: 3, 
          image: "/project2.jpg",
          title: "Skill Swap",
          description: "Investment calculator"
        },
        {
          id: 4, 
          image: "/project2.jpg",
          title: "WWDC Particpant with My Mountain Journal",
          description: "Investment calculator"
        }
      ],
      height: "600px"
    },
    3: { // hobbies
      images: [
        {
          id: 1, // Changed from duplicate id 3
          image: "/climate-data.jpg",
          title: "Reading",
          description: "Environmental research data"
        }
      ],
      height: "600px"
    },
    4: { // research
      images: [
        {
          id: 1, // Changed from duplicate id 3
          image: "/climate-data.jpg",
          title: "Research",
          description: "Environmental research data"
        }
      ],
      height: "600px"
    }, 
    5: { // ai projects 
      images: [
        {
          id: 1, // Changed from duplicate id 3
          image: "/climate-data.jpg",
          title: "Text messages analyzer",
          description: "Environmental research data"
        }
      ],
      height: "600px"
    }, 
    6: { // courses
      images: [
        {
          id: 1, // Changed from duplicate id 3
          image: "/climate-data.jpg",
          title: "Text messages analyzer",
          description: "Environmental research data"
        }
      ],
      height: "600px"
    }
  };

  const researchItems = [
    { id: 1, title: "Info", image: "/info_square.png" },
    { id: 2, title: "Research", image: "/square.png" },
    { id: 3, title: "AIProjects", image: "/climate-data.jpg" },
    { id: 4, title: "Hobbies", image: "/climate-data.jpg" }
  ];

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleClickCarousel = (config) => {
    setActiveCarousel(config); // Now using activeCarousel state
  };

  const handleClose = () => {
    setActiveCarousel(null); // Changed from setActiveCarouselId
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-300">
      <TransparentNavbar />
      
      <div className="pt-16 md:pt-24 lg:pt-32"></div>
      
      <div className="relative mx-auto w-full md:w-4/5 max-w-2xl">
        <img 
          src="/mac_normal.png" 
          alt="Main Mac Display"
          className="mx-auto max-w-2xl rounded-xl transition hover:scale-105"
        />

        {/* Right Side Folders */}
        <div className="absolute top-16 w-16 sm:w-20 md:w-24 bottom-4 right-4 sm:bottom-6 sm:right-8">
          <img 
            src="/research.png" 
            alt="Research Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[4])}
          />
          <img 
            src="/ai_folder.png" 
            alt="AI Projects Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer mt-4"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[5])}
          />
          <img 
            src="/courses_folder.png" 
            alt="Courses Projects Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer mt-4"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[6])}
          />
          <img 
            src="/main_calculator.png" 
            alt="Calculator App"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer mt-4"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[6])}
          />
        </div>

        {/* Left Side Folders */}
        <div className="absolute left-10 top-16 w-16 sm:w-20 md:w-24 bottom-4 right-4 sm:bottom-6 sm:right-8">
          <img 
            src="/info_folder.png" 
            alt="Information Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer"
            style={{ zIndex: 10 }}
            onClick={() => handleClick(1)}
          />
          <img 
            src="/dev_folder.png" 
            alt="Development Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer mt-4"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[1])}
          />
          <img 
            src="/ios_folder.png" 
            alt="iOS Projects Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer mt-4"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[2])}
          />
          <img 
            src="/hobbies_folder.png" 
            alt="Hobbies Folder"
            className="w-16 hover:scale-110 transition-transform duration-200 cursor-pointer mt-4"
            style={{ zIndex: 10 }}
            onClick={() => handleClickCarousel(carouselConfig[3])} // Fixed to pass config
          />
        </div>

        {/* Spacing */}
        <div className="pt-16 md:pt-24 lg:pt-32"></div>
        
        <img 
          src="/arrow_down.png" 
          alt="Scroll Down Indicator"
          className="mx-auto max-w-2xl rounded-xl transition hover:scale-105"
        />
        
        <div className="pt-16 md:pt-24 lg:pt-32"></div>

        {/* Research Items Display */}
        <div className="mx-auto inset-0 flex items-center justify-center pointer-events-none z-0">
          {researchItems.map((item) => (
            <div 
              key={item.id}
              className={`${
                activeId === item.id ? 'block' : 'hidden'
              } pointer-events-auto`}
            >
              <img 
                src={item.image} 
                alt={`${item.title} content`}
                className="max-w-[90vw] max-h-[90vh] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Carousel Modal - Now using activeCarousel instead of activeCarouselId */}
        {activeCarousel && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleClose}>
            <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-8 right-0 text-white hover:text-gray-300 z-50"
                onClick={handleClose}
              >
                ✕
              </button>
              <Carousel
                {...activeCarousel} // Now passing the entire config object
                slidesToShow={1}
                arrows={true}
                autoplay={false}
                speed={400}
                objectFit={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}