
import { useState } from "react";
import Child from "./child";

function Sidebar() {




    const [leftsidebar,setleftsidebar] = useState([ 
        { topdiv:'Quick Links', lineone:'T20 Time Out',linetwo:'T20 Time Out',linethree:'Fantacy Pick',linefour:'ICC Ranking'},
        { topdiv:'ESPN Crick Apps', lineone:'Android Apps',linetwo:'iOS App',linethree:'...',linefour:'...'},
        { topdiv:'Follow CrickInfo App', lineone:'Instagram',linetwo:'Twitter',linethree:'Facebook',linefour:'Youtube'},
        { topdiv:'ESPN sites', lineone:'the cricket monthly',linetwo:'ESPN',linethree:'...',linefour:'...'}
    ]
        );

    return ( 

        <div>
            
            <Child leftobj={leftsidebar} leftfun={setleftsidebar}/>
        
        </div>
     );
}

export default Sidebar;