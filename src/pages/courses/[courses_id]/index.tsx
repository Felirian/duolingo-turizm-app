import React from 'react';
import {useRouter} from "next/router";
import {Page} from "@/components/Shared/Page";

const Index = () => {
  const router = useRouter();
  const id = router.query.courses_id;
  console.log(router);
  return (
    <Page>
      course
      {id}
    </Page>
  );
};

export default Index;