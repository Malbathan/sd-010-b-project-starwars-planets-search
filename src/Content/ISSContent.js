import { createContext } from 'react';

const issContent = createContext();

export default issContent;

// fazer isso separadamente aqui pra poder importar em outro lugar este createContext.
// isso aqui me fornece um IMPLICITAMENTE um provider e um consumer
