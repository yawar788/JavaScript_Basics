// Using XMLHttpRequest method instead of modern fetch
const requestUrl='https://api.github.com/users/yawar788';
const xhr=new XMLHttpRequest();
xhr.open('GET',requestUrl);
xhr.onreadystatechange=function(){
  console.log(xhr.readyState);
  if(xhr.readyState===4){
    const data= this.responseText;
    const obj = JSON.parse(data);
    console.log(typeof obj);
    console.log(obj.followers)
  }
}
xhr.send();
