import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { Page } from '@/components/Shared/Page';
import Points from '@/components/Points';
import { useGetAllPoints } from '@/features/_queries_/_rest_api_';
import BottomTabs from '@/components/Shared/BottomTabs';
import Loader from '@/components/Shared/Loader';
import useTgApp from "@/features/_tg_methods_";

const Index = () => {
  const router = useRouter();
  const id = router.query.section_id;
  const { userId, gg, setGg } = useTgApp();

  const { loading, data, error } = useGetAllPoints(id, userId);


  useEffect(() => {
    setGg(!gg)
  }, [router]);

  if (!router.isReady) {
    return <Loader />;
  }

  return (
    <Page>
      {loading ? <Loader /> : error ? <div>ошибка</div> : data && <Points data={data} />}
      <BottomTabs />
    </Page>
  );
};

export default Index;
