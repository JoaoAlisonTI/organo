import { Input } from '../Input';
import { DropdownList } from '../DropdownList'
import { Button } from '../Button'
import "./Form.css";

export const Form = () => {
  
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const aoSalvar = (evento) =>
  {
    evento.preventDefault()
      console.log('Form foi submetido')
  }
  
  return (
    <section className="section-form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList required={true} label="Time" itens={times} />
        
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}