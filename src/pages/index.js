import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName} {config.lastName}
          </h1>
          <div className="subheading mb-5">
            {config.address}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            ----
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Backend Developer</h3>
              <div className="subheading mb-3">Sensedia</div>
              <p>
                .......
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Agosto 2020 - Presente</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ADVPL/NodeJS Developer</h3>
              <div className="subheading mb-3">Sosys Business Insight</div>
              <p>
                Desenvolvedor de integrações do ERP Protheus(TOTVS) com API externas(Nodejs) e customizações em ADVPL.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Junho 2019 - Agosto 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Estagiário (Jovem Talento)</h3>
              <div className="subheading mb-3">Ilegra</div>
              <p>
                Desenvolvimento em Java com o uso do framework Spring Boot. Aplicação de conceitos como: Clean Code; Design Patterns;
                Expressões Labda(Java8) ; JUnit. Utilização de ferramentas DevOps, deploy(Jenkins) e containers Docker.
                Além do uso de alguns componentes da Netflix OSS(Eureka, Kayron, Ribbon, Hystrix) para a criação de microserviços.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2019 - Junho 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bolsista</h3>
              <div className="subheading mb-3">UFRGS</div>
              <p>
                Atualização da página do PPGENFIS. Desenvolvimento em php com o uso da plataforma WordPress.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Junho 2018 - Fevereiro 2019</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bacharelado em Ciência da computação</h3>
              <div className="subheading mb-3">Universidade Federal do Rio Grande do Sul</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"> 2017 - 2023 (Em andamento) </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Técnico em informática</h3>
              <div className="subheading mb-3">IFSUL - Charqueadas</div>
              <p>Modalidade integrada, técnico integrado com o ensino médio.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2011 - 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Code
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-c"></i>
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </li>
          </ul>

          <div className="subheading mb-3">
            Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-azure"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
          ---
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              -----
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
