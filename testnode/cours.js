var postsElt = document.getElementById("posts");
ajaxGet("https://jsonplaceholder.typicode.com/posts", function (reponse) {
    var posts = JSON.parse(reponse);
    posts.forEach(function (post) {
        var titleElt = document.createElement("h2");
        titleElt.textContent = post.title;
        var contentElt = document.createElement("p");
        contentElt.textContent = post.body;
        postsElt.appendChild(titleElt);
        postsElt.appendChild(contentElt);
    });
});
