import { forwardRef } from "react";
import './Confirm.css';

function Confirm ({ onConfirm, text, okLabel, cancelLabel }, ref) {
  return (
    <dialog ref={ref} onClose={event => onConfirm(JSON.parse(event.target.returnValue))}>
      <p>{text}</p>
      <form method="dialog">
        <button value={true}>{okLabel}</button>
        <button value={false}>{cancelLabel}</button>
      </form>
    </dialog>
  );
};

export default forwardRef(Confirm);