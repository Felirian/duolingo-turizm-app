import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, CONFIG } from './config';
import { Course, IAchievement, IAchievements, Point, PointsData, Section } from '@/interfaces';
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
        const response = await axios.get(BASE_URL + 'courses/front', CONFIG);
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
      if (!slug || !userId || userId == 0) return;

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
  }, [slug, userId]);

  return result;
};

export const useGetAllPoints = (slug: string | string[] | undefined, userId: any) => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | PointsData;
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });
  // const { setGg, gg } = useTgApp();

  // console.log(gg, 'gg');

  useEffect(() => {
    const fetchArtistsList = async () => {
      if (!slug || !userId || userId == 0) return;
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
        // setGg(!gg);
      } catch (error) {
        setResult({
          loading: false,
          data: null,
          error: error as Error,
        });
      }
    };

    fetchArtistsList();
  }, [slug, userId]);

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
          BASE_URL + `questions/?section_slug=${slug}&point_number=${point}`,
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
  }, [slug, point]);

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

  const { userId } = useTgApp();

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

export const CreateUser = async (petName: string, userId: number, tgName: string) => {
  const data = {
    id: userId.toString(),
    tg_name: tgName,
    character: petName,
  };

  try {
    const response = await fetch(BASE_URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return response;
    } else {
      console.error('Ошибка при отправке данных');
    }
  } catch (error) {
    console.error('Ошибка сети:', error);
  }
};

export const putPoint = async (section_slug: string, point: number, userId: any) => {
  const data = {
    user_id: userId,
    section_slug: section_slug,
    point: point,
  };

  const put_xp = {
    xp: '70',
  };

  //@ts-ignore
  const METHOD: string = point == '1' ? 'POST' : 'PUT';

  try {
    const response = await fetch(BASE_URL + 'progress', {
      method: METHOD,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const response2 = await fetch(BASE_URL + 'users' + '?tg_id=' + userId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(put_xp),
    });

    if (response.ok && response2.ok) {
      const jsonData = await response.json();
      return jsonData;
    } else {
      const errorText = await response.text();
      console.error('Ошибка при отправке данных:', errorText);

      if (!response2.ok) {
        const errorText2 = await response2.text();
        console.error('Ошибка при отправке данных (users):', errorText2);
      }
    }
  } catch (error) {
    console.error('Ошибка сети:', error);
  }
};

export const useGetAchievements = () => {
  const [result, setResult] = useState<{
    loading: boolean;
    data: null | IAchievement[];
    error: Error | null;
  }>({
    loading: true,
    data: null,
    error: null,
  });

  const { userId } = useTgApp();

  useEffect(() => {
    const fetchUserPoints = async () => {
      if (!userId) return;
      try {
        const response = await axios.get(BASE_URL + `users/achievements?user_id=${userId}`, CONFIG);
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

    fetchUserPoints();
  }, [userId]);

  return result;
};
