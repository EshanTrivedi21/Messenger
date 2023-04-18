const Box = ({ children, className }) => {
  const classes = `${className} bg-[#efefef]`;
  return <div className={classes}>{children}</div>;
};

export default Box;
