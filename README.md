# 🎹 Piano Virtual Avançado

## 📄 Descrição

Este é um projeto de um piano virtual interativo e avançado, desenvolvido com HTML, CSS e JavaScript puros. Ele permite que os usuários toquem piano usando o teclado do computador ou o mouse, selecionem diferentes instrumentos, gravem suas próprias melodias e as reproduzam. O projeto também inclui um visualizador de áudio que cria efeitos visuais coloridos em tempo real para cada nota tocada.

---

## ✨ Funcionalidades

- *🎹 Teclado Interativo:* Toque 17 teclas de piano diferentes.
- *🖱 Suporte a Mouse e Teclado:* Interaja clicando nas teclas ou usando as teclas correspondentes do seu teclado físico.
- *🎸 Seletor de Instrumentos:* Alterne facilmente entre o som de 'Piano' e 'Guitarra'.
- *🔴 Gravação e Reprodução:* Grave suas sequências de notas e reproduza a melodia a qualquer momento.
- *🔊 Controle de Volume:* Ajuste o volume em tempo real com um slider.
- *🙈 Ocultar Teclas:* Opção para mostrar ou ocultar as letras correspondentes em cada tecla do piano.
- *🌈 Visualizador de Áudio:* Efeitos visuais de partículas coloridas que reagem a cada nota tocada, criando uma experiência mais imersiva.
- *💅 Design Moderno:* Interface limpa e agradável com um tema escuro.

---

## 🚀 Tecnologias Utilizadas

- *HTML5:* Para a estrutura principal da página.
- *CSS3:* Para estilização, layout (Flexbox), animações e design responsivo.
- *JavaScript (Vanilla):* Para toda a lógica do piano, manipulação de eventos, reprodução de áudio e funcionalidades de gravação.

---

## 📂 Como Executar o Projeto

Este projeto não requer nenhuma instalação ou dependência. Basta seguir os passos abaixo:

1.  *Clone o repositório:*
    bash
    git clone [[https://github.com/GelsonBario/Piano-Virtual.git](https://github.com/GelsonBario/Piano-Virtual)]
    
2.  *Navegue até a pasta do projeto:*
    bash
    cd Piano-Virtual
    
3.  **Abra o arquivo index.html** no seu navegador de preferência.

Pronto! O piano virtual estará funcionando.

---

## 📂 Estrutura de Arquivos

A estrutura do projeto está organizada da seguinte forma para facilitar a manutenção:


.
├── index.html              # Arquivo principal da estrutura HTML
├── src/
│   ├── scripts/
│   │   └── engine.js       # Contém toda a lógica e interatividade
│   ├── styles/
│   │   ├── main.css        # Estilos principais do projeto
│   │   └── reset.css       # Reset de estilos padrão do navegador
│   └── tunes/
│       ├── piano/
│       │   ├── a.wav
│       │   ├── w.wav
│       │   └── ... (outras notas)
│       └── guitar/
│           └── ... (notas da guitarra aqui)
└── README.md               # Este arquivo


---

## ⚠ Observação Importante

O projeto está totalmente funcional para o instrumento *Piano*. No entanto, os arquivos de áudio (.wav) para o instrumento *Guitarra* não estão incluídos neste repositório.

Para que a funcionalidade da guitarra opere corretamente, você precisará adicionar os arquivos de nota correspondentes (a.wav, w.wav, s.wav, etc.) dentro da pasta src/tunes/guitar/.
