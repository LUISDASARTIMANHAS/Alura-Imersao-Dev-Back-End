import conectarAoBanco from "../config/dbconfig.js";
// Conecta-se ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO e armazena a conexão em uma constante.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(id){
    // Define uma função assíncrona para buscar todos os posts do banco de dados.
    const db = conexao.db("imersao-instabytes");
    // Seleciona o banco de dados "imersao-instabytes" dentro da conexão.
    const colecao = db.collection("posts");
    // Seleciona a coleção "posts" dentro do banco de dados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna os resultados como um array.
}