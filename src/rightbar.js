import { useState } from "react";
import Rightchild from "./rightchild";


function Rightbar() {



    const [rightsidebar,setRightsidebar] = useState([ 
        { topdiv:'Stumps',linetwo:'England                  (75ov) 349/1 ',linethree:'England lions',linefour:'day 2 lions trial '},
        { lineone:'innings break',linetwo:'Southern Punjab(Pakistan)        (74.3ov) 270/3 ',linethree:'central Punjab(pakistan)'
        ,linefour:'central punjab choose to field'},

      
    ]
        );
    return ( 
<div>

<Rightchild myright={rightsidebar} mysetright={setRightsidebar}/>



</div>


     );
}

export default Rightbar;