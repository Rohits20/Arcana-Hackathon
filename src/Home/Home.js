import React from "react";
import {IoMdAddCircle} from 'react-icons/io';
import {BsPersonCircle} from 'react-icons/bs';
import { useState } from "react";
import home from '../Home/home.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import ReactHighcharts from "react-highcharts";
import {
    ResponsiveContainer,
    AreaChart,
    Line,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
    ComposedChart,
    Bar,
  } from "recharts";
  import { format, parseISO, subDays } from "date-fns";

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>${payload[0].value.toFixed(2)} CAD</p>
        </div>
      );
    }
    return null;
  }
function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
        window.location.href=`/`
    }
    const data = [];

    const timeline = {
        "1 month" : 30,
        "6 months" : 180,
        "1 year" : 365,
        "5 years" : 1825,
        "10 years" :3650,
        "20 years" :7300
    }
    const [timespan, setTimespan] = useState("1 month");
    const [study, setStudy] = useState("AVG");
    for (let num = timeline[timespan]; num >= 0; num--) {
      data.push({
        date: subDays(new Date(), num).toISOString().substr(0, 10),
        price: 1 + Math.random(),
        AVG: 1 + Math.random(),  //AVG data
        MACD: 1 + Math.random(),  // MACD data
        RSI: 1 + Math.random(), // RSI data
        volume:  Math.random(), //volume data
      });
    }


    const doSomething = (e) => {
        console.log(e);
        setTimespan(e);
      }
      
      const doChange = (e) => {
        console.log(e);
        setStudy(e);
      }
      
    return (
        <div>
            <div className="topInsti">
            <div>
        <img src = "https://i.ibb.co/hWNNjG7/rovi-logo.png"  width={'150px'}/>
      </div>
                <div style={{width :"20vw"}}>
                </div>
                <div style ={{marginRight:'350px'}}>
                    <input placeholder="Search for stocks..." rows="1" className="search" style={{width :"500px"}}/>
                </div>
                <button onClick={logout} style={{height :"30px"}}>Logout</button>
                <BsPersonCircle className="UserName" size='23px'style={{marginLeft:'5vw', marginTop:'2px', color:'white'}}/>
            </div>
            <div style= {{height:'0.5px' , backgroundColor: 'gray', marginBottom:'10px'}}>

            </div>
            {/* <button onClick={event =>  window.location.href=`/upload`} className="upload">
                Upload items
                <IoMdAddCircle size='20px' style ={{marginLeft:'15px', marginTop: '-3px'}}/>
            </button> */}

          
           <div style ={{marginLeft: '-93vw', marginTop:'5px'}}>
            Buy items
           </div>
           <div style={{display:"flex" , flexDirection:"row", marginBottom: '15px'}}>
           <div className="StockName">
            Apple Inc.

        {/* <SellCard uniqueId={1} productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard uniqueId={2} productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard uniqueId={3} productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard uniqueId={4} productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard uniqueId={5} productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/> */}
   {/* <ReactHighcharts  ></ReactHighcharts>; */}
   {/* <HighchartsReact highcharts={Highcharts} options={getOptions('line')} /> */}
   {/* <ReactHighcharts config={config}/> */}
   
          </div>

           <div style={{marginLeft:'650px'}} >

           <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        {timespan}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={() => doSomething("1 month")} >1 months</Dropdown.Item>
        <Dropdown.Item onClick={() => doSomething("6 months")} >6 months</Dropdown.Item>
        <Dropdown.Item onClick={() => doSomething("1 year")}>1 year</Dropdown.Item>
        <Dropdown.Item onClick={() => doSomething("5 years")}>5 years</Dropdown.Item>
        <Dropdown.Item onClick={() => doSomething("10 years")}>10 years</Dropdown.Item>
        <Dropdown.Item onClick={() => doSomething("20 years")}>20 years</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
          <div style={{marginLeft:'30px'}} >

           <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        {study}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => doChange("AVG")} >7 days Moving average</Dropdown.Item>
        <Dropdown.Item onClick={() => doChange("MACD")} >MACD</Dropdown.Item>
        <Dropdown.Item onClick={() => doChange("RSI")}>RSI</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div> 
          </div>
          <div className="MainPart">
          <div className="Chart">

          <ResponsiveContainer width="100%" height={400}>
      < ComposedChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B03A3" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#1F51FF" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area  dataKey="price" stroke="#1F51FF" fill="url(#color)" />
        <Line  {...study === "AVG" ? "AVG" :(study === "MACD" ? "MACD" : ("RSI"))} dataKey="AVG" stroke="black" fill="url(#color)" />
        <Bar  dataKey="volume" stroke="green" fill="lightgreen" />

        <XAxis
          dataKey="date"
          axisLine={true}
          tickLine={true}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 1 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          datakey="value"
          axisLine={true}
          tickLine={true}
          tickCount={20}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip   />

        <CartesianGrid opacity={0.5} vertical={false} />
      </ComposedChart>
    </ResponsiveContainer>

          </div>
          <div style={{marginLeft :'60px'}}>
            <h5 >
            Top performers
            </h5>
           <div>
           <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Apple</div>
          Cras justo odio
        </div>
        <Badge bg="success" pill>
          12%
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Amazon</div>
          Cras justo odio
        </div>
        <Badge bg="success" pill>
          11%
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">American express</div>
          Cras justo odio
        </div>
        <Badge bg="success" pill>
          10%
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Google</div>
          Cras justo odio
        </div>
        <Badge bg="success" pill>
          9%
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Meta</div>
          Cras justo odio
        </div>
        <Badge bg="success" pill>
          5%
        </Badge>
      </ListGroup.Item>
    </ListGroup>

           </div>
          </div>
          </div>
        </div>
        
    );
}

export default Home;
