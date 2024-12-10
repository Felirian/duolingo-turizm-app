import React from 'react';
import {Page} from "@/components/Shared/Page";
import {useGetAllCourses} from "@/features/_queries_/_rest_api_";

const Index = () => {

  const {data, loading, error} = useGetAllCourses();
  console.log(data);

  return (
    <Page>
      courses
    </Page>
  );
};

export default Index;