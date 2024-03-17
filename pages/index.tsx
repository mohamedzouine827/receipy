import { Inter } from "next/font/google";
import Logo from "@/pages/components/main/Logo";
import Trends from "@/pages/components/main/Trends";

import GlobalTrends from "@/pages/components/GlobalTrends";
import NewReceipt from "@/pages/components/main/NewReceipt";

import fs from 'fs';

// every Refresh a receipt

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


    const Alphabet = ["a", "b", "c", "d", "f", "e", "f", "g", "h", "i", "j", "k", "l"
    , "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    function RandomFile () {
        const path = "recipes/index/"
        let alphabet =  Math.floor(Math.random()*Alphabet.length)
        const FilePath = path + Alphabet[alphabet]
        let RandomFileReceipt = Math.floor(Math.random()*FilePath.length)
        console.log(FilePath)
        fs.readdir(FilePath, (err: any, files: any) => {
            if (err) {
                console.log(err);
                return;
            }
            const randomIndex = Math.floor(Math.random() * files.length);
            const randomFile = files[randomIndex];
            console.log(randomFile);
        })
    }



    return (
        <div className="mx-5 mt-6">
            <Logo/>
            <Trends title="Ingredients"/>
            <GlobalTrends stateVariable="Description" />
            <NewReceipt RandomFile={RandomFile}/>
        </div>
    );
}
