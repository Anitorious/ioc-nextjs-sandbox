import React from 'react';
import styled from 'styled-components';

const Label = styled.label<{ color?: string | null; }>`
    font-size: 1rem;
    margin: 0 0 0.75rem;
    font-weight: 700;
`;

const FieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 1px solid #AAA;
`;

type SelectProps = {
    value: any;
    options: Record<string, any>;
    label: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>
};

export function Select({ label, value, options, onChange }: SelectProps): React.ReactElement<SelectProps> {
    return (
        <FieldSet>
            <Label>{label}</Label>
            <select value={value} onChange={onChange}>
                {
                    Object.entries(options).map(
                        ([k, v]) => (
                            <option key={v} value={v}>{k}</option>
                        )
                    )
                }
            </select>
        </FieldSet>
    );
}