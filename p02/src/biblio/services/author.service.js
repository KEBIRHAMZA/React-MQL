import authors from "../data/authors";


export default function getAllAuthors() {
    return new Promise((resolve) => {
        resolve(authors);
    })
}
