import React from 'react'

export default function homeAdmin() {
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
  if(handleAuthorization('SPSO_cookie_id') == true) {
		  return (
	  
			  <div >
				  
	   12131242131212321
			  </div>
		  )
      }
}


// import homeBK from '../../assets/images/homeBK.jpg'

// export default function homeAdmin() {
//   return (
//     <img
//     src={homeBK}
//     alt="Your Company"
//   />
//   );
// }