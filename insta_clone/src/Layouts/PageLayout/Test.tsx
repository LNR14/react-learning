import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";

const test = () => {
  const countries = [
    {
        "name": "India",
        "value": "IN",
        "cities": [
            "Delhi",
            "Mumbai"
        ]
    },
    {
        "name": "Pak",
        "value": "PK",
        "cities": [
            "Lahore",
            "Karachi"
        ]
    },
    {
        "name": "Bangladesh",
        "value": "BG",
        "cities": [
            "Dhaka",
            "Chittagong"
        ]
    }
]

const [country,setCountry] = useState(0)
const handleOnChangeCountry = (e) => {
  setCountry(e.target.value ) 

}
  return (
    <div>
      <select onChange={handleOnChangeCountry}>
      { countries.map((item,index) =>{
        return <option value={index}>{item.name}</option>
      }) }
      </select>
      <select>
        {countries[country].cities.map((item)=>{
          return <option>{item}</option>
        })}
      </select>
    </div>
  );
};

export default test;
