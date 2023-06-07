const checkboxContainer = document.getElementById('checkboxContainer')

function shuffleValues(){
    const items = document.getElementsByTagName('input')
    const itemsArray = Array.from(items);
    itemsArray.sort(() => {
        return 0.5 - Math.random();
    })

    checkboxContainer.innerHTML = '';
    itemsArray.forEach((checkbox) => {
        let clonedCheckbox = checkbox.cloneNode(true);
        let label = document.createElement('label');
        label.appendChild(clonedCheckbox);
        label.appendChild(document.createTextNode(checkbox.nextSibling.textContent));
        label.style.display = "block"
        checkboxContainer.appendChild(label);
    });
}


function changeValues(){
    const elements = document.getElementsByTagName('input')
    const elementsArray = Array.from(elements);
    const newValues = ["Winter", "Spring", "Summer", "Fall"]

    checkboxContainer.innerHTML = '';

    elementsArray.forEach((elem, index) => {
        elem.value = newValues[index]
        let label = document.createElement('label')
        label.appendChild(elem)
        label.appendChild(document.createTextNode(elem.value))
        label.style.display = "block"
        checkboxContainer.appendChild(label)
    })
}



function showSelected(){
    const checkboxes = document.getElementsByTagName('input')
    const checkboxesArray = Array.from(checkboxes);
    const itemsSelected = []
    checkboxesArray.forEach((elem) => {
        if (elem.checked) {
            const clonedElem = elem.cloneNode(true)
            itemsSelected.push(clonedElem);
        }
    })

    checkboxContainer.innerHTML = '';

    itemsSelected.forEach((elem) => {
        let label = document.createElement('label')
        label.appendChild(elem)
        label.appendChild(document.createTextNode(elem.value))
        label.style.display = "block"
        checkboxContainer.appendChild(label)
    })
}


