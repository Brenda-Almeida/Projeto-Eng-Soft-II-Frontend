import './styles.css';


interface ICadastrar {
  
}

const Button: React.FC<ICadastrar> = (props) => {
  return ( 
    <button type="submit">{props.children}</button>      
  );
}

export default Button;