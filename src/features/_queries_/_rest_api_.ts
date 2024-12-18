import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CONFIG } from './config';
import { Course, Point, Section } from '@/interfaces';
import useTgApp from "@/features/_tg_methods_";

export const useGetQuery = (endPoint: string) => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | Course[];
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchArtistsList = async () => {
      try {
        const response = await axios.get(BASE_URL + endPoint, CONFIG);
        setResult({
          loading: false,
          data: response.data,
          error: null,
        });
      } catch (error) {
        setResult({
          loading: false,
          data: null,
          error: error as Error,
        });
      }
    };

    fetchArtistsList();
  }, []);

  return result;
};

export const useGetAllCourses = () => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | Course[];
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchArtistsList = async () => {
      try {
        const response = await axios.get(BASE_URL + 'courses', CONFIG);
        setResult({
          loading: false,
          data: response.data,
          error: null,
        });
      } catch (error) {
        setResult({
          loading: false,
          data: null,
          error: error as Error,
        });
      }
    };

    fetchArtistsList();
  }, []);

  return result;
};

export const useGetSectionsByCourseSlug = (slug: string | string[] | undefined) => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | Section[];
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  const {userId} = useTgApp();

  useEffect(() => {
    const fetchSections = async () => {
      if (!slug) return;

      try {
        const response = await axios.get(
          BASE_URL + 'sections/front?course_slug=' + slug + '&tg_id=' + userId,
          CONFIG
        );
        setResult({
          loading: false,
          data: response.data,
          error: null,
        });
      } catch (error) {
        setResult({
          loading: false,
          data: null,
          error: error as Error,
        });
      }
    };

    fetchSections();
  }, [slug]);

  return result;
};

export const useGetAllPoints = (slug: string) => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | Point[];
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchArtistsList = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(BASE_URL + `points?section_slug=${slug}`, CONFIG);
        setResult({
          loading: false,
          data: response.data,
          error: null,
        });
      } catch (error) {
        setResult({
          loading: false,
          data: null,
          error: error as Error,
        });
      }
    };

    fetchArtistsList();
  }, [slug]);

  return result;
};
