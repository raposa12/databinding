//criando a class pessoa e o seus atributos para serem importado e usado em outro componente
export class Pessoa{

  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public sexo: string,
    public email: string
  ){

  }
}