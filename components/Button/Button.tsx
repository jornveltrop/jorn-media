type ButtonProps = {
    onClick(): void;
    classes: string;
    children: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonProps> = ({children, classes}) => {
  return (
    <button className={classes}>{children}</button>
  )
}

export default Button