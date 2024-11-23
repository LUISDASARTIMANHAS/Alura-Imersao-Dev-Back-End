import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postmodel.js";

export async function listarPosts(req, res) {
  // **Lista todos os posts:**
  // - Chama a função `getTodosPosts` do modelo para buscar todos os posts.
  // - Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
  const posts = await getTodosPosts();
  res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
  // **Cria um novo post:**
  // - Extrai os dados do novo post do corpo da requisição.
  const payload = req.body;
  // - Tenta criar o novo post:
  try {
    const postCriado = await criarPost(payload);
    res.status(201).json(postCriado);
  } catch (err) {
    // - Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500 (Erro Interno do Servidor).
    console.error(err.message);
    res.status(500).json({ "error:": "Falha na Requisição" });
  }
}

export async function uploadImagem(req, res) {
  // **Faz upload de uma imagem e cria um novo post:**
  // - Cria um objeto com os dados do novo post, incluindo o nome da imagem.
  const payload = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  // - Tenta criar o novo post e renomear o arquivo da imagem:
  try {
    const postCriado = await criarPost(payload);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(201).json(postCriado);
  } catch (err) {
    // - Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500 (Erro Interno do Servidor).
    console.error(err.message);
    res.status(500).json({ "error:": "Falha na Requisição" });
  }
}
