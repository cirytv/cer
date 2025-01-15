import { Box } from '@mui/material'
import Header from '../../components/Header'
import 'react-toastify/dist/ReactToastify.css'
import CongratCard from '../../components/Cards'
import { useAffiliates } from '../../hooks/useAffiliates'
import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Dashboard = () => {
  const { affiliates, getAffiliates } = useAffiliates()

  useEffect(() => {
    getAffiliates()
  }, [])

  // Configuración para el slider
  const settings = {
    dots: false, // Sin indicadores de puntos
    infinite: false, // No infinito para que no se repitan los elementos
    speed: 500, // Velocidad de transición
    slidesToShow: 3, // Muestra 3 tarjetas a la vez
    slidesToScroll: 1, // Mueve 1 tarjeta al hacer clic en las flechas
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    draggable: true, // Habilita el arrastrar con el mouse
  }

  // Componentes de flecha personalizados
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: 'black',
          color: 'white',
          borderRadius: '50%',
        }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: 'black',
          color: 'white',
          borderRadius: '50%',
        }}
        onClick={onClick}
      />
    )
  }

  return (
    <Box m="20px">
      <Header title="Dashboard" subtitle="Próximos eventos" />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="40px" // Espaciado entre los sliders
        textAlign="center"
      >
        {/* Cumples Empresarios */}
        <Box width="100%" maxWidth="1200px">
          <h2>Cumples Empresarios</h2>
          <Slider {...settings}>
            {affiliates &&
              affiliates.map((affiliate, index) => (
                <CongratCard
                  key={index}
                  cardType="owner"
                  affiliate={affiliate}
                />
              ))}
          </Slider>
        </Box>

        {/* Cumples Gerentes */}
        <Box width="100%" maxWidth="1200px">
          <h2>Cumples Gerentes</h2>
          <Slider {...settings}>
            {affiliates &&
              affiliates.map((affiliate, index) => (
                <CongratCard
                  key={index}
                  cardType="manager"
                  affiliate={affiliate}
                />
              ))}
          </Slider>
        </Box>

        {/* Afiliaciones próximas a vencer */}
        <Box width="100%" maxWidth="1200px">
          <h2>Afiliaciones próximas a vencer</h2>
          <Slider {...settings}>
            {affiliates &&
              affiliates.map((affiliate, index) => (
                <CongratCard
                  key={index}
                  cardType="renova"
                  affiliate={affiliate}
                />
              ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
