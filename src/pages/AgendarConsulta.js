import React from "react";
import "../styles/AgendarConsulta.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DropDownAgendarConsulta from "../components/DropDownAgendarConsulta";
// import ModalAgendarConsultaSalvar from "../components/ModalAgendarConsultaSalvar";
// import { AiFillPrinter } from "react-icons/ai";
import ButtonSalvar from "../components/ButtonSalvarAgendarConsulta";
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

const AgendarConsulta = () => {
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [sus, setSus] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const cpfParam = urlParams.get("cpf");
        const searchTerm = cpfParam;
  
        if (searchTerm) {
          const response = await tabelaPaciente(searchTerm, ["nome", "cpf"]);
          if (response.length > 0) {
            setSearchResults(response);
            setID(response[0].id)
            setNome(response[0].nome);
            setCPF(response[0].cpf);
            setSus(response[0].cartao_sus);
            setTelefone(response[0].telefone);
            setEmail(response[0].email);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa1">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <div className="div-text-exame">
              <h2 className="centralizando1">AGENDAR CONSULTA</h2>
            </div>
          </div>
        </div>
        <form className="form-agendar-consulta">
          <div className="agendar-consulta">
            <div>
              <p className="p-nome-agendar-consulta">Nome:</p>
              <input
                className="input-nome-agendar-consulta"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              ></input>
            </div>
            <div className="centralizar-agendar-consulta">
              <div>
                <p className="p-nome-agendar-consulta">CPF:</p>
                <input
                  className="input-cpf-agendar-consulta"
                  type="text" 
                  placeholder="___.___.___-__"
                  value={cpf}
                  onChange={(event) => setCPF(event.target.value)}
                ></input>
              </div>
              <div>
                <p className="p-nome-agendar-consulta">Cartão SUS:</p>
                <input
                  className="input-cpf-agendar-consulta"
                  type="text" 
                  placeholder="___ ____ ____ ____"
                  value={sus}
                  onChange={(event) => setSus(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="p-nome-agendar-consulta">
              <p>Email:</p>
              <input
                type={"email"}
                className="p-email-agendar-consulta"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div>
              <p className="p-nome-agendar-consulta">Telefone:</p>
              <input
                type={"text"}
                className="input-cpf-agendar-consulta"
                placeholder="&#40;__&#41; _____-____"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              ></input>
            </div>
            <div className="centralizar-agendar-consulta">
              <div>
                <p className="p-nome-agendar-consulta">Data:</p>
                <input type={"date"} className="data-agendar-consulta" ></input>
              </div>
              <div>
                <p className="p-nome-agendar-consulta">Horário:</p>
                <input type={"time"} className="horario-agendar-consulta"></input>
              </div>
            </div>
            <div>
              <p className="p-nome-agendar-consulta">Especialidade médica:</p>
              <DropDownAgendarConsulta />
            </div>
            <div>
              <p className="p-nome-agendar-consulta">Observações:</p>
              <textarea className="textarea-agendar-consulta" placeholder="Observações..."></textarea>
            </div>
          </div>
        </form>
        <div className="modal-print">
          <ButtonSalvar />
        </div>
      </div>
    </div>
  );
};

export default AgendarConsulta;