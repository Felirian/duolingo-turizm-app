import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '@/components/Shared/Page';
import Points from '@/components/Points';
import { useGetAllPoints } from '@/features/_queries_/_rest_api_';

const Index = () => {
  const router = useRouter();
  const id = router.query.section_id;

  const { loading, data, error } = useGetAllPoints('kitaj');

  console.log(data, 'data');

  if (!router.isReady) {
    return <div>загрузка</div>;
  }

  return (
    <Page>
      {loading ? <div>загрузка</div> : error ? <div>ошибка</div> : data && <Points data={data} />}
    </Page>
  );
};

export default Index;
