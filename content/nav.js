const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  
  // kalau misal bersarangg
  function HomePage (){
    return (
      <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Play the game</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="setting.html">Setting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How To Play</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
  }
  
  
  root.render(<HomePage />);
