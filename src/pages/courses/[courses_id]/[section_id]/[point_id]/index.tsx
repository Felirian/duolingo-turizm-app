import React from 'react';
import {useRouter} from "next/router";
import {Page} from "@/components/Shared/Page";

const Index = () => {
  const router = useRouter();
  //const id= router.query.point_id

  console.log(router);
  return (
    <Page>
      point
      <br/>
      {/*{id}*/}
    </Page>
  );
};

export default Index;