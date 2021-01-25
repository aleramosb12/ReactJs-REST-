import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Pagination from "react-js-pagination";


import avatar from "assets/img/faces/marc.jpg";



  



class Colors extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                displayBT: "none",
                colores:[],
                loader:"",
                pagina:1,
                rango:9
            };
            this.colores(1,9).then(data =>{
                this.grid = data.colores.map(data => 
                    <GridItem xs={12} sm={12} md={4}>
                        <Card style={{ backgroundColor: data.color}}>
                        <CardHeader>
        
                        </CardHeader>
                        <CardBody>
                        <div style={{"text-align": "left"}} >{data.year}</div>
        
                        <div style={{"text-align": "center"}} >{data.name}</div>
                        <div style={{"text-align": "center"}} >{data.color}</div>
        
                        <div style={{"text-align": "right"}} >{data.pantone}</div>
                        </CardBody>
                        <CardFooter>
                        <Button color="danger" onClick={() => this.eliminar(data.id)}  >eliminar</Button>
                        <Button color="success" onClick={() => this.modificar(data.id)}  >modificar</Button>

                        </CardFooter>
                        </Card>
                    </GridItem>
                )
                localStorage.setItem('idColor', -1)

                this.setState({
                    displayBT:"",
                    loader:"none",
                })
            });
     
    }

    async eliminar (id ) {


    

        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'}
      };
        const response =  await fetch('https://proyectosuraprueba1-env.eba-r3vyyh7y.us-east-1.elasticbeanstalk.com/colores/'+id,requestOptions);
        const json =  await response.json().then(data => {
            window.location.href = "/admin/modificarcolor";
            
            this.setState({
                displayBT:"",
                loader:"none",
            })
          
        });
  
  
                 
    }  

    async modificar (id ) {
        localStorage.setItem('idColor', id)
        window.location.href = "/admin/crearcolor";
  
  
                 
    }  

    fnPaginacion(tipo){

        if(tipo===1 ){
            if(this.state.registros===8){
                let pagina=this.state.pagina;
                let registros=0;
                this.colores(pagina*this.state.rango+1,(pagina+1)*this.state.rango).then(data =>{
                    this.grid = data.colores.map(data => 
                        <GridItem xs={12} sm={12} md={4}>
                            <Card style={{ backgroundColor: data.color}}>
                            <CardHeader>
            
                            </CardHeader>
                            <CardBody>
                            <div style={{"text-align": "left"}} >{data.year}</div>
            
                            <div style={{"text-align": "center"}} >{data.name}</div>
                            <div style={{"text-align": "center"}} >{data.color}</div>
            
                            <div style={{"text-align": "right"}} >{data.pantone}</div>
                            </CardBody>
                            <CardFooter>
                            <Button color="danger" onClick={() => this.eliminar(data.id)}  >eliminar</Button>
                            <Button color="success" onClick={() => this.modificar(data.id)}  >modificar</Button>
                            </CardFooter>
                            </Card>
                        </GridItem>
                    )
                    this.setState({
                        displayBT:"",
                        loader:"none",
                        pagina:pagina+1
                    })
                    
                })
            }
         

        }else{
            if(this.state.pagina!==1){
                
                let pagina=this.state.pagina;
                console.log("pagina",pagina-2*this.state.rango+1);
                this.colores((pagina-2)*this.state.rango+1,(pagina-1)*this.state.rango).then(data =>{
                    this.grid = data.colores.map(data => 
                        <GridItem xs={12} sm={12} md={4}>
                            <Card style={{ backgroundColor: data.color}}>
                            <CardHeader>
            
                            </CardHeader>
                            <CardBody>
                            <div style={{"text-align": "left"}} >{data.year}</div>
            
                            <div style={{"text-align": "center"}} >{data.name}</div>
                            <div style={{"text-align": "center"}} >{data.color}</div>
            
                            <div style={{"text-align": "right"}} >{data.pantone}</div>
                            </CardBody>
                            <CardFooter>
                            <Button color="danger" onClick={() => this.eliminar(data.id)}  >eliminar</Button>
                            <Button color="success" onClick={() => this.modificar(data.id)}  >modificar</Button>
                            </CardFooter>
                            </Card>
                        </GridItem>
                    )
                    this.setState({
                        displayBT:"",
                        loader:"none",
                        pagina:pagina-1
                    })
                });
      
            }
            
        }


    }

    async colores(ini,fin) {


        const response = await fetch('https://proyectosuraprueba1-env.eba-r3vyyh7y.us-east-1.elasticbeanstalk.com/colores?fin='+ fin +'&ini='+ini);
        const json = await response.json();
        let registros = 0
        json.colores.map((index,i) => {
            registros=i
        })

        this.setState({
            registros:registros
        })
        return json;
     
      }

      
 

 
    render() {
       
      return (
        <React.Fragment>

        <center>
        <div style={{ display: this.state.loader }} class="loader"  >dsdsdsdsdsds</div>
    </center>
     
        <div style={{ display: this.state.displayBT }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 >Lista de Colores </h4>
              </CardHeader>
                <CardBody>
                <GridContainer  >        
                    {this.grid}
                </GridContainer>
                <div style={{  border: "1px", solid :"#CCC",
                                "background-color": "#E0E0E0",
                                "padding": ".5em",
                                overflow: "hidden"}}>
                    <span onClick={() => this.fnPaginacion(0)} style={{float:"left"}}> Anterior</span>
                    <span  onClick={() => this.fnPaginacion(1)} style={{float:"right"}}>Siguiente </span>
                </div>
                </CardBody>
              <CardFooter>

            

              </CardFooter>
            </Card>
            
          </GridItem>
          
       </GridContainer>

       
       
      </div>
      </React.Fragment>

      )
    }
  }
  export default Colors;