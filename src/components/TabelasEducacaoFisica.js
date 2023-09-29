import React, { useState, useEffect } from "react";
import "../styles/TabelasResponsivas.css";
import ClassificacaoFlexibilidade from "../calculos/ClassificacaoFlexibilidade";
import ClassificacaoForcaTronco from "../calculos/ClassificacaoForcaTronco";
import SaltoHorizontal from "../calculos/SaltoHorizontal";
class TabelasEducacaoFisica extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
            input3: 0,
            input4: 0,
            input5: 0,
            input6: 0,
            input2a: 0,
            input2a2: 0,
            input2b: 0,
            input2b2: 0,
            input2c: 0,
            input2c2: 0,
            input3a: 0,
            input3a2: 0,
            input3b: 0,
            input3b2: 0,
            input4a: 0,
            input4a2: 0,
            input4b: 0,
            input4b2: 0,
            input4c: 0,
            input4c2: 0,
            input5a: 0,
            input5a2: 0,
            input5b: 0,
            input5b2: 0,
            input5c: 0,
            input5c2: 0,
            total: 0,
            total2: 0,

            totalGeral: 0
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        }, () => this.setTotal());

    }

    setTotal = () => {
        // INPUT SEÇÃO 1
        const { input1, input2 } = this.state;
        const { input3, input4 } = this.state;
        const { input5, input6 } = this.state;

        // INPUT SEÇÃO 2
        const { input2a, input2a2 } = this.state;
        const { input2b, input2b2 } = this.state;
        const { input2c, input2c2 } = this.state;

        // INPUT SEÇÃO 3
        const { input3a, input3a2 } = this.state;
        const { input3b, input3b2 } = this.state;

        // INPUT SEÇÃO 4
        const { input4a, input4a2 } = this.state;
        const { input4b, input4b2 } = this.state;
        const { input4c, input4c2 } = this.state;

        // INPUT SEÇÃO 5
        const { input5a, input5a2 } = this.state;
        const { input5b, input5b2 } = this.state;
        const { input5c, input5c2 } = this.state;


        // SEÇÃO 1 - ATIVIDADE FÍSICA NO TRABALHO
        const total = parseInt(input1) * parseInt(input2);
        const total2 = parseInt(input3) * parseInt(input4);
        const total3 = parseInt(input5) * parseInt(input6);
        const totalGeral = parseInt(total) + parseInt(total2) + parseInt(total3);

        this.setState({
            total: total
        });

        this.setState({
            total2: total2
        });

        this.setState({
            total3: total3
        });

        this.setState({
            totalGeral: totalGeral
        });


        // SEÇÃO 2 - ATIVIDADE FÍSICA COMO MEIO DE TRANSPORTE
        const somaSecao2 = parseInt(input2a) * parseInt(input2a2);
        const somaSecao2a = parseInt(input2b) * parseInt(input2b2);
        const somaSecao2b = parseInt(input2c) * parseInt(input2c2);
        const somaSecao2Geral = parseInt(somaSecao2) + parseInt(somaSecao2a) + parseInt(somaSecao2b);

        this.setState({
            somaSecao2: somaSecao2
        });

        this.setState({
            somaSecao2a: somaSecao2a
        });

        this.setState({
            somaSecao2b: somaSecao2b
        });

        this.setState({
            somaSecao2Geral: somaSecao2Geral
        });

        // SEÇÃO 3 - ATIVIDADE FÍSICA EM CASA
        const somaSecao3 = parseInt(input3a) * parseInt(input3a2);
        const somaSecao3a = parseInt(input3b) * parseInt(input3b2);
        const somaSecao3Geral = parseInt(somaSecao3) + parseInt(somaSecao3a);

        this.setState({
            somaSecao3: somaSecao3
        });

        this.setState({
            somaSecao3a: somaSecao3a
        });

        this.setState({
            somaSecao3Geral: somaSecao3Geral
        });

        // SEÇÃO 4 - ATIVIDADES FÍSICAS DE RECREAÇÃO, ESPORTE, EXERCÍCIO E DE LAZER
        const somaSecao4 = parseInt(input4a) * parseInt(input4a2);
        const somaSecao4a = parseInt(input4b) * parseInt(input4b2);
        const somaSecao4b = parseInt(input4c) * parseInt(input4c2);
        const somaSecao4Geral = parseInt(somaSecao4) + parseInt(somaSecao4a) + parseInt(somaSecao4b);

        this.setState({
            somaSecao4: somaSecao4
        });

        this.setState({
            somaSecao4a: somaSecao4a
        });

        this.setState({
            somaSecao4b: somaSecao4b
        });

        this.setState({
            somaSecao4Geral: somaSecao4Geral
        });

        // SEÇÃO 5 - TEMPO GASTO SENTADO E SONO
        const somaSecao5 = (parseInt(input5a) * 5) + (parseInt(input5a2) * 2);
        const somaSecao5a = (parseInt(input5b) * 5) + (parseInt(input5b2) * 2);
        const somaSecao5b = (parseInt(input5c) * 5) + (parseInt(input5c2) * 2);
        const somaSecao5Geral = parseInt(somaSecao5) + parseInt(somaSecao5b);

        this.setState({
            somaSecao5: somaSecao5
        });

        this.setState({
            somaSecao5a: somaSecao5a
        });

        this.setState({
            somaSecao5b: somaSecao5b
        });

        this.setState({
            somaSecao5Geral: somaSecao5Geral
        });

        // CÁLCULO NAF
        // const sexo = '';
        // const idade = '';
        // const resultadoNAF = 'SEDENTÁRIO';


        //     // const [sexo, setSexo] = useState('');
        //     // const [idade, setIdade] = useState('');
        //     // const [resultadoNAF, setResultadoNAF] = useState('');

        //     useEffect(() => {
        //         if (sexo === 'feminino') {
        //             if (idade >= 3 && idade <= 18 && input4 == 0 && input6 == 0 && input3a2 == 0 && input3b2 == 0 && input4b2 == 0 && input4c2 == 0) {
        //                 resultadoNAF('INATIVO (SEDENTÁRIO)');
        //             }
        //         }

        //     }, [sexo, idade, resultadoNAF]);
        //     this.setSexo({
        //         sexo: sexo
        //     });

        //     this.setIdade({
        //         idade: idade
        //     });
        //     this.setResultadoNAF({
        //         resultadoNAF: resultadoNAF
        //     });
    }


    render() {
        
        return (
            <div id="formulario-de-ed-fisica">
                <div className="form-edfisica-secao-1">
                    <h2 className="h2-percep-qualid-vida">SEÇÃO 1- ATIVIDADE FÍSICA NO TRABALHO E/OU ESTUDOS &#40;ESCOLA&#41;</h2>
                    <hr className="hr-divisao"></hr>
                    <h2 className="paragrafoFormsEd">
                        Esta seção inclui as atividades que você faz no seu serviço ou acadêmicas, que incluem trabalho
                        remunerado ou voluntário, as atividades na escola ou faculdade e outro tipo de trabalho não remunerado fora da sua casa.
                        NÃO incluir trabalho não remunerado que você faz na sua casa como tarefas domésticas, cuidar do jardim e da casa ou tomar
                        conta da sua família. Estas serão incluídas na seção 3.
                    </h2>
                </div>
                <table id='edFisica'>
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao">QUESTÃO</th>
                            <th scope="col" className="colunas-cabecalho-resposta">RESPOSTA</th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">1a. Atualmente você trabalha, estuda ou faz trabalho voluntário fora de sua casa? Caso você responda não vá para seção 2: Transporte.</th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-ed">
                                    <div>
                                        <input type="radio" name="devweb" id="sim" value="sim" />
                                        <label for="sim" className="sim">Sim</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="devweb" id="nao" value="nao" />
                                        <label for="nao" className="nao">Não</label>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <h2 className="paragrafos-de-dentro">
                            As próximas questões são em relação a toda a atividade física
                            que você fez na ultima semana como parte do seu trabalho remunerado
                            ou não remunerado e ou atividades acadêmicas. NÃO inclua o transporte
                            para o trabalho. Pense unicamente nas atividades que você faz por pelo
                            menos 10 minutos contínuos:
                        </h2>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1b. Em quantos dias de uma semana normal você anda,
                                durante pelo menos 10 minutos contínuos, como parte do seu
                                trabalho ou atividade acadêmicas? Por favor, NÃO inclua o andar
                                como forma de transporte para ir ou voltar do trabalho.
                                &#40;Se nenhum, vá para a seção 2&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1c. Quanto tempo no total você usualmente gasta POR DIA
                                caminhando por pelo menos 10 minutos contínuos como parte
                                do seu trabalho ou atividades acadêmicas?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1d. Em quantos dias de uma semana normal você faz atividades moderadas,
                                por pelo menos 10 minutos contínuos, como carregar pesos leves como
                                parte do seu trabalho ou atividades acadêmicas?
                                &#40;Se nenhum, vá para questão 1f&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1e. Quanto tempo no total você usualmente gasta POR DIA
                                caminhando por pelo menos 10 minutos contínuos como parte
                                do seu trabalho ou atividades acadêmicas?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1f. Em quantos dias de uma semana normal você realiza atividades vigorosas,
                                por pelo menos 10 minutos contínuos, como trabalho de construção pesada,
                                carregar grandes pesos, trabalhar com enxada, escavar ou subir escadas como
                                parte do seu trabalho:
                                &#40;Se nenhum, vá para questão 2a&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">1g. Quanto tempo no total você usualmente gasta POR DIA caminhando por pelo menos 10 minutos contínuos como parte do seu trabalho ou atividades acadêmicas?</th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {/* TABELA SEÇÃO 2 */}

                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">SEÇÃO 2 - ATIVIDADE FÍSICA COMO MEIO DE TRANSPORTE</h2>
                    <hr className="hr-divisao"></hr>
                    <h2 className="paragrafoFormsEd">
                        Estas questões se referem à forma típica como você
                        se desloca de um lugar para outro, incluindo seu trabalho,
                        escola, cinema, lojas e outros.
                    </h2>
                </div>
                <table className="edFisica13">
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao">QUESTÃO</th>
                            <th scope="col" className="colunas-cabecalho-resposta">RESPOSTA</th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2a. Quantos dias da semana você anda de carro,
                                motocicleta, ônibus, metrô, trem ou outra forma
                                de transporte que não inclua caminhar, correr ou
                                pedalar?
                                &#40;Se nenhum, vá para questão 2c&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-ed">
                                    <div>
                                        <input type="radio" name="devweb" id="sim" value="sim" />
                                        <label for="sim" className="sim">Sim</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="devweb" id="nao" value="nao" />
                                        <label for="nao" className="nao">Não</label>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2b. Quanto tempo no total você usualmente gasta POR DIA andando de carro,
                                motocicleta, ônibus, metrô, trem ou outra forma de transporte que não
                                inclua caminhar, correr ou pedalar?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <h2 className="paragrafos-de-dentro">
                            Agora pense somente em relação a caminhar ou pedalar para ir de um lugar a outro na ultima semana.
                        </h2>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2c. Em quantos dias da ultima semana você andou de
                                bicicleta por pelo menos 10 minutos contínuos para ir
                                de um lugar para outro? &#40;NÃO inclua o pedalar por lazer ou exercício&#41;
                                &#40;Se nenhum, vá para a questão 2c&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2d. Nos dias que você pedala quanto tempo no total
                                você costuma pedalar POR DIA para ir de um lugar para outro?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2e. Em quantos dias da ultima semana você caminhou por pelo
                                menos 10 minutos contínuos para ir de um lugar para outro?
                                &#40;NÃO inclua as caminhadas por lazer ou exercício&#41;                                 &#40;Se nenhum, vá para a questão 2c&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2f. Quando você caminha para ir de um lugar para outro quanto tempo POR DIA você costuma gastar?
                                &#40;NÃO inclua as caminhadas por lazer ou exercício&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {/* TABELA SEÇÃO 3 */}

                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">SEÇÃO 3 &#45; ATIVIDADE FÍSICA EM CASA: TRABALHO, TAREFAS DOMÉSTICAS E CUIDAR DA FAMÍLIA.</h2>
                    <hr className="hr-divisao"></hr>
                    <h2 className="paragrafoFormsEd">
                        Esta parte inclui as atividades físicas que você fez na ultima
                        semana na sua casa e ao redor da sua casa, por exemplo, trabalho em casa,
                        cuidar do jardim, cuidar do quintal, trabalho de manutenção da casa ou para
                        cuidar da sua família. Novamente pense somente naquelas atividades físicas
                        que você faz por pelo menos 10 minutos contínuos.
                    </h2>
                </div>
                <table className="edFisica13">
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao">QUESTÃO</th>
                            <th scope="col" className="colunas-cabecalho-resposta">RESPOSTA</th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3a. Em quantos dias da ultima semana você fez atividades
                                moderadas por pelo menos 10 minutos como carregar pesos leves,
                                limpar vidros, varrer, rastelar no jardim ou quintal.
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3b. Nos dias que você faz este tipo de atividades quanto tempo
                                no total você costuma gastar POR DIA fazendo essas atividades
                                moderadas no jardim ou no quintal?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3c. Em quantos dias da ultima semana você fez atividades moderadas por
                                pelo menos 10 minutos como carregar pesos leves, limpar vidros, varrer
                                ou limpar o chão dentro da sua casa.
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3d. Nos dias que você faz este tipo de atividades moderadas
                                dentro da sua casa quanto tempo no total você costuma gastar POR DIA?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3e. Em quantos dias da ultima semana você fez atividades
                                físicas vigorosas no jardim ou quintal por pelo menos
                                10 minutos como carpir, lavar o quintal, esfregar o chão:                                &#40;Se nenhum, vá para a questão 2c&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3f. Nos dias que você faz este tipo de atividades vigorosas
                                no quintal ou jardim quanto tempo no total você costuma
                                gastar POR DIA?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {/* TABELA SEÇÃO 4 */}

                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">SEÇÃO 4- ATIVIDADES FÍSICAS DE RECREAÇÃO, ESPORTE, EXERCÍCIO E DE LAZER</h2>
                    <hr className="hr-divisao"></hr>
                    <h2 className="paragrafoFormsEd">
                        Esta seção se refere às atividades físicas que você fez
                        na ultima semana unicamente por recreação, esporte, exercício
                        físico ou lazer. Novamente pense somente nas atividades físicas
                        que faz por pelo menos 10 minutos contínuos. Por favor, NÃO inclua
                        atividades que você já tenha citado.
                    </h2>
                </div>
                <table className="edFisica13">
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao">QUESTÃO</th>
                            <th scope="col" className="colunas-cabecalho-resposta">RESPOSTA</th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4a. Sem contar qualquer caminhada que você tenha citado anteriormente,
                                em quantos dias da ultima semana você caminhou por pelo menos 10 minutos
                                contínuos no seu tempo livre como forma de lazer ou exercício físico?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4b. Nos dias em que você caminha no seu tempo livre,
                                quanto tempo no total você costuma gastar POR DIA?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4c. Em quantos dias da ultima semana você fez atividades
                                moderadas no seu tempo livre por pelo menos 10 minutos,
                                como pedalar ou nadar a velocidade regular, jogar bola, vôlei,
                                basquete, tênis ou outro esporte:
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4d. Nos dias em que você faz estas atividades moderadas
                                no seu tempo livre quanto tempo no total você costuma
                                gastar POR DIA?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4e. Em quantos dias da ultima semana você fez atividades vigorosas
                                no seu tempo livre por pelo menos 10 minutos, como correr, fazer aeróbicos,
                                nadar rápido, pedalar rápido, treinamento de força ou fazer Jogging ou corrida:                                &#40;Se nenhum, vá para a questão 2c&#41;
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1b">
                                    <input type={"number"} className="input-questao1b" name="input-questao1" min='1' max={"7"} />
                                    <div className="input-check">
                                        <input type={"checkbox"} className="inputcheckcentertable" />
                                        <p className="paragrafoed">nenhum</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4f. Nos dias em que você faz estas atividades vigorosas
                                no seu tempo livre quanto tempo no total você costuma gastar POR DIA?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {/* TABELA SEÇÃO 5 */}

                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">SEÇÃO 5 - TEMPO GASTO SENTADO E SONO</h2>
                    <hr className="hr-divisao"></hr>
                    <h2 className="paragrafoFormsEd">
                        Estas últimas questões são sobre o tempo que você permanece sentado todo dia,
                        no trabalho, na escola ou faculdade, em casa e durante seu tempo livre.
                        Isto inclui o tempo sentado estudando, sentado enquanto descansa,
                        fazendo lição de casa visitando um amigo, lendo, sentado ou deitado
                        assistindo TV, fazendo uso do computador ou celular. Não inclua o tempo
                        gasto sentando durante o transporte em ônibus, trem, metrô ou carro.
                    </h2>
                </div>
                <table className="edFisica13">
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao">QUESTÃO</th>
                            <th scope="col" className="colunas-cabecalho-resposta">RESPOSTA</th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5a. Quanto tempo em média você gasta sentado durante um dia de semana &#40;segunda a sexta-feira&#41;?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5b. Quanto tempo no total você gasta sentado durante em um dia de final de semana &#40;sábado e domingo&#41;?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5c. Do tempo que você fica sentado durantes a semana, quanto tempo em média você gasta no computador, celular ou televisão &#40;segunda a sexta-feira&#41;?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5d. Do tempo que você fica sentado durantes o final de semana, quanto tempo em média você gasta no computador, celular ou televisão &#40;sábado e domingo&#41;?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5e. Quanto tempo em média você gasta dormindo durante um dia de semana &#40;segunda a sexta-feira&#41;?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5f. Quanto tempo em média você gasta dormindo durante um dia de final de semana &#40;segunda a sexta-feira&#41;?
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste1c">
                                    <input type={"time"} className="input-questao1c" name="input-questao4" />
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {/* RESUMO */}

                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">RESUMO - ATIVIDADE FÍSICA</h2>
                </div>
                <table className="edFisica13">
                    {/* SEÇÃO 1 */}

                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao-resumo">SEÇÃO 1- ATIVIDADE FÍSICA NO TRABALHO E/OU ESTUDOS &#40;ESCOLA&#41;.</th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>DIAS</strong>
                            </th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>MIN/SEMANA</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1A - Caminhada no trabalho
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input1" type="number" value={this.state.input1} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2" type="number" value={this.state.input2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1B - Atividade moderada no trabalho
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input3" type="number" value={this.state.input3} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4" type="number" value={this.state.input4} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                1C - Atividade vigorosa no trabalho
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5" type="number" value={this.state.input5} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input6" type="number" value={this.state.input6} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                TOTAL
                            </th>
                            <th className="colunas-corpo-resposta-total-direita">
                            </th>
                            <h3 className="colunas-corpo-resposta-total">{this.state.totalGeral}</h3>
                        </tr>
                    </tbody>
                    {/* SEÇÃO 2 */}
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao-resumo">SEÇÃO 2 - ATIVIDADE FÍSICA COMO MEIO DE TRANSPORTE</th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>DIAS</strong>
                            </th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>MIN/SEMANA</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2A - Transporte sentado ou em pé
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2a" type="number" value={this.state.input2a} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2a2" type="number" value={this.state.input2a2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2B - Bicicleta
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2b" type="number" value={this.state.input2b} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2b2" type="number" value={this.state.input2b2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                2C - Caminhada
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2c" type="number" value={this.state.input2c} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input2c2" type="number" value={this.state.input2c2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                TOTAL DE BICICLETA + CAMINHADA
                            </th>
                            <th className="colunas-corpo-resposta-total-direita">
                            </th>
                            <h3 className="colunas-corpo-resposta-total">{this.state.somaSecao2Geral}</h3>
                        </tr>
                    </tbody>
                    {/* SEÇÃO 3 */}
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao-resumo">SEÇÃO 3 &#45; ATIVIDADE FÍSICA EM CASA</th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>DIAS</strong>
                            </th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>MIN/SEMANA</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3A - Atividades moderadas no jardim ou dentro de casa
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input3a" type="number" value={this.state.input3a} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input3a2" type="number" value={this.state.input3a2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                3B - Atividades vigorosa no jardim
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input3b" type="number" value={this.state.input3b} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input3b2" type="number" value={this.state.input3b2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                TOTAL
                            </th>
                            <th className="colunas-corpo-resposta-total-direita">
                            </th>
                            <h3 className="colunas-corpo-resposta-total">{this.state.somaSecao3Geral}</h3>
                        </tr>
                    </tbody>
                    {/* SEÇÃO 4 */}
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao-resumo">SEÇÃO 4- ATIVIDADES FÍSICAS DE RECREAÇÃO, ESPORTE, EXERCÍCIO E DE LAZER</th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>DIAS</strong>
                            </th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>MIN/SEMANA</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4A - Caminhada com exercício leve
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4a" type="number" value={this.state.input4a} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4a2" type="number" value={this.state.input4a2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4B - Exercício físico de intensidade moderada
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4b" type="number" value={this.state.input4b} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4b2" type="number" value={this.state.input4b2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                4C - Exercício físico de intensidade vigorosa
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4c" type="number" value={this.state.input4c} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input4c2" type="number" value={this.state.input4c2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                TOTAL
                            </th>
                            <th className="colunas-corpo-resposta-total-direita">
                            </th>
                            <h3 className="colunas-corpo-resposta-total">{this.state.somaSecao4Geral}</h3>
                        </tr>
                    </tbody>
                    {/* SEÇÃO 5 */}
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-cabecalho-questao-resumo">SEÇÃO 5 - TEMPO GASTO SENTADO E SONO</th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>SEMANA</strong>
                            </th>
                            <th scope="col" className="colunas-cabecalho-resposta">
                                <strong>FINAL DE SEMANA</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5A - Tempo sentado
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5a" type="number" value={this.state.input5a} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5a2" type="number" value={this.state.input5a2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5B - Tempo sentado de tela
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5b" type="number" value={this.state.input5b} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5b2" type="number" value={this.state.input5b2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                5C - Tempo de sono
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5c" type="number" value={this.state.input5c} onChange={this.handleInputChange} />
                            </th>
                            <th className="colunas-corpo-resposta-th">
                                <input className="colunas-corpo-resposta-th-input" name="input5c2" type="number" value={this.state.input5c2} onChange={this.handleInputChange} />
                            </th>
                        </tr>
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                TOTAL DE TEMPO SEDENTÁRIOS 5A + 5C
                            </th>
                            <th className="colunas-corpo-resposta-total-direita">
                            </th>
                            <h3 className="colunas-corpo-resposta-total">{this.state.somaSecao5Geral}</h3>
                        </tr>
                    </tbody>
                </table>

                {/* CLASSIFICAÇÃO DO NÍVEL DE ATIVIDADE FÍSICA */}
                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">CLASSIFICAÇÃO DO NÍVEL DE ATIVIDADE FÍSICA</h2>
                </div>
                <table className="edFisica13">
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-corpo-paragrafo">Nível de atividade física &#40;classificação&#41;:</th>
                            <th className="colunas-corpo-resposta">
                                {/* AQUI TEM CÁCULO */}
                                <p className="input-questao-resumo"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                NAF &#40;escore&#41;:
                            </th>
                            <th className="colunas-corpo-resposta">
                                {/* AQUI TEM CÁCULO */}
                                <p className="input-questao-resumo">resultado</p>
                            </th>
                        </tr>
                    </tbody>
                </table>
                {/* CÁLCULO NAF */}
                <label>
                        Sexo:
                        <input
                            type="text"
                            value={this.state.sexo}
                        />
                    </label>
                    <label>
                        Idade:
                        <input
                            type="text"
                            value={this.state.sexo} 
                            onChange={this.handleInputChange}
                        />
                    </label>
                {/* AQUI TEM CÁLCULO */}
                {/* AVALIAÇÃO DO CONDICIONAMENTO FÍSICO */}
                <div className="form-edfisica13">
                    <h2 className="h2-percep-qualid-vida">AVALIAÇÃO DO CONDICIONAMENTO FÍSICO</h2>
                    <hr className="hr-divisao"></hr>
                    <h2 className="paragrafoFormsEd">
                        Quando paciente for de primeira consulta não realizar os testes físicos na
                        primeira consulta. Agendar avaliações para o retorno e orientar sobre os procedimentos
                        que serão realizados, alimentação e vestimentas.
                    </h2>
                </div>
                <table className="edFisica13">
                    <thead classname="thead-ed">
                        <tr>
                            <th scope="col" className="colunas-corpo-paragrafo">Força do membro superior :</th>
                            <th className="colunas-corpo-resposta">
                                {/* AQUI TEM CÁCULO */}
                                <p className="input-questao-resumo"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody classname="tbody-ed">
                        <tr>
                            <th className="colunas-corpo-paragrafo">
                                Mão dominante &#40;o teste de força de preensão é aplicado para todas as idades&#41; :
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-ed">
                                    <div>
                                        <input type="radio" name="devweb" id="sim" value="direita" />
                                        <label for="direita" className="sim">Direita</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="devweb" id="nao" value="esquerda" />
                                        <label for="esquerda" className="nao">Esquerda</label>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>

                {/* MÃO */}
                <div className="form-edfisica-condicionamento">
                    <h2 className="paragrafoFormsEd">
                        PROTOCOLO: posição em pé, braço estendido, três tentativas cada
                        mão, intervalo mínimo de 15 segundos entre cada tentativa
                        e registrar o maior valor
                    </h2>
                </div>
                <div className="formulario-razao-de-cho-nutricao">
                    <table className="table-protocolo">
                        <tr>
                            <th>Mão</th>
                            <th>KG</th>
                            <th>Mão	Kg	Percentil &#40;valor aproximado do percentil de acordo com as tabelas de referência para sexo e idade&#41;</th>
                            <th className="classificacao">Classificação</th>
                        </tr>
                        <tr>
                            <td className="coluna-mao">Dominante</td>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    <input type={"number"} className="input-questao-condicionamento" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    <input type={"number"} className="input-questao-condicionamento-centro" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao">Não dominante</td>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    <input type={"number"} className="input-questao-condicionamento" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    <input type={"number"} className="input-questao-condicionamento-centro" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao">Total</td>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    <input type={"number"} className="input-questao-condicionamento" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    <input type={"number"} className="input-questao-condicionamento-centro" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-condicionamento">
                                    {/* CÁLCULO/BAIXO, NORMAL OU ELEVADO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                    </table>

                    {/* FLEXIBILIDADE */}
                    <div className="form-edfisica-condicionamento">
                        <h2 className="h2-percep-qualid-vida">FLEXIBILIDADE - TESTE DE SENTAR E ALCANÇAR: APLICA-SE À TODAS AS IDADES</h2>
                        <hr className="hr-divisao"></hr>
                        <h2 className="paragrafoFormsEd">
                            Protocolo: sentado no chão posiciona os calcanhares nas extremidades da fita horizontal de 30 cm, colocar uma mão sobre a outra, manter as pernas estendidas sem flexionar os joelhos, realizar três tentativas e registrar o maior valor.
                        </h2>
                    </div>
                    {/* Tirar daqui esse forms e colocar ele como componente */}
                    <div className="formulario-razao-de-cho-nutricao">
                        <ClassificacaoFlexibilidade />

                    </div>

                    {/* FORÇA DO TRONCO */}
                    <div className="form-edfisica-condicionamento">
                        <h2 className="h2-percep-qualid-vida">FORÇA DO TRONCO - TESTE DE ABDOMINAL</h2>
                        <hr className="hr-divisao"></hr>
                        <h2 className="paragrafoFormsEd">
                            Protocolo: posiciona-se em decúbito dorsal com os joelhos flexionados
                            a 90 graus e com os braços cruzados sobre o tórax. O avaliador fixa os
                            pés do estudante ao solo. Ao sinal o aluno inicia os movimentos de
                            flexão do tronco até tocar com os cotovelos nas coxas, retornando
                            a posição inicial &#40;não é necessário tocar com a cabeça no
                            colchonete a cada execução&#41;. O avaliador realiza a contagem
                            em voz alta. O aluno deverá realizar o maior número de repetições
                            completas em 1 minuto.
                        </h2>
                    </div>
                    <ClassificacaoForcaTronco />
                    {/* SALTO HORIZONTAL */}
                    <div className="form-edfisica-condicionamento">
                        <h2 className="h2-percep-qualid-vida">SALTO HORIZONTAL</h2>
                        <hr className="hr-divisao"></hr>
                        <h2 className="paragrafoFormsEd">
                            Protocolo: trena é fixada ao solo, perpendicularmente à linha,
                            ficando o ponto zero sobre a mesma. O aluno coloca-se imediatamente
                            atrás da linha, com os pés paralelos, ligeiramente afastados,
                            joelhos semi-flexionados, tronco ligeiramente projetado à frente.
                            Ao sinal o aluno deverá saltar a maior distância possível.
                            Serão realizadas duas tentativas, registrando-se o melhor resultado.
                        </h2>
                    </div>
                    <SaltoHorizontal />

                    {/* RESISTÊNCIA AERÓBIA */}
                    <div className="form-edfisica-condicionamento">
                        <h2 className="h2-percep-qualid-vida">RESISTÊNCIA AERÓBIA- ESTIMATIVA DO CONSUMO MÁXIMO DE OXIGÊNIO &#40;VO2max&#41;</h2>
                        <hr className="hr-divisao"></hr>
                        <h2 className="paragrafoFormsEd">
                            Teste de 1000 metros: recomendado para idade de 8 a 13 anos. O teste pode ser realizado em campo ou esteira &#40;adaptado&#41;. O protocolo consiste em percorrer a distância de 1000 metros no menor tempo possível. O VO2max é expresso em ml/kg/min e estimado pela equação:
                            Klissouras, V. &#40;1973&#41;. "Prediction of potential performance with special reference to heredity." J Sports Med Phys Fitness 13&#40;2&#41;: 100-7.
                            Teste de 1600 metros: pode ser  utilizado para adolescentes e adultos &#40;8 a 25 anos&#41;, porém de acordo com a faixa etária a estimativa do VO2max é realizada por equações diferentes. O teste pode ser realizado em campo ou esteira &#40;adaptado&#41;. O protocolo consiste em percorrer a distância de 1600 metros no menor tempo possível.
                            Teste máximo cicloergômetro ACSM &#40;1980&#41;: inicio com carga zero &#40;kpm&#41; em velocidade de 60 rotações por minuto &#40;rpm&#41;, estágio de 2 minutos com incremento de 1 kpm ou 25 a 50 watts.
                            No cicloergômetro eletromagnético com graduação da carga em kpm e que não fornece dados em rotações por minuto ou em watts o controle da carga e cadência pode ser realizado pela velocidade. Neste tipo de cicloergômetro cada rotação do pedal equivale a distância de 6 metros. Assim 60 rpm representam a distância de 360 metro/minutos ou aproximadamente 22 km/h. Deste modo, para o teste o avaliado deverá manter a velocidade de entre 22 km/h.

                        </h2>
                    </div>
                    <table className="table-protocolo">
                        <tr>
                            <th>Ergômetro</th>
                            <th>Protocolo</th>
                            <th>Faixa etária</th>
                            <th className="equacoes-resistencia">Equações para estimativa o VO2max</th>
                        </tr>
                        <tr>
                            <td className="coluna-mao">Esteira ou campo</td>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resistencia">
                                    <input type={"number"} className="input-questao-resistencia" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resistencia">
                                    <input type={"number"} className="input-questao-resistencia-centro" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resistencia">
                                    {/* CÁLCULO */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td className="coluna-mao">Bicicleta</td>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resistencia">
                                    <input type={"number"} className="input-questao-resistencia" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resistencia">
                                    <input type={"number"} className="input-questao-resistencia-centro" name="input-questao1" />
                                </div>
                            </th>
                            <th className="colunas-corpo-resposta">
                                <div className="inp-teste-resistencia">
                                    {/* CÁLCULO/ */}
                                    <p></p>
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default TabelasEducacaoFisica;