import { Category } from "@/entities/categories";
import { axiosConfig } from "../config/axiosConfig";

export default abstract class CategoriesApiManager {
    public static paths = {
        getCategories: '/categories'
    }

    static async getCategories({ limit }: { limit: number }) {
        const searchParams = new URLSearchParams({ limit: String(limit) })
        return await axiosConfig.get<Category[]>(this.paths.getCategories, {
            params: searchParams
        })
    }
}