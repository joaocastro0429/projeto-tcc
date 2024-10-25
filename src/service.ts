import { prisma } from './prisma/prisma';

// src/service.ts

export interface Product {
    name: string;
    quantity: number;
    stock: number;
    categoryId: number; // Certifique-se de incluir todos os campos necessários
}

// ... suas funções


export async function getProducts() {
    const list = await prisma.product.findMany({
        include: {
            category: true, // Inclui a relação com a categoria, se configurada
        },
    });
    return list;
}

export async function addproduct({ name, quantity, stock, categoryId }: Product) {
    const newProduct = await prisma.product.create({
        data: {
            name,
            quantity,
            stock,
            categoryId, // Usa o ID da categoria para a relação
        },
    });
    return newProduct;
}
