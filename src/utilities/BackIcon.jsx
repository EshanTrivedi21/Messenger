import { memo } from "react";

const BackIcon = memo(({ to }) => {
  return (
    <img
      src={"/icons/back.svg"}
      alt={"back"}
      loading="lazy"
      style={{
        width: "25px",
        height: "25px",
      }}
      onClick={() => {
        window.history.back();
      }}
    />
  );
});

export default BackIcon;
