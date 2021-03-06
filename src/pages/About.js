import React ,{ Component} from 'react';

import Header from '../component/header';
import Footer from '../component/footer';
const dUrl = "http://43.228.87.87/tor/json.php";

class About extends Component{
    constructor(){
        super();
        this.state = {
            data : [],
        }
    }

    componentDidMount(){
        /*fetch('http://big-sh-korat.com/api/shop')
        .then((Response) => Response.json())
        .then((res) => {
            console.log(res.user)
            this.setState({
                data : res.user
            })
        })
        */
       fetch('http://localhost:8080/people')
        .then((Response) => Response.json())
        .then((res) => {
            console.log(res)
            this.setState({
                data : res
            })
        })
    }
    renderUser(){
        /*return  this.state.data.map( user =>
            <tr>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            </tr>
        )*/
        return  this.state.data.map( user =>
            <tr>
            <td>{user.id}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
           
            </tr>
        )
    }
    

    render(){
        return(
            
            <div>
                <Header />
                    <div class="container">
                    <table class="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            { this.renderUser()}
                            </tbody>
                        </table>
                    </div>
                <Footer />
            </div>
        );
    }
}
export default About;