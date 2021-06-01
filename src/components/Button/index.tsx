import './styles.css';


interface IButton {
  
}

const Button: React.FC<IButton> = (props) => {
  return ( 
    <button>{props.children}</button>      
  );
}

export default Button;