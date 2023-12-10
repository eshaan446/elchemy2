import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Preview.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Preview = () => {
  const location = useLocation();
  let showToast=true;
  useEffect(()=>{
    if(showToast){
      notify();
      showToast=false;
    }
    
  },[])
  console.log("Preview", location.state);
  let data1={};
  let data2={};
  if (location.state !== null) {
    data1 = location.state.data1;
    data2 = location.state.data2;
    console.log('Form 1 data', data1)
    console.log('Form 2 data', data2)
  }
  const notify = () => toast.success("Check you data!",{theme:'colored'});
  return (
    <>
       <ToastContainer/>
      <h1 className="heading">Preview</h1>
      <h2>Form 1 data:</h2> 
      <div className="flexCenter innerWidth">
      
      <table className="tableStyle">
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Required?</th>
            <th>Data from Form 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Text</td>
            <td>Yes</td>
            <td><b>{data1.firstName}</b></td>
          </tr>
          <tr>
            <td>Middle Name</td>
            <td>Text</td>
            <td>No</td>
            <td><b>{data1.middleName}</b></td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>Text</td>
            <td>Yes</td>
            <td><b>{data1.lastName}</b></td>
          </tr>
          <tr>
            <td>Age</td>
            <td>Number</td>
            <td>Yes</td>
            <td><b>{data1.age}</b></td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>Select</td>
            <td>Yes</td>
            <td><b>{data1.gender}</b></td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>Text</td>
            <td>Yes</td>
            <td><b>{data1.phoneNumber}</b></td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Email</td>
            <td>Yes</td>
            <td><b>{data1.email}</b></td>
          </tr>
          <tr>
            <td>Work Email</td>
            <td>Email</td>
            <td>No</td>
            <td><b>{data1.workEmail}</b></td>
          </tr>
          <tr>
            <td>Address line 1</td>
            <td>Text area</td>
            <td>Yes</td>
            <td><b>{data1.addressLine1}</b></td>
          </tr>
          <tr>
            <td>Address line 2</td>
            <td>Text area</td>
            <td>No</td>
            <td><b>{data1.addressLine2}</b></td>
          </tr>
          <tr>
            <td>City</td>
            <td>Autocomplete</td>
            <td>Yes</td>
            <td><b>{data1.city}</b></td>
          </tr>
          <tr>
            <td>State</td>
            <td>Autocomplete</td>
            <td>No</td>
            <td><b>{data1.state}</b></td>
          </tr>
          <tr>
            <td>Country</td>
            <td>Autocomplete</td>
            <td>Yes</td>
            <td><b>{data1.country}</b></td>
          </tr>
          <tr>
            <td>Pin code</td>
            <td>Number</td>
            <td>Yes</td>
            <td><b>{data1.pinCode}</b></td>
          </tr>
        </tbody>
      </table>
      </div>
      <h2>Form 2 data:</h2> 
      <div className="flexCenter innerWidth">
      <table className="tableStyle">
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Required?</th>
            <th>Data from Form 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Technical Skills</td>
            <td>Text</td>
            <td>Yes</td>
            <td><b>{data2.techskills}</b></td>
          </tr>
          <tr>
            <td>Verbal languages spoken</td>
            <td>Text</td>
            <td>No</td>
            <td><b>{data2.verbal}</b></td>
          </tr>
          <tr>
            <td>Experience (Can add multiple)</td>
            <td>Text area</td>
            <td>Yes</td>
            <td><b>{data2.experience}</b></td>
          </tr>
          <tr>
            <td>Education (Can add multiple)</td>
            <td>Text area</td>
            <td>Yes</td>
            <td><b>{data2.education}</b></td>
          </tr>
          <tr>
            <td>Github link</td>
            <td>Text</td>
            <td>No</td>
            <td><b>{data2.github}</b></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
};

export default Preview;
