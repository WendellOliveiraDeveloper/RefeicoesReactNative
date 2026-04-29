import AsyncStorage from "@react-native-async-storage/async-storage";
import { Refeicao } from "@/interface/Refeicao";

const STORAGE_KEY = "@adicionar:refeicao";

const getAll = async (): Promise<Refeicao[]> => {
  try {
    const storage = await AsyncStorage.getItem(STORAGE_KEY);

    if (!storage) return [];

    const parsed: Refeicao[] = JSON.parse(storage);

    return parsed.map((item) => ({
      ...item,
    }));
  } catch (error) {
    throw new Error("REFEICOES_GET: " + error);
  }
};

const save = async (refeicoes: Refeicao[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(refeicoes));
  } catch (error) {
    throw new Error("REFEICOES_SAVE: " + error);
  }
};

const add = async (newRefeicao: Refeicao): Promise<Refeicao[]> => {
  const items = await getAll();
  const updatedItems = [...items, newRefeicao];
  await save(updatedItems);

  return updatedItems;
};

const update = async (updateRefeicao: Refeicao): Promise<Refeicao[]> => {
  if (!updateRefeicao.id) throw new Error("REFEICOES_ERROR: ID não fornecido!");

  const items = await getAll();

  const updatedItems = items.map((refeicao) =>
    refeicao.id === updateRefeicao.id ? updateRefeicao : refeicao,
  );

  await save(updatedItems);

  return updatedItems;
};

const remove = async (item: Refeicao): Promise<Refeicao[]> => {
  if (!item.id) throw new Error("REFEICOES_ERROR!");

  const items = await getAll();

  const updatedItems = items.filter((refeicao) => refeicao.id !== item.id);

  await save(updatedItems);

  return updatedItems;
};

const removeAll = async (): Promise<void> => {
  await AsyncStorage.clear();
};

const countAllByIsDentroDieta = async (): Promise<Number> => {
  const items = await getAll();
  return items.filter((refeicao) => refeicao.isDentroDaDieta === true).length;
};

const countAllByIsForaDieta = async (): Promise<Number> => {
  const items = await getAll();
  return items.filter((refeicao) => refeicao.isDentroDaDieta === false).length;
};

export const refeicoesStorage = {
  getAll,
  add,
  update,
  remove,
  removeAll,
  countAllByIsDentroDieta,
  countAllByIsForaDieta,
};
