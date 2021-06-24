import React, { useState } from 'react';
import { useStarContext } from '../context/myContext';

const categories = ['population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water'];

const measures = [
  'maior que',
  'menor que',
  'igual a',
];

const categoriesDel = [];

export default function StarForm() {
  // REFATORAR: criar apenas um estado com todas as chaves. Criar uma função genérica pra controlar os inputs.

  const { starData, setNewState, newState } = useStarContext();
  const [categoriesArr, setCategoriesArr] = useState(categories);
  const [category, setCategory] = useState('population');
  const [measure, setMeasures] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [boolSubmit, setBoolSubmit] = useState(false);
  const [sortCategory, setSortCategory] = useState('name');
  const [sortType, setSortType] = useState('');
}
