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

import avatar from "assets/img/faces/marc.jpg";

class Login extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
              displayBT: "none",
              colores:[],
              loader:"none",
              pagina:1,
              rango:9,
              clave:"",
              dsdsdsds:""
          };
       
   
  }

  setField  =(e) =>  {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
   }




  render() {
     
    
    const prueba =() => {
      this.setState({
        loader:""
      })

    const controller = new AbortController();
    const { signal } = controller;
  
         //PARA SIMPLE
         let urlSimple = 'https://proyectosuraprueba1-env.eba-r3vyyh7y.us-east-1.elasticbeanstalk.com/usuarios';
         fetch(urlSimple, { signal })
             .then(response => response.json())
             .then(data => {
              let usuarios=data.usuarios;
              console.log(usuarios);
              let obj = usuarios.filter(response =>  response.usuario === this.state.usuario && response.contrasena === this.state.clave)

              console.log(obj.length);
            
              if (obj.length>0){

                localStorage.setItem('user', obj[0].perfil)
                window.location.href = "/admin/colors";


              }else{
                this.setState({
                  loader:"none",
                  mensaje:"Usuarios y clave incorrecto"
                })
              }

              
             })
  
               
  }  
    return (
      <React.Fragment>

<center>
        <div style={{ display: this.state.loader }} class="loader"  >Cargando...</div>
    </center>
   
  <div>
      <GridContainer  justify={"center"} >
        <GridItem  xs={7} sm={7} md={7}>
          <Card>
            <CardHeader color="primary">
              <h4 >Inicie Sesion</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
             
                <GridItem xs={12} sm={12} md={3}>
                <input
                  type='text'
                  name='usuario'
                  onChange={this.setField}
                />  
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <input
                  type='password'
                  name='clave'
                  onChange={this.setField}
                />  

                


                </GridItem>
              </GridContainer>
           </CardBody>
            <CardFooter>
              <Button color="primary" onClick={e => prueba()}  >Iniciar Sesion</Button>

              <h4 >{this.state.mensaje}</h4>
            </CardFooter>
          </Card>
        </GridItem>
   </GridContainer>
    </div>

     
     
    </React.Fragment>

    )
  }
}
export default Login;