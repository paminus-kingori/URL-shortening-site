const base = 'https://api.shrtco.de/v2/';

let input = document.querySelector('.search');
// console.log(input);
const submit = document.querySelector('.submit-btn');
// let original = document.querySelector('.original');
// let newLink = document.querySelector('.new')
const resultHolder = document.querySelector('.results-sect')


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
}

submit.addEventListener('click',()=>{

    fetch(`${base}shorten?url=${input.value}`)
.then(
    data =>{
        return data.json()
    })
.then((data) =>{
    console.log(data)
    console.log(`${data.result.full_short_link}`)
    console.log(`${data.result.original_link}`)

    // original.innerHTML = `${data.result.original_link}`;
    // newLink.innerHTML = `${data.result.full_short_link}`;

    creator(`${data.result.original_link}`,`${data.result.full_short_link}`)

})
.catch(
    (error)=>{
        alert("error")
    }
)
})

