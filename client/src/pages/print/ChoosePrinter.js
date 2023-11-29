import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import { BuildingOffice2Icon } from "@heroicons/react/20/solid";
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
        <div className="bg-mainBlue"
        style={{
            border: '1px solid black',
            marginLeft: '50px', marginTop: '50px', 
            width: '100px', height: '50px',
            padding: '10px', textAlign: 'center', borderRadius: '5px'}}
        >{building}</div>
    );
}

  export default function ChoosePrinter() {

    const buildings = ["BK H1", "BK H2", "BK H3", "BK H4", "BK H5", "BK H6","BK H7", "BK H8", 
    "BK B1","BK B2", "BK B3", "BK B4", "BK C3", "BK C4", "BK C5", "BK C6"];

    return (
        <div>
            <Link to="/print" ><FaBackward style={{ marginLeft:"80px", }}/></Link>
            <div className="flex flex-1"
            style={{marginLeft: "50px"}}
            >
            <div className="w-1/2">
                <h2 className='text-4xl font-bold ml-20'>Printer</h2>
                <h3 className="text-2xl font-bold mt-10"  style={{marginLeft: "200px"}}>Bách Khoa CS2</h3>
                <div className="flex mt-50"> 
                    <div>
                        <Bulding building={buildings[0]}></Bulding>
                        <MyModal/>
                    </div>
                    <div>
                        <Bulding building={buildings[1]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[2]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[3]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                </div>
                <div className="flex mt-10 ml-10"> 
                    <div>
                        <Bulding building={buildings[4]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[5]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[6]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[7]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                </div>
            </div>
            <div><VerticalLine /></div>
            <div className="w-1/2">
                <h3 className="text-2xl font-bold mt-20"  style={{marginLeft: "200px"}}>Bách Khoa CS1</h3>
                <div className="flex mt-50"> 
                    <div>
                        <Bulding building={buildings[8]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[9]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[10]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[11]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                </div>
                <div className="flex mt-10 ml-10"> 
                    <div>
                        <Bulding building={buildings[12]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[13]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[14]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                    <div>
                        <Bulding building={buildings[15]}></Bulding>
                        <button style={{marginLeft: '60px', marginTop: '5px'}}>
                            <BuildingOffice2Icon className="w-20 h-50"/>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
  }