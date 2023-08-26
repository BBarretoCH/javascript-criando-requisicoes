async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conxexaoConvertida = await conexao.json();
    
    return conxexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        }) 
    });
    const conxexaoConvertida = await conexao.json();
    return conxexaoConvertida;
    
}

export const conectaApi = {
    listaVideos,
    criaVideo
}