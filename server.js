import express from "express";
const app = express();
const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
        id: 1
      },
      {
        descricao: "gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150",
        id: 2
      },
      {
        descricao: "gato fazendo panqueca",
        imagem: "https://placecats.com/millie/300/150",
        id: 3
      }
];
app.use(express.json());

function buscarPostPorId(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    });
}

app.listen(3000,() =>{
    console.log("Servidor Iniciado!");
});

app.get("/posts",(req,res)=>{
    res.status(200).json(posts);
});

app.get("/posts/:id",(req,res)=>{
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});