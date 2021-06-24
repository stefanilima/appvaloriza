import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Hello word!");
});

app.post("/test-post", (request, response) => {
    return response.send("Teste de um metodo post");
});

// http://localhost:3000
app.listen(3000, () => console.log("Aplicação iniciada"));