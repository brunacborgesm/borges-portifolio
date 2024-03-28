import './error.scss'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Error = () => {
    return (
        <div className='error-container'>
            <div className="error-texts">
                <h1>Error 404</h1>
                <h2>Página não encontrada!</h2>
                <p>Clique no botão abaixo para voltar para a página inicial</p>
                <div className='button-container'>
                    <a className="button-error" href='/'>
                        <ChevronLeftIcon />
                        Página Inicial
                    </a>
                </div>
            </div>
        </div>
    )
}
