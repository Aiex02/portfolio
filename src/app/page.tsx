"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { Linkedin, Menu } from "lucide-react";
import { projects } from "@/components/projects";
import { stack } from "@/components/stack";
import { FiMail } from "react-icons/fi";
import { Experience, experiences } from "@/components/experiences";

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
              className="rounded-full bg-white text-black w-full"
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
              <div className="flex justify-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/guilherme-medeiros-aiex-57b0352a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/Aiex02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
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
                <div
                  key={index}
                  className="w-full bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-2 mt-2">
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-xs"
                        >
                          Ver Vídeo
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs"
                      >
                        Ver Repositório
                      </a>
                    </div>
                  </div>
                </div>
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
                  className="w-16 h-16 bg-white rounded-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    width={32}
                    height={32}
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 transition-colors duration-300"
                >
                  <FiMail className="w-5 h-5" />
                  Envie um Email
                </a>
                <a
                  href="https://wa.me/5524992712340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-green-600 text-white py-2 px-4 hover:bg-green-700 transition-colors duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </section>

            {/* Happy Clients */}
            <section className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-400">Clientes Satisfeitos</p>
            </section>
          </div>
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
              className="
      bg-gray-800 rounded-lg p-6 w-full max-w-md
      text-white relative
      overflow-y-auto max-h-screen
    "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="
        absolute top-2 right-2
        text-gray-400 hover:text-white
        bg-gray-700 rounded-full p-1
        w-8 h-8 flex items-center justify-center
        md:top-2 md:right-2
      "
                onClick={closeModal}
              >
                ✕
              </button>
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
              <p className="mt-2">{selectedExperience.description}</p>
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
