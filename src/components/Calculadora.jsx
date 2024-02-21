import { useState } from "react"

const Calculadora = () => {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState() 
    const [imc, setImc] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    function calculaImc() {
        setImc(peso / (altura * altura));
        setMostrarResultado(true);
    }
    return (
        <div className="container">
            <div className="imagem">
                <img src="/img.jpg" alt="imagem relacionada a saude#" />
            </div>
            <div className="calculadora">
                <h1>Calculadora de IMC</h1>
                    <label htmlFor="peso">Digite seu peso:</label>
                    <input type="number" value={peso} onChange={e => setPeso(e.target.value)} placeholder="Kg" />
                    <label htmlFor="altura">Digite sua altura:</label>
                    <input type="number" value={altura} onChange={e => setAltura(e.target.value)} placeholder="M" />
                    <div className="underline"></div>
                
                <button onClick={calculaImc}>Calcular</button>
            
            {mostrarResultado && (
                <div>
                    <h2>Seu IMC é de: {imc.toFixed(1)} </h2>
                    { imc < 18.5 && <p> <span>Você está abaixo peso: </span> É recomendado procurar um médico para avaliação criteriosa do resultado. Pode indicar um estado de consumo do organismo, com poucas reservas e riscos associados.</p>  }
                    {imc >= 18.5 && imc <= 24.9 && <p> <span>Você está com o peso adequado: </span> Tudo indica que está tudo bem, mas é importante avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado.</p>}
                    {imc >= 25 && imc <= 29.9 && <p><span> Você está com sobrepeso: </span>O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então, atenção! Consulte um médico e reveja hábitos para reverter o quadro. </p>}
                    {imc >= 30 && imc <= 34.9 && <p><span>Você está com obesidade grau I:</span> É importante buscar orientação médica e nutricional para entender melhor o seu caso, mesmo que os exames estejam normais.</p>}
                    {imc >= 35 && imc <= 39.9 && <p><span> Você está com obesidade grau II: </span>Indica um quadro de obesidade mais evoluído em relação à classificação anterior e, mesmo com exames laboratoriais dentro da normalidade, não se deve atrasar a busca por orientação médica e nutricional.</p>}
                    {imc >= 40 && <p> <span>Você está com obesidade grau III: </span>Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.</p>}
                </div>
            )}
            </div>
            
        </div>
    )
}

export default Calculadora