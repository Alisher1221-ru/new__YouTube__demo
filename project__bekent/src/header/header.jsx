import { Tooltip } from "@chakra-ui/react";
import { Avatar, Box, } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

function Header() {
    return(
        <Box component={"header"}>
            <Box className="header__menu" component={"div"}>
            <div className="menu__header">
                <div className="burger__manu">
                    <div className="linia__burger_1"></div>
                    <div className="linia__burger_2"></div>
                    <div className="linia__burger_3"></div>
                </div>
                <img className="youtube" src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" width={"100px"}/>
            </div>
            <div className="linia__search">
            <div className="menu__search">
                <input type="text" placeholder="search"/>
                <Tooltip hasArrow className="label" label='Search' bg='gray.300' color='#f5f5f5'>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" width={"20px"}/>
                </div>
                </Tooltip>
            </div>
            <Tooltip hasArrow className="label" label='Search places' bg='gray.300' color='#f5f5f5'>
                <img className="img__micra" src="https://cdn4.iconfinder.com/data/icons/multimedia-icons-5/100/multimedia_microphone-13-512.png" width={"40px"} alt="" />
            </Tooltip>
            </div>
            <div className="icons">
            <Tooltip hasArrow className="label" label='notification' bg='gray.300' color='#f5f5f5'>
                <img src="https://cdn-icons-png.flaticon.com/512/107/107822.png" width={"40px"}/>
            </Tooltip>
                <Avatar sx={{ bgcolor: deepPurple[500],width:"35px",height:"35px" }}>A</Avatar>
            </div>
            </Box>
        </Box>
    )
}
export default Header