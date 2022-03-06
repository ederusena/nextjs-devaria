export default function Pessoa(props) {
  return (
    <div className='pessoa'>
      <b>Nome: </b> {props.nome}
      <br />
      <b>Idade: </b> {props.idade}
      <br />
      {props.idade >= 18 ? <b>Maior de idade</b> : <b>Menor de idade</b>}
      <br />
      <br />
    </div>
  )
}