import { NavLink } from "react-router-dom";
import { US } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'


import { I18nextProvider, useTranslation } from 'react-i18next';
import {i18nfile} from "../../../i18n";
import { Button, Dropdown } from "react-bootstrap";

const SecHeader = ({Logo , dropdownItem , MenuInfo}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <I18nextProvider i18n={i18nfile}>
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="/"><span><img draggable="false" src={Logo} alt="logo" style={{height:'60px', width:'auto'}} /></span></a>
          {/* Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              
              {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))}

<li className="lh-55px">
                    <Dropdown  >
                    <Dropdown.Toggle id="dropdown-autoclose-true"  className="btn login-btn ml-20 w-35" >
                    {i18n.language==='en'?
                    (<div style={{ justifyContent:'center', display:'flex'}}>
                    <US title="United States" style={{width:'2rem', marginRight:'0.5rem'}}/>
                    EN
                    </div> )
                    :
                    (i18n.language==='sp'?
                    (<div style={{ justifyContent:'center', display:'flex'}}>
                    <ES title="España" style={{width:'2rem', marginRight:'0.5rem'}}/>
                    ES
                    </div> )
                    :
                    (<div style={{ justifyContent:'center', display:'flex'}}>
                      <BR title="Portugues" style={{width:'2rem', marginRight:'0.5rem'}}/>
                      PR
                      </div>))
                    }
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#" style={{color:'black', justifyContent:'center', display:'flex'}}
                        onClick={()=>{changeLanguage('en')}}>
                      <US title="United States" style={{width:'2rem', marginRight:'0.5rem'}}/>
                      English
                      </Dropdown.Item>
                      <Dropdown.Item href="#" style={{color:'black', justifyContent:'center', display:'flex'}}
                        onClick={()=>{changeLanguage('sp')}}>

                      <ES title="Spanish" style={{width:'2rem', marginRight:'0.5rem'}}/>
                      Español
                      </Dropdown.Item>
                      <Dropdown.Item href="#" style={{color:'black', justifyContent:'center', display:'flex'}}
                        onClick={()=>{changeLanguage('pr')}}>

                      <BR title="Spanish" style={{width:'2rem', marginRight:'0.5rem'}}/>
                      Portuguese
                      </Dropdown.Item>
                    </Dropdown.Menu>
                    
                    </Dropdown>
                  </li>
              <li className="lh-55px">
                <a  href="https://main.d3thd78bg7l3yq.amplifyapp.com/" target="_self" className="btn login-btn ml-50">
                  Launch DApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </I18nextProvider>
    );
}

export default SecHeader;