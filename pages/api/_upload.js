import { Octokit } from "@octokit/rest";

const GITHUB_OWNER = process.env.NEXT_PUBLIC_GITHUB_OWNER;
const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// Configuração do Octokit (GitHub API)
const octokit = new Octokit({
  auth: GITHUB_TOKEN, // Substitua pelo seu token de acesso pessoal do GitHub
});

export const config = {
  api: {
    bodyParser: false, // Desabilita o corpo JSON padrão para aceitar multipart/form-data
  },
};

// Função de upload para o GitHub
export default async function uploadToGitHub(file, fileName) {
  try {
    // Crie um FileReader para ler o arquivo como base64
    const reader = new FileReader();
    const content = await new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result.split(',')[1]);  // Pega a parte base64 do resultado
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    // Faz o upload da imagem para o repositório no GitHub
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,  // Seu nome de usuário no GitHub
      repo: GITHUB_REPO,    // Nome do repositório
      path: `uploads/${fileName}`,       // Caminho no repositório
      message: `Upload de ${fileName}`,
      content: content,                 // Conteúdo do arquivo em base64
    });

    return response.data.content.html_url;  // Retorna o link de visualização da imagem
  } catch (error) {
    console.error('Erro ao fazer upload no GitHub:', error);
    throw new Error('Falha no upload para o GitHub');
  }
}