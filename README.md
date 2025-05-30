# 🍕 Projeto Pizzaria - Sistema Completo com Node.js, React e React Native

## 📌 Visão Geral

Este projeto é baseado em uma necessidade real do mercado de trabalho. Foi originado a partir de um pedido de um freelancer e adaptado para ser um estudo completo dentro do nosso treinamento.

O objetivo é construir uma aplicação **completa** para uma **pizzaria**, com:

- Backend com Node.js e banco de dados
- Frontend Web com React (para uso na cozinha/admin)
- Aplicativo Mobile com React Native (para uso do garçom)

---

## 🎯 Proposta do Projeto

> “Quero que no meu restaurante o garçom possa usar um celular ou tablet, logar no aplicativo, selecionar o número da mesa, fazer o pedido e enviar. Esse pedido será então visualizado na cozinha, por meio do sistema web em um computador.”

### Funcionalidades principais:

- Garçom faz login no app mobile
- Seleciona o número da mesa e monta o pedido
- Ao finalizar o pedido, ele é enviado para a cozinha
- Na cozinha, o sistema web exibe os pedidos em aberto
- Cozinha pode:
  - Visualizar detalhes do pedido
  - Marcar o pedido como concluído (removendo da lista)
  - Cadastrar categorias e produtos no cardápio
  - Trabalhar com upload de imagens dos produtos

---

## 🧑‍🍳 Sistema Web (Admin/Cozinha)

- Login/Cadastro (pode ser desativado o cadastro)
- Exibição dos **pedidos em aberto**
- Detalhamento de cada pedido (mesa, produtos, quantidades, observações)
- Conclusão dos pedidos
- Cadastro de **categorias** e **produtos** (com imagens, descrição e valores)

---

## 📱 Aplicativo Mobile (Garçom)

- Login do garçom
- Seleção do número da mesa
- Montagem do pedido: produtos, quantidades
- Cancelamento do pedido (fechar a mesa)
- Envio do pedido apenas após finalizar
- Somente pedidos **finalizados** aparecem no sistema da cozinha

---

## 🔧 Tecnologias Utilizadas

- **Backend**: Node.js + Express + TypeScript
- **Frontend Web**: React + TypeScript
- **Mobile**: React Native com Expo (TypeScript)
- **Banco de Dados**: (a definir na próxima aula)

---

## 🚀 Começando o Desenvolvimento

A próxima etapa será a criação da estrutura base do backend, definindo o banco de dados e iniciando a construção da API.

---

# 🍕 Pizzaria - Frontend

Este projeto é o frontend de uma aplicação de pizzaria, desenvolvida com **Next.js**, com suporte a autenticação, upload de produtos, e interação com a API backend.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS Modules](https://sass-lang.com/)
- [Axios](https://axios-http.com/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [Multer (no backend)](https://github.com/expressjs/multer)

## 🔧 Requisitos

- Node.js `>= 18.x`
- Backend rodando em `http://localhost:3333`
- Pasta `public/` com logo: `public/logo.svg`

## 📁 Estrutura de Pastas

```plaintext
src/
│
├── app/
│   ├── page.tsx           # Página de login
│   └── dashboard/         # Rotas autenticadas
│
├── assets/                # (opcional) Imagens
├── services/
│   └── api.ts             # Configuração Axios
├── styles/                # Estilos globais (se necessário)
└── ...
```

## 🔐 Autenticação

A autenticação é baseada em token JWT, armazenado em cookie via `js-cookie`.

- O login ocorre na `/` com envio de email/senha.
- Após sucesso, o token é salvo em `Cookies` e o usuário é redirecionado para `/dashboard`.

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/TaviloBreno/pizzaria-frontend.git
cd pizzaria-frontend

# Instale as dependências
npm install
# ou
yarn


Vamos colocar a mão na massa! 💪
```
