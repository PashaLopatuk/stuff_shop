import { Product, ProductFilters } from "@/entities/products"
import { axiosConfig } from "../config/axiosConfig"
import { ErrorResponse } from "@/entities/errors"
import { AxiosError, AxiosResponse, isAxiosError } from "axios"

export default abstract class ProductsApiManager {
    public static paths = {
        getProducts: '/products'
    }

    static async getProducts({ limit, offset }: { limit: number, offset?: number }) {
        const searchParams = new URLSearchParams({ limit: String(limit), offset: String(offset ?? 0) })
        return await axiosConfig.get<Product[]>(this.paths.getProducts, {
            params: searchParams
        })
    }

    static async searchProducts(filters: ProductFilters) {
        const searchParams = new URLSearchParams(filters as any)
        try {
            const response: AxiosResponse<Product[]> = await axiosConfig.get<Product[]>(this.paths.getProducts, {
                params: searchParams
            });
            return response;
        } catch (error) {
            if (isAxiosError(error)) {
                const axiosError: AxiosError<ErrorResponse> = error;
                if (axiosError.response && axiosError.response.status === 400) {
                    return axiosError;
                }
            }
        }
    }

    static async getProduct(params: { id: string }) {


        try {
            const response: AxiosResponse<Product> = await axiosConfig.get<Product>(this.paths.getProducts + '/' + params.id);
            return response;
        } catch (error) {
            if (isAxiosError(error)) {
                const axiosError: AxiosError<ErrorResponse> = error;
                if (axiosError.response && axiosError.response.status === 400) {
                    return axiosError;
                }
            }
        }
    }
}