
export function render(array){
    const mainList = document.querySelector('.main__list')

    mainList.innerHTML = ''

    for(let i = 0; i < array.length; i++){
        const posts = array [i]

        const cardPost = createPosts(posts)

        mainList.appendChild(cardPost)
    }
}

function createPosts(posts){
    const cardPost = document.createElement('li')
    const photoPost = document.createElement('div')
    const nameJobPost = document.createElement('div')
    const divPost = document.createElement('div')
    const textAlinePost = document.createElement('div')
    const imgPost = document.createElement('img')
    const userPost = document.createElement('h3')
    const stackPost = document.createElement('p')
    const titlePost = document.createElement('h2')
    const textPost  = document.createElement('p')
    const alineButtonPost = document.createElement('div')
    const buttonSeeMore = document.createElement('button')
    const buttonLike = document.createElement('button')
    const imgLike = document.createElement('img')

    cardPost.classList.add ('list__card')
    divPost.classList.add ('organize__card')
    photoPost.classList.add ('perfil__card')
    nameJobPost.classList.add ('name-job__card')
    textAlinePost.classList.add ('text-aline-post__card')

    buttonSeeMore.classList.add  ('see-more-button__card')
    buttonSeeMore.dataset.postId = posts.id
    buttonLike.classList.add ('like-button__card')
    imgLike.classList.add ('img-like__card')
    alineButtonPost.classList.add ('aline-button__card')
    
    imgPost.src  = posts.img
    userPost.innerText = posts.user
    stackPost.innerText = posts.stack
    titlePost.innerText  = posts.title
    textPost.innerText  = posts.text
    buttonSeeMore.innerText = "Abrir Post"
    imgLike.src = "./src/assets/img/heart.svg.svg"
    buttonLike.innerText = posts.likes 

    cardPost.appendChild (divPost)
    cardPost.appendChild (photoPost)
    cardPost.appendChild (nameJobPost)
    cardPost.appendChild (textAlinePost)
    cardPost.appendChild (alineButtonPost)

    divPost.append (photoPost, nameJobPost)
    photoPost.append (imgPost)
    nameJobPost.append (userPost, stackPost)
    textAlinePost.append (titlePost, textPost)
    alineButtonPost.append (buttonSeeMore,imgLike,buttonLike)
  
return cardPost

}

