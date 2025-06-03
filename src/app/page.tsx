"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  FaAward,
  FaClock,
  FaGithub,
  FaQuoteLeft,
  FaWhatsapp,
} from "react-icons/fa6";
import { Linkedin, Menu } from "lucide-react";
import { projects } from "@/components/projects";
import { stack } from "@/components/stack";
import { FiMail } from "react-icons/fi";
import { Experience, experiences } from "@/components/experiences";
import { certifications } from "@/components/certifications";
import { testimonials } from "@/components/testimonials";

export default function Portfolio() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="flex flex-col justify-between space-y-8">
          {/* Profile */}
          <div className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full  mb-4">
                <Image
                  className="rounded-full"
                  src={"/profile.png"}
                  alt={"foto"}
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-2xl font-bold">GUILHERME AIEX</h1>
              <p className="text-blue-400 text-sm">SOFTWARE DEVELOPER</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desenvolvedor Full Stack com foco em JavaScript, TypeScript,
              React, Next.js e Node.js. Experiência sólida em desenvolvimento de
              plataformas web responsivas, integração com APIs RESTful,
              autenticação e segurança de aplicações. Apaixonado por criar
              soluções inovadoras e interfaces acessíveis, atuando com
              metodologias ágeis e tecnologias modernas.
            </p>
            <Button
              asChild
              variant="secondary"
              className="rounded-full bg-white text-black w-full hover:scale-105 transition-transform duration-300"
            >
              <a
                href="/GuilhermeAiex.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </Button>
            {/* Social Links */}
            <div className="space-y-4 mt-20">
              <div className="flex justify-center gap-4 ">
                <Link
                  href="https://www.linkedin.com/in/guilherme-medeiros-aiex-57b0352a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 hover:scale-125 transition-transform duration-300" />
                </Link>
                <Link
                  href="https://github.com/Aiex02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5 hover:scale-125 transition-transform duration-300" />
                </Link>
              </div>
              <div className="text-center text-xs text-gray-400">
                <p>© 2025 Guilherme Aiex</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Menu (only mobile) */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Meus Projetos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.video ? project.video : project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="bg-blue-600 rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Habilidades</h2>
              <Button variant="ghost" size="icon" className="text-white">
                →
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {stack.map((tech, index) => (
                <div key={index} className="relative group">
                  <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experiences */}
          <section className="bg-gray-900 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-4 text-white">
              Experiências Profissionais
            </h2>
            <div className="flex flex-wrap gap-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => openModal(exp)}
                  className="w-16 h-16 bg-white rounded-md flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={50}
                    height={50}
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Contact + Clients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 relative">
              <h2 className="text-xl font-bold mb-4 text-white">Contato</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:gui.aiex.dev@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white py-2 px-4 hover:scale-105 transition-transform duration-300"
                >
                  <FiMail className="w-5 h-5" />
                  Envie um Email
                </a>
                <a
                  href="https://wa.me/5524992712340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-green-600 text-white py-2 px-4 hover:scale-105 transition-transform duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </section>

            {/* experiencia */}
            <section className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaClock className="text-green-500" />
              </div>
              <h3 className="text-4xl font-bold mb-2">+3 anos</h3>
              <p className="text-gray-400">Tempo de Experiência</p>
              <p className="text-xs text-gray-500">
                Experiência acumulada atuando como desenvolvedor em diversos
                projetos web, desde prototipagem até produção.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Front-end", "Back-end", "Mobile", "Design Responsivo"].map(
                  (area, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 bg-opacity-20 text-white px-2 py-1 rounded-full text-xs"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </section>
          </div>

          {/* certification */}
          <section className="bg-gray-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <FaAward className="text-yellow-400" />
              Certificações
            </h2>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-gray-700 bg-opacity-50 rounded-lg p-2 hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-yellow-400 flex-shrink-0 text-xl">
                    {cert.icon}
                  </span>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      {cert.title}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Depoiment */}
          <section className="bg-gray-800 rounded-xl p-4">
            <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <FaQuoteLeft className="text-green-400" />
              Depoimentos
            </h2>
            <ul className="space-y-3">
              {testimonials.map((testi, index) => (
                <li
                  key={index}
                  className="bg-gray-700 bg-opacity-50 rounded-lg p-4 flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <div>
                    <p className="text-white text-sm font-semibold">
                      {testi.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testi.role} • {testi.company}
                    </p>
                  </div>
                  <p className="text-gray-300 italic">
                    &ldquo;{testi.feedback}&rdquo;
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-lg p-4 w-full max-w-md text-white relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão de Fechar */}
              <button
                className="fixed top-4 right-4 bg-black bg-opacity-60 text-gray-300 hover:text-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-md z-50"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Conteúdo do Modal */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={selectedExperience.icon}
                  alt={selectedExperience.company}
                  width={32}
                  height={32}
                />
                <h3 className="text-xl font-bold">
                  {selectedExperience.company}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-2">
                {selectedExperience.period}
              </p>
              <h4 className="text-lg font-semibold">
                {selectedExperience.role}
              </h4>
              <p className="mt-2 whitespace-pre-line">
                {selectedExperience.description}
              </p>

              {selectedExperience?.techs && (
                <div className="mt-4">
                  <h5 className="text-md font-semibold mb-2">
                    Tecnologias utilizadas:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.techs.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 bg-opacity-20 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
