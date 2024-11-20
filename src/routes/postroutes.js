import express from "express";
import { listarPosts } from "../controllers/postscontrollers.js";
const routes = (app) => {
  // Habilita o middleware JSON para que o Express possa interpretar requisições com corpo em formato JSON.
  app.use(express.json());

  app.get("/posts", listarPosts);

  // app.get("/posts/:id", (req, res) => {
  //   // Define uma rota GET para a URL "/posts/:id".
  //   const index = buscarPostPorId(req.params.id);
  //   // Chama a função buscarPostPorId para encontrar o índice do post com o ID especificado na URL.
  //   res.status(200).json(posts[index]);
  //   // Envia uma resposta HTTP com status 200 e o post encontrado no formato JSON.
  // });
};

export default routes;