import React, { useState } from 'react'
import hair1 from "../hairs/hair1.png";
import hair2 from "../hairs/hair2.png";
import hair3 from "../hairs/hair3.png";
import hair4 from "../hairs/hair4.png";
import hair6 from "../hairs/hair6.png";
import hair7 from "../hairs/hair7.png";
import hair9 from "../hairs/hair9.png";
import hair10 from "../hairs/hair10.png";
import { FileUploader } from "react-drag-drop-files";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const fileTypes = ["JPG", "PNG", "GIF"];

const ImageContain = () => {
    const images = [hair1, hair2, hair3, hair4, hair6, hair7, hair9, hair10]

    const [img, setImg] = useState("")
    const [file, setFile] = useState(null);

    const handleImg = (e) => {
        console.log(e.target.src)
        setImg(e.target.src)
    }

    const handleImgChange = (file) => {
        setFile(file);
        setFile(URL.createObjectURL(file))
    };

    const handleCaptureClick = async () => {
        if (!file) {
            return
        }
        const imgTodownload = document.querySelector('.imgdownload');
        if (!imgTodownload) return;

        const canvas = await html2canvas(imgTodownload);

        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, 'download.png', 'image/png');
    };

    return (
        <>
            <div className='flex  justify-center imgdownload'>
                {img === "http://localhost:3000/static/media/hair1.5d29b19925c3b7a9c0f3.png" && <img src={img} alt="" height={100} width="220px" className='z-10 absolute mt-[-13px] mr-[-13px]' />}

                {img === "http://localhost:3000/static/media/hair2.68849e8943a9bf18ee46.png" && <img src={img} alt="" height={100} width="290px" className='z-10 absolute mt-[-85px] mr-[10px]' />}

                {img === "http://localhost:3000/static/media/hair3.d3405d3f3f921e9cac87.png" && <img src={img} alt="" height={100} width="400px" className='z-10 absolute mt-[-80px] mr-[-10px]' />}

                {img === "http://localhost:3000/static/media/hair4.aa22dbe497ace267b64a.png" && <img src={img} alt="" height={100} width="250px" className='z-10 absolute mt-[-25px] mr-[-15px]' />}

                {img === "http://localhost:3000/static/media/hair6.7ad6bdf87a7eb5c795a3.png" && <img src={img} alt="" height="176px" width="268px" className='z-10 absolute mt-[-26px] mr-[7px]' />}

                {img === "http://localhost:3000/static/media/hair7.ac1eda8703bf5a9e6c73.png" && <img src={img} alt="" height="181px" width="282px" className='z-10 absolute mt-[-16px] mr-[-10px]' />}

                {img === "http://localhost:3000/static/media/hair9.b420dc1e63652c0f3df1.png" && <img src={img} alt="" height={100} width="360px" className='z-10 absolute mt-[-55px] mr-[2px]' />}

                {img === "http://localhost:3000/static/media/hair10.c492709e9a9c20198ac9.png" && <img src={img} alt="" height={100} width="220px" className='z-10 absolute mt-[-13px] mr-[-13px]' />}
                <div className='h-[300px] w-[300px]'>
                    {!file && <FileUploader handleChange={handleImgChange} name="file" types={fileTypes} />}

                    {file && <img className='border border-gray-950' src={file} alt="" width={300} height={300} />}
                </div>
            </div>
            <button class={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 ${!file ? "cursor-not-allowed" : ""}`} onClick={handleCaptureClick}>
                Download
            </button>
            <div className='flex mt-2 justify-around border flex-wrap border-black p-12'>
                {images.map((imgs) =>
                    <img src={imgs} alt="hairs" key={imgs} height={100} width={100} className='border border-gray-700 cursor-grab active:cursor-grabbing' onClick={handleImg} draggable={true} />
                )}
            </div>
        </>
    )
}

export default ImageContain
