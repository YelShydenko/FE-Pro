const posts = [
    {
        id: 1,
        title: 'First post',
        description: 'first description',
        isPermitted: false
    },
    {
        id: 2,
        title: 'Second post',
        description: 'Second description',
        isPermitted: true
    },
    {
        id: 3,
        title: 'Third post',
        description: 'Third description',
        isPermitted: true
    },
    {
        id: 4,
        title: 'Fourth post',
        description: 'Fourth description',
        isPermitted: false
    },
    {
        id: 5,
        title: 'Fifth post',
        description: 'Fifth description',
        isPermitted: true
    }
]

const postBtn = document.querySelector('.postBtn')
const postContainer = document.querySelector('.post__container')

postBtn.addEventListener('click', () => {
    posts.forEach((item) => {
        const postItem = document.createElement('div')
        postItem.classList.add('post__item')

        const postTitle = document.createElement('h3')
        postTitle.textContent = item.title;

        const postDescription = document.createElement('p')
        postDescription.textContent = item.description
        
        postItem.append(postTitle, postDescription)
        postContainer.append(postItem)
    })
})