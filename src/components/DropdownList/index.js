import './DropdownList.css'

export const DropdownList = (props) => {
  return (
    <div className='dropdown-div'>
      <label>{props.label}</label>
      <select required={props.required}>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
                })}
      </select>
    </div>
  )
}