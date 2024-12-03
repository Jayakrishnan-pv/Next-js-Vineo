import TextComponent from '@/components/atoms/TextComponent';
import { IMAGES } from '@/constants/ImageConstants';
import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import React from 'react';

type ElProcesoSectionProps = {
  locale: string;
};

const ThirdSection = async ({ locale }: ElProcesoSectionProps) => {
  const t = await getTranslations({
    locale,
    namespace: 'ElProceso',
  });
  return (
    <div>
      <div className="mb-52 flex flex-col items-center justify-evenly px-5 md:px-12 lg:mb-40 lg:flex-row lg-s:mb-32 w-wrap:mb-64">
        <Image src={IMAGES.winegif} alt="image" width={500} height={500} className="mt-14"></Image>
        <div className="mx-5 mt-10 text-pretty lg:max-w-40%">
          <TextComponent
            title={t('title')}
            subtitle={t('sub_title')}
            paragraphs={[t('desc1'), t('desc2'), t('desc3')]}
            buttonText={t('button_text')}
            showButton
            mainClass="space-y-5"
            h2Class="text-2xl lg:text-4xl lg:text-left text-center text-gray-600"
            h3Class="text-2xl lg:text-4xl text-gray-700 lg:text-left text-center font-bold"
            pClass="text-xl sm:text-xl lg:text-2xl lg:w-4/5 lg:text-left text-center mb-5"
            buttonClass="bg-custom-color mx-auto mt-10 px-14 py-2 text-white flex items-center justify-center lg:mx-0 md:text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
