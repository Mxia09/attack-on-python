import logo from './attack-on-python-logo.png'

<<<<<<< HEAD
=======
const playGame = () => {
  window.location.href = "play/"
}

>>>>>>> main
function Mainpage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Attack on Python</h1>
      <div>
        <img src={logo} alt="Logo" style={{ width: '250px', }}></img>
      </div>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Learn Python
        </p>
<<<<<<< HEAD
=======
        <button onClick={playGame} className="btn btn-primary">Play</button>
>>>>>>> main
      </div>
    </div>
  );
}

export default Mainpage;
