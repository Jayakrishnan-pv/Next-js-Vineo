import TextComponent from '@/components/atoms/TextComponent';
import { getTranslations } from 'next-intl/server';
import React from 'react';

type HeroSectionProps = {
  locale: string;
};

const HeroSection = async ({ locale }: HeroSectionProps) => {
  const t = await getTranslations({
    locale,
    namespace: 'HeroSection',
  });

  return (
    <div className="h-home w-full text-pretty bg-home-background bg-bottom bg-no-repeat lg:bg-cover">
      <TextComponent
        title={t('heading')}
        subtitle={t('sub_heading1')}
        paragraphs={[t('sub_heading2')]}
        buttonText={t('button_text')}
        showButton
        mainClass="ml-5 mt-14 py-5 text-blue-950 md:ml-10"
        h2Class="mb-8 w-3/4 text-2xl font-bold md:w-full md:text-3xl lg-l:text-4xl"
        h3Class="mb-8 w-2/4 text-lg sm:w-2/4 md:w-4/12 md:text-xl lg-l:text-2xl"
        pClass="w-2/4 text-lg sm:w-2/4 md:w-4/12 md:text-xl lg-l:text-2xl"
        buttonClass="bg-red-400 mt-10 px-10 py-2 text-white md:text-lg"
      />
    </div>
  );
};

export default HeroSection;
