async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conxexaoConvertida = await conexao.json();
    
    return conxexaoConvertida
}

export const conectaApi = {
    listaVideos
}