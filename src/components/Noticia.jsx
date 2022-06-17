import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
    Grid
} from '@mui/material'

const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia

    return (
       <Grid item md={6} lg={4}>
        <Card sx={{
                height: "100%",
                position: "relative"
                }}>
            {urlToImage &&
            <CardMedia
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={"250px"}
            />
        }
        <CardContent>
        <Typography variant="body1" color="error">
                    {source.name}
            </Typography>
            <Typography variant="h5" component="div">
                    {title}
            </Typography>
            <Typography 
            sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "16px",
                maxHeight: "48px",
                marginBottom: "20px"
                }}
             variant="body2">
                    {description}
            </Typography>
        </CardContent>
        <CardActions
        sx={{
            position:"absolute",
            bottom:"0px",
            left:"10px",
        }}
        >
           <Link
           href={url}
           target="_blank"
           variant="button"
           color="primary"
           width={"100%"}
         
           >
             Leer Noticia
           </Link>
        </CardActions>
        </Card>
       </Grid>
    )
}

export default Noticia