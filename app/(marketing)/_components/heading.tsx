"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export const Heading = () => {
    return ( 
        <div className="max-w-3xl space-y-4 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Docs and plans. Unified. Welcome to <span className="underline">ZeNote</span> 
            </h1>
            <h3>
                zeNote is the connected workspace where <br/>
                better, faster work happerns.
            </h3>
            <Button>
                Explore zeNote
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
     );
}