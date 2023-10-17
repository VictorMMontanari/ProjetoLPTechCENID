import React from "react";
import "../styles/FormularioMedicina.css";
import Navbar from "../components/Navbar";
import { HiArrowNarrowLeft } from "react-icons/hi";
import DropDownModeloGlicometro from "../components/DropDownModeloGlicometro";
import DropDownTabelaSintomasMed from "../components/DropDownTabelaSintomasMed";
import DropDownTabelaImagensMedMasc from "../components/DropDownImagensMedMasc";
import DropDownTabelaImagensMedFem from "../components/DropDownImagensMedFem";
import DropDownListaNomesBasal from "../components/DropDownListaNomesBasal";
import DropDownListaNomesBolus from "../components/DropDownListaNomesBolus";
import CollapseProcessos from '../components/CollapseProcessos';
import ButtonSalvarMed from '../components/ButtonSalvarMed';
import { useState, useEffect } from "react";
import { useApi } from "../hooks/useApi";

const FormularioMedicina = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { tabelaPaciente } = useApi();
  const [id, setID] = useState('');
  const [nome, setNome] = useState(''); 
  const [cpf, setCPF] = useState('');
  const [data_nascimento, setNascimento] = useState('');
  const [selectsexo, setSelectsexo] = useState('');

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
            setNascimento(response[0].data_nascimento);
            setSelectsexo(response[0].sexo);
            setNome(response[0].nome);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  const calcularIdade = (dataNascimento) => {
    const dataNascimentoDate = new Date(dataNascimento);
    const hoje = new Date();
    const diferencaEmMilissegundos = hoje - dataNascimentoDate;
    const anos = diferencaEmMilissegundos / (365 * 24 * 60 * 60 * 1000);
    return Math.floor(anos);
  };

  const [peso,setPeso] = useState('');
  const [diagnostico,setDiagnostico] = useState('');
  const [outrasdm, setOutrasdm] = useState('');
  const [estatura, setEstatura] = useState('');
  const [datadiag, setDataDiag] = useState('');
  const [classtempdiag, setClasstempdiag] = useState('');
  const [metmoniglic, setMetmoniglic] = useState('');
  const [marcamodeloglic, setMarcamodeloglic] = useState('');
  const [estcontroleglic, setEstControleGlic] = useState('');
  const [metodoadminsulina, setMetodoAdmInsulina] = useState('');

  /* 1- Outras morbidades (doenças) */
  const [doenca1, setDoenca1] = useState("");
  const [medicamento1, setMedicamento1] = useState("");
  const [dose1,setDose1] = useState("");

  const [doenca2, setDoenca2] = useState("");
  const [medicamento2, setMedicamento2] = useState("");
  const [dose2,setDose2] = useState("");

  const [doenca3, setDoenca3] = useState("");
  const [medicamento3, setMedicamento3] = useState("");
  const [dose3,setDose3] = useState("");

  const [doenca4, setDoenca4] = useState("");
  const [medicamento4, setMedicamento4] = useState("");
  const [dose4,setDose4] = useState("");

  const [doenca5, setDoenca5] = useState("");
  const [medicamento5, setMedicamento5] = useState("");
  const [dose5,setDose5] = useState("");

  const [sintomas, setSintomas] = useState("");

  /* 3- Estágio maturacional: Escala de TANNER: */
  const [maturacional, setMaturacional] = useState("");

  /* 4- Estado glicêmico baseado na HbA1c: 
    Verificar com Eduardo como funciona.
  */

  /* 5- Administração de insulina atual: 
    Verificar com Eduardo como funciona.
  */
  const [basalnome, setBasalNome] = useState("");
  const [basalDose1, setBasalDose1] = useState("");
  const [basalDose2, setBasalDose2] = useState("");
  const [bolusnome, setBolusNome] = useState("");
  const [bolusDose1, setBolusDose1] = useState("");
  const [bolusDose2, setBolusDose2] = useState("");

  /* 6- Fator de sensibilidade a insulina (FS) para BOLUS de insulina: 
    Verificar com Eduardo
  */
  const [fsbolus, setFsBolus] = useState("");
  const [fhorafsbolus, setFHoraFsBolus] = useState("");

  /* 7- Razão de carboidrato insulina (rCHOi): 
    Verificar com Eduardo
  */
  const [Carbobolus, setCarboBolus] = useState("");
  const [fhoraCarbobolus, setFHoraCarboBolus] = useState("");

  /* PRESCRIÇÃO MÉDICA
 */

  /* 1- Terapêutica de insulina: 
    perguntar para o Eduardo
  */

  /* 2- Fator de sensibilidade a insulina (FS) para BOLUS de insulina baseado na prescição de insulina e ajustes por período: 
    perguntar para Eduardo
  */
  const [fsajustadohora, setfsajustadohora] = useState("");
  const [inicioFs, setInicioFs] = useState("");
  const [finalFs, setFinalFs] = useState("");

  /* 3- Razão de carboidrato insulina (rCHOi) para BOLUS de insulina baseado na prescrição de insulina e justes por período:
   */
  const [rchoiajustadohora, setrchoiajustadohora] = useState("");
  const [iniciorchoi, setIniciorchoi] = useState("");
  const [finalrchoi, setFinalrchoi] = useState("");
  /* 4- Outras prescrições médicas: */
  const [outprescr, setOutprescr] = useState("");
  
  return (
    <div className="home">
      <Navbar />
      <div className="headerContainer">
        <div className="faixaAzulCadastro">
          <div className="faixaAzul-certa">
            <a href={`/paciente?cpf=${searchResults[0]?.cpf}`}>
              <HiArrowNarrowLeft className="seta" />
            </a>
            <h1 className="centralizando">AVALIAÇÃO MEDICINA</h1>
            <div className="dtexame2NovoCadastro">
              <input type={"date"} name="dateMED" className="inputDataEd" />
            </div>
          </div>
        </div>
        <div className="form-dados-paciente-med">
          <div>
            <form className="infor-pessoal-paciente-med">
              <p className="p-nome-paciente-infos-med">NOME:</p>
              <input
                className="nome-saida"
                type={"text"}
                name="name-input-nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              ></input>
              <p className="p-idade-paciente-infos-med">IDADE:</p>
              <input
                className="idade-saida"
                type={"number"}
                name="name-input-idade"
                value={calcularIdade(data_nascimento)}
              ></input>
              <p className="p-peso-paciente-infos-med">PESO &#40;KG&#41;:</p>
              <input
                className="peso-saida"
                type={"number"}
                name="name-input-peso"
              ></input>
            </form>
            <form className="infor-pessoal-paciente-med">
              <p className="p-estatura-paciente-infos-med">
                ESTATURA &#40;METROS&#41;:
              </p>
              <input
                className="estatura-saida"
                type={"number"}
                name="name-input-estatura"
              ></input>
              <p className="p-estatura-paciente-infos-med">DIAGNÓSTICO:</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-DM1">DM1</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-DM2">DM2</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-DMG">DMG</p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-SEM-DIAG">
                Sem Diagnóstico
              </p>
              <input
                className="diagnostico-saida"
                type={"radio"}
                name="name-input-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-OUTRAS-FORMS">
                Outras formas de DM:
              </p>
              <input
                className="diagnostico-saida-input"
                type={"text"}
                name="name-input-diagnostico"
              ></input>
            </form>
            <form className="infor-pessoal-paciente-med">
              <p className="p-estatura-paciente-infos-med-date-med">
                DATA DO DIAGNÓSTICO:
              </p>
              <input
                className="date-diagnostico-saida-input"
                type={"date"}
                name="name-input-date-diagnostico"
              ></input>
              <p className="p-estatura-paciente-infos-med-date-tempo-med">
                TEMPO DE DIAGNÓSTICO EM MESES :
              </p>
              <input
                className="date-tempo-diagnostico-saida-input"
                type={"number"}
                name="name-input-date-tempo-diagnostico"
                title="Tempo baseado na data de diagnóstico e data da consulta!"
              ></input>
            </form>
            <div className="classificacao-diagnostico2">
              <div className="classificacao-diagnostico">
                <p>PREENCHIMENTO OBRIGATÓRIO</p>
              </div>
              <form className="infor-pessoal-paciente-med">
                <p className="p-estatura-paciente-infos-med-DM2-22">
                  CLASSIFICAÇÃO DO TEMPO DE DIAGNÓSTICO:
                </p>
                <input
                  className="diagnostico-saida"
                  type={"radio"}
                  name="name-input-classificacao"
                ></input>
                <p className="p-estatura-paciente-infos-med-DM1">
                  Recente até 100 dias
                </p>
                <input
                  className="diagnostico-saida"
                  type={"radio"}
                  name="name-input-classificacao"
                ></input>
                <p className="p-estatura-paciente-infos-med-DM2-2">
                  Lua de mel &#40;remissão&#41;
                </p>
                <input
                  className="diagnostico-saida"
                  type={"radio"}
                  name="name-input-classificacao"
                ></input>
                <p className="p-estatura-paciente-infos-med-DM2-2">
                  Esgotamento de reserva pancreática de insulina
                </p>
              </form>
            </div>
          </div>
          <form className="infor-pessoal-paciente-med">
            <p className="p-estatura-paciente-infos-med">
              MÉTODO DE MONITORAMENTO DE GLICEMIA:
            </p>
            <input
              className="metodo-monitoramento-glicemia1"
              type={"radio"}
              name="monitoramento-glicometro"
            ></input>
            <p className="p-medoto-monitoramento-glicosimetro">Glicosimetro</p>
            <input
              className="metodo-monitoramento-glicemia2"
              type={"radio"}
              name="monitoramento-glicometro"
            ></input>
            <p className="p-medoto-monitoramento-glicosimetro">
              Sensor Medtronic
            </p>
            <input
              className="metodo-monitoramento-glicemia3"
              type={"radio"}
              name="monitoramento-glicometro"
            ></input>
            <p className="p-medoto-monitoramento-glicosimetro">
              Freestyle Libre
            </p>
            <p className="p-medoto-monitoramento-glicosimetro-marca-modelo">
              Marca/modelo se glicômetro:
            </p>
            <DropDownModeloGlicometro />
          </form>
          <form className="infor-pessoal-paciente-med">
            <p className="p-estado-controle-glicemico">
              ESTADO DE CONTROLE GLICÊMICO:
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"text"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico">
              MÉTODO DE ADMINISTRAÇÃO DE INSULINA:
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"radio"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico2">
              Não faz uso de insulina
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"radio"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico2">
              Caneta/seringa &#40;MDI&#41;
            </p>
            <input
              className="input-estado-controle-glicemico"
              type={"radio"}
              name="estado-controle-glicemico"
            ></input>
            <p className="p-estado-controle-glicemico2">Bomba &#40;SICI&#41;</p>
          </form>
          <div className="preenchimento-med-1">
            <div className="preenchimento-med">
              <p className="p-preenchimento-med">PARA PREENCHIMENTO</p>
            </div>
            <p className="p-outras-morbidades">
              1- Outras morbidades &#40;doenças&#41;
            </p>
            <div className="outras-morbidades">
              <table className="table-outras-morbidades">
                <tr>
                  <th className="th-doenca">Doença</th>
                  <th className="th-doenca">Medicamento</th>
                  <th className="th-doenca">Dose</th>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                  <td>
                    <input type={"text"} className="Input-doenca"></input>
                  </td>
                </tr>
              </table>
            </div>
            <p
              className="p-outras-morbidades"
              title="Registro de queixas do paciente em relação ao estado de saúde e controle do diabetes."
            >
              2- Sintomas
            </p>
            <div className="textarea-sintomas">
              <textarea
                className="text-area-sintomas"
                placeholder="Registro de queixas do paciente em relação ao estado de saúde e controle do diabetes."
              ></textarea>
            </div>
            <div className="dropdown-med-tabela">
              {/* Verificar com o Eduardo a Tabela de Sintomas*/}
              <DropDownTabelaSintomasMed />
            </div>
            <p className="p-outras-morbidades">
              3- Estágio maturacional: Escala de TANNER:
            </p>
            <div className="estagio-maturacional">
              <div className="display-estagio-pubere">
                <input
                  className="input-estagio-maturacional"
                  type={"radio"}
                  name="name-estagio-maturacional"
                ></input>
                <p className="p-estagio-maturacional">Pré-púbere</p>
                <input
                  className="input-estagio-maturacional"
                  type={"radio"}
                  name="name-estagio-maturacional"
                ></input>
                <p className="p-estagio-maturacional">Púbere</p>
                <input
                  className="input-estagio-maturacional"
                  type={"radio"}
                  name="name-estagio-maturacional"
                ></input>
                <p className="p-estagio-maturacional">Pós-púrebe</p>
              </div>
            </div>
            <div className="centralizar-imagens">
              {/* Verificar com o Eduardo a Tabela */}
              <DropDownTabelaImagensMedMasc />
            </div>
            <div className="centralizar-imagens">
              {/* Verificar com o Eduardo a Tabela */}
              <DropDownTabelaImagensMedFem />
            </div>
            <p className="p-outras-morbidades">
              4- Estado glicêmico baseado na HbA1c:
            </p>
            {/* Registrar a data do exame nos campos de ficha de registro, trazer os dados dos exames mas também permitir o registro manual*/}
            <div>
              <div className="div-estado-glicemico">
                <table className="table-estado-glicemico">
                  <tr>
                    <th className="vazio"></th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                    <th className="th-date">Data</th>
                  </tr>
                  <tr>
                    <td className="ficha-registo">
                      Ficha de registro de exame laboratoriais
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="hba1c-css">HbA1c &#40;%&#41;</td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td className="classificacao-form-med">Classificação</td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                    <td>
                      <input
                        className="input-estado-glicemico"
                        type={"text"}
                        name="input-ficha-registro1"
                      ></input>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <p className="p-outras-morbidades">
              5- Administração de insulina atual:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-administracao-insulina">
                <tr>
                  <th className="tipo-admin-insulina">Tipo</th>
                  <th className="name-admin-insulina">Nome</th>
                  <th className="dose-admin-insulina">
                    Dose diária &#40;U/dia&#41;
                  </th>
                  <th className="dose-admin-insulina">
                    Dose diária &#40;U/kg/dia&#41;
                  </th>
                  <th className="porcentagem-admin-insulina">%</th>
                </tr>
                <tr>
                  <td className="basal-bolus">BASAL</td>
                  <td>
                    <DropDownListaNomesBasal />
                  </td>
                  <td>
                    <input
                      type={"text"}
                      className="input-dosediaria-u-dia"
                    ></input>
                  </td>
                  <td>
                    <input type={"text"} className="input-dosediaria-u-dia" />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="basal-bolus">BOLUS</td>
                  <td>
                    <DropDownListaNomesBolus />
                  </td>
                  <td>
                    <input type={"text"} className="input-dosediaria-u-dia" />
                  </td>
                  <td>
                    <input type={"text"} className="input-dosediaria-u-dia" />
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="total-admin-insulina" colSpan={"2"}>
                    Total
                  </td>
                  <td className="dose-admin-insulina2"></td>
                  <td className="dose-admin-insulina2"></td>
                  <td className="porcentagem-admin-insulina1"></td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              6- Fator de sensibilidade a insulina &#40;FS&#41; para BOLUS de
              insulina:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="th-FS">FS &#40;mg/dl/U&#41;</th>
                  <th className="th-FS" colSpan={"2"}>
                    Faixa de horário
                  </th>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* horário, se não completar 24hrs, deverá adicionar outra linha abaixo */}
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* FS médio */}
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  {/* Calculo de idade e total de insulina */}
                  <td></td>
                  {/* FS calculado pelo total de insulina */}
                  <td colSpan={"2"}>.</td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              7- Razão de carboidrato insulina &#40;rCHOi&#41;:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="th-FS">rCHOi &#40;gramas/U&#41;</th>
                  <th className="th-FS" colSpan={"2"}>
                    Faixa de horário
                  </th>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* horário, se não completar 24hrs, deverá adicionar outra linha abaixo */}
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                  <td className="td-input-time">
                    <input
                      type={"time"}
                      className="input-time-fs-bolus"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type={"number"} className="input-fs-bolus"></input>
                  </td>
                  {/* rCHOi médio */}
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  {/* Calculo de idade e total de insulina diária*/}
                  <td></td>
                  {/* rCHOi calculado pelo total de insulina (gramas/U)*/}
                  <td colSpan={"2"}>.</td>
                </tr>
              </table>
            </div>
            <div className="preenchimento-med-1">
              <div className="classificacao-diagnostico">
                <p>PRESCRIÇÃO MÉDICA</p>
                {/* Deverá ser impresso para o paciente */}
              </div>
              <div className="prescricao-medica">
                <p className="p-nome-prescricao-medica">Nome:</p>
                <p className="p-resultado-nome-prescricao-medica"></p>
                <p className="p-nome-prescricao-medica">Idade:</p>
                <p className="p-resultado-idade-prescricao-medica"></p>
                <p className="p-nome-prescricao-medica">Data da prescrição:</p>
                <input
                  type={"date"}
                  classNamedate-prescricao-medica
                  className="input-date-prescricao-medica"
                  title="Data da prescrição"
                ></input>
              </div>
              {/* Deverá apresentar resumos de diagnóticos e condutas clínicas de outras áreas e antopometria */}
            </div>
            <p className="p-outras-morbidades">1- Terapêutica de insulina:</p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th rowSpan={"3"} className="tipo-terapeutica-insulina">
                    Tipo
                  </th>
                  <th rowSpan={"3"} className="tipo-terapeutica-insulina">
                    Nome
                  </th>
                  <th
                    colSpan={"2"}
                    rowSpan={"2"}
                    className="prescricao-terapeutica-insulina"
                  >
                    Prescrição Médica
                  </th>
                  <th
                    colSpan={"4"}
                    className="recomendacoes-terapeutica-insulina2"
                  >
                    Recomendações diretrizes
                  </th>
                </tr>
                <tr>
                  <td className="recomendacoes-terapeutica-insulina">mínimo</td>
                  <td className="recomendacoes-terapeutica-insulina">máximo</td>
                  <td className="recomendacoes-terapeutica-insulina">mínimo</td>
                  <td className="recomendacoes-terapeutica-insulina">máximo</td>
                </tr>
                <tr>
                  <td className="u-dia-kg">U/dia</td>
                  <td className="u-dia-kg">U/kg/dia</td>
                  <td className="u-dia-kg">U/kg/dia</td>
                  <td className="u-dia-kg">U/kg/dia</td>
                  <td className="u-dia-kg">U/dia</td>
                  <td className="u-dia-kg">U/dia</td>
                </tr>
                <tr>
                  <td className="table-basal-bolus-insulina">Basal</td>
                  <td>lista</td>
                  {/* Contas */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="table-basal-bolus-insulina">Bolus</td>
                  <td>lista</td>
                  {/* Contas */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colSpan={"2"} className="total-terapeutica-insulina">
                    Total
                  </td>
                  {/* Contas */}
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              2- Fator de sensibilidade a insulina &#40;FS&#41; para BOLUS de
              insulina baseado na prescição de insulina e ajustes por período:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="fator-sensibilidade-fs">
                    FS &#40;mg/dL/U&#41;
                  </th>
                  <th colSpan={"2"} className="valor-estimado">
                    Valor estimado que 1 unidade de insulina &#40;U&#41; reduz
                    na glicemia em mg/dL
                  </th>
                </tr>
                <tr>
                  {/* Contas */}
                  <td>.</td>
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final">
                    FS &#40;mg/dL/U&#41; ajustado por horários
                  </td>
                  <td className="centralizar-fs-inicial-final">Inicial</td>
                  <td className="centralizar-fs-inicial-final">Final</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final2">
                    <input
                      type={"text"}
                      className="text-inserir-manualmente"
                    ></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              3- Razão de carboidrato insulina &#40;rCHOi&#41; para BOLUS de
              insulina baseado na prescrição de insulina e justes por período:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="fator-sensibilidade-fs">
                    rCHOi &#40;gramas/U&#41;
                  </th>
                  <th colSpan={"2"} className="valor-estimado">
                    Razão da quantidade de carboidrato &#40;CHO&#41; em gramas
                    coberto por 1 unidade de insulina &#40;U&#41;
                  </th>
                </tr>
                <tr>
                  {/* Contas */}
                  <td>.</td>
                  <td colSpan={"2"}>.</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final">
                    rCHOi &#40;gramas/U&#41; ajustado por horários
                  </td>
                  <td className="centralizar-fs-inicial-final">Inicial</td>
                  <td className="centralizar-fs-inicial-final">Final</td>
                </tr>
                <tr>
                  <td className="centralizar-fs-inicial-final2">
                    <input
                      type={"text"}
                      className="text-inserir-manualmente"
                    ></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                  <td className="centralizar-fs-inicial-final2">
                    <input type={"time"} className="time-inicial-final"></input>
                  </td>
                </tr>
              </table>
            </div>
            <p className="p-outras-morbidades">
              4- Outras prescrições médicas:
            </p>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus">
                <tr>
                  <th className="conduta-clinica">CONDUTA CLÍNICA</th>
                </tr>
                <tr>
                  <td className="conduta-clinica2">
                    Descrição de conduta clínica e cuidados necessários para o
                    tratamento do diabetes ou outras morbidades:
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      placeholder="descreva: "
                      className="textares-conduta-clinica"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <p className="p-collapse">PROCESSOS MÉDICOS</p>
            </div>
            <div className="collapse">
              <CollapseProcessos />
            </div>
            <div>
              <p></p>
            </div>
            <div className="div-estado-glicemico">
              <table className="table-fator-sensibilidade-para-bolus-2">
                <tr>
                  <th colSpan={"4"} className="table-responsavel-avaliacao">
                    Responsável pela avaliação &#40;estagiário&#41;
                  </th>
                </tr>
                <tr>
                  <td className="nome-completo-responsavel-avaliacao">
                    Nome Completo:
                  </td>
                  <td className="width-nome">
                    <p></p>
                  </td>
                  <td className="nome-completo-responsavel-avaliacao">
                    RA:<p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td className="nome-completo-responsavel-avaliacao">
                    Email:
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td className="nome-completo-responsavel-avaliacao">
                    Telefone:
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <th colSpan={"4"} className="table-responsavel-avaliacao">
                    Professor responsável
                  </th>
                </tr>
                <tr>
                  <td className="nome-completo-responsavel-avaliacao">
                    Nome Completo:
                  </td>
                  <td className="width-nome">
                    <p></p>
                  </td>
                  <td className="nome-completo-responsavel-avaliacao">
                    CRM:<p></p>
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td className="nome-completo-responsavel-avaliacao">
                    Email:
                  </td>
                  <td>
                    <p></p>
                  </td>
                  <td className="nome-completo-responsavel-avaliacao">
                    Telefone:
                  </td>
                  <td>
                    <p></p>
                  </td>
                </tr>
              </table>
            </div>
            <ButtonSalvarMed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioMedicina;