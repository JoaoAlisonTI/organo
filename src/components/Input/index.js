import "./Input.css"

export const Input = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  
  return (
    <div className="div-input">
      <label>{props.label}</label>
      <input 
        value={props.valor} 
        onChange={aoDigitado}
        required={props.obrigatorio} 
        placeholder={props.placeholder} 
      />
    </div>
  )
}