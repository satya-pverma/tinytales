import React, { useState, useEffect } from 'react';
import './App.css';

function Display() {

    const [data, setData] = useState('');
    const [show, setShow] = useState(false);
    const [resu, setResu] = useState([])
    var [arr, setArr] = useState([]);


    const showval = (e) => {

        fetch(`/talesApi/${data}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
        })

            .then(res => res.json())

            .then((result) => {


                setResu(result)



            }).catch((err) => {
                console.log(err)
            })



    }

    const showlist = () => {
        return (
            <div>
                {resu.map(words => (
                    <table style={{ border: "2px solid grey", alignContent: "center", marginLeft: "40%" }}>
                        <tbody>
                            <tr  >

                                <td style={{ width: "7px", marginLeft: "50%" }} key={Math.random()}>
                                    <div key={Math.random()} style={{ width: "200px" }}> {words}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                ))}
            </div>
        );

    }



    return (
        <div className="App">

            <input style={{ marginTop: "15px", width: "60%", height: "30px" }} type="text" placeholder="enter the no" value={data} onChange={(e) => setData(e.target.value)} /><br />
            <button style={{ height: "30px", width: "70px", marginTop: "10px" }} onClick={() => { showval(); showlist() }} >submit</button>
            <div>
                <h3 >
                    Here is the {data} most frequent word
        </h3>
                {
                    showlist()
                }
            </div>









        </div>
    );
}

export default Display;
