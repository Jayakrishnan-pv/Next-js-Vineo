import TextComponent from '@/components/atoms/TextComponent';

import { IMAGES } from '@/constants/ImageConstants';

import Image from 'next/image';
import React from 'react';

const FifthSection = () => {
  return (
    <div className="mb-20 mt-16 flex w-full flex-col-reverse items-center justify-evenly md:mt-24 lg:flex-row">
      <div className="text-pretty lg:mt-10 lg:max-w-40%">
        <TextComponent
          title="El Algoritmo"
          subtitle="Cada vez que valoras un vino, mejora el algoritmo"
          paragraphs={['Nuestro algoritmo aprende con con cada vino que valoras. Cuanto más valores, más precisas serán nuestras recomendaciones.']}
          buttonText="Comienza"
          showButton
          mainClass="space-y-5"
          h2Class="text-gray-600 text-2xl lg:text-3xl lg:text-left text-center"
          h3Class="text-gray-600 text-2xl lg:text-3xl font-bold lg:text-left text-center"
          pClass="text-xl sm:text-xl mb-12 lg:text-2xl lg:text-left text-center"
          buttonClass="bg-custom-color mx-auto mt-10 px-14 py-2 text-white flex items-center justify-center lg:mx-0 md:text-lg"
        />
      </div>
      <Image src={IMAGES.algorithmo} alt="graphDetail" width={280} height={280} className=""></Image>
    </div>
  );
};

export default FifthSection;
