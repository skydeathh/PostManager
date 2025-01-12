import { createContext } from "react";

// export const AuthContext = createContext({
//     isAuth: false, // Начальное состояние авторизации
//     setIsAuth: () => {} // Функция по умолчанию, которую нужно заменить в компоненте-поставщике
//   });

  export const AuthContext = createContext(null);