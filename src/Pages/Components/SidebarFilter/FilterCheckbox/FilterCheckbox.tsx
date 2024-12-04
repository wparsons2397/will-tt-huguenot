import React, { ChangeEvent } from "react";
import './FilterCheckbox.css';

function FilterCheckbox({filterLabel, onCheckCheckbox, filterSH}: {filterLabel : string, onCheckCheckbox : Function, filterSH: string}) {

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget);
        onCheckCheckbox(e.currentTarget, filterSH);
    }

    return (
      <div className="FilterCheckbox">
        <input type="checkbox" className="Checkbox" onChange={onChangeCheckbox}/>
        <div className="FilterLabel">
            {filterLabel}
        </div>
      </div>
    );
  }

export default FilterCheckbox;