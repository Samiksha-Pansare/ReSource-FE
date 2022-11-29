import React,{useState,useEffect} from 'react';
import cardsvg from "../Images/Card.svg";
import "../Css/universityList.css";
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

export default function InstituteList() {
    // view_allinstitutes
    const [res,setRes] = useState();
    const [ load,setLoad] = useState(false);
    const[page,setPage] = useState(1);
    const [search,setSearch] = useState("");

    // useEffect(() =>{
    //     fetch("http://127.0.0.1:8000/institute/view_allinstitutes/"+1,{
    //       headers:{'Authorization':sessionStorage.getItem('token')}
    //     })
    //     .then(response=>response.json())
    //     .then(body=>
    //       {
    //         setRes(body);
    //         setLoad(true);
    //         console.log(body);
    //       })
    //   },[])
    //   const handlepagechange = (e,p) =>{
    //     if(search === ""){
    //         setPage(p);
    //     fetch("http://127.0.0.1:8000/institute/view_allinstitutes/"+p,{
    //         headers:{'Authorization':sessionStorage.getItem('token')}
    //     })
    //     .then(response=>response.json())
    //     .then(body=>
    //     {
    //         setRes(body);
    //         setLoad(true);
    //         console.log(body);
    //     })
    // }
    // else{
    //     if(p===undefined){
    //         p = 1;
    //         setPage(p)
    //         console.log(p);
    //     }
    //     console.log(search,p)
    //     fetch("http://127.0.0.1:8000/institute/view_allinstitutes/"+p,{
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json",'Authorization':sessionStorage.getItem('token')},
    //         body: JSON.stringify({"searchtext":search})
    //       }).then(response=>response.json())
    //               .then(body=>  {
    //                 setRes(body);
    //                 setPage(p);
    //                 setLoad(true);
    //                 console.log(body);
    //       })
    // }
    //   }
    //  const handlesearch = (e) =>{
    //     setSearch(e.target.value);
    //  }
    //  const searching = (e) =>{
    //     console.log("1")
    //     handlepagechange(1);
    
    //  }
  return (
    <>
   
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>

        <div className="container University-List-Container">
        <form>
          <div className="row">
            
            <div className="col-md-6 d-flex justify-content-center">
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                className='Search-bar'
            
              />
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <Button className="Searchbtn" variant="outlined">Search</Button>
            </div>
          </div>
        </form>
        <div className="row list-row ">
            <div className="col-md-4 ">
            <div className="our_solution_category">
                <div className="solution_cards_box">
                <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                    <img src={cardsvg} />
                    </div>
                    <div className="solu_title">
                    <h3>Institute Name : Vidyalankar Institute Of Technology</h3>
                    </div>
                    <div className="solu_description">
                    <div className="">
                        <ul>
                        item.university<li className="lires boldline">University: Mumbai</li>
                        item.city<li className="lires">City: Mumbai</li>
                        item.state<li className="lires">State: Maharashtra</li>
                        item.registeration_no<li className="lires">Registration Number: 25</li>
                        item.phone_no<li className="lires">Contact: +91 982345678</li>
                        <li className="lires">  Email: mainvit@vit.edu.in</li>
                        </ul>
                    </div>
                    <a href="/instituteProfile">
                    <button type="button" className="read_more_btn">More Details</button>
                    </a>
                    </div>
                </div>
            
                </div>
            </div>
            </div>
            
      
        </div>
        <div className="d-flex justify-content-center">
        {/* <Button variant="text">Show More</Button> */}
        <Pagination className='pagination-class' count="10" variant="outlined"color="primary"/>
        </div>
        </div>
        </div>
    </>
  )
}
