class livro{
#titulo;
#autor;
#disponivel;
constructor(titulo,autor){
    this.#autor = autor;
    this.#titulo = titulo;
    this.#disponivel = true;}

emprestar() {
    if(this.#disponivel){
        this.#disponivel = false;
        console.log(`Livro ${this.#titulo} emprestado com sucesso`);
    } else {
        console.log(`livro ${this.#titulo} ja está emprestado atualmente`);
    }
}

devolver(){
    if(!this.#disponivel){
        this.#disponivel = true;
        console.log(`Livro ${this.#titulo} foi devolvido`)
    } else {
        console.log(`Livro ${this.#livro} ja foi devolvido`)
    }
}

Obterinformação(){
    const status = this.#disponivel ? "Disponivel": "Emprestado";
    return `${this.#titulo} por ${this.#autor}- ${status}`
}
isDisponivel(){return this.#disponivel}

}

const livro1 = new livro("Antoine de Saint-Exupéry", "Pequeno Príncipe");
const livro2 = new livro("Robert Kirkman", "The Walking Dead");

console.log(livro1.Obterinformação());
console.log("Disponivel:",livro1.isDisponivel());

livro1.emprestar();
console.log("Disponivel",livro1.isDisponivel());
livro1.emprestar();

livro1.devolver();
console.log("Disponivel", livro1.isDisponivel);