const inputs = document.querySelectorAll('input');
const [user,pass,email,checkbox,button] = inputs;


// example1
// console.log(inputs)
inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        var [user,pass,email,button] = document.querySelectorAll('input'); // 
        
        // console.log(user.value)
        // console.log(email.value)
    })
})

// example2
console.log(button);
let getFormDatas=[];
checkbox.addEventListener('change',function(){
    if(checkbox.checked == false){
        console.log('unchecked',false)
    }else{
        console.log('checked',true)
    }
})

button.onclick=(e)=>{
    getFormDatas.push({
        username:user.value,
        password:pass.value,
        email:email.value,
        isChecked:checkbox.checked
    })
    console.log(getFormDatas)
    e.preventDefault();
}
