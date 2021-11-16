import * as data from "../data";

function HomePage() {
  const addToCart = (p) => {
    console.log(p);
  };
  return (
    <main className="container">
      <section className="productList">
        {data.products.map((product) => {
          return (
            <div className="product" key={product.name}>
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="content">
                <p className="name">{product.name}</p>
                <p className="price">{product.price} $</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default HomePage;
