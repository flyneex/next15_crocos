import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const api = axios.create({
    baseURL: `${BASE_URL}/api/v1`,
    // timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchNews = async (page: number = 1, per_page: number = 6) => {
    try {
        const response = await api.get("/news", {
            params: {
                "filter[is_archived]": 0,
                page,
                per_page,
                // total: total
            }
        });
        console.log('API response:', response.data);
        console.log(`Запрос новостей: page=${page}, per_page=${per_page}`);
        // return response.data?.data || []
        return {
            data: response.data?.data || [],
            total: response.data?.meta.total || 0,
        }

    } catch (error) {
        console.error("Ошибка при получении новостей", error);
        // return null;
        return { data: [], total: 0, per_page };
    }
};

export default api;
