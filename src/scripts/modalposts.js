import { posts } from "./database.js"

export function renderModal(postId){
    let postCard = {}
    
    for(let i = 0; i < posts.length; i++){
        if(postId == posts[i].id){
            postCard = posts[i]
           
        }
    }
     
    const cardModal = document.querySelector('.modal__container')
    const photoModal = document.createElement('div')
    const nameJobModal = document.createElement('div')
    const divModal  = document.createElement('div')
    const textAlineModal= document.createElement('div')
    const imgModal = document.createElement('img')
    const userModal = document.createElement('h3')
    const stackModal = document.createElement('p')
    const titleModal = document.createElement('h2')
    const textModal = document.createElement('p')
    const buttonClose = document.createElement('button')
    
    cardModal.classList.add ('list-modal__card')
    divModal.classList.add ('organize-modal__card')
    photoModal.classList.add ('perfil-modal__card')
    nameJobModal.classList.add ('name-modal__card')
    textAlineModal.classList.add ('text-aline-modal__card')
    buttonClose.classList.add ('close-modal__card')

    imgModal.src = postCard.img
    userModal.innerText = postCard.user
    stackModal.innerText = postCard.stack
    titleModal.innerText = postCard.title
    textModal.innerText = postCard.text
    buttonClose.innerText = 'x'
    
    cardModal.appendChild(buttonClose)
    cardModal.appendChild(divModal)
    cardModal.appendChild(photoModal)
    cardModal.appendChild(nameJobModal)
    cardModal.appendChild(textAlineModal)
   
    divModal.append (photoModal, nameJobModal)
    photoModal.append (imgModal)
    nameJobModal.append (userModal, stackModal)
    textAlineModal.append (titleModal, textModal)

    return cardModal
}



 export function handleModal() {
    const modalContainer = document.querySelector(".modal__container");
    const buttons = document.querySelectorAll(".see-more-button__card");
  
    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i]

        button.addEventListener("click", function(event) {
            modalContainer.innerHTML = ''

            const modalcontent = renderModal(event.target.dataset.postId)
            
            console.log(modalcontent)
            modalContainer.showModal()
            closeModal()
        });
    }

}

export function closeModal(){
    const modalContainer = document.querySelector(".modal__container");
    const button = document.querySelector(".close-modal__card");

    button.addEventListener("click", function(){
        modalContainer.close()
    })
}
