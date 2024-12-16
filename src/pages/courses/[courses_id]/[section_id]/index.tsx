import React from 'react';
import {useRouter} from "next/router";
import {Page} from "@/components/Shared/Page";

const Index = () => {
  const router = useRouter();
  const id= router.query.section_id

  console.log(router);
  return (
    <Page>
      section
      <br/>
      {id}
    </Page>
  );
};

export default Index;