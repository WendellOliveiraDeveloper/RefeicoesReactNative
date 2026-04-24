export interface Refeicao {
    id: number;
    nome: string;
    descricao?: string;
    data: string;
    hora: string;
    isDentroDaDieta: boolean;
}