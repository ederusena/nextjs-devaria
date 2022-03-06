import Pessoa from '../components/Pessoa'
import { useState } from 'react'
import comAutorizacao from '../hoc/comAutorizacao'
 
function Home() {
  const [idade, setIdade] = useState(0)
  const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 25 },
    { nome: 'José', idade: 30 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Paulo', idade: 40 }
  ]

  const incrementarIdade = () => {
    setIdade(idade + 1)
  }

  return (
    <>
      <h1>{process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome="Eder Sena" idade={idade} />
      <br />

      {pessoas.map((pessoa, index) => {
        return <Pessoa key={index} nome={pessoa.nome} idade={pessoa.idade} />
      })}

      <button onClick={incrementarIdade}>Incrementar idade</button>
    </>
  )
}

export default comAutorizacao(Home);