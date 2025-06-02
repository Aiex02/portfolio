import { ReactNode } from "react";

export interface Experience {
  company: string;
  icon: string;
  role: string;
  description: ReactNode;
  period: string;
  techs: string[];
}

export const experiences: Experience[] = [
  {
    company: "Integral Care Ciências",
    icon: "/logoICC.png",
    role: "Desenvolvedor Full-Stack",
    period: "ago de 2024 - mar de 2025 (8 meses)",
    techs: ["Next.js", "Firebase", "Tailwind CSS", "Firestore", "Storage"],
    description: (
      <>
        <p>
          Fui responsável pelo desenvolvimento de uma plataforma online para leitura e envio de artigos científicos, utilizando Next.js e Firebase.
        </p>
        <p className="mt-2 font-semibold">Principais responsabilidades:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Desenvolvimento full stack da plataforma, incluindo interface, autenticação e banco de dados.</li>
          <li>Criação de área pública para leitura de artigos, com pesquisa, filtragem e categorização.</li>
          <li>Implementação de submissão de artigos, acompanhamento de status e publicação.</li>
          <li>Configuração de Firebase Authentication, Firestore e Storage, com regras de segurança.</li>
          <li>Painéis administrativos para gerenciamento de artigos, usuários e pagamentos.</li>
          <li>Design e desenvolvimento com Tailwind CSS, priorizando acessibilidade e experiência do usuário.</li>
        </ul>
        <p className="mt-2 font-semibold">Impacto:</p>
        <p>
          A plataforma otimizou o processo de submissão e revisão de artigos científicos, automatizando processos para a editora.
        </p>
      </>
    )
  },
  {
    company: "Alfa Ritll",
    icon: "/logo-generico.png",
    role: "Desenvolvedor de Front-End",
    period: "jan de 2024 - nov de 2024 (11 meses)",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "APIs", "SSR"],
    description: (
      <>
        <p>
          Desenvolvimento do front-end de um sistema CRM personalizado em Next.js, focado em gestão de segurança do trabalho.
        </p>
        <p className="mt-2 font-semibold">Principais responsabilidades:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Criação do front-end com Next.js, React, TypeScript e Tailwind CSS, priorizando responsividade.</li>
          <li>Desenvolvimento de funcionalidades: cadastro de colaboradores, controle de treinamentos e gestão de certificados.</li>
          <li>Implementação de monitoramento de ASOs com alertas de vencimento.</li>
          <li>Integração com APIs para dados dinâmicos.</li>
          <li>Estruturação com SSR e recursos nativos do Next.js.</li>
          <li>Boas práticas: componentização, versionamento e modularização.</li>
          <li>Levantamento de requisitos e validação junto a stakeholders.</li>
        </ul>
        <p className="mt-2 font-semibold">Impacto:</p>
        <p>
          O sistema auxilia empresas a gerenciar treinamentos e documentos legais de forma eficiente.
        </p>
      </>
    )
  },
  {
    company: "WordSeg / LabSeg",
    icon: "/wseglogo.png",
    role: "Desenvolvedor Front-End Angular",
    period: "jul de 2023 - jul de 2024 (1 ano 1 mês)",
    techs: ["Angular", "TypeScript", "HTML", "CSS", "APIs REST", "Mercado Pago"],
    description: (
      <>
        <p>
          Atuei como desenvolvedor front-end em sistemas de e-commerce e cursos online para uma empresa de EPIs.
        </p>
        <p className="mt-2 font-semibold">Principais atividades:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Correção de bugs e manutenção de código legado.</li>
          <li>Desenvolvimento de novas páginas e funcionalidades usando Angular, TypeScript e HTML/CSS.</li>
          <li>Integração com Mercado Pago para transações seguras.</li>
          <li>Consumo de APIs REST com dados em tempo real.</li>
          <li>Boas práticas: componentização, versionamento e reuso de código.</li>
        </ul>
        <p className="mt-2 font-semibold">Impacto:</p>
        <p>
          Contribuí para melhorias na loja virtual e na plataforma de cursos, aprimorando a experiência do usuário e implementando funcionalidades importantes para o negócio.
        </p>
      </>
    )
  }
];
