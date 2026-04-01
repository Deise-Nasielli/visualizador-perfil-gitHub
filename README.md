# Visualizador de Perfil GitHub

Um aplicativo web simples para visualizar perfis do GitHub, incluindo informações do usuário e seus repositórios públicos. 

## 🚀 Funcionalidades

- **Busca de Perfil**: Digite o nome de usuário do GitHub e visualize informações básicas como nome, bio, seguidores e seguindo.
- **Lista de Repositórios**: Veja todos os repositórios públicos do usuário com estatísticas como estrelas, forks, watchers e linguagem principal.
- **Interface Responsiva**: Design moderno e adaptável para desktop e mobile.
- **Busca por Enter**: Além do botão, pressione Enter no campo de busca para pesquisar.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização com variáveis CSS e design responsivo
- **JavaScript (ES6 Modules)**: Lógica da aplicação, busca de dados via API
- **GitHub API**: Para obter dados de usuários e repositórios

## 📁 Estrutura do Projeto

```
visualizador-perfil-gitHub/
├── index.html          # Página principal
├── README.md           # Este arquivo
└── src/
    ├── css/
    │   ├── style.css   # Estilos principais
    │   ├── reset.css   # Reset de estilos
    │   ├── responsive.css # Estilos responsivos
    │   └── animations.css # Animações
    └── js/
        ├── index.js    # Ponto de entrada da aplicação
        ├── api.js      # Funções para chamadas à API
        └── ui.js       # Funções de renderização da interface
```

## 🎯 Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-gitHub.git
   cd visualizador-perfil-gitHub
   ```

2. **Abra o arquivo `index.html`** no seu navegador web.

3. **Digite o nome de usuário** do GitHub no campo de busca.

4. **Clique em "buscar" ou pressione Enter** para visualizar o perfil e repositórios.

## 🌐 Demonstração

Para testar, busque por usuários como `octocat` (usuário oficial do GitHub) ou qualquer perfil público.

## 📱 Responsividade

O aplicativo é totalmente responsivo e funciona bem em:
- Desktop (largura > 700px): Layout lado a lado para perfil
- Tablet/Mobile: Layout empilhado para melhor visualização

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido  com ❤️ para explorar a API do GitHub. Como parte do curso DevQuest 2.0
Deise Nasielli