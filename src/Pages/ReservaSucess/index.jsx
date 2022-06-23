import './style.scss';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import imgAlert from '../../assets/atomocheck.png'

export default function ReservaSucess() {

const MySwal = withReactContent(Swal)

  return (
    <>
        {
        MySwal.fire({
        title: 'Sua reserva foi feita com sucesso!',
        imageUrl: imgAlert,
        imageWidth: 78,
        imageHeight: 74,
        imageAlt: 'Sucess',
        buttonWidth: 100,
        confirmButtonColor: "rgba(29, 190, 180, 1)",
        confirmButtonText:
        '<a href="/" classname="button-reserva-ok">Voltar para o início</a>',
    })
    }
    </>
    )
}