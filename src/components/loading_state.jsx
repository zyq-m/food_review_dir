const Loading_state = ({ children, loading_state }) => {
  if (loading_state) {
    return (
      <div
        className="grid place-content-center"
        style={{ minHeight: "calc(100vh - 178px - 66px)" }}
      >
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return children;
};

export default Loading_state;
