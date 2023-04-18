const Container = ({ children, className }) => {
  const classes = `flex justify-center items-center w-screen h-screen ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Container;
