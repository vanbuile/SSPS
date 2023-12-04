
import homeBK from '../../assets/images/homeBK.jpg'

export default function Home() {
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
    return (
      <img
      src={homeBK}
      alt="Your Company"
    />
    );
    
  }
}