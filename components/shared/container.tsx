import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({
    children,
    className = "",
}: ContainerProps): React.ReactElement {
    return (
        <div
            className={`
                mx-auto
                w-full
                max-w-[1440px]

                px-[24px]

                lg:px-[52px]

                ${className}
            `}
        >
            {children}
        </div>
    );
}