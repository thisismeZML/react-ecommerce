import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[175px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
