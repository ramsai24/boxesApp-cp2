const Box = (props) => {
  //  Write your code here.
  const { className, content } = props;
  return <div className={className}>{className}</div>;
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1>Boxes</h1>
    <div className="bg-container">
      <Box className="Small" />
      <Box className="Medium" />
      <Box className="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
