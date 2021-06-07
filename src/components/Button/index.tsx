import './styles.css';


interface IButton {
  type: string,
}

const Button: React.FC<IButton> = (type, props) => {
  return ( 
    <button type={props.type} >{props.children}</button>      
  );
}

export default Button;