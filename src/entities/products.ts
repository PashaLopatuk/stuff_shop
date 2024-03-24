import { Category } from "./categories"


export interface Product {
    id: number
    title: string
    price: number
    description: string
    images: string[]
    creationAt: string
    updatedAt: string
    category: Category
}

export interface ProductFilters {
    title: string
    price: string
    description: string
    categoryId: string
    images: string
}