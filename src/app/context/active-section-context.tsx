'use client'
import React, {useState, createContext, useContext} from 'react'
import { navData } from '../lib/data'

type SectionName = typeof navData[number]['name']

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
} 

type ActiveSectionContextType = {
    activeSection : SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick : number;
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>;
    mobileActiveSection : SectionName;
    setMobileActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    menuOpen : boolean;
    setMenuOpen : React.Dispatch<React.SetStateAction<boolean>>;
    color : boolean;
    setColor : React.Dispatch<React.SetStateAction<boolean>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null)

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [mobileActiveSection, setMobileActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const [color, setColor] = useState(false)
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        mobileActiveSection,
        setMobileActiveSection,
        menuOpen,
        setMenuOpen,
        color,
        setColor,
    }}>
        {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
    const context = useContext( ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within a ActiveSectionContextProvider"
        )
    }
    return context;
}

export default ActiveSectionContextProvider