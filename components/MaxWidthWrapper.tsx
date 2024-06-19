import { ReactNode } from "react";

const MaxWidthWrapper = ({ className, children }: { className?: string, children: ReactNode }) => {
    return (
        <div className={`px-4 sm:px-10 md:px-20 lg:px-60 xl:px-80 py-10 w-full box-border overflow-x-hidden ${className}`}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper;