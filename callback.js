const posts = [
    {title: 'Post one', body: 'this is Post one'},
    {title: 'Post two', body: 'this is Post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost = ({ title: 'post Three', body: 'This is post'}, getPosts);
