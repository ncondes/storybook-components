/// <reference types="react" />
import './myLabel.css';
export interface Props {
    /**
     * Message of the label
     */
    label: string;
    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * All the characters in capital letter
     */
    allCaps?: boolean;
    /**
     * Color of the font
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Customized color to use
     */
    fontColor?: string;
    /**
     * Customized background color to use
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: Props) => JSX.Element;
