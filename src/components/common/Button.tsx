type ButtonTypePros = {
  title: string;
  className: string;
  icon?: React.ReactNode | React.ReactElement;
};

const Button = ({ title, className, icon }: ButtonTypePros) => {
  return (
    <button className={`${className}`}>
      {icon && icon} {title}
    </button>
  );
};

export default Button;
