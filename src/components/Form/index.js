import { useState } from 'react'
import { Input } from '../Input';
import { DropdownList } from '../DropdownList'
import { Button } from '../Button'
import "./Form.css";

export const Form = (props) => {
  
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
  
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }
  
  
  return (
    <section className="section-form">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input 
          label="Nome" 
          obrigatorio={true}
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Input 
          label="Cargo" 
          obrigatorio={true}
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Input 
          label="Imagem" 
          obrigatorio={true}
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <DropdownList 
          obrigatorio={true} 
          label="Time" 
          itens={times} 
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}