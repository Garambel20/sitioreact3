
import MenuNav from "./sitioweb/MenuNav";
import CardTarjeta from "./sitioweb/CardTarjeta";
import Aside from "./sitioweb/Aside";

function App() {
  return (
    <div className="container">
      <header className="row bg-secondary">
		   
       <img src="https://i.ibb.co/gmc5NQB/header.jpg" alt="header" border="0" />
	    </header>

    	<nav className="row bg-warning">
	    	<MenuNav />
	    </nav>

	    <section className="row bg-primary"> 
		    <article className="col-md-6 bg-warning"> 
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
				  <div class="carousel-item active">
					<img src="https://i.ibb.co/cw9ZWCX/galeria1.jpg" alt="galeria1" border="0" />
				  </div>
				  <div class="carousel-item">
					<img src="https://i.ibb.co/y50nSZg/galeria2.jpg" alt="galeria2" border="0" />
				  </div>
				  <div class="carousel-item">
				  <img src="https://i.ibb.co/bzsKQWr/galeria3.jpg" alt="galeria3" border="0" />
				  </div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Next</span>
				</button>
			  </div>
		    </article>
		
		    <article className="col-md-4 bg-secondary">
			   Aside
         <img src="https://i.ibb.co/k0NjnLv/colibri.jpg" alt="colibri" border="0" />
         <CardTarjeta />
	       <br/>
		    </article>

	    	<aside className="col-md-2 bg-primary">
        <Aside />			 
		    </aside>
         
	    </section>

    	<footer className="row bg-dark text-light">
		   footer
	    </footer> 
    </div>
  );
}

export default App;
