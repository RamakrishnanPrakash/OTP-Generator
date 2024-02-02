var otpBtn=document.getElementById('genarateOtp');
otpBtn.addEventListener('click',()=>{//add the event listner #genarateOtp
    activeContainer();
});

//This fuction was active the otp template to render otp value in second page 
function activeContainer(){
    var container=document.querySelector('.container');//Get the container class 
    var otp=gerateOtp();//call otp generator and this fuction return an array
    var result=`
    <div class="otp-container">
           
    <div class="input-container">
        <input type="text" id="input" value="${otp[0]}">
        <input type="text" id="input" value="${otp[1]}">
        <input type="text" id="input" value="${otp[2]}">
        <input type="text" id="input" value="${otp[3]}">
    </div>
    <p>Otp number was generated</p>

    <button id="exit">Exit</button>

</div>
    
    `;
    container.innerHTML=result;  //renter the result in container class

    //check the exit button in click  
    document.getElementById('exit').addEventListener('click',()=>{ 
        deactiveContainer();
    })
}
//This fuction active the first page 
function deactiveContainer(){

    var container=document.querySelector('.container');
    var result=`
    <div class="main">
            <h1 id="h1-tag">OTP Generator</h1>
            <button id="genarateOtp">Generate Otp</button>
        </div>    
    `;
    container.innerHTML=result;
     otpBtn=document.getElementById('genarateOtp');
    otpBtn.addEventListener('click',()=>{
        activeContainer();
    });

}


//This fuction are create random otp number
function gerateOtp(){
   var otp=[];
    for(i=1;i<=4;i++){
      otp.push(Math.floor(Math.random()*(10-0)+1));
     // console.log(otp);
    }
    return otp;
}