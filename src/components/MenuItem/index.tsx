import { NavLink } from 'react-router-dom'

import './styles.css';

interface IMenuItem {
  to: string;
}


const MenuItem: React.FC<IMenuItem> = (props) => {
  return ( 
    <li>
      <NavLink className="link" to={props.to}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default MenuItem;