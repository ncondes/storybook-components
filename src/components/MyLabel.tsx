import './myLabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';


export interface Props {
    /**
     * Message of the label
     */
   label: string,
   /**
    * Size of the label
    */
   size: 'normal' | 'h1' | 'h2' | 'h3',
   /**
    * All the characters in capital letter
    */
   allCaps?: boolean,
   /**
    * Color of the font
    */
   color?: 'primary' | 'secondary' | 'tertiary',
   /**
    * Customized color to use
    */
   fontColor?: string,
   /**
    * Customized background color to use
    */
   backgroundColor?: string,
}

export const MyLabel = ({
        label= 'No label',
        size= 'normal',
        color='primary',
        allCaps,
        fontColor,
        backgroundColor= 'transparent'
    }: Props) => {
    return (
        <span 
            className={`label ${ size } text-${ color } ${ allCaps && 'uppercase'}`}
            style={{ color: fontColor, backgroundColor }}
        >
            { label }
        </span>
    );
};
