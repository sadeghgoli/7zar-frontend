const Title = ({ type = "h2", children, classes = "" }) => {
  if (type === "h1") return <h1 className={classes}>{children}</h1>;
  return <h2 className={classes}>{children}</h2>;
};

export default Title;
