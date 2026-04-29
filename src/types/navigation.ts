import { Refeicao } from "@/interface/Refeicao";

export type RootStackParamList = {
  Home: undefined;
  Dashboard: { porcentagem: number };
  Refeicao: { refeicao: Refeicao | null };
  Resultado: { isDentroDieta: boolean };
  Edicao: { refeicao: Refeicao };
};
