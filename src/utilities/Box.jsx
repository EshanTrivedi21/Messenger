const Box = ({ children, className, nobg }) => {
  const classes = `${className} ${ nobg ? '' : 'bg-[#efefef]'}`;
  return <div className={classes}>{children}</div>;
};

export default Box;
