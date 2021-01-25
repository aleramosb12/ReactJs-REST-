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

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);



class Usuarios extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
              displayBT: "none",
              colores:[],
              loader:"",
              pagina:1,
              rango:9,
              clave:"",
              dsdsdsds:""
          };
       
   
  }

 

     async prueba () {


    

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
           contrasena: document.getElementById("contrasena").value,
           idPerfil: document.getElementById("idPerfil").value,
           usuario: document.getElementById("usuario").value,
          

      })
    };
      const response =  await fetch('https://proyectosuraprueba1-env.eba-r3vyyh7y.us-east-1.elasticbeanstalk.com/usuarios',requestOptions);
      const json =  await response.json().then(data => {
        if (data.codigo===0){
          window.location.href = "/admin/colors";
          
        }else{
          alert("En el campo fecha debe registrar numeros")
        }
        
      });


               
  }  

  render() {
     
    
  
    return (
      <React.Fragment>


  
<GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 >Registrar Color</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>

    
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="usuario"
                    id="usuario"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="contrasena"
                    id="contrasena"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Perfil"
                    id="idPerfil"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <h4 >Colocar los valor 1 o 2 en el perfil (1 -> Administrador, 2-> Usuarios)</h4>

             
             
             </GridContainer>
         </CardBody>
            <CardFooter>
              <Button color="primary" onClick={() => this.prueba()}  >Guardar</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody >
       
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

     
     
    </React.Fragment>

    )
  }
}
export default Usuarios;
