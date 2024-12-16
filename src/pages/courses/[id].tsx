import React from 'react';
import {useRouter} from "next/router";
import {Page} from "@/components/Shared/Page";

const Id = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <Page>
      {id}
    </Page>
  );
};

  export default Id;