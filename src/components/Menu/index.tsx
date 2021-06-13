
import './styles.css';

interface IMenu {
  
}

const Menu: React.FC<IMenu> = (props) => {
  return ( 
    <nav>
      <ul>
        {props.children}
      </ul>   
      <hr />
    </nav>
  );
}

export default Menu;