import React,{useContext} from 'react';
import {GrRotateLeft,GrRotateRight} from 'react-icons/gr';
import {CgMergeVertical,CgMergeHorizontal} from 'react-icons/cg';
import {IoIosImage} from 'react-icons/io';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import DataContext from '../context/Datacontext';
import './Editimage.scss';

const Main = () => {
    const {details,setDetails,crop,setCrop,image,inputHandle,handleImage,FilterElement,property,setProperty,leftRotate,rightRotate,verticalFlip,horizentalFlip,imageCrop,saveImage} = useContext(DataContext);
  return (
    <div className='imageEditor'>
        <div className='card'>
            <div className='card_header'>
                <h2>صورة الاعلان</h2>
            </div>
            <div className='card_body'>
                <div className='sidebar'>
                     <div className='sidebody'>
                        <div className='filter_section'>
                            <span>الفلاتر</span>
                            <div className='filter_key'>
                                {
                                    FilterElement.map((item,index) => 
                                    <button key={index}
                                            className={property.name === item.name ? 'active' : ''} 
                                            onClick={()=>setProperty(item)}>
                                        {item.name}
                                    </button>
                                    )
                                } 
                            </div> 
                        </div>
                        <div className='fltier_slider'>
                                <div className='label_bar'>
                                    <label htmlFor='range'>{property.name}</label>
                                    <span>{image[property.name]}%</span>
                                </div>
                                <input name={property.name} onChange={inputHandle} value={image[property.name]} max={property.maxValue} type="range"/>
                        </div>
                        <div className='rotate'>
                                <label htmlFor=''>قلب الصورة</label>
                                <div className='icon'>
                                    <div onClick={leftRotate}>
                                        <GrRotateLeft/>
                                    </div>
                                    <div onClick={rightRotate}>
                                        <GrRotateRight/>
                                    </div>
                                    <div onClick={horizentalFlip}>
                                        <CgMergeHorizontal/>
                                    </div>
                                    <div onClick={verticalFlip}>
                                        <CgMergeVertical/>
                                    </div>
                                </div>
                        </div> 
                    </div>
                    <div className='reset'>
                        <button style={{marginBottom:'25px'}} onClick={saveImage }>
                            ارسال الصورة
                        </button>
                    </div> 
                </div>
                <div className='Image_section'>
                    <div className='Image'>
                        {
                            image.image ? 
                            <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
                                <img onLoad={(e) => setDetails(e.currentTarget)} style={{
                                filter:`brightness(${image.brightness}%) 
                                grayscale(${image.GrayScale}%) 
                                contrast(${image.Contrast}%) 
                                sepia(${image.Sepia}%) 
                                saturate(${image.Saturate}%) 
                                `,
                                // hue-Rotate(${image.hueRotate} deg)
                                transform:`rotate(${image.rotate}deg) scale(${image.vertical},${image.horizotal})`
                            }} src={image.image} alt=''/>
                            </ReactCrop> :
                            <label htmlFor='choose'>
                            <IoIosImage/>
                            <span>ادخل الصورة</span>
                        </label> 
                        }
                        
                    </div>
                    <div className='Image_select'>
                        {
                            details && <button onClick={imageCrop} className='crop'>
                                اقتصاص
                            </button>
                        }
                        <label htmlFor='choose' style={{fontSize:'12px'}}>تبديل الصورة</label>
                        <input onChange={handleImage} type='file' id='choose'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main