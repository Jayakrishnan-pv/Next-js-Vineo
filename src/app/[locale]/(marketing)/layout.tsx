import { LocaleSwitcher } from '@/components/atoms/LocaleSwitcher';
import NavBar from '@/components/organisms/NavBar';
import { setRequestLocale } from 'next-intl/server';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'RootLayout',
  // });

  return (
    <>
      <NavBar showElements />
      <LocaleSwitcher />
      <div className="">{props.children}</div>
    </>
  );
}
