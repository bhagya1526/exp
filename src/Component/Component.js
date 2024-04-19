import React from 'react'
import Fileinput from './fileinput.js'
import Color from './color.js'
const Component = () => {
  return (
    <div className='m-10 pr-10 pl-10 py-3'>
        <form>
            <div className="heading">
                <p className='text-3xl text-center font-semibold m-0'>Ad Customization</p><br/>
                <p className='text-gray-300 text-center relative top-[-20px] '>Customize your ad and get the templates accordingly</p>
            </div>
            <div className="bg-white w-98 h-17 m-10 p-1 pl-3 shadow-lg rounded-lg">
                <label for="caption" className='text-gray-300 mr-4'>Change the ad creative image</label><Fileinput />
            </div>
            <div class="flex items-center">
               <div class="flex-1 border-t-2 border-gray-200"></div>
               <span class="px-3 text-gray-500 bg-white">Edit Contents</span>
               <div class="flex-1 border-t-2 border-gray-200 w-2"></div>
            </div>
            <div className="bg-white w-98 h-17 m-10 p-1 pl-3 shadow-lg rounded-lg">
                <label for="caption" className='text-gray-300'>Ad Content</label><br/>
                <div className="pl-3 pr-3"><input className=" w-full border-none outline-none" type="text" placeholder="1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs" name="caption" id="captioning" /></div>
            </div>
            <div className="bg-white w-98 h-17 m-10 p-1 pl-3 shadow-lg rounded-lg">
                <label for="caption" className='text-gray-300'>CTA</label><br/>
                <div className="pl-3 pr-3"><input type="text" className="w-full border-none outline-none" style={{color:'black'}} placeholder="Contact Us" name="caption" id="captioning"/></div>
            </div>
            <div className="bg-white w-98 h-17 m-10 p-1 pl-3">
                <label for="caption" className='text-gray-300'>Choose Your Color</label><br/>
               <Color />
            </div>
        </form>
    </div>
  )
}

export default Component