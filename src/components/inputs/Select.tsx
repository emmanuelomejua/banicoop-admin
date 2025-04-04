import { SelectChangeEvent } from '@mui/material';
import React, { FC } from 'react';

interface Option {
    value: string;
    label: string;
}
  
interface SelectProps {
    name?: string;
    id?: string;
    options: Option[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className: string;
    // onSelect?: (e: SelectChangeEvent<HTMLSelectElement>) => void;
}

const Select:FC<SelectProps> = ({ name = "select", id = "select", options, onChange, className }) => {
  return (
    <div className={className}>
        <select name={name} id={id} className='w-full h-full border-[1px] outline-none rounded-lg px-2 bg-white' onChange={onChange}>
            { options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))
            }

        </select>
    </div>
  )
}

export default Select;
