export function renderSuggest(arraySuggest){
    const suggestList = document.querySelector('.list-suggestion__aside')

    suggestList.innerHTML = ''

    for(let i = 0; i < arraySuggest.length; i++){
        const suggestUsers = arraySuggest [i]

        const cardSuggest  = createSuggestion(suggestUsers)
        
       suggestList.appendChild(cardSuggest)
    }
}

function createSuggestion(suggestUsers){
    const cardSuggest = document.createElement('li')
    const photoSuggest = document.createElement('div')
    const nameJobSuggest = document.createElement('div')
    const divSuggest = document.createElement('div')
    const imgSuggest = document.createElement('img')
    const userSuggest = document.createElement('h3')
    const stackSuggest = document.createElement('p')
    const buttonFollow = document.createElement('button')
    
    cardSuggest.classList.add ('list-suggest__card')
    divSuggest.classList.add ('organize-suggest__card')
    photoSuggest.classList.add ('perfil-suggest__card')
    nameJobSuggest.classList.add ('name-suggest__card')
    buttonFollow.classList.add ('follow-button__card')

    imgSuggest.src  = suggestUsers.img
    userSuggest.innerText  = suggestUsers.user
    stackSuggest.innerText = suggestUsers.stack
    buttonFollow.innerText = "Seguir"
    
    cardSuggest.appendChild(divSuggest)
    cardSuggest.appendChild(photoSuggest)
    cardSuggest.appendChild(nameJobSuggest)

    divSuggest.append  (photoSuggest, nameJobSuggest)
    photoSuggest.append (imgSuggest)
    nameJobSuggest.append (userSuggest, stackSuggest)
    cardSuggest.append (buttonFollow)
    
return cardSuggest

}

