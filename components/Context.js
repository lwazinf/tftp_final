import { createContext, useState } from "react";

export const AppContext = createContext({}); 

export function ContextWrapper(props) {
    const [isVisible, setVisible] = useState(false);
    const [modalInfo, setInfo] = useState({ image: "/", selected: 0 });
  
    return (
      <AppContext.Provider value={{ modalInfo, setInfo, isVisible, setVisible }}>
        {props.children}
      </AppContext.Provider>
    );
  }