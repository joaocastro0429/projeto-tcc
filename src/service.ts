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
    const products = await prisma.product.findMany({
        include: {
            category: true, // Inclui a relação com a categoria
        },
    });
    return products;
}

export async function addproduct({ name, quantity, stock, categoryId }: Product) {
    if (categoryId) {
        const categoryExists = await prisma.category.findUnique({
            where: { id: categoryId },
        });

        if (!categoryExists) {
            // Opcional: Cria a categoria se não existir
            const newCategory = await prisma.category.create({
                data: {
                    name
                },
            });
            categoryId = newCategory.id; // Use o ID da nova categoria
        }
    }

    const newProduct = await prisma.product.create({
        data: {
            name,
            quantity,
            stock,
            categoryId, // Pode ser null se não houver categoria
        },
    });

    return newProduct;
}

export const updateProduct = async (id: number, name: string, quantity: number, stock: number, categoryId?: number) => {
    // Verifica se o produto existe antes de tentar atualizá-lo
    const existingProduct = await prisma.product.findUnique({
        where: { id },
    });

    if (!existingProduct) {
        throw new Error(`Product with ID ${id} does not exist.`);
    }

    // Atualiza o produto
    return await prisma.product.update({
        where: { id },
        data: { name, quantity, stock, categoryId },
    });
};


  export const deleteProduct = async (id: number) => {
    return await prisma.product.delete({
      where: { id },
    });
  };
  