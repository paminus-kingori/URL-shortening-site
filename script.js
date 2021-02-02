const base = 'https://api.shrtco.de/v2/';

let input = document.querySelector('.search');
const submit = document.querySelector('.submit-btn');
let copyButton = document.querySelectorAll('.copy')
const resultHolder = document.querySelector('.results-sect')
const spinnerImage = document.createElement('img')
const alertLbl = document.querySelector(".alert-lbl");
spinnerImage.src = 'images/spinner.svg';
spinnerImage.setAttribute('class','spinner')
// let i = 0;

// const newLinkArray = [];
//  const origiArray = [];
//  const btnArray = [];
//  const barArray = [];

const copyToClipboard = (str,cpy) => {
    const el = document.createElement('textarea');
    el.value = str.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    cpy.textContent = "Copied!";
}

const creator = (ori,shorti) =>{
        const resBar = document.createElement("div")


        const originalLink = document.createElement("article")
        const newLink = document.createElement("article")
        const copyBtn = document.createElement("button")

        resBar.setAttribute("class","result-bar")
        originalLink.setAttribute("class","original")
        newLink.setAttribute("class","new")
        copyBtn.setAttribute("class","copy")

        copyBtn.textContent= "Copy";
        originalLink.textContent = ori;
        newLink.textContent = shorti;

        resultHolder.appendChild(resBar);
        resBar.appendChild(originalLink);
        resBar.appendChild(newLink);
        resBar.appendChild(copyBtn);

copyBtn.addEventListener("click", () =>{
    const el = document.createElement('textarea');
    el.value = newLink.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    copyBtn.textContent = "Copied!";
    copyBtn.style.background = "#25233a";
});
}

submit.addEventListener('click',()=>{

    if(input.value==""){
        input.classList.add('alertMessage')
        alertLbl.style.display = "block";

    }
    else{
        alertLbl.style.display = "none";
    input.classList.remove('alertMessage')
    submit.appendChild(spinnerImage);
    fetch(`${base}shorten?url=${input.value}`)
        .then(
            data =>{
                return data.json()
            })
        .then((data) =>{
            creator(`${data.result.original_link}`,`${data.result.full_short_link}`)
            submit.removeChild(spinnerImage)
         //  sessionStorage.setItem("nLink",`${data.result.full_short_link}`);
           // sessionStorage.setItem("oriLink",`${data.result.original_link}`);
        //     origiArray[i] = sessionStorage.getItem("oriLink");
        //     newLinkArray[i] = sessionStorage.getItem("nLink");
        //     // i++;
        //    console.log("Success")
        //    save();


        })
        .catch(
            (error)=>{
                submit.removeChild(spinnerImage)
                alert("Invalid URL, please try again.")
            }
        )}
}
)
// function save(){
       
//         console.log(origiArray[0])
//     console.log("save ftn")
// }


// console.log(sessionStorage.getItem("oriLink"))
