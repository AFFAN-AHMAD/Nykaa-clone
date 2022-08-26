import MainPage from "./MainPage/MainPage";
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon} from '@chakra-ui/icons'



export default function LandingPage(){

    return(
        <div style={{backgroundColor:"#f3f3f3"}}>
        
        <MainPage/>


        <ScrollToTop style={{borderRadius:"50%",heigh:"60px",width:"60px" ,padding:"0px",margin:"0px"}} smooth component={<ArrowUpIcon />} />




        </div>
    )
}
