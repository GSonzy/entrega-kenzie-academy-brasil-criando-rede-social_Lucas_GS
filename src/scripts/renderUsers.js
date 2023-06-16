export function renderUsers(arrayUsers){
    const boxPost = document.querySelector('.box-post__container')

    boxPost.innerHTML = ''

    for(let i = 0; i < arrayUsers.length; i++){
        const users = arrayUsers [0]

        const controlUser  = createUsers(users)

        boxPost.appendChild(controlUser)
       break
    }
}

function createUsers(users){
    const controlUser = document.createElement('div')
    const userImg = document.createElement('img')
    const moviePhotoUser = document.createElement('div')
    const movieStatusUser = document.createElement('div')
    const nameUser = document.createElement('h3')
    const stackUser = document.createElement('p')
    const postUser  = document.createElement('input')
    const discripUser  = document.createElement('textarea')
    const buttonSendPost = document.createElement('button')

    controlUser.classList.add ('box-post__controller')
    userImg.classList.add ('img-user__post')
    moviePhotoUser.classList.add ('movie-photo__post')
    movieStatusUser.classList.add('movie-status__post')
    nameUser.classList.add ('name-user__post')
    stackUser.classList.add ('stack-user__post')
    postUser.classList.add ('box-post__title')
    discripUser.classList.add ('box-post__discription')
    buttonSendPost.classList.add ('button__post')

    userImg.src = users.img
    nameUser.innerText = users.user
    stackUser.innerText = users.stack
    buttonSendPost.innerText = 'Postar'
    
    controlUser.appendChild (moviePhotoUser)
    controlUser.appendChild (movieStatusUser)
    moviePhotoUser.append (userImg, movieStatusUser)
    movieStatusUser.append (nameUser, stackUser)
    controlUser.append (postUser, discripUser, buttonSendPost)
    
return controlUser
}
