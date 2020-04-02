// const { id, name, username, mail, address, phone, website, company } = users

let users = [
    {
        "title": "addBookToStorage",
        "desc": "addBookToStorage",
        "notes": "addBookToStorage",
        "read": true,
        "bookmark": false,
        "bookmarked": "",
        "image": "",
        "catalogue": "My Library"
    },
    {
        "title": "addBookToStoragex",
        "desc": "addBookToStorage",
        "notes": "addBookToStorage",
        "read": true,
        "bookmark": false,
        "bookmarked": "",
        "image": "",
        "catalogue": "My Library"
    },
    {
        "title": "asdasd",
        "desc": "catalogueasdasd",
        "notes": "asdasdasdasd",
        "read": true,
        "bookmark": false,
        "bookmarked": "",
        "image": "",
        "catalogue": "Wishlist"
    }
]

const htmlGenerator = (getData)=>{
    var output = `
    <ul>
    <li>${getData.title}</li>
    </ul>
    `;
    console.log(output)
    // document.body.innerHTML += output;
}

users.forEach(user => {
    // const {...rest} = user
    const { title, desc, notes } = user
    //console.log("obj", title, desc, notes)
    htmlGenerator(user)
})

users.map((user)=>{
    const {...rest} = user
    console.log(rest);
});


