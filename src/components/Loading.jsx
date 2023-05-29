import loading from "./loading.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" style={{width: "60px"}} />
    </div>
  );
};

export default Loading;
