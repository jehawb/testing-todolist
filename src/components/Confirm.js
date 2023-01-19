import { forwardRef } from "react";

function Confirm ({ onConfirm }, ref) {
  return (
    <dialog ref={ref} onClose={event => onConfirm(JSON.parse(event.target.returnValue))}>
      <p>The entry is identical with an existing todo. Do you want to keep it?</p>
      <form method="dialog">
        <button value={true}>Keep it</button>
        <button value={false}>Cancel</button>
      </form>
    </dialog>
  );
};

export default forwardRef(Confirm);