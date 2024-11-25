# Produtos Front-end

Este é um projeto de uma interface web para gerenciamento de produtos. Foi desenvolvido em TypeScript utilizando a biblioteca React.js e o build tool Vite.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado os seguintes itens na sua máquina:

- **Node.js** (versão 16 ou superior) - [Link para download](https://nodejs.org/)
- **pnpm** (gerenciador de pacotes) - [Guia de instalação](https://pnpm.io/pt/installation)
- **Git** (para clonar o repositório, se necessário) - [Guia de instalação](https://git-scm.com/)

## Como executar

Siga os passos abaixo para configurar e executar o projeto:

### 1. Clone o repositório (se necessário)

Caso ainda não tenha clonado o repositório, execute:

```bash
git clone https://github.com/leonardototti/products-frontend.git
cd products-frontend
```

### 2. Instale as dependências

Com o pnpm já instalado, execute o seguinte comando na raiz do projeto para instalar todas as dependências:

```bash
pnpm i
```

### 3. Configuração das variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo de exemplo `.env.example`:

```env
# URL da API de produtos
VITE_URL_API=
```

### 4. Executando o servidor de desenvolvimento

O servidor será iniciado na porta padrão, http://localhost:5173.

```bash
pnpm dev
```

## Tecnologias utilizadas

As principais tecnologias e bibliotecas utilizadas neste projeto são:

- **[React.js](https://reactjs.org/)**: Biblioteca JavaScript reativa para construção de interfaces.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna e rápida para projetos front-end.
- **[TypeScript](https://www.typescriptlang.org/)**: Linguagem de programação fortemente tipada que se baseia em JavaScript.
- **[Ant Design](https://ant.design/)**: Biblioteca de componentes de UI para React.
- **[TanStack Query](https://tanstack.com/query/latest)**: Gerenciamento de estado assíncrono.
- **[Axios](https://axios-http.com/)**: Cliente HTTP baseado em Promises para consumo de APIs REST.
- **[ESLint](https://eslint.org/)**: Ferramenta de linting para identificar e corrigir problemas de código.
- **[Prettier](https://prettier.io/)**: Ferramenta de formatação automática de código.
- **[Husky](https://typicode.github.io/husky/#/)**: Gerenciamento de hooks de Git para garantir qualidade no fluxo de commits.
