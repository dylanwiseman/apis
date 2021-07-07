// const { default: axios } = require("axios")


const getResidentsBtn = document.querySelector("#getres")

const btnClick = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then((res) => {
        let residents = res.data.results[0].residents
        console.log(residents)
        for (i in residents) {
            axios.get(residents[i]).then((res) => {
                let h2 = document.createElement('h2')
                let div = document.createElement('div')
                document.body.appendChild(div).appendChild(h2).textContent = res.data.name
            })
        }

    })
}

getResidentsBtn.addEventListener('click',btnClick)