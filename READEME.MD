# Projeto Calculadora

Este é um projeto simples de uma calculadora em JavaScript que implementa as operações básicas de soma e subtração.

## Pipeline de CI/CD com GitHub Actions

Este projeto utiliza GitHub Actions para automatizar o processo de integração e entrega contínua (CI/CD). O pipeline de CI/CD é configurado para executar as seguintes etapas:

1. **Integração Contínua (CI):**
   - Após cada push na branch `main`, o pipeline é acionado.
   - O código é baixado do repositório.
   - As dependências são instaladas usando o Node.js.
   - Os testes automatizados são executados.
   - O código é empacotado.

2. **Entrega Contínua (CD):**
   - Após a etapa de integração, o código é implantado em um serviço de hospedagem ou servidor. Neste exemplo, usamos o GitHub Pages como serviço de hospedagem.

3. **Notificações:**
   - Em caso de falha ou sucesso do pipeline, uma notificação é enviada para um canal do Slack.

## Como Contribuir

Se você quiser contribuir para o projeto, siga as etapas abaixo:

1. Faça um fork deste repositório para o seu próprio perfil.
2. Clone o fork do repositório para sua máquina local.
3. Crie uma nova branch para suas alterações: `git checkout -b minha-feature`.
4. Faça as alterações desejadas e adicione testes, se aplicável.
5. Verifique se o pipeline de CI/CD passa localmente: `npm test`.
6. Faça o commit das suas alterações: `git commit -m 'Adiciona nova feature'`.
7. Faça o push para a sua branch: `git push origin minha-feature`.
8. Abra um pull request no repositório original.
9. Aguarde a revisão e a aprovação do seu pull request.
10. Após a aprovação, suas alterações serão mescladas ao código principal.

Lembre-se de seguir as diretrizes de contribuição do projeto e de manter uma comunicação aberta com os mantenedores do projeto durante o processo de contribuição.
