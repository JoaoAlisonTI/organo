import { Collaborator } from '../Collaborator'
import hexToRgba from 'hex-to-rgba';
import './Team.css'

export const Team = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 && <section 
        className='time' 
        style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') 
      }}>
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <input 
          type='color' 
          className='input-cor'
          value={time.cor} 
          onChange={evento => {
            mudarCor(evento.target.value, time.id);
              
          }}/>
          <div className='colaboradores'>
            {colaboradores.map((colaborador, indice) => 
            <Collaborator 
              key={indice} 
              colaborador={colaborador} 
              corDeFundo={time.cor} 
              aoDeletar={aoDeletar} 
              aoFavoritar={aoFavoritar}
            />)}
          </div>
      </section>
  )
}