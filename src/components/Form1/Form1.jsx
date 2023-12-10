import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Form1.css"; 
import { useNavigate } from "react-router-dom";
import { cities,states,countries } from "../../rawdata/data";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form1 = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    age: "",
    gender: "",
    phoneNumber: '',
    email: "",
    workEmail: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: '',
  });

  const [citySuggestions,setCitysuggestions]=useState(cities)
  const [showCity,setShowCity]=useState(false);
  const [statesuggestions,setStatesuggestions]=useState(states)
  const [showState,setShowState]=useState(false);
  const [countrySuggestions,setCountrysuggestions]=useState(countries)
  const [showCountry,setShowCountry]=useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  let showToast=true;
  useEffect(()=>{
    if(showToast){
      notify();
      showToast=false
    }
  },[showToast])

   useEffect(()=>{
    function handleDClick(e){
      const contElement = document.querySelector('.cont');
      if (contElement && !contElement.contains(e.target)) {
        setShowCity(false);
        setShowCountry(false);
        setShowState(false)
      }
    }
    document.addEventListener('click',handleDClick)
    const isComplete =
      formData.phoneNumber.toString().length === 10 &&
      formData.pinCode.toString().length===6
     setIsFormComplete(isComplete);
    return ()=>{
      document.removeEventListener('click',handleDClick)
    }
  },[showCity,showCountry,showState,formData])

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "This form will be submitted!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Form1 component Log:", formData);
        navigate('/form2',{state:formData})
      }
    });
  };
  function handleCityOptionClick(val){
    setFormData({...formData,city:val})
    setShowCity(false);
  }
  function handleStateOptionClick(val){
    setFormData({...formData,state:val})
    setShowState(false);
  }
  function handleCountryOptionClick(val){
    setFormData({...formData,country:val})
    setShowCountry(false);
  }
  function handleReset(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          age: "",
          gender: "",
          phoneNumber: '',
          email: "",
          workEmail: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          country: "",
          pinCode: "",
        })
      }
    });    
  }
 
  const notify = () => toast.success("Welcome to Form 1!",{theme:'colored'});
  return (
    <>
      <ToastContainer />
      <h1 className="heading">Form 1</h1>
      <div className="body">
      <div className="flexCenter innerWidth">
        <div className="cont">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={(e)=>setFormData({...formData,firstName:e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Middle Name:(Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter middle name"
                value={formData.middleName}
                onChange={(e)=>setFormData({...formData,middleName:e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={(e)=>setFormData({...formData,lastName:e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your age"
                value={formData.age}
                onChange={(e)=>setFormData({...formData,age:parseInt(e.target.value)})}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <br />
              <select value={formData.gender}
                onChange={(e)=>setFormData({...formData,gender:e.target.value})} required>
                <option value="" disabled hidden>
                  Select your gender
                </option>
                <option value={'Male'}>Male</option>
                <option value={'Female'}> Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your phone number"
                maxLength={10}
                value={formData.phoneNumber}
                onChange={(e)=>setFormData({...formData,phoneNumber:parseInt(e.target.value)})}
                required
              />
               <small className="form-text text-muted">
                Phone number should be of exactly 10 digits.
              </small>
            </div>
            <div className="form-group">
              <label>Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Work Email:(Optional)</label>
              <input
                type="email"
                className="form-control"
                value={formData.workEmail}
                onChange={(e)=>setFormData({...formData,workEmail:e.target.value})}
                placeholder="Enter your work email"
              />
            </div>
            <div className="form-group">
              <label>Address line 1:</label>
              <br />
              <textarea placeholder="Enter your Address 1" value={formData.addressLine1}
                onChange={(e)=>setFormData({...formData,addressLine1:e.target.value})} required></textarea>
            </div>
            <div className="form-group">
              <label>Address line 2:(Optional)</label>
              <br />
              <textarea placeholder="Enter your Address 2" value={formData.addressLine2}
                onChange={(e)=>setFormData({...formData,addressLine2:e.target.value})}></textarea>
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your state"
                value={formData.city}
                onChange={(e)=>setFormData({...formData,city:e.target.value})}
                onFocus={()=>setShowCity(true)}
                required
              />
              {showCity && (
                <ul className='suggestions'>
                {citySuggestions.filter((e)=>{return e.label.toLowerCase().includes(formData.city.toLowerCase())}).slice(0,10).map((e)=>{
                    return(
                        <li key={e.value} onClick={()=>handleCityOptionClick(e.label)}>{e.label}</li>
                    )
                })}
            </ul>
              )}
              
             
            </div>
            <div className="form-group">
              <label>State: (Optional)</label>
              <input
                type="text"
                className="form-control"
                value={formData.state}
                onChange={(e)=>setFormData({...formData,state:e.target.value})}
                placeholder="Enter your state"
                onFocus={()=>setShowState(true)}
              />
              {showState && (
                <ul className='suggestions'>
                {statesuggestions.filter((e)=>{return e.label.toLowerCase().includes(formData.state.toLowerCase())}).slice(0,10).map((e)=>{
                    return(
                        <li key={e.value} onClick={()=>handleStateOptionClick(e.label)}>{e.label}</li>
                    )
                })}
            </ul>
              )}

            </div>
            <div className="form-group">
              <label>Country:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your country"
                value={formData.country}
                onChange={(e)=>setFormData({...formData,country:e.target.value})}
                onFocus={()=>setShowCountry(true)}
                required
              />
              {showCountry && (
                <ul className='suggestions'>
                {countrySuggestions.filter((e)=>{return e.label.toLowerCase().includes(formData.country.toLowerCase())}).slice(0,10).map((e)=>{
                    return(
                        <li key={e.value} onClick={()=>handleCountryOptionClick(e.label)}>{e.label}</li>
                    )
                })}
            </ul>
              )}

            </div>
            <div className="form-group">
              <label>Pincode:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your pincode"
                value={formData.pinCode}
                onChange={(e)=>setFormData({...formData,pinCode:parseInt(e.target.value)})}
                required
              />
              <small className="form-text text-muted">
                Pincode should be of exactly 6 digits.
              </small>
            </div>
            <div className="buttons">
            <button type="button" onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
            <button type="submit" disabled={!isFormComplete} className="btn btn-success">
              Next
            </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Form1;
