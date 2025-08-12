import React from 'react';
import { Page } from '@/components/Shared/Page';
import BottomTabs from '@/components/Shared/BottomTabs';
import Achievements from '../../components/Achievements';
import { useGetAchievements } from '@/features/_queries_/_rest_api_';
import Loader from '@/components/Shared/Loader';

const Index = () => {
  const { data, loading, error } = useGetAchievements();

  return (
    <Page back={false}>
      {loading ? <Loader /> : error || !data ? <>Ошибка</> : <Achievements data={data} />}
      <BottomTabs />
    </Page>
  );
};

export default Index;
