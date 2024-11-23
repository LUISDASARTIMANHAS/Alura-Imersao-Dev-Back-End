import express from "express";
import routes from "./src/routes/postroutes.js";
// Importa as dependências necessárias: o framework Express para criar a aplicação web e a função para conectar ao banco de dados.

// Cria uma instância do Express, que será o núcleo da nossa aplicação.
const app = express();

app.use(express.static("uploads"));
routes(app);

// Inicia o servidor Express na porta 3000 e exibe uma mensagem no console.
app.listen(3000,() =>{
    console.log("Servidor Iniciado!");
});


// function buscarPostPorId(id){
//     // Define uma função para buscar um post específico pelo ID no array de posts.
//     // **Observação:** Essa função seria desnecessária em um cenário real onde todos os dados são obtidos do banco de dados.
//     return posts.findIndex((post)=>{
//         return post.id === Number(id)
//     });
//     // Utiliza o método findIndex para encontrar o índice do post com o ID correspondente no array.
// }
