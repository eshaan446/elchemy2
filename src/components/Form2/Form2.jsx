import React, { useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form2 = () => {
  //const rgex=/^(https?:\/\/)?(github\.com\/S+)$/
  const navigate=useNavigate();
  const location=useLocation();
  const [form2Data, setForm2Data] = useState(()=>{
    const storedData=localStorage.getItem("form2Data");
    if(storedData) console.log("form 2 cache hit")
    return storedData? JSON.parse(storedData):{
      techskills: "",
      verbal: "",
      experience: "",
      education: "",
      github: "",
    }
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  let showToast=true
  useEffect(()=>{
    if(showToast){
      notify();
      showToast=false;
    }
  },[showToast])

  useEffect(() => {
    localStorage.setItem("form2Data", JSON.stringify(form2Data));
    // validation to enable the Preview button
    const isComplete = //any validation to be added in form 2 shall come here
      form2Data.techskills !== "" &&
      form2Data.experience !== "" &&
      form2Data.education !== "" && (form2Data.github===""?true:validateGitHub(form2Data.github))

      setIsFormComplete(isComplete);
  }, [form2Data]);
  const formdata1=location.state;
  //form1 seed data to handle errors
  let combinedData={data1:{
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
  }}
  if(formdata1!==null){
    combinedData={data1:formdata1}
  }
  function handleSubmit(e){
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
        combinedData={...combinedData,data2:form2Data}
        navigate('/preview',{state:combinedData})
      }
    });
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
        localStorage.removeItem('form2Data')
        setForm2Data({
          techskills: "",
          verbal: "",
          experience: "",
          education: "",
          github: "",
        })
      }
    });

  }
  function validateGitHub(link) {
    const regex = /^(https?:\/\/)?(www\.)?github\.com\/\S+$/;
    //const rgex=/^(https?:\/\/)?(github\.com)\/\S+$/
    return regex.test(link);
  }
  function goBack(){
    Swal.fire({
      title: "Are you sure?",
      text: "Changes may be unsaved!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, go back!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
    });
  }
  const notify = () => toast.success("Welcome to Form 2!",{theme:'colored'});
  return (
    <>
      <ToastContainer/>
      <h1 className="heading">Form 2</h1>
      <div className="flexCenter innerWidth">
        <div className="cont">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Technical Skills:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your technical skills"
                value={form2Data.techskills}
                onChange={(e)=>setForm2Data({...form2Data,techskills:e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Verbal Languages Spoken: (Optional)</label>
              <input
                type="text"
                className="form-control"
                value={form2Data.verbal}
                onChange={(e)=>setForm2Data({...form2Data,verbal:e.target.value})}
                placeholder="Enter what languages you speak"
              />
            </div>
            <div className="form-group">
              <label>Experience (Can Add Multiple):</label>

              <textarea placeholder="Enter your experience"  value={form2Data.experience}
                onChange={(e)=>setForm2Data({...form2Data,experience:e.target.value})} required></textarea>
            </div>
            <div className="form-group">
              <label>Education (Can Add Multiple):</label>
              <textarea placeholder="Add your Education"  value={form2Data.education}
                onChange={(e)=>setForm2Data({...form2Data,education:e.target.value})} required></textarea>
            </div>
            <div className="form-group">
              <label>Github Link: (Optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your github link"
                value={form2Data.github}
                onChange={(e)=>setForm2Data({...form2Data,github:e.target.value})}
              />
              {/* Github Validation logic */}
              {form2Data.github && !validateGitHub(form2Data.github) && <span className="text-muted">Please add a valid github link</span>}
            </div>
            <div className="buttons">
            <button onClick={goBack} type="button" className="btn btn-primary">
              Go Back
            </button>
            <button onClick={handleReset} type="button" className="btn btn-danger">
              Reset
            </button>
            <button disabled={!isFormComplete} type="submit" className="btn btn-success">
              Preview
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form2;
