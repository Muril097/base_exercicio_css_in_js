<<<<<<< HEAD
import { Vaga, VagaTitulo, VagaLink } from './style'
=======
import styles from './Vaga.module.css'
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

<<<<<<< HEAD
const Cargo = (props: Props) => (
  <Vaga>
    <VagaTitulo>{props.titulo}</VagaTitulo>
=======
const Vaga = (props: Props) => (
  <li className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
<<<<<<< HEAD
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </Vaga>
)

export default Cargo
=======
    <a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a>
  </li>
)

export default Vaga
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
