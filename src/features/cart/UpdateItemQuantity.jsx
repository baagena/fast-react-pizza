import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  getCurrentQuantity,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <Button
        type="round"
        onclick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="font-semibold">{currentQuantity}</span>
      <Button
        type="round"
        onclick={() => dispatch(increaseItemQuantity(pizzaId, currentQuantity))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
