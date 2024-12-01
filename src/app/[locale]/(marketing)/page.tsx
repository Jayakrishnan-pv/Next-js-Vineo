import HeroSection from '@/components/organisms/HeroSection';
import { setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: { locale: string };
};

export default async function Index(props: IIndexProps) {
  const { locale } = props.params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection locale={locale} />
    </>
  );
}
