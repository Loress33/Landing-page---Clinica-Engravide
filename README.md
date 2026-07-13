# Landing Page — Clínica Engravide

Base do projeto em React (Vite) para a landing page de reprodução humana,
seguindo o briefing e o esquema de cores/estrutura do site atual da clínica.

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão final (pasta `dist/`, pronta para hospedar):

```bash
npm run build
```

## O que editar primeiro

**1. `src/content.js`** — está tudo aqui: título, subtítulo, textos das seções,
perguntas e respostas do FAQ, número de WhatsApp, telefone, endereço, CRM/RQE,
link do Instagram e link do Google Maps. Procure por comentários `EDITAR` —
são os pontos que ainda precisam de conteúdo real (bio da médica, respostas
do FAQ, números de pacientes/tratamentos, depoimentos).

**2. Fotos e vídeo** — hoje aparecem como placeholders (caixas roxas com um
ícone de câmera), gerados pelo componente `ImagePlaceholder`. Para trocar por
uma foto real:

```jsx
// antes
<ImagePlaceholder label="Foto da Dra. Renata" ratio="4 / 5" />

// depois (coloque o arquivo em /public, ex: /public/dra-renata.jpg)
<img src="/dra-renata.jpg" alt="Dra. Renata" />
```

O vídeo de 60–90s da médica e os vídeos de depoimentos (`src/components/Testimonials.jsx`)
seguem a mesma lógica — hoje são caixas de placeholder; quando tiver os
arquivos, substitua por um `<video>` ou pelo embed do YouTube/Instagram.

**3. WhatsApp, telefone, endereço e mapa** — em `src/content.js`, objeto `site`:
- `whatsappNumber`: só números, com DDI+DDD (ex: `5511999999999`)
- `googleMapsEmbedUrl`: no Google Maps, busque o endereço → Compartilhar →
  Incorporar um mapa → copie a URL de dentro do `src="..."`

**4. Google Analytics e Meta Pixel** — os trechos já estão prontos e comentados
em `index.html`, é só descomentar e colocar seus IDs.

## Estrutura do projeto

```
src/
  content.js          ← todos os textos (edite aqui)
  index.css            ← paleta de cores, tipografia, estilos globais
  App.jsx              ← monta as seções na ordem da página
  components/
    Header.jsx          Menu fixo + botão "Agendar consulta"
    Hero.jsx             Primeira dobra (título, botões, formulário curto)
    QuickForm.jsx         Formulário curto (nome, telefone, idade, tempo tentando)
    Authority.jsx        "Quem é a Dra. Renata"
    Symptoms.jsx         "Você se identifica com alguma dessas situações?"
    Services.jsx          "Como posso ajudar" (cards com ícones)
    Differentials.jsx    "Por que escolher a clínica"
    Steps.jsx             Passo a passo (5 etapas)
    Testimonials.jsx     Depoimentos (vídeos + avaliações)
    Numbers.jsx           Resultados e números
    FAQ.jsx                Perguntas frequentes (acordeão)
    FinalCTA.jsx          Chamada final
    Footer.jsx             Rodapé (contato, mapa, LGPD)
    WhatsAppButton.jsx    Botão flutuante do WhatsApp (aparece em todas as telas)
```

## Sobre o formulário curto

O formulário (`QuickForm.jsx`) hoje não depende de nenhum backend: ao enviar,
ele monta os dados preenchidos e abre o WhatsApp da clínica com a mensagem
já pronta. Se no futuro vocês quiserem salvar os leads automaticamente (em
planilha, CRM ou banco de dados), é só trocar a função `handleSubmit` por uma
chamada para uma API — o comentário no arquivo já indica onde.

## Paleta de cores

As cores ficam centralizadas em `src/index.css`, no topo do arquivo
(`:root { ... }`). É só mudar os valores das variáveis para ajustar o tom em
todo o site de uma vez.

| Variável | Uso |
|---|---|
| `--color-primary` | ameixa/mauve — fundo do hero, botões escuros, ícones |
| `--color-secondary` | rosa empoeirado — detalhes e acentos |
| `--color-accent-cream` | creme — botões de destaque |
| `--color-bg-soft` | fundo rosado claro das seções alternadas |

## Hospedagem

Depois do `npm run build`, a pasta `dist/` pode ser publicada em qualquer
serviço de hospedagem estática (Vercel, Netlify, Cloudflare Pages, etc.) —
basta apontar o serviço para essa pasta.
