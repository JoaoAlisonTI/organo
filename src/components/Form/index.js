import { Input } from '../Input';
import "./Form.css";

export const Form = () => {
  return (
    <section className="section-form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  )
}