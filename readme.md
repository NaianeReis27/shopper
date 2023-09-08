# Teste Técnico - Shopper

Este é o meu projeto para o teste técnico da Shopper.com.br. Neste teste, desenvolvi uma aplicação que atende aos requisitos fornecidos pela Shopper.com.br para a construção de uma ferramenta de atualização de preços em lojas de e-commerce.


[https://github.com/NaianeReis27/shopper/assets/100942719/cf48707f-79e5-451b-b7f0-b7eda2135f41.mp4] 

## Cenário

Em qualquer empresa de e-commerce, é essencial que os usuários possam atualizar os preços de suas lojas para se manterem competitivos e manterem seus preços alinhados com os custos de operação. Esta tarefa se torna crítica quando se trata de lojas com milhares de produtos, exigindo uma ferramenta robusta para atualizações massivas e controle de erros.

## Requisitos
- [x] Desenvolvimento de uma aplicação com back-end em Node.js e front-end em React.js.
- [x] Utilização das linguagens JavaScript ou TypeScript.
- [x] Banco de dados MySQL (versão 5 ou 8).
- [x] Capacidade de carregar um arquivo de precificação.
- [x] Implementação de um botão "VALIDAR" para verificar os dados do arquivo.
- [x] Exibição das informações dos produtos após a validação.
- [x] Detecção de violações das regras e exibição das regras quebradas.
- [x] Botão "ATUALIZAR" habilitado apenas quando todos os produtos estiverem validados.
- [x] Atualização de preços de pacotes e cálculo correto dos preços de custo.

## Instruções de Uso

Para executar este projeto em sua máquina local, siga as etapas abaixo:

1. Clone o repositório executando o seguinte comando no terminal

   git clone https://github.com/NaianeReis27/shopper.git


2. modifique os nomes dos arquivos example.env para .env nos seguintes diretórios front-end e back-end e adicione as suas variaveis de ambiente.


### Front-end

3. Acesse o diretório do front-end:

   cd front-end

4. Instale todas as dependências do projeto:

   npm install

5. Inicie a aplicação localmente:

   npm run start


### Back-end


6. Em outro terminal acesse o diretório do back-end:

   cd back-end

7. Instale todas as dependências do projeto:

   npm install

8. Inicie a aplicação localmente:

   npm run dev


Uso do Aplicativo
Para utilizar o aplicativo, é necessário inserir um arquivo CSV com as colunas "product_code" e "new_price".

| product_code | new_price |
|--------------|-----------|
| 1000         | 25.99     |
| 18           | 19.95     |
| ...          | ...       |


## Tecnologias

⚛️ React.js
💅 Styled Components
🚀 Express
🐬 MySQL

## Autora
- [Naiane Reis](https://github.com/NaianeReis27)
