import { createContext } from 'react';
import { initialState } from './initialState';

export const AppContext = createContext(initialState)