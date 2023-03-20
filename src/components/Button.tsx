interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  onClick: () => void;
}

const Button = ({ children, color = 'secondary', onClick }: Props) => {
  return (
    <button type="button" id="myAlert" className={`btn btn-${color} me-2`} onClick={onClick}>{children}</button>
  )
}

export default Button;