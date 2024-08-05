import Post from "../Post";

const Article = () => {
  return (
    <>
      <section className="container">
        <h3>Artigos</h3>
        <div className="container-posts mt-5">
          <Post categoria="tecnologia" titulo="O guia definitivo do Blog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget malesuada odio, a blandit nisl. In maximus rutrum tellus, sit
            amet elementum ante pretium id. Maecenas faucibus viverra tellus, et
            ultricies leo iaculis fringilla. In massa ligula, tincidunt quis
            lobortis vel, fermentum quis ante. Pellentesque erat ante,
            consectetur in augue eu, aliquam elementum ex. Cras lectus quam,
            sagittis et pretium tempor, rhoncus vel mauris. Aliquam ut justo
            arcu.
          </Post>
          <Post
            categoria="fotografia"
            titulo="Quais os melhores celulares em 2023?"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget malesuada odio, a blandit nisl. In maximus rutrum tellus, sit
            amet elementum ante pretium id. Maecenas faucibus viverra tellus, et
            ultricies leo iaculis fringilla. In massa ligula, tincidunt quis
            lobortis vel, fermentum quis ante. Pellentesque erat ante,
            consectetur in augue eu, aliquam elementum ex. Cras lectus quam,
            sagittis et pretium tempor, rhoncus vel mauris. Aliquam ut justo
            arcu.
          </Post>
          <Post
            categoria="cinema"
            titulo="Os 10 filmes com maior bilheteria de 2023"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eget malesuada odio, a blandit nisl. In maximus rutrum tellus, sit
            amet elementum ante pretium id. Maecenas faucibus viverra tellus, et
            ultricies leo iaculis fringilla. In massa ligula, tincidunt quis
            lobortis vel, fermentum quis ante. Pellentesque erat ante,
            consectetur in augue eu, aliquam elementum ex. Cras lectus quam,
            sagittis et pretium tempor, rhoncus vel mauris. Aliquam ut justo
            arcu.
          </Post>
        </div>
      </section>
    </>
  );
};

export default Article;
