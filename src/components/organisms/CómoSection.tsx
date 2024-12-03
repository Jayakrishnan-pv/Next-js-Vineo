import SmallCard from '@/components/atoms/SmallCard';

import TextBox from '@/components/atoms/TextComponent';

import { secondPage } from '@/constants/TextConstants';

import React from 'react';

const SecondSection = () => {
  return (
    <div className=" flex flex-col items-center justify-around bg-secondBg bg-cover bg-no-repeat py-10">
      <TextBox
        title="Apúntate a la lista y aprovéchate de la oferta de lanzamiento"
        subtitle="5€ de descuento PARA SIEMPRE"
        paragraphs={[
          '',
        ]}
        mainClass="mt-10 space-y-10"
        h2Class="text-center font-semibold text-gray-600 mb-2 lg:text-4xl md:text-2xl text-xl"
        h3Class="mb-10 text-center font-thin"
        pClass=""
        showButton={false}
      />
      <div className="relative mb-16 w-80 md:w-2/5 lg:w-3/5">
        <input type="search" id="search" className="block h-16 w-full rounded-2xl border border-gray-400 p-4 ps-10 text-lg focus:outline-none" placeholder="email" required />
        <button type="submit" className="absolute bottom-2.5 end-2.5 rounded-xl bg-custom-color px-4 py-2 text-lg font-medium text-white lg:px-10 lg-m:px-16">Apúntate</button>
      </div>
      <h1 className="text-center text-3xl text-gray-600  lg:text-4xl">Cómo funciona</h1>
      <div className="mt-20 flex w-full flex-col items-center justify-evenly text-center sm:px-10 lg:flex-row ">
        {Object.values(secondPage).map((section, index) => (
          // <SmallCard key={index} heading={section.heading} desc={section.desc} img={section.img} />
          <SmallCard
            key={index}
            heading={section.heading}
            desc={section.desc}
            img={section.img}
            containerClasses="mt-10 flex-1 p-3 sm:max-w-70% lg:mt-0"
            imageContainerClasses="flex items-center justify-center"
            imageClasses="absolute"
            contentContainerClasses="lg-l:min-h-80 z-0 mx-auto min-h-48 flex-1 space-y-5 rounded-xl border bg-second-gradient p-5 shadow-2xl md:min-h-64 lg:max-h-73  lg:min-h-72"
            headingClasses="lg-l:text-3xl mt-5 text-lg font-semibold text-gray-700 sm:text-2xl lg:mt-10"
            descClasses="text-sm sm:text-lg lg:text-xl"
          />
        ))}
      </div>
      <button type="submit" className="my-10 rounded-xl bg-custom-color px-8 py-4 text-white md:px-24 md:py-4">
        Contesta el cuestinario
      </button>
    </div>
  );
};

export default SecondSection;
