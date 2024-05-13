import React from 'react'
import list from "../../public/list.json"

function Freebook() {
    const filterdata = list.filter((data) => data.category === "sport");
   
  return (
    
<>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        
      </div>
    </>

     
  ) 
}

export default Freebook