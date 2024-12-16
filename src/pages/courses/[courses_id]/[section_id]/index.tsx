import React from 'react';
import {useRouter} from "next/router";
import {Page} from "@/components/Shared/Page";
import SectionsCard from '@/components/Sections/SectionsCard';

const Index = () => {
  const router = useRouter();
  const id= router.query.section_id

  console.log(router);
  return (
    <Page>
      section
      <br/>
      {id}

      <SectionsCard data={}/>
    </Page>
  );
};

export default Index;