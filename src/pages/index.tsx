import Head from 'next/head';
import useTgApp from '@/features/_tg_methods_';
import Link from 'next/link';
import { Page } from '@/components/Shared/Page';
import { viewport } from '@telegram-apps/sdk-react';
import { CustomBtn } from '@/components/Shared/CustomBtn';
import { ProgressBurSection } from '@/components/Shared/ProgressBurSection';
import BottomTabs from '@/components/Shared/BottomTabs';
import {useGetUser} from "@/features/_queries_/_rest_api_";
import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();
  const {loading, data, error} = useGetUser();
  const {userId} = useTgApp();
  console.log(userId);
  useEffect(() => {
    error && console.log('navigate')
    error && router.push('/new_person')
  }, [error]);
  console.log(data);
  return (
    <>
      <Head>
        <title>Kvaks</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Page back={false}>
        <main>
          <Link href={'/courses'}>courses</Link>
          <br />
          <button onClick={() => viewport.exitFullscreen()}>exitFullscreen()</button>
          <CustomBtn onClick={() => console.log('ff')}>Продолжить</CustomBtn>
          <ProgressBurSection percent={50} />
          <BottomTabs />
        </main>
      </Page>
    </>
  );
}
