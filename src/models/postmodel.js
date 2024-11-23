import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// **Conecta ao banco de dados:**
// - Importa a função `conectarAoBanco` do arquivo `dbconfig.js`.
// - Obtém a string de conexão do banco de dados a partir da variável de ambiente `STRING_CONEXAO`.
// - Estabelece a conexão com o banco de dados e armazena a conexão na constante `conexao`.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(id) {
  // **Busca todos os posts:**
  // - Obtém o banco de dados "imersao-instabytes" da conexão.
  const db = conexao.db("imersao-instabytes");
  // - Obtém a coleção "posts" do banco de dados.
  const colecao = db.collection("posts");
  // - Realiza uma consulta para encontrar todos os documentos da coleção e retorna os resultados como um array.
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
  // **Cria um novo post:**
  // - Obtém o banco de dados "imersao-instabytes" da conexão.
  const db = conexao.db("imersao-instabytes");
  // - Obtém a coleção "posts" do banco de dados.
  const colecao = db.collection("posts");
  // - Insere um novo documento (post) na coleção e retorna um objeto com informações sobre a inserção.
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, post) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id);
  return colecao.updateOne(
    {
      _id: new ObjectId(objID),
    },
    {
      $set: post,
    }
  );
}
