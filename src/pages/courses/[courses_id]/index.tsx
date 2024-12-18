import React from 'react';
import { useRouter } from "next/router";
import { Page } from "@/components/Shared/Page";
import SectionsCard from '@/components/Sections/SectionsCard';
import { useGetSectionsByCourseSlug } from "@/features/_queries_/_rest_api_";
import styled from "styled-components";
import BottomTabs from "@/components/Shared/BottomTabs";

const Index = () => {
  const router = useRouter();
  const slug = router.query.courses_id;

  const { data, loading, error } = useGetSectionsByCourseSlug(slug);
  console.log('sections:',data);

  return (
    <Page>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <SectionsCardCon>
          {data?.map((section, index) => (
            <React.Fragment key={index}>
              <SectionsCard data={section} />
            </React.Fragment>
          ))}
        </SectionsCardCon>
      )}
      <BottomTabs />
    </Page>
  );
};

const SectionsCardCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.429vw;
  align-items: center;
`;

export default Index;