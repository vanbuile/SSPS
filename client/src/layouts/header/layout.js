
import { Outlet } from "react-router-dom";
import Header from "./header";
// ----------------------------------------------------------------------
export default function Layout() {
    const handleAuthorization = (role) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if(name === role) {
                return true
            }
        }
        window.location.href = 'http://localhost:3000/login';
    }
    if(handleAuthorization('Student_cookie_id') == true) {
        return (<>
                  <Header />
                  <Outlet/>
              </>  
        );
    }
}