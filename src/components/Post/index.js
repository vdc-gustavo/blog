const Post = (props) => {
  return (
    <div className="post mx-2">
      <div className="img-post">
        <h5>{props.categoria}</h5>
        <h3 className="mb-2">{props.titulo}</h3>
        <p>
            {props.children}
        </p>
      </div>
      <div className="flex pt-2">
        <div className="img-profile"> </div>
        <div className="desc-profile ml-2">
          <h6 className="color-blue">guttta</h6>
          <p> 04/08/2024 - 8 min de leitura</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
