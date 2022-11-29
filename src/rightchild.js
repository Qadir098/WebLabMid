function Rightchild(props) {





//     const handler=(li2)=>{

//     const update= props.myright.filter((li2)=>(
// li2.line !=line


//     ))
//     }

//     props.mysetright(update)
    
    return (
<div>
    {props.myright.map((line)=>(

        <div>


    
       <h6 style={{fontSize:'8', color:'red'}}><b>{line.topdiv}</b> </h6>
        
 <div style={{width:'15vw',height:'18vh',borderRadius: '5px',
boxShadow: '#222831 0 0 2px',
borderCollapse: 'collapse',fontFamily:'sans-serif'}}>

      <h6 style={{color:'red',marginLeft:'1vw'}}><b>{line.lineone}</b> </h6> 
      <h6 style={{marginLeft:'1vw'}}> <b>{line.linetwo}</b></h6> 
      <h6 style={{marginLeft:'1vw'}}> {line.linethree}</h6> 
      <h6 style={{marginLeft:'1vw'}}>{line.linefour} </h6> 

      {/* <button onClick = {()=> handler (line.li2)}>delete</button> */}
        </div>








        </div>
    
    ))}

</div>



      );
}

export default Rightchild;