const Mobile = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card bg-base-100 shadow-xl p-3 m-1 static">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              alt="Burger"
            />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Comming Soon...</h2>
          <p>Thank you for waiting, I will upload very soon...</p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-primary"
              onClick={() => alert("Comming Soon")}
              target="_blank"
            >
              Please visit <i className="fa-solid fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
