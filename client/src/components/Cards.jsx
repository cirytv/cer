import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  useTheme,
  IconButton,
} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PersonIcon from '@mui/icons-material/Person'
import CloseIcon from '@mui/icons-material/Close'
import { tokens } from '../theme'

export default function CongratCard(props) {
  const { affiliate } = props
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const handleCheckClick = () => {
    console.log('check click: ', affiliate)
  }

  return (
    <Card
      sx={{
        textAlign: 'center',
        maxWidth: 343,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? colors.primary[400]
            : colors.primary[400],
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative', // Necesario para posicionar el botón de check
      }}
    >
      <IconButton
        onClick={handleCheckClick}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          padding: 0,
          color: colors.redAccent[theme.palette.mode === 'dark' ? 500 : 700],
          '&:hover': {
            backgroundColor:
              colors.grey[theme.palette.mode === 'dark' ? 300 : 400],
          },
        }}
        aria-label="Check"
      >
        <CloseIcon sx={{ fontSize: 30 }} />
      </IconButton>

      <CardContent
        sx={{
          paddingTop: 1,
          paddingBottom: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: colors.grey[theme.palette.mode === 'dark' ? 100 : 200],
          }}
        >
          🎊 Felicita a {affiliate.businessName} 🎊
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: '40ch',
            mx: 'auto',
            color: colors.grey[theme.palette.mode === 'dark' ? 300 : 400],
            fontWeight: 'bold',
            fontSize: 14,
            mt: 1,
          }}
        >
          You just gained one Cookhat for Salad cooking. Share your achievement
          with your friends.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          '& > *': {
            width: 'auto',
            minWidth: 120,
            color: 'white',
            fontWeight: 'bold',
            padding: '8px 16px',
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor:
              theme.palette.mode === 'dark'
                ? colors.greenAccent[700]
                : colors.greenAccent[400],
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? colors.greenAccent[400]
                  : colors.greenAccent[200],
            },
            transition: 'all 0.3s ease',
          }}
          startIcon={<WhatsAppIcon fontSize="large" />}
          aria-label="Share on WhatsApp"
        >
          WhatsApp
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.blueAccent[500],
            '&:hover': { backgroundColor: colors.blueAccent[700] },
            transition: 'all 0.3s ease',
          }}
          startIcon={<PersonIcon fontSize="large" />}
          aria-label="View Profile"
        >
          Ver Perfil
        </Button>
      </CardActions>
    </Card>
  )
}
