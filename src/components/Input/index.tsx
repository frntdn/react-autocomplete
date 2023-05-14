import React, {ChangeEvent} from "react";
import './styles.css';

interface InputProps {
    type: "text",
    value: string,
    label?: string,
    placeholder?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
    const {
        type,
        value,
        label,
        placeholder,
        onChange,
    } = props;

    const withLabel = Boolean(label);
    const renderInput = () => (
        <input className="input" type={type} value={value} placeholder={placeholder} onChange={onChange} />
    )

    if (withLabel) {
        return (
            <label className="label">
                <span className="text">{label}</span>
                {renderInput()}
            </label>
        )
    }

    return renderInput();
}
