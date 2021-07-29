import React from 'react';
import styled from 'styled-components';

const Text = styled.h1<{ color?: string | null; }>`
    font-size: 2.25rem;
    font-color: ${({ color }) => color || 'black'};
`;

type HeadingProps = {
    color?: string | null;
    children: React.ReactNode;
};

export function Heading({ color, children }: HeadingProps): React.ReactElement<HeadingProps> {
    return (
        <Text color={color}>{children}</Text>
    );
}