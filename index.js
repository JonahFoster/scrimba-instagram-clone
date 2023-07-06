const posts = [
    {
        name: "Darth Vader",
        username: "chosen1",
        location: "Death Star",
        avatar: "images/darthvaderheadshot.jpg",
        image: "images/darthvaderpost.jpg",
        caption: "#TBT",
        likes: 21,
        isLiked: false,
    },
    {
        name: "Han Solo",
        username: "smugglin50",
        location: "Space",
        avatar: "images/hansoloheadshot.jpg",
        image: "images/milleniumfalconpost.jpg",
        caption: "just made the kessel run in under 12 parsecs 😎",
        likes: 4,
        isLiked: false,
    },
        {
        name: "Count Dooku of Serenno",
        username: "tyranus02",
        location: "Carannia, Serenno",
        avatar: "images/dookuheadshot.jpg",
        image: "images/dookupost.jpg",
        caption: "Wtm? Might start a civil war later idk yet tho",
        likes: 152,
        isLiked: false,
    }
]
// Preload like images
const heartRegular = new Image();
heartRegular.src = "images/heart-regular.svg";
const heartHover = new Image();
heartHover.src = "images/heart-hover.svg";

const postSection = document.getElementById('post-section')

// Build each post in posts array
for (let i = 0; i < posts.length; i++) {
    // create elements
    const postDiv = document.createElement('div');
    const userInfoDiv = document.createElement('div');
    const avatarImg = document.createElement('img');
    const postNameP = document.createElement('p');
    const postImg = document.createElement('img');
    const postIconsDiv = document.createElement('div');
    const likeImg = document.createElement('img');
    const commentImg = document.createElement('img');
    const shareImg = document.createElement('img');
    const postLikesP = document.createElement('p');
    const postCaptionP = document.createElement('p');
    
    // set attributes and content
    postDiv.className = "post";
    userInfoDiv.className = "user-info";
    avatarImg.className = "avatar";
    avatarImg.src = posts[i].avatar;
    postNameP.className = "post-name";
    postNameP.innerHTML = `<b>${posts[i].name}</b><br>${posts[i].location}`;
    postImg.className = "post-img";
    postImg.id = `post-img-${i}`;
    postImg.src = posts[i].image;
    postIconsDiv.className = "post-icons";
    likeImg.className = "post-icon like-img";
    likeImg.src = "images/heart-regular.svg";
    commentImg.className = "post-icon comment-img";
    commentImg.src = "images/comment-regular.svg";
    shareImg.className = "post-icon share-img";
    shareImg.src = "images/share-regular.svg";
    postLikesP.className = "post-likes";
    postLikesP.id = `post-likes-${i}`;
    postLikesP.innerText = `${posts[i].likes} likes`;
    postCaptionP.className = "post-caption";
    postCaptionP.innerHTML = `<b>${posts[i].username}</b> ${posts[i].caption}`;
    
    // append child elements to parents
    userInfoDiv.appendChild(avatarImg);
    userInfoDiv.appendChild(postNameP);
    postIconsDiv.appendChild(likeImg);
    postIconsDiv.appendChild(commentImg);
    postIconsDiv.appendChild(shareImg);
    postDiv.appendChild(userInfoDiv);
    postDiv.appendChild(postImg);
    postDiv.appendChild(postIconsDiv);
    postDiv.appendChild(postLikesP);
    postDiv.appendChild(postCaptionP);
    postSection.appendChild(postDiv);
    
    // add double-click event listener to post image
    postImg.addEventListener('dblclick', function() {
        if (posts[i].isLiked === true) {
            posts[i].likes -= 1
            likeImg.src = heartRegular.src;
        } else {
            posts[i].likes += 1
            likeImg.src = heartHover.src;
        }
        posts[i].isLiked = !posts[i].isLiked;
        postLikesP.innerText = `${posts[i].likes} likes`;
    });
    
    // add click event listener to like image
    likeImg.addEventListener('click', function() {
        if (posts[i].isLiked === true) {
            posts[i].likes -= 1
            likeImg.src = heartRegular.src;
        } else {
            posts[i].likes += 1
            likeImg.src = heartHover.src;
        }
        posts[i].isLiked = !posts[i].isLiked;
        postLikesP.innerText = `${posts[i].likes} likes`;
    })
}
