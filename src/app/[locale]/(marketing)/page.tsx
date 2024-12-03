import CómoSection from '@/components/organisms/CómoSection';
import ElAlgoritmoSection from '@/components/organisms/ElAlgoritmoSection';
import ElProcesoSection from '@/components/organisms/ElProcesoSection';
import HeroSection from '@/components/organisms/HeroSection';
import LaEsenciaSection from '@/components/organisms/LaEsenciaSection';
import { setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: { locale: string };
};

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection locale={locale} />
      <CómoSection />
      <ElProcesoSection locale={locale} />
      <LaEsenciaSection />
      <ElAlgoritmoSection />
    </>
  );
}
