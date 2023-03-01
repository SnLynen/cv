window.onload = function getAge(){
    const date = new Date();
    const birth = new Date("2002/08/23");
    document.getElementById('age').textContent=Math.floor(Math.abs(date-birth)/31536000000);
}