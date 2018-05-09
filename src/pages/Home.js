import React ,{ Component} from 'react';

import Header from '../component/header';
import Footer from '../component/footer';

class Home extends Component{

    constructor(){
        super();
        this.name = "Home";
    }
    render(){
        return(
            <div>
                <Header />
                    <div class="container">
                        <div class="row my-4">
                            <div class="col-lg-8">
                                <img class="img-fluid rounded" src="http://placehold.it/900x400" alt="" />
                            </div>
                            <div class="col-lg-4">
                                <h1>{this.name}</h1>
                                <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                                <a class="btn btn-primary btn-lg" href="#">Call to Action!</a>
                            </div>
                            <div class="card text-white bg-secondary my-4 text-center">
                                <div class="card-body">
                                <p class="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
                                </div>
                            </div>
                            <div class="row">
                             <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                    <h2 class="card-title">Card One</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                                    </div>
                                    <div class="card-footer">
                                    <a href="#" class="btn btn-primary">More Info</a>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                    <h2 class="card-title">Card Two</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                                    </div>
                                    <div class="card-footer">
                                    <a href="#" class="btn btn-primary">More Info</a>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                <div class="card h-100">
                                    <div class="card-body">
                                    <h2 class="card-title">Card Three</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                                    </div>
                                    <div class="card-footer">
                                    <a href="#" class="btn btn-primary">More Info</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}
export default Home;