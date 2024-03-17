import { Inter } from "next/font/google";
import Logo from "@/pages/components/main/Logo";
import Trends from "@/pages/components/main/Trends";

import { useRef, useState} from "react";
import GlobalTrends from "@/pages/components/GlobalTrends";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const textRef = useRef<HTMLInputElement>(null); // Ref type declaration

    const Alphabet = ["a", "b", "c", "d", "f", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function RandomFile () {
        const path = "recipes/index/"
        let alphabet =  Math.floor(Math.random()*Alphabet.length)
        const FilePath = path + alphabet
        let RandomFileReceipt = Math.floor(Math.random()*FilePath.length)
        console.log(Alphabet[alphabet])
        console.log(FilePath)
    }
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
            {selectedCategories.map((category: string, index: number) => (
                <GlobalTrends key={index} stateVariable={category}/>
            ))}
            <button className="border-2 border-black" onClick={RandomFile}>click me</button>
        </div>
    );
}
