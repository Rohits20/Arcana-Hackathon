import {React, useState} from 'react'
import {BsPersonCircle} from 'react-icons/bs';
import UploadFile from '../UploadProductInfo/UploadFile.css'

const Upload = () => {
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
        window.location.href=`/`
    }
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
  
  return (
  
    <div>
     <div className="topInsti">
                <div style ={{fontSize:'20px' , }}>
                    Insti marketplace
                </div>
                <div style={{width :"20vw"}}>
                </div>
                <div style ={{marginRight:'858px'}}>
                </div>
                <button onClick={logout} style={{height:'30px'}}>Logout</button>
                <BsPersonCircle size='23px'style={{marginLeft:'5vw', marginTop:'2px'}}/>
            </div>
            <div style= {{height:'1px' , backgroundColor: 'gray'}}>
            </div>

            <div>
            <section>
      <label className='LabelAddImage'>
        + Add Images
        <br />
        <span>up to 10 images</span>
        <input
        className='InputForImages'
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />


      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
          null
          // <button
          //   className="upload-btn"
          //   onClick={() => {
          //     console.log(selectedImages);
          //   }}
          // >
          //   UPLOAD {selectedImages.length} IMAGE
          //   {selectedImages.length === 1 ? "" : "S"}
          // </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  delete image
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
    </div>

  <div className='AllDataTable'>
 <div>
 <div className='SingleDataContainer'>
       <div>Name of product </div> 
      <div className='InputDataBox'>
        <input   placeholder="Bicycle , lamp etc..." rows="1" className="textInput" style={{width :"200px", fontSize:'15px'}}/>
      </div>
    </div>
    <div className='SingleDataContainer'>
       <div>Price of product </div> 
      <div className='InputDataBox'>
        <input   placeholder="₹999.99" rows="1" className="textInput" style={{width :"200px", fontSize:'15px'}}/>
      </div>
    </div>
    <div className='SingleDataContainer'>
       <div>Age of product </div> 
      <div className='InputDataBox'>
        <input   placeholder="14 months" rows="1" className="textInput" style={{width :"200px", fontSize:'15px'}}/>
      </div>
    </div>

    <div className='SingleDataContainer'>
       <div>Warranty period of product </div> 
      <div className='InputDataBox'>
        <input   placeholder="2 years" rows="1" className="textInput" style={{width :"200px", fontSize:'15px'}}/>
      </div>
    </div>

    <div className='SingleDataContainer'>
       <div>Descrition of product </div> 
      <div className='InputDataBox'>
        < textarea   placeholder="Brief summary about product" rows="1"  style={{width :"400px", fontSize:'14px', height:'70px'}}/>
      </div>
    </div>
 </div>
 {
  selectedImages.length > 0 &&  selectedImages.length < 11 ?
  <button
  className="upload-btn"
  onClick={() => {
    console.log(selectedImages);
  }}
>
  Upload {selectedImages.length} image{selectedImages.length === 1 ? "" : "s"} and data 
  
</button> 
: null
 }

  </div>

        
   </div>
  )
}

export default Upload
