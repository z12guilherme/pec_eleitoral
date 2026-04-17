# PEC da Governança | Revolução na Gestão Pública 🇧🇷

Este repositório contém o código-fonte do site oficial da **PEC da Governança**, uma Proposta de Emenda à Constituição inédita que visa instituir um novo Ciclo de Governança, Blindagem Técnica e Transparência Total na política brasileira.

## 🎯 O Propósito
A proposta busca acabar com a "guerra de narrativas" no Brasil através de dados oficiais auditáveis e avaliação popular direta. O objetivo é fortalecer a *accountability* democrática, transferindo o poder de avaliação contínua para as mãos do cidadão.

## 🏛️ Os 4 Pilares da Proposta
1. **Fim da Reeleição:** Mandato único de 5 anos para que o político foque no trabalho, não na próxima campanha.
2. **Painel da Verdade:** Dados oficiais auditados pelo IBGE e registrados em sistema de *Blockchain* governamental.
3. **Eleições Intermediárias:** Aos 30 meses (2,5 anos), o povo volta às urnas para eleger um novo Congresso e ditar os rumos da segunda metade do mandato.
4. **Blindagem Técnica:** Relatórios seguindo normas ABNT e visualização pública em tempo real, garantindo a imutabilidade dos fatos.

## 📁 Estrutura do Projeto
O site é composto por páginas estáticas focadas em clareza, responsividade e imersão:

- `index.html`: Landing page principal apresentando a proposta, os pilares, perguntas frequentes (FAQ) e o formulário de petição para apoio. Possui uma funcionalidade de alternância de linguagem (Modo Popular vs. Modo Jurídico).
- `pec.html`: Página dedicada à leitura do texto oficial da PEC na íntegra, dividida entre uma seção técnica e um resumo voltado para a imprensa e redes sociais.
- `dashboard.html`: Painel para exibição pública da quantidade total de assinaturas coletadas em tempo real.
- `css/style.css`: Estilização global da página, utilizando variáveis CSS, Flexbox e Grid para layout responsivo.
- `js/script.js`: Scripts para o funcionamento do botão de alternância de perspectiva (Popular/Jurídico), animações e validação do formulário de assinaturas.
- `js/dashboard.js`: Script responsável por consumir os dados do Google Apps Script e exibir a contagem de assinaturas.
- `assets/`: Diretório destinado ao armazenamento de arquivos para download (ex: `slides.pptx`, `documento_pec.pdf`).

## 🚀 Como Executar Localmente
Como o projeto é um site estático (Front-end), não é necessária a instalação de dependências complexas.

1. Faça o clone deste repositório ou baixe os arquivos em `.zip`.
2. Abra a pasta do projeto no seu computador.
3. Dê um duplo clique no arquivo `index.html` para visualizá-lo em seu navegador de preferência.

*Opcional: Para uma melhor experiência de desenvolvimento, você pode utilizar extensões como o "Live Server" no VS Code.*

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Semântica e estruturação.
- **CSS3:** Animações (`reveal`), design responsivo e temas modernos (Dark Mode by default).
- **JavaScript (Vanilla):** Interatividade do lado do cliente.
- **Font Awesome (v6.4.0):** Biblioteca de ícones.
- **Google Fonts:** Tipografia `Outfit`.

## ✍️ Autoria
*“A democracia não é apenas o direito de escolher quem governa, mas o direito permanente de auditar como se governa.”*

Proposta desenvolvida por um cidadão de Pernambuco.

---

<div align="center">
  <small>© 2026 PEC da Governança | Transparência e Auditoria Popular</small>
</div>