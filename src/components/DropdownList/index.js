import './DropdownList.css'

export const DropdownList = (props) => {
  return (
    <div className='dropdown-div'>
      <label>{props.label}</label>
      <select 
        onChange={evento => props.aoAlterado(evento.target.value)} 
        required={props.obrigatorio} 
        value={props.valor}
      >
        <option value="">Selecione o time</option>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
                })}
      </select>
    </div>
  )
}