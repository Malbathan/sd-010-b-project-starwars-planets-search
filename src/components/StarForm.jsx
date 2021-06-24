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
