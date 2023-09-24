import {$host} from './api';

export const fetchByCategory = async (categories, page, per_page = 20,isEmbed) => {
    try {
        const response = await $host.get('posts', {
            params: {
                _embed:isEmbed,
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

export const fetchSingleData = async (categories, slug) => {
    const { data } = await $host.get('posts', {
      params: {
        categories,
        slug
      }
    });
    return data;
  }