//import { Carousel } from "react-bootstrap";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
//import { ImgCarousel } from "./style";
import "bootstrap/dist/css/bootstrap.min.css";
//import styles from "../styles/Bootstrap.module.css";
import { useState } from "react";
import { CarouselLayout } from "./style";


const items = [
    { key : "1",
     header : "Duro de Matar",
    altText: "youtube",
    caption: "",
     src :"https://wallpaperset.com/w/full/b/0/c/233506.jpg",
      },
    {"id": 2,
    "title": "Mad Max",
    "link": "youtube",
    src: "https://wallpaperaccess.com/full/1887178.jpg",
  
  },

    {"id": 3,
    "title": "Missão Impossível",
    "link": "youtube",
    src : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/152FAE531A58623CAF9130CC66478E6EF99E95A7EC5E8143B24406459EA4F0E6/scale?width=1200&aspectRatio=1.78&format=jpeg",
    },
    {"id": 4,
    "title": "Fast e Furious",
    "link": "youtube",
    src: "https://www.ultimaficha.com.br/wp-content/uploads/2020/08/fast-furious.jpg",},
]






export const CarouselMovies = () =>{


   
  
            return(
               <CarouselLayout>
                <Row className="row row-cols-2">
                   
                <Col md="8" className="container-fluid" >
                  <UncontrolledCarousel items={items} />
                </Col>
              </Row>
              </CarouselLayout>
            )
}