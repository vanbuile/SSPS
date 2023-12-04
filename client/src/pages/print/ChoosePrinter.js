import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import MyModal from '../../components/Printer'

function VerticalLine() {
    return (
      <div
        style={{
          marginTop:'65px',
          height: '90%', // Adjust the height as needed
          width: '1px',   // Adjust the thickness of the line
          backgroundColor: 'black', // Adjust the color of the line
        }}
      ></div>
    );
  }
function Bulding({building}){
    return (
        <div className="bg-mainBlue text-white"
        style={{
            marginLeft: '90px', marginTop: '50px', 
            width: '100px', height: '50px',
            padding: '10px', textAlign: 'center', borderRadius: '5px'}}
        >{building}</div>
    );
}

  export default function ChoosePrinter() {

    const buildings = ["BKB1", "BKB2", "BKB3", "BKB4", "BKB5", "BKB6","A1", "A2", 
    "A3","A4", "A5", "A6"];
    const handleAuthorization = (role) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
          const [name] = cookie.split('=');
          if(name === role) {
            return true
          }
        }
        window.location.href = 'http://localhost:3000/login';
      }
      if(handleAuthorization('Student_cookie_id') === true) {
          return (
              <div>
                  <Link to="/print" ><FaBackward style={{ marginLeft:"80px", }}/></Link>
                  <div className="flex flex-1"
                  style={{marginLeft: "50px"}}
                  >
                  <div className="w-1/2">
                      <h2 className='text-4xl font-bold ml-20'>Printer</h2>
                      <h3 className="text-2xl font-bold mt-10"  style={{marginLeft: "200px"}}>Bách Khoa CS1</h3>
                      <div className="flex mt-50"> 
                          <div>
                              <Bulding building={buildings[0]}></Bulding>
                              <MyModal building = {buildings[0]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[1]}></Bulding>
                              <MyModal building = {buildings[1]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[2]}></Bulding>
                              <MyModal building = {buildings[2]}/>
                          </div>
                      </div>
                      <div className="flex mt-10"> 
                            <div>
                              <Bulding building={buildings[3]}></Bulding>
                              <MyModal building = {buildings[3]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[4]}></Bulding>
                              <MyModal building = {buildings[4]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[5]}></Bulding>
                              <MyModal building = {buildings[5]}/>
                          </div>
                      </div>
                  </div>
                  <div><VerticalLine /></div>
                  <div className="w-1/2">
                      <h3 className="text-2xl font-bold mt-20"  style={{marginLeft: "200px"}}>Bách Khoa CS1</h3>
                      <div className="flex mt-50" style={{marginLeft: "25px"}}> 
                          <div>
                              <Bulding building={buildings[6]}></Bulding>
                              <MyModal building = {buildings[6]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[7]}></Bulding>
                              <MyModal building = {buildings[7]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[8]}></Bulding>
                              <MyModal building = {buildings[8]}/>
                          </div>
                      </div>
                      <div className="flex mt-10" style={{marginLeft: "25px"}}> 
                          <div>
                              <Bulding building={buildings[9]}></Bulding>
                              <MyModal building = {buildings[9]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[10]}></Bulding>
                              <MyModal building = {buildings[10]}/>
                          </div>
                          <div>
                              <Bulding building={buildings[11]}></Bulding>
                              <MyModal building = {buildings[11]}/>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
          );
      }
  }