import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { tailwindMerge } from "../../utils";

const ButtonVariance = cva(["inline-flex items-center rounded-md font-semibold duration-200"], {
    variants: {
        intent: {
            primary: [
                "bg-black dark:bg-white",
                "text-white dark:text-black",
                "hover:bg-gray-800 dark:hover:bg-gray-200",
                "active:bg-gray-900 dark:active:bg-gray-300",
              ],
              outline: [
                "bg-transparent",
                "text-black dark:text-white",
                "border border-gray-300 dark:border-gray-600",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "active:bg-gray-200 dark:active:bg-gray-700",
              ],
              destructive: [
                "bg-red-500 dark:bg-red-600",
                "text-white",
                "hover:bg-red-600 dark:hover:bg-red-700",
                "active:bg-red-700 dark:active:bg-red-800",
              ],
        },
        size: {
            xs: "px-2 text-xs h-6",
            sm: "px-3 text-sm h-8",
            md: "px-4 text-base h-12",
            lg: "px-6 text-lg h-16",
        },
        fullWidth: {
            true: "w-full"
        },
        rounded:{
            sm:"rounded",
            md:"rounded-md",
            lg:"rounded-lg",
            full:"rounded-full"
        }
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
        rounded:"sm",
    }
},
)

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariance> {
    children: ReactNode;
}

export default function Button({ children, intent, size, fullWidth,rounded, ...rest }: IProps) {
    return (
        <button className={`${tailwindMerge(ButtonVariance({ intent, size, fullWidth,rounded }))}`} {...rest}>
            {children}
        </button>
    );
}
