import express from "express";
import { cadastrarProduto, pesquisarProdutoPorID, listaProdutos } from "./controller/productController";

const app = express();
const PORT = process.env.PORT ?? 2000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

app.post("/api/product", cadastrarProduto);
app.get("/api/product",pesquisarProdutoPorID)
app.get("/api/products", listaProdutos)

app.listen(PORT, logInfo);