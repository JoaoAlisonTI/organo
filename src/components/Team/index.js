import { Collaborator } from '../Collaborator'
import './Team.css'

export const Team = (props) => {
  const css = { backgroundColor: props.corSecundaria }

  return (
    (props.colaboradores.length > 0) && 
      <section className='time' style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>
        {props.nome}
        </h3>
        <div className='colaboradores'>
        {props.colaboradores.map(colaborador => 
          <Collaborator 
            key={colaborador.nome}
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem}
            corPrimaria={props.corPrimaria}
            aoDeletar={props.aoDeletar}
          /> 
        )}
        </div>
      </section>
    )
}