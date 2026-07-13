// =========================================================================
// CONTEÚDO DO SITE — edite os textos aqui.
// Você não precisa mexer nos componentes (.jsx) para trocar textos,
// números de telefone, links ou perguntas do FAQ. Tudo fica centralizado
// neste arquivo. Campos marcados com "EDITAR" ainda precisam do texto
// final ou de uma imagem real.
// =========================================================================

export const site = {
  clinicName: "Clínica Engravide",
  doctorName: "Dra. Renata", // EDITAR: nome completo da médica
  crm: "CRM 99227", // EDITAR
  rqe: "RQE 45323", // EDITAR
  whatsappNumber: "5511940015953", // EDITAR: DDI+DDD+número, só números
  whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
  phoneDisplay: "(11) 94001-5953", // EDITAR
  instagramUrl: "https://www.instagram.com/drarenatacmenezes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", // EDITAR
  address: "Avenida Copacabana 177 cj 102 a 104 Centro - Empresarial 18 do Forte, Barueri - SP, 13104-082", // EDITAR
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29272.41165586388!2d-46.8484096!3d-23.494656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58372977dc9b%3A0xb3c4502d73130930!2sClinica%20Engravide!5e0!3m2!1spt-BR!2sbr!4v1782952308468!5m2!1spt-BR!2sbr", // EDITAR: link de incorporação do Google Maps
};

export const nav = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#autoridade" },
  { label: "Sintomas", href: "#sintomas" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Vídeos", href: "#videos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Medicina Reprodutiva",
  title:
    "Há mais de 20 anos ajudando mulheres e casais a realizarem o sonho da maternidade.",
  subtitle:
    "Investigação completa da infertilidade, tratamentos personalizados e acompanhamento humanizado em todas as etapas da jornada reprodutiva.",
  primaryButton: "Agendar consulta",
  secondaryButton: "Falar pelo WhatsApp",
  photoLabel: "Foto profissional da Dra. Renata", // EDITAR: substituir pelo componente de imagem real
  photoSrc: "/Dra Renata-(1 of 16).jpg",
};

export const quickForm = {
  title: "Dê o primeiro passo",
  subtitle: "Preencha e nossa equipe entra em contato para agendar sua avaliação.",
  fields: {
    name: "Nome",
    phone: "Telefone / WhatsApp",
    age: "Idade",
    tryingTime: "Há quanto tempo tenta engravidar",
  },
  tryingTimeOptions: [
    "Ainda não tentei",
    "Menos de 6 meses",
    "6 meses a 1 ano",
    "1 a 2 anos",
    "Mais de 2 anos",
  ],
  submitLabel: "Quero agendar minha consulta",
  disclaimer: "Seus dados estão protegidos conforme a LGPD.",
};

export const authority = {
  eyebrow: "Quem cuida de você",
  title: "Quem é a Dra. Renata",
  bio:
    "Dra. Renata é médica formada pela Pontifícia Universidade Católica de São Paulo (PUC-SP), especialista em Ginecologia e Obstetrícia e em Reprodução Humana pela Santa Casa de São Paulo. Fundadora da Clínica Engravide, dedica-se ao cuidado integral da saúde feminina, oferecendo um atendimento humanizado, acolhedor e de excelência para ajudar mulheres e famílias a realizarem o sonho de uma gestação saudável e segura.", // EDITAR
  credentials: [
    "Médica ginecologista e especialista em Reprodução Humana",
    "Mais de 20 anos de experiência",
    "Milhares de pacientes acompanhadas",
    "Atualização constante baseada nas principais sociedades científicas internacionais",
  ],
  badges: ["CRM", "RQE", "Certificações"], // EDITAR: substituir por selos/certificações reais
  photoLabel: "Fotos profissionais da Dra. Renata", // EDITAR
  photoSrc: "/Dra Renata-(9 of 16).jpg",
};

export const symptoms = {
  eyebrow: "Você não está sozinha",
  title: "Você se identifica com alguma dessas situações?",
  subtitle:
    "Cada jornada reprodutiva é única. Se algo abaixo faz sentido para você, uma avaliação especializada pode trazer respostas.",
  items: [
    "Tentando engravidar há mais de 6 meses ou 1 ano",
    "Abortos de repetição",
    "Baixa reserva ovariana",
    "Endometriose",
    "SOP (Síndrome dos Ovários Policísticos)",
    "Falhas em FIV anteriores",
    "Alterações seminais",
    "Idade materna avançada",
    "Casal homoafetivo",
    "Produção independente",
  ],
};

export const services = {
  eyebrow: "Como posso ajudar",
  title: "Formas de cuidado e tratamento",
  items: [
    {
      title: "Investigação da infertilidade",
      icon: "search",
      description: "Avaliação clínica, exames e leitura da história do casal para entender possíveis causas.",
    },
    {
      title: "Planejamento reprodutivo",
      icon: "calendar",
      description: "Orientação sobre o melhor momento para tentar engravidar ou preservar a fertilidade.",
    },
    {
      title: "Preservação da fertilidade",
      icon: "snowflake",
      description: "Estratégias como congelamento de óvulos ou embriões para planejar o futuro com mais segurança.",
    },
    {
      title: "Fertilização in vitro (FIV)",
      icon: "flask",
      description: "Tratamento indicado em casos selecionados, com fecundação em laboratório e acompanhamento próximo.",
    },
    {
      title: "Inseminação intrauterina",
      icon: "droplet",
      description: "Procedimento simples e monitorado, em que os espermatozoides são preparados e inseridos no útero.",
    },
    {
      title: "Abortamento recorrente",
      icon: "heart",
      description: "Investigação e suporte quando há perdas gestacionais repetidas, buscando causas e condutas possíveis.",
    },
    {
      title: "Endometriose e fertilidade",
      icon: "ribbon",
      description: "Diagnóstico e cuidado para reduzir sintomas e proteger o potencial reprodutivo.",
    },
    {
      title: "Avaliação masculina",
      icon: "user",
      description: "Investigação do fator masculino, com leitura de exames e definição do melhor caminho.",
    },
    {
      title: "Segunda opinião especializada",
      icon: "chat",
      description: "Revisão do caso para trazer mais clareza antes de iniciar ou mudar um tratamento.",
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Por que escolher a Clínica Engravide?", // ajustado para o nome da clínica (imagem enviada). Troque se o nome oficial for outro.
  items: [
    "Atendimento individualizado",
    "Medicina baseada em evidências",
    "Plano de investigação personalizado",
    "Visão integrativa da saúde feminina",
    "Tecnologia e experiência em reprodução humana",
    "Acompanhamento próximo e humanizado",
  ],
};

export const steps = {
  eyebrow: "Como funciona",
  title: "Sua jornada, passo a passo",
  items: [
    {
      step: "1",
      title: "Consulta detalhada",
      description: "Escuta da sua história, sintomas, exames prévios e objetivos de maternidade.",
    },
    {
      step: "2",
      title: "Investigação completa do casal",
      description: "Solicitação e leitura dos exames necessários para entender a causa com precisão.",
    },
    {
      step: "3",
      title: "Definição da estratégia ideal",
      description: "Escolha do caminho mais adequado para o seu momento e para o seu diagnóstico.",
    },
    {
      step: "4",
      title: "Tratamento personalizado",
      description: "Execução do plano com orientação clara e acompanhamento próximo em cada fase.",
    },
    {
      step: "5",
      title: "Acompanhamento contínuo",
      description: "Revisão dos resultados, ajustes quando necessário e suporte ao longo da jornada.",
    },
  ],
};

export const instagramVideos = {
  eyebrow: "Conteúdo em vídeo",
  title: "Três dúvidas comuns explicadas pela Dra. Renata",
  subtitle:
    "Assista aos vídeos abaixo e, se quiser ver a publicação original, acesse o Instagram da clínica no botão ao final.",
  ctaLabel: "Ver no Instagram",
  ctaHref: site.instagramUrl,
  items: [
    {
      title: "Sinais do corpo que podem indicar dificuldade para engravidar",
      description:
        "Nem sempre o corpo fala de forma direta, mas alguns sinais merecem investigação quando a gravidez demora a acontecer.",
      src: "/Nem sempre os sinais que o corpo apresenta são vistos como algo importante. Muitas mulheres pass.mp4",
      poster: "/Nem sempre os sinais que o corpo apresenta são vistos como algo importante. Muitas mulheres pass.jpg",
    },
    {
      title: "Infertilidade precisa ser investigada em mulher e homem",
      description:
        "A infertilidade não é uma culpa de um lado só: a investigação precisa olhar o casal como um todo.",
      src: "/Quando a gravidez não acontece, é comum que toda a atenção se volte para a mulher. Mas a fertili.mp4",
      poster: "/Quando a gravidez não acontece, é comum que toda a atenção se volte para a mulher. Mas a fertili.jpg",
    },
    {
      title: "A exaustão emocional de quem tenta engravidar",
      description:
        "Quando a gravidez não vem, o desgaste emocional cresce e esse impacto também precisa ser acolhido.",
      src: "/Quando falamos sobre fertilidade, é comum pensar apenas em exames, tratamentos e resultados. Mas.mp4",
      poster: "/Quando falamos sobre fertilidade, é comum pensar apenas em exames, tratamentos e resultados. Mas.jpg",
    },
  ],
};

export const testimonials = {
  eyebrow: "Quem já passou por aqui",
  title: "Depoimentos",
  subtitle: "Relatos escritos de pacientes, um vídeo de depoimento e avaliações reais em plataformas externas, sem promessas de resultado.",
  featuredVideo: {
    title: "Vídeo depoimento",
    description: "Um relato em vídeo para você sentir como é a experiência de cuidado na clínica.",
    src: "/Depoimento.mp4",
    ctaLabel: "Ver no YouTube",
    ctaHref: "https://www.youtube.com/watch?v=SAQzJIZaahs",
  },
  writtenReviews: [
    { author: "Daniela Previdelli", text: "Fiz meu pré-natal na Engravide com a Dra. Renata. Ela é extremamente atenciosa e cuidadosa. Tive parto normal, da forma que sempre sonhei, num clima descontraído (como esse dia feliz merecia ser). Sou muito grata à Dra. Renata e sua equipe.", source: "Google" },
    { author: "Elisangela Peclat", text: "Minha experiência foi super marcante, sendo bem acolhida por todos os profissionais da clinica. A Dra Renata além de trazer uma energia contagiante, possui uma grande capacidade profissional e expõe modalidades de tratamento diferenciado para cada caso. Transmitindo confianca e seguranca durante todo o acompanhamento. Super recomendo.", source: "Google" },
    { author: "Ana Caroline Alves", text: "Dra. Renata me ajudou a descobrir a endometriose após diversas tentativas em outros médicos. Me auxiliou em todo o processo e agora está cuidando da minha bebê que está a caminho. Ela e toda a equipe são pessoas incríveis, fazem tudo com muito amor", source: "Google" },
    { author: "Heloisa oliveira", text: "A dra Renata tem uma preocupação integral com seus pacientes, conhece o histórico de vida e não busca melhorar só a parte ginecológica e sim a sua qualidade de vida!!! Amooooo", source: "Doctoralia" },
    { author: "Ana Paula de Melo", text: "Não tenho palavras para expressar o quanto a doutora Renata é especial. Uma pessoa empática, muito cuidadosa e de grande coração. Sempre se coloca no nosso lugar de espera e ansiedade. Um amor de pessoa, humilde e que tem muita dedicação à sua profissão. Muito obrigada Doutora.", source: "Doctoralia" },
    { author: "Liliane Camargo", text: "A Dra Renata é uma médica incrível, super dedicada, amorosa, explica tudo com muita paciência e além de tudo super competente e antenada com tudo o que há de mais novo no mercado, sempre preocupada com a saúde em geral.", source: "Doctoralia" },
  ],
};

export const numbers = {
  title: "Resultados e números",
  disclaimer:
    "Não divulgamos taxas de sucesso sem respaldo científico e contextualização adequada — cada caso é avaliado individualmente.",
  items: [
    { value: "+20", label: "anos de experiência" },
    { value: "+0000", label: "pacientes acompanhadas" }, // EDITAR
    { value: "+0000", label: "tratamentos realizados" }, // EDITAR
  ],
};

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "FAQ",
  items: [
    {
      question: "Quando devo procurar um especialista?",
      answer:
        "Se você já tenta engravidar há algum tempo, tem ciclos irregulares, endometriose, SOP, histórico de perdas gestacionais ou exames alterados, vale buscar avaliação mais cedo.",
    },
    {
      question: "Quanto tempo devo tentar engravidar antes de buscar ajuda?",
      answer:
        "Em geral, até 12 meses para mulheres com menos de 35 anos e até 6 meses quando há 35 anos ou mais. Em casos com sintomas ou histórico específico, a investigação pode começar antes.",
    },
    {
      question: "Qual a diferença entre FIV e inseminação?",
      answer:
        "Na inseminação, o espermatozoide é preparado e colocado no útero para tentar a fecundação dentro do corpo. Na FIV, a fecundação acontece em laboratório e depois o embrião é transferido para o útero.",
    },
    {
      question: "Endometriose causa infertilidade?",
      answer:
        "Nem toda paciente com endometriose terá dificuldade para engravidar, mas a doença pode interferir na fertilidade. O impacto depende da localização, da intensidade dos sintomas e do quadro de cada pessoa.",
    },
    {
      question: "Posso congelar óvulos?",
      answer:
        "Sim. O congelamento pode ser uma estratégia para quem quer preservar a fertilidade por escolha pessoal, planejamento profissional ou indicação médica. A avaliação define se esse é o melhor momento.",
    },
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "A primeira consulta costuma reunir sua história clínica, sintomas, exames anteriores e objetivos. A partir disso, é definido se há necessidade de exames complementares e qual caminho faz mais sentido.",
    },
    {
      question: "Meu parceiro precisa participar?",
      answer:
        "Sempre que possível, sim. A investigação da fertilidade pode envolver o casal, e a participação do parceiro ajuda a entender o caso de forma mais completa.",
    },
  ],
};

export const finalCta = {
  title: "Você não precisa enfrentar essa jornada sozinha.",
  subtitle: "Agende sua consulta e descubra o melhor caminho para alcançar sua gestação.",
  buttonLabel: "Agendar consulta",
};

export const footer = {
  about:
    "Medicina reprodutiva com investigação completa, tratamentos personalizados e acompanhamento humanizado.",
  linksTitle: "Links",
  contactTitle: "Contato",
  legalLinks: [
    { label: "Política de Privacidade", href: "#" }, // EDITAR
    { label: "LGPD", href: "#" }, // EDITAR
  ],
};
