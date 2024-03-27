import './home.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Home = () => {
  return (
    <div className='container'>
      <div className="text-container">
        <h1 className="primary-title">
          Portifólio em construção
        </h1>
      </div>
      <h2 className="secondary-title">
        Uma redefinição de design
      </h2>
      <p>Olá! Estou atualizando algumas coisas no meu portifólio e em breve a versão final estará no ar.</p>
      <div className="buttons-container">

        <div>
          <a className="button-link" href='https://www.linkedin.com/in/brunacborgesm/'>
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
        <div>
          <a className="button-link" href='https://github.com/brunacborgesm'>
            <GitHubIcon />
            GitHub
          </a>
        </div>
        <div>
          <a className="button-link" href='mailto:brunaborgesdev@gmail.com'>
            <EmailIcon />
            Gmail
          </a>
        </div>


      </div>
    </div>
  )
}
