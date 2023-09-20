import {$host} from './api';

export const fetchNews = async (lang, page, per_page = 20) => {
    try {
      const categories = decideCategory(lang);
      const response = await $host.get('posts', {
        params: {
            _embed:true,
            categories,
            page,
            per_page,
        }
      });
  
      const totalCount = response.headers['x-wp-total'];
      const data = response.data;
      return { totalCount, data };
    } catch (error) {
      console.error(error);
      return { totalCount: 0, data: [] };
    }
  }

export const fetchSingleNews = async (lang, slug) => {
  const categories = decideCategory(lang);
  const { data } = await $host.get('posts', {
    params: {
      categories,
      slug
    }
  });
  return data;
}

const decideCategory = (lang) => {
  return lang === "hy" ? 156 : lang === "en" ? 158 : 359;
}