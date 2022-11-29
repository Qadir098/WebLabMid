function Child(props) {



    return (
        <div >
            


<div>
{
props.leftobj.map((lines)=>(
<div>

<div style={{backgroundColor:'white',marginTop:'5px',borderRadius: '5px',
boxShadow: '#222831 0 0 2px',
borderCollapse: 'collapse',fontFamily:'sans-serif',height:'4vh'}}>
    <h6 style={{marginLeft:'1vw',paddingTop:'5px'}}>  <b>{lines.topdiv}</b></h6>
</div>

<div style={{marginBottom:'5px',backgroundColor:'white',borderRadius: '5px',
boxShadow: '#222831 0 0 2px',
borderCollapse: 'collapse',fontFamily:'sans-serif'}}>

<div style={{marginLeft:'1vw',color:'#1597E5'}}><b>{'>'}</b> </div>   <h6 style={{marginLeft:'2vw',marginTop:'-20px'}}>  {lines.lineone}</h6>

<div style={{marginLeft:'1vw',color:'#1597E5'}}><b>{'>'}</b> </div> <h6 style={{marginLeft:'2vw',marginTop:'-20px' }}>  {lines.linetwo}</h6>
<div style={{marginLeft:'1vw',color:'#1597E5'}}><b>{'>'}</b> </div> <h6 style={{marginLeft:'2vw',marginTop:'-20px' }}>  {lines.linethree}</h6>
<div style={{marginLeft:'1vw',color:'#1597E5'}}><b>{'>'}</b> </div> <h6 style={{marginLeft:'2vw',marginTop:'-20px' }}>  {lines.linefour}</h6>

<br></br>
</div>

</div>
))}

</div>



        </div>
      );
}

export default Child;