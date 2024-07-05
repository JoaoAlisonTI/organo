import './DropdownList.css'

export const DropdownList = ({ label, items, valor, aoAlterado, obrigatorio = false }) => {
  return (
    <div className="dropdown-div">
      <label>{label}</label>
      <select 
        required={obrigatorio}
        value={valor} 
        onChange={evento => aoAlterado(evento.target.value)}
      >
        <option>Selecione o time</option>
        {items.map(item => 
          <option 
            key={item}>{item}</option>)}
      </select>
    </div>
  )
}