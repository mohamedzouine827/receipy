import { Inter } from "next/font/google";
import Logo from "@/pages/components/main/Logo";
import Trends from "@/pages/components/main/Trends";

import { useRef, useState} from "react";
import GlobalTrends from "@/pages/components/GlobalTrends";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const textRef = useRef<HTMLInputElement>(null); // Ref type declaration

    const handleSelectedCategory = () => {
        const category = textRef.current?.value; // Access input value from ref
        if (category) {
            setSelectedCategories(prevState => [...prevState, category]);
            textRef.current.value = ""; // Clear input value
        }
    };

    return (
        <div className="mx-5 mt-6">
            <Logo/>
            <Trends title="Trends"/>
            <input className="border-2 border-r-black" type="text" ref={textRef}/>
            <div>
                <button className="bg-gray-800" type="submit" onClick={handleSelectedCategory}>
                    Click me
                </button>
            </div>
            {selectedCategories.map((category: string, index: number) => (
                <GlobalTrends key={index} stateVariable={category}/>
            ))}
        </div>
    );
}
