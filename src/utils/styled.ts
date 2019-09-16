import styled, { CreateStyled } from 'react-emotion';

export interface Theme {
    colors: {
        background: string;
        body: string;
    };
    containerPadding: string
    fonts: {
        body: string;
    };
}

export default styled as CreateStyled<Theme>
