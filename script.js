let myLibrary = []

function Book(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
}

const addBook = () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = parseInt(document.getElementById("year").value);
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("read").checked;

    if (title.length == 0 || author.length == 0 || isNaN(pages) || isNaN(year)) {
        alert("Add all values!");
        return;
    }

    myLibrary.push(new Book(title, author, year, pages, read));
    refreshShelf();
}

const refreshShelf = () => {

    while (document.getElementById("shelf").childElementCount != 0) {
        document.getElementById("shelf").removeChild(document.getElementById("shelf").firstChild);
    }

    for (book of myLibrary) {
        // Creating the HTML Elements.
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let author = document.createElement('h4');
        let year = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('button');

        // Setting the values.
        title.innerText = book.title;
        author.innerText = book.author;
        year.innerText = book.year;
        pages.innerText = book.pages + " pages";
        read.textContent = book.read;

        // Set read button to change read status.
        read.addEventListener("click", () => {
            book.read = !book.read;
            read.textContent = book.read;
        })

        // Append all elements.
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(year);
        div.appendChild(pages);
        div.appendChild(read);

        // Add to document.
        document.getElementById("shelf").appendChild(div);
    }
}

window.onload = () => {
    document.getElementById("add").addEventListener("click", () => {
        addBook();
    })
};