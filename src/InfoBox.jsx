import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmV3JTIwY2xvdWRzfGVufDB8fDB8fHww";

    let HOT_URL = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL= "https://media.istockphoto.com/id/1797572797/photo/male-trekker-hiker-standing-looking-down-at-village-houses-and-himalaya-mountains-in-distance.webp?a=1&b=1&s=612x612&w=0&k=20&c=FoY-8oLwD85hwMb4yPWWsz5xWyShPeosKVaLpm21urk=";
    let RAIN_URL = "https://media.istockphoto.com/id/466935825/photo/storm-fields.webp?a=1&b=1&s=612x612&w=0&k=20&c=a64dbd_6c5NYcAnBhNkObLSukFJrC2EEKPUI0WOkyVc=";

    return (
    <div className="InfoBox">
       <div className='cardContainer'>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
        title="Weather Widget"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} 
        {
        info.humidity > 80 
        ? <ThunderstormIcon /> 
        : info.temp >15 
        ? <WhatshotIcon />
        : <AcUnitIcon />
        }
        </Typography>
        <Typography variant="body2"  color='text.secondary' component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;C</p>
           <p>The weather can be described as  {info.weather} and feels like {info.feelsLike}&deg;C</p>
         </Typography>
      </CardContent>
      
    </Card> 
    </div>
    </div>
    )
}