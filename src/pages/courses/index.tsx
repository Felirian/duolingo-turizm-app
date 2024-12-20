import React from 'react';
import { Page } from '@/components/Shared/Page';
import { useGetAllCourses } from '@/features/_queries_/_rest_api_';
import CoursesCard from '@/components/Courses/CoursesCard';
import styled from 'styled-components';
import BottomTabs from '@/components/Shared/BottomTabs';
import SkeletonCard from '@/components/Shared/SkeletonCard';

const Index = () => {
  const { data, loading, error } = useGetAllCourses();
  console.log('courses:', data);

  return (
    <Page back={false}>
      {loading ? (
        <CoursesCardCon>
          {Array(5)
            .fill('')
            .map((_, index) => (
              <React.Fragment key={`${index}-skeleton`}>
                <SkeletonCard />
              </React.Fragment>
            ))}
        </CoursesCardCon>
      ) : error ? (
        <>error</>
      ) : (
        <CoursesCardCon>
          {data?.map((course, index) => (
            <React.Fragment key={index}>
              <CoursesCard data={course} />
            </React.Fragment>
          ))}
        </CoursesCardCon>
      )}
      <BottomTabs />
    </Page>
  );
};

const CoursesCardCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.429vw;
  align-items: center;
`;

export default Index;
