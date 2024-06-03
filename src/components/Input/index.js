import "./Input.css"

export const Input = (props) => {
  return (
    <div className="div-input">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  )
}