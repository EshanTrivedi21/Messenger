const Box = ({ children, className }) => {
  const classes = `bg-[#efefef] ${className}}`;
  return <div className={classes}>{children}</div>;
};

export default Box;
