const base = 'https://api.shrtco.de/v2/';

let input = document.querySelector('.search');
const submit = document.querySelector('.submit-btn');
let copyButton = document.querySelectorAll('.copy')
const resultHolder = document.querySelector('.results-sect')
const spinnerImage = document.createElement('img')
spinnerImage.src = 'images/spinner.svg';
spinnerImage.setAttribute('class','spinner')

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

    submit.appendChild(spinnerImage);

    fetch(`${base}shorten?url=${input.value}`)
.then(
    data =>{
        return data.json()
    })
.then((data) =>{
    creator(`${data.result.original_link}`,`${data.result.full_short_link}`)
    submit.removeChild(spinnerImage)
})
.catch(
    (error)=>{
        submit.removeChild(spinnerImage)
        alert("Invalid URL, please try again.")
    }
)
})
