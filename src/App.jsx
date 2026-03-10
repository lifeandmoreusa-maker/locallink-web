import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Features from './components/Features';
import InfoCards from './components/InfoCards';
import Steps from './components/Steps';
import Reviews from './components/Reviews';
import CounselForm from './components/CounselForm';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="font-sans text-gray-800 antialiased overflow-x-hidden pt-10 md:pt-0">
      <Header onOpenForm={handleOpenForm} />
      
      <main>
        <Hero onOpenForm={handleOpenForm} />
        <Statistics />
        <Features />
        <InfoCards />
        <Steps />
        <Reviews />
        
        {/* Bottom CTA Area */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-24 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-relaxed">
              이웃과 함께 달성하는 성과<br />
              <span className="text-gray-800 text-3xl md:text-4xl mt-2 block">인카 제이어스</span>
            </h2>

            <button 
              onClick={handleOpenForm}
              className="mt-8 btn-primary text-xl px-12 py-5 w-full md:w-auto shadow-[0_10px_25px_rgba(13,110,253,0.3)] hover:shadow-[0_15px_30px_rgba(13,110,253,0.4)] hover:-translate-y-1 transform transition-all duration-300"
            >
              전문가 파트너 신청하기
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButton onOpenForm={handleOpenForm} />
      <CounselForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );
}

export default App;
