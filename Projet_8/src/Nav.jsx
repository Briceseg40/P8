import logo from "../img/LOGO.jpg";
const naviguations = [
    'Accueil',
    'A Propos'
]

function Nav() {
    return <div>
    <img src={logo}></img>
    <div>
        <ul>
            {naviguations.map(naviguation => (<li key={naviguation}>{naviguation}</li>))}
        </ul>
    </div>

    </div>

    
  }
  
  export default Nav
  