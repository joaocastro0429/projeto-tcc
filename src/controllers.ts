import { Request, Response } from 'express';
import * as produtosService from './service';

export const listProducts = async (req: Request, res: Response) => {
   try {
       const produtos = await produtosService.getProducts();
       res.json(produtos);
   } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Erro ao listar produtos" });
   }
};

export const addProducts = async (req: Request, res: Response) => {
   const { name, quantity, stock, categoryId } = req.body; // Verifique se categoryId está sendo passado corretamente

   try {
       const novoProduto = await produtosService.addproduct({ name, quantity, stock, categoryId });
       res.status(201).json(novoProduto);
   } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Erro ao adicionar produto" });
   }
};

