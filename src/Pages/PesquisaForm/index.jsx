import "./style.scss";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import img from '../../assets/atomocheck.png'

import { Formik, Field, Form } from "formik";

const MySwal = withReactContent(Swal)

let alertConfig = () => {
    MySwal.fire({
        title: 'Sua reserva foi feita com sucesso!',
        imageUrl: img,
        imageWidth: 78,
        imageHeight: 74,
        imageAlt: 'Sucess',
        confirmButtonColor: "rgba(29, 190, 180, 1)",
      })
}

export default function PesquisaForm() {
  return (  
    <>
    <div className="container_form_cadastro">
      <h1 className="h1_cadastro">Faça sua reserva</h1>
        <h2> Aqui terá o card referente a pesquisa</h2>
        <img src="" alt="" />
      <Formik
        initialValues={{
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
        }}
      >
        <Form className="form_cadastro_itens">
          <div className="inputs_do_cadastro">
            <label htmlFor="checkin" className="label_do_cadastro">
              Início
            </label>
            <Field
             type="date"
              className="input_do_cadastro"
              id="checkin"
              name="checkin"
            />

            <label htmlFor="check-in" className="label_do_cadastro">
              Término
            </label>
            <Field
            type="date"
              className="input_do_cadastro"
              id="checkout"
              name="checkout"
            />
            
        
            <button type="submit" className="button_reserva"
            onClick={alertConfig}>
              Reservar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  </>
  )
}

