import React from "react";
import "../styles/Paciente.css";
import { MdOutlineAttachment } from "react-icons/md";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import Navbar from '../components/Navbar';
import { HiCheckCircle } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import ModalEnfPaciente from "../components/ModalEnfPaciente";
import ModalNutriPaciente from "../components/ModalNutriPaciente";
import ModalEdFisicaPaciente from "../components/ModalEdFisicaPaciente";
import ModalPsicoPaciente from "../components/ModalPsicoPaciente";
import ModalMedicinaPaciente from "../components/ModalMedicinaPaciente";
import ModalExamesPaciente from "../components/ModalExamesPaciente";
import ModalAntropologiaPaciente from "../components/ModalAntropologiaPaciente";
import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import {formatarCPFp} from "../components/FormatarCampos"
import { Link } from "react-router-dom";
import { format } from 'date-fns';


const Paciente = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();

  const calculateAge = (birthday) => {
    const ageDifferenceMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifferenceMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cpfParam = urlParams.get("cpf");
    const searchTerm = cpfParam;
  
    const fetchData = async () => {
      try {
        const response = await tabelaPaciente(searchTerm, ['nome', 'cpf']);
        setSearchResults(response);
      } catch (error) {
        console.error(error);
      }
    };
  
    if (searchTerm) {
      fetchData();
    }
  }, [tabelaPaciente]);

  const api = useApi();

  const [data, setData] = useState([]);

  const handleAgendar = () => {
    api
      .agendamentos()
      .then((tabelaDataJson) => {
        setData(tabelaDataJson); // Atribua diretamente os dados ao estado 'data'
        console.log(tabelaDataJson); // Se você quiser ver os dados no console
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleAgendar();
  }, []);

   

  return (
    <div className='paciente'>
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzul">
          <a href="/home">
            <HiArrowNarrowLeft title="Voltar" className="seta" />
          </a>
          <div className="faixaAzul">
            <h1 className="h1BuscarPaciente1">PACIENTE</h1>
          </div>
          <Link to={`/editarcadastro?cpf=${searchResults[0]?.cpf}`}>
            <FaEye title="Editar Cadastro" className="eye" />
          </Link>
        </div>
        <div className="infos">
          <form className="infos">
            <label className="label-paciente">
              CPF:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-CPF-paciente">{formatarCPFp(result.cpf)}</p>))} 
            <label className="label-paciente">
              NOME:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-nome-paciente">{result.nome}</p>))}
            <label className="label-paciente">
              CARTÃO SUS:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-cartaoSUS-paciente">{result.cartao_sus}</p>))}
            <label className="label-paciente">
              IDADE:
            </label>
            {searchResults.map(result => (<p key={result.id} className="input-idade-paciente">{calculateAge(result.data_nascimento)}</p>))}
          </form>
          {/* <div className="cpf">
            <h4 className="infos2">CPF:</h4>
            <input className="input1" name="cpfPaciente"></input>
          </div>
          <div className="nomePaciente">
            <h4 className="infos2">Nome do Paciente:</h4>
            <input className="input2" name="nomePaciente"></input>
          </div>
          <div className="cartaoSUS">
            <h4 className="infos2">Cartão SUS:</h4>
            <input className="input1" name="cartaoSUS"></input>
          </div>
          <div className="dataNasc">
            <h4 className="infos2">Idade:</h4>
            <input className="input1" name="dataNascimentoPaciente"></input>
          </div> */}
        </div>
        <div className="dadosPaciente">
          <h2>RELATÓRIO DE CONSULTAS</h2>
        </div>
        <table className='tableProcessos'>
          <tr>
            <th className='tableTitle'>
              <ModalAntropologiaPaciente />
            </th>
           <th className='tableTitle'>
              <ModalEnfPaciente />
           </th>
            <th className='tableTitle'>
              <ModalNutriPaciente />
            </th>
            <th className='tableTitle'>
              <ModalEdFisicaPaciente />
            </th>
            <th className='tableTitle'>
              <ModalPsicoPaciente />
            </th>
            <th className='tableTitle'>
              <ModalMedicinaPaciente />
            </th>
            <th className='tableTitle'>
              <ModalExamesPaciente />
            </th>
          </tr>
          <tr>
            <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'antropometria' && (
                    <a href='/consulta' className='caminhoConsulta'>
                    {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                  </a>
                  )}
                </div>
              ))}
            </td>
         
              {Object.values(data).map((user) => (
                <tr>
                  <td className='' key={user.id}>
                    {user.especialidade_med === 'enfermagem' && (
                      <a href='/consulta' className='caminhoConsulta'>
                        {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                      </a>
                    )}
                  </td>
                </tr>
              ))}

            {/* <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'enfermagem' && (
                    <a href='/consulta' className='caminhoConsulta'>
                       {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                    </a>
                  )}
                </div>
              ))}
            </td> */}
            <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'nutricao' && (
                    <a href='/consulta' className='caminhoConsulta'>
                    {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
                  </a>
                  )}
                </div>
              ))}
            </td>
            <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'educacaoFisica' && (
                    <a href='/consulta' className='caminhoConsulta'>
          {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
        </a>
                  )}
                </div>
              ))}
            </td>
            <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'psicologia' && (
                    <a href='/consulta' className='caminhoConsulta'>
          {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
        </a>
                  )}
                </div>
              ))}
            </td>
            <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'medicina' && (
                    <a href='/consulta' className='caminhoConsulta'>
          {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
        </a>
                  )}
                </div>
              ))}
            </td>
            <td className='testeP'>
              {Object.values(data).map((user) => (
                <div key={user.id}>
                  {user.especialidade_med === 'nt' && (
                    <a href='/consulta' className='caminhoConsulta'>
          {format(new Date(user.data_agendamento), 'dd/MM/yyyy')}
        </a>
                  )}
                </div>
              ))}
            </td>
          </tr>
        </table>
      </div>
      <a href="/anexarexame">
        <MdOutlineAttachment title="Anexar Exame" className="iconAttach"/>
      </a>
    </div>
  )
}

export default Paciente