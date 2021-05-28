
function login(){
  // body...
  // pass uname
  const uname = document.getElementById("uname").value;
const pass = document.getElementById("pass").value;

  if(uname=="swap" && pass=="1234"){
   Swal.fire(
  'login success!',
  'You clicked the button!',
  'success'
)
  }
  else{
   Swal.fire(
  'login fail!',
  'You clicked the button!',
  'warning'
)
  }
  
}