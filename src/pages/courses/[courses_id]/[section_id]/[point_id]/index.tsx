import React from 'react';
import { useRouter } from 'next/router';
import { Page } from '@/components/Shared/Page';
import { useGetQuestions } from '@/features/_queries_/_rest_api_';
import Quiz from '@/components/Questions/Quiz';

const Index = () => {
  const router = useRouter();
  const point = router.query.point_id;
  const section = router.query.section_id;
  const { loading, data, error } = useGetQuestions(section, point);

  return (
    <Page>
      {loading ? <div>загрузка</div> : error ? <div>ошибка</div> : data && <Quiz data={data} />}
    </Page>
  );
};

export default Index;
