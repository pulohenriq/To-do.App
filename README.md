```markdown
# 🚀 FlowPro — Productivity Suite

FlowPro é uma aplicação de produtividade moderna construída com **HTML, CSS e JavaScript puro**, com arquitetura modular e foco em experiência real de usuário.

O projeto foi desenvolvido com mentalidade de produto SaaS, inspirado em ferramentas como Todoist, Linear, Notion e TickTick.

---

# 🎯 Objetivo

Transformar um simples gerenciador de tarefas em uma ferramenta profissional que:

- Reduz sobrecarga mental
- Melhora a priorização
- Aumenta foco e execução
- Oferece clareza visual
- Simula um produto real pronto para escalar

---

# 🧠 Conceitos Aplicados

- Kanban (gestão visual de fluxo)
- Matriz de Eisenhower (priorização inteligente)
- Pomodoro (foco e produtividade)
- Eat That Frog (tarefa mais importante do dia)
- Princípio de Pareto (80/20)
- GTD (estrutura para subtarefas)

---

# 🏗️ Arquitetura

O projeto segue uma estrutura modular, separando responsabilidades:

```

script.js
│
├── Storage
├── TaskManager
├── UI Controller
├── Kanban (renderização + drag and drop)
├── Eisenhower (classificação automática)
├── Pomodoro (timer + animação)

```

### 🔹 Storage
Responsável por persistência usando `localStorage`.

### 🔹 TaskManager
Gerencia todas as tarefas:
- Criar
- Atualizar
- Listar
- Priorizar (Frog)

### 🔹 UI Controller
Controla renderização e interação da interface:
- Kanban
- Matriz
- Pomodoro

### 🔹 Pomodoro Controller
Gerencia:
- Tempo
- Progresso circular
- Execução do timer

---

# 🎨 Design System

O design segue padrões modernos de SaaS:

- **Tipografia:** Inter
- **Cores:**
  - Fundo: off-white suave
  - Cards: branco
  - Texto: cinza escuro
  - Secundário: cinza leve
  - Destaque: vermelho elegante
- **Espaçamento:** amplo e limpo
- **Bordas:** suaves e arredondadas
- **Sombras:** leves (soft shadow)

---

# 🧩 Funcionalidades

## 📌 Kanban Profissional
- Drag and drop entre colunas
- Limite de WIP (máx. 3 tarefas em “Fazendo”)
- Contador por coluna
- Feedback visual
- Persistência automática

---

## 🧠 Matriz de Eisenhower
Classificação automática baseada em:

- Prioridade
- Prazo

Quadrantes:
- Fazer agora
- Agendar
- Delegar
- Eliminar

---

## ⏱️ Pomodoro
- Timer de 25 minutos
- Progresso circular SVG
- Atualização em tempo real
- Estrutura pronta para evolução

---

## 🐸 Eat That Frog
- Destaque automático da tarefa mais importante do dia

---

## 💾 Persistência
- Armazenamento local via `localStorage`
- Nenhum backend necessário

---

# ⚙️ Como executar

1. Baixe os arquivos:
   - `index.html`
   - `style.css`
   - `script.js`

2. Abra o `index.html` no navegador

Pronto. A aplicação já estará funcionando.

---

# 📁 Estrutura do Projeto

```

flowpro/
│
├── index.html
├── style.css
└── script.js

```

---

# 🚧 Roadmap (Próximos Passos)

- [ ] Subtarefas com checklist (GTD completo)
- [ ] Filtros inteligentes (80/20)
- [ ] Pomodoro avançado (pausa, ciclos, som)
- [ ] Animações avançadas de drag and drop
- [ ] Router SPA mais robusto
- [ ] Integração com backend (Firebase / Supabase)
- [ ] Autenticação de usuários
- [ ] Sincronização em nuvem
- [ ] Versão mobile

---

# 💡 Visão de Produto

FlowPro não é apenas um projeto de estudo.

Ele foi pensado como base para um:

- SaaS de produtividade
- Produto escalável
- Ferramenta real de uso diário

---

# 👨‍💻 Autor

Desenvolvido por **Paulo Henrique Lima Lopes**

---

# 📜 Licença

Este projeto é open-source e pode ser utilizado para estudo e evolução pessoal/profissional.
```
