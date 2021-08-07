// import { bodyChangeContent,bodyContent } from "./components/body.js";
// import { asideContent ,asideChangeContent,bodyChange} from "./components/aside.js";

let myArr=[];
const mainContainer =document.getElementById("root");
const bodyDiv=document.getElementById("bodydiv");
const asideDiv=document.getElementById("asidediv");
let url="https://aayushitripathi.github.io/blogjson/banner.json";
fetch(url)
.then((response)=>{
    // console.log(response.json());
    return response.json();
})
.then((myarray)=>{
   bodyMain(myarray);
   myArr=myarray;
//    bodyChange(myarray);
    // bodyMain(myarray);
    // return myarray
})


const bodyMain=(data)=>{
    // if(document.readyState == 'complete'){
        let someNumber=Math.random()*data.length;
        let indices=Math.floor(someNumber);
        // console.log(data[indices]);
        bodyContent(data[indices]);
        asideContent(data[indices].links);   
    }
const bodyChange=(event)=>{
    let num=event.target.id;
    console.log(myArr);
    for(i=0;i<=myArr.length;i++){
        if(myArr[i].id==num){
            let result=myArr[i];
            console.log(result.links);
            bodyChangeContent(result);
            asideChangeContent(result.links);

        }
    }
   
}
const bodyChangeContent=(props)=>{
    let title1=document.getElementById("title");
    title1.textContent=props.title;
    let image1=document.getElementById("image");
    image1.src=props.imageUrl;
    let para1=document.getElementById("para");
    para1.textContent=props.content;

}
const asideChangeContent=(props)=>{
    // let relatedLink1=document.getElementById("ids");
    asideDiv.innerHTML=" ";
    let heading=document.createElement("h5");
    heading.textContent="RELATED LINKS"
    asidediv.appendChild(heading);
    props.forEach(element => {
        relatedLinks=document.createElement("p");
        relatedLinks.textContent=element.title;
        console.log(relatedLinks.textContent);
        let ids=element.id;
        relatedLinks.id=`${ids}`;
        relatedLinks.setAttribute("onclick",`bodyChange(event)`);
        asideDiv.appendChild(relatedLinks);
        mainContainer.appendChild(asideDiv); 
    }); 
    // let relatedLink1=document.getElementById("ids");
    // relatedLink1.textContent=props.title;

}

const bodyContent=(props)=>{
    let title=document.createElement("h1");
    title.textContent=props.title;
    title.id="title";
    let imagediv=document.createElement("div");
    imagediv.classList.add("imagediv");
    let images=document.createElement("img");
    images.src=props.imageUrl;
    images.id="image";
    let para=document.createElement("p");
    para.textContent=props.content;
    para.id="para";
    imagediv.appendChild(images);
    bodyDiv.appendChild(title);
    bodyDiv.appendChild(imagediv);
    bodyDiv.appendChild(para);
    mainContainer.appendChild(bodyDiv);    
}


const asideContent=(props)=>{
    // let asidediv=document.createElement("div");
    // asidediv.classList.add("asidediv");
    let heading=document.createElement("h5");
    heading.textContent="Related Links"
    asidediv.appendChild(heading);
    props.forEach(element => {
        relatedLink=document.createElement("p");
        relatedLink.textContent=element.title;
        // console.log(relatedLink);
        let ids=element.id;
        relatedLink.id=`${ids}`;
        // console.log(relatedLink.id);
        relatedLink.setAttribute("onclick",`bodyChange(event)`);
        // console.log(relatedLink.id);
        asideDiv.appendChild(relatedLink);
        mainContainer.appendChild(asideDiv); 
    }); 
    return relatedLink;   
}



