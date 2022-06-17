import React from 'react'
import Noticia from './Noticia'
import {Grid, Typography, Pagination, Stack} from '@mui/material'
import useNoticias from '../hooks/useNoticias'

const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 21)
  return (
   <>
        <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
        >
            Últimas noticias
        </Typography>
        <Grid 
        container
        spacing={2}
        >
                { noticias.map(noticia=>{
                    return (
                        <Noticia
                            key={noticia.url}
                            noticia={noticia}
                        />
                    )
                })}

        </Grid>
        <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        sx= {{
            margin: 5
        }}
        >
            <Pagination
            count={totalPaginas}
            color="primary"
            onChange={handleChangePagina}
            page={pagina}
            />
        </Stack>
   </>
  )
}

export default ListadoNoticias