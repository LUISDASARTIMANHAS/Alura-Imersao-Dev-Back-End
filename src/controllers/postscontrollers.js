import { getTodosPosts } from "../models/postmodel.js";

export async function listarPosts(req, res) {
    // Define uma rota GET para a URL "/posts".
    const posts = await getTodosPosts();
    // Chama a função getTodosPosts para buscar todos os posts e armazena o resultado.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e o array de posts no formato JSON.
  }