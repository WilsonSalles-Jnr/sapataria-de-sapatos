<h1 align="center">Sapataria de Sapatos</h1>
<p align="center"><img src="https://cienciaeeducacao.files.wordpress.com/2020/05/giphy-1-1.gif?w=480" alt="dados" /></p>

## Executando aplicação:

Esta aplicação tem como dependência o recharts, utilize o comando `npm install` no terminal para instalar todas as dependências, após instalar as dependências, utilize o comando `npm start` para executar o projeto localmente.

## Observações sobre o projeto

Este projeto ainda não está conectado com o banco de dados, por isso, os dados foram __mockados__ para que fossem visualizados.

## Dados em tempo real

Nesta aplicação, os dados são atualizados a cada 5 segundos, este tempo esta definido no arquivo `Card.jsx` na rota `src/Components`, a função responsável está localizada no início da função `Card` em `useEffect`.

## Dados aplicados

- [x] Quantia Vendida - Mostrar a quantidade de itens vendido durante 12 meses
- [x] Valor Vendido - Mostrar o valor total arrecadado durante 12 meses
- [ ] Meta - Mostrar a meta mensal
- [ ] Clientes por gênero - Gráfico rosquinha que mostra o público alvo por gênero durante um determinado periodo
- [ ] Cliente por faixa-etária - Gráfico rosquinha que mostra o público alvo por idade durante um determinado periodo
- [ ] Quantia total por vendedor - Gráfico em pilar que mostra quantia total por vendedor durante um determinado periodo
- [ ] Valor total por vendedor - Gráfico em pilar que mostra valor total por vendedor durante um determinado periodo
