import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Page1 from './App.js'
import Page2 from './Register.js'
import Page3 from'./Profile.js'
import Page4 from './Signup.js'
import Page5 from './Singleprofile.js'
export default function Navigation(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page1/>}></Route>
            <Route path="/Register" element={<Page2/>}></Route>
            <Route path="/Profile" element={<Page3/>}></Route>
            <Route path="/Signup" element={<Page4/>}></Route>
            <Route path="/Singleprofile" element={<Page5/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}