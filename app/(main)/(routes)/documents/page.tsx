"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {toast} from "sonner"
const DocumentsPage = () =>
{
  const { user } = useUser();
  const create = useMutation(api.documents.create)
  const onCreate = () =>{
    const promise = create({ title:"Untitled" });
    toast.promise(promise,{
      loading: "Creating a new Project...",
      success: "Project created!",
      error: "Something went wrong!"
    })
  }
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty-doc.png"
        height="425"
        width="425"
        alt="Empty"
      />
      <h2 className=" text-lg font-medium">
          welcome to {user?.firstName}&apos;s ZeNote
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a new Project
      </Button>
    </div>
  );
}

export default DocumentsPage; 
