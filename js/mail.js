const firebaseConfig = {
    apiKey: "AIzaSyC2M4vQy_1x9T8qcxweI9FzFeaFJflEar4",
    authDomain: "dairypure-11ca8.firebaseapp.com",
    databaseURL: "https://dairypure-11ca8-default-rtdb.firebaseio.com",
    projectId: "dairypure-11ca8",
    storageBucket: "dairypure-11ca8.appspot.com",
    messagingSenderId: "376330821297",
    appId: "1:376330821297:web:321de11a6f091305858c90"
  };
//initialize firebase
  firebase.initializeApp(firebaseConfig);

//reference for database
var DairyPureDB=firebase.database().ref('DairyPure');

document.getElementById("223565184554461").addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name=getElementVal('first_20');
    var ph_no = getElementVal('input_19_full');
    var email = getElementVal('input_23');
}
const getElementVal = (id) =>{
   return document.getElementById(id).value; 
}