import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CONFIG } from './config';
import { Course, Point, PointsData, Section } from '@/interfaces';
import useTgApp from '@/features/_tg_methods_';

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

  const { userId } = useTgApp();

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

export const useGetAllPoints = (slug: string | string[] | undefined) => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | PointsData;
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  const { userId } = useTgApp();

  // console.log(userId, 'user');

  useEffect(() => {
    const fetchArtistsList = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(
          BASE_URL + 'points/front?section_slug=' + slug + '&tg_id=' + userId,
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

    fetchArtistsList();
  }, [slug]);

  return result;
};

export const useGetQuestions = (
  slug: string | string[] | undefined,
  point: string | string[] | undefined
) => {
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
        const response = await axios.get(
          BASE_URL + `questions?section_slug=${slug}&point=${point}`,
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

    fetchArtistsList();
  }, [slug]);

  return result;
};

export const useGetUser = () => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | Point[];
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  const {userId} = useTgApp();

  useEffect(() => {
    const fetchArtistsList = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(BASE_URL + `users?tg_id=${userId}`, CONFIG);
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
  }, [userId]);

  return result;
};

export const useCreateUser = async (petName: string, userId: number) => {

  const data = {
    id: userId.toString(),
    character: petName,
  };

  try {
    const response = await fetch('https://kvaks-backend.pushkeen.ru/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response
      console.log('Данные успешно отправлены');
    } else {
      console.error('Ошибка при отправке данных');
    }
  } catch (error) {
    console.error('Ошибка сети:', error);
  }
};
