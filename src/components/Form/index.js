import { useState } from 'react'
import { Input } from '../Input'
import { DropdownList } from '../DropdownList'
import { Button } from '../Button'
import { v4 as uuidv4 } from 'uuid';
import "./Form.css";

export const Form = (props) => {
  
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')
  
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoCadastrar({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setNomeTime('')
    setCorTime('')
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
          items={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        
        <Button>
          Criar Card
        </Button>
      </form>
      <form onSubmit={(evento) => {
        evento.preventDefault()
        props.aoCriarTime({ nome: nomeTime, cor: corTime })
            }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Input
          obrigatorio={true}
          label='Nome'
          placeholder='Digite o nome do time'
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Input
          obrigatorio={true}
          label='Cor'
          type='color'
          placeholder='Digite sua cor'
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />
        <Button>Criar Time</Button>
      </form>
    </section>
  )
}