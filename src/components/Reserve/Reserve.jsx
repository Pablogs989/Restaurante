import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
    const navigate = useNavigate();
    const [dataArray, setDataArray] = useState([]);

    const initialValue = {
        name: "",
        date: "",
        time: "",
      };
    
    const [data, setData] = useState(initialValue);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setDataArray([...dataArray,data]);
     
        setData(initialValue);
        setTimeout(() => {
            navigate("/");
        }, 3000);
      };

      useEffect(() => { 
        setDataArray(JSON.parse(localStorage.getItem("data")) || []);
      }, []);

      useEffect(() => {
        if(dataArray.length === 0) return;
        localStorage.setItem("data", JSON.stringify(dataArray));
      }, [dataArray])
      
      const handleInputChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };

    return (
        <div>
            <h2>Reservation Form</h2>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                />

                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={data.time}
                    onChange={handleInputChange}
                />

                <button type="submit" value="Send">Submit</button>
            </form>
        </div>
    );
};

export default Reserve;