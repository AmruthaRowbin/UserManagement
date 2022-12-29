import React from "react";
import { useState } from "react";
import "./Profile.css";
import { MDBCol, MDBFile, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {
  userImageAction,
  userprofileaction,
} from "../../../REDUX/Actions/userActions";
function Profile() {
  const dispatch = useDispatch();
  const [pimage, setImage] = useState(" ");
  const userprofile = useSelector((state) => state.userProfile);
  const { loading, error, profiledata } = userprofile;
  const image = useSelector((state) => state.userImage);
  const { imageloading, imageerror, userimage } = image;
  const [photo, setPhoto] = useState("");
  console.log(userimage + "THIS IS THE IMAGE EEE");
  const addphoto = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log(photo);
    data.append("file", photo);
   // data.append("upload_preset", "noteapp");
    data.append("upload_preset", "thy3sk1o");
    // data.append("cloud_name", "dhajqatgt");driuxmoax,thy3sk1o
     data.append("cloud_name", "driuxmoax");
    console.log(data);
    fetch("https://api.cloudinary.com/v1_1/driuxmoax/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(userImageAction(data.url));
      });
  };
  useEffect(() => {
    dispatch(userprofileaction());
  }, [userimage]);
  console.log(userimage + "THIS IS THE IMAGEEEE");
  return (

    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="12" xl="12" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              {profiledata ? (
                <MDBCardBody className="p-4">

                  <div className="d-flex text-black">

                    <div className="flex-shrink-0">
                      {
                        <MDBCardImage
                          style={{ width: '180px', borderRadius: '10px' }}
                          src={
                            profiledata.photo
                              ? profiledata.photo
                              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                          }
                          alt='Generic placeholder image'
                          fluid />

                      }

                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle> {profiledata.firstname} {profiledata.lastname}</MDBCardTitle>
                      <MDBCardText>{profiledata.email}</MDBCardText>
                      <form>
                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                          style={{ backgroundColor: '#efefef' }}>


                          <MDBFile size='lg' id='formFileLg' onChange={(e) => setPhoto(e.target.files[0])} />
                        </div>
                        <div className="d-flex pt-1">
                          <button outline onClick={addphoto} className="me-1 flex-grow-1" style={{backgroundColor:'black',color:'white'}}>Add Profile Picture</button>
                          {/* <MDBBtn className="flex-grow-1">Follow</MDBBtn> */}
                        </div>
                      </form>
                    </div>

                  </div>

                </MDBCardBody>
              ) : (
                ""
              )}

             
            </MDBCard>
           
          </MDBCol>
        </MDBRow>
       
      </MDBContainer>
     
        <Link to={'/'} >
        <MDBBtn className='mx-2' color='dark' size='lg' style={{width:500,margin:20}}>
        Return to Home
              </MDBBtn>
        </Link>
                
       </div>
    // <div>
    //   <div className="main-div">
    //     <Container>
    //       <h1>My Profile</h1>
    //       {profiledata ? (
    //         <div>
    //           {
    //             imageloading ? <h1>Loading</h1> : <img
    //             className="profilepic"
    //             src={
    //               profiledata.photo
    //                 ? profiledata.photo
    //                 : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    //             }
    //             alt=""
    //           /> 
    //           }

    //           <div className="inputdiv">
    //             <h2 className="inputforname">
    //               {profiledata.firstname} {profiledata.lastname}
    //             </h2>
    //             <h2 className="inputforname">{profiledata.email}</h2>
    //           </div>
    //           <form>
    //             <input  controlId="formBasicEmail" className="formcontrol"
    //               onChange={(e) => setPhoto(e.target.files[0])}
    //               type="file"
    //               placeholder="choose a profile pic"
    //             />
    //             <Button onClick={addphoto}>Add Photo</Button>
    //           </form>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //     </Container>
    //   </div>
    // </div>
  );
}

export default Profile;
