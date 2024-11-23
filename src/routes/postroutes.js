import express from "express";
import multer from "multer";
import cors from "cors";
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
  atualizarNovoPost
} from "../controllers/postscontrollers.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus:204
}

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, "uploads/"); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  },
});

// Configura o middleware Multer para upload de arquivos únicos
const upload = multer({
  dest: "./uploads", // Diretório de destino (redundante com storage)
  storage,
});

// Configurações para sistemas Linux/Mac (possivelmente redundante)
// const upload = multer({
//   dest: "./uploads"
// });

const routes = (app) => {
  // Habilita o middleware JSON para que o Express possa interpretar requisições com corpo em formato JSON.
  app.use(express.json()); // Rota para buscar todos os posts
  app.use(cors(corsOptions));

  app.get("/posts", listarPosts); // Rota para criar um novo post

  app.post("/posts", postarNovoPost); // Rota para fazer upload de uma imagem

  app.post("/upload", upload.single("Imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
