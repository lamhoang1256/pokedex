export const backgrounds = [
  { type: "fire", color: "#fddfdf" },
  { type: "water", color: "#def3fd" },
  { type: "grass", color: "#defde0" },
  { type: "bug", color: "#E5CB9F" },
  { type: "poison", color: "#98d7a5" },
  { type: "electric", color: "#fcf7de" },
  { type: "dragon", color: "#97b3e6" },
  { type: "fairy", color: "#fceaff" },
  { type: "fighting", color: "#e6e0d4" },
  { type: "flying", color: "#f5f5f5" },
  { type: "ground", color: "#EFB549" },
  { type: "ghost", color: "#e3b7a0" },
  { type: "ice", color: "#74b9ff" },
  { type: "normal", color: "#f5f5f5" },
  { type: "psychic", color: "#eaeda1" },
  { type: "rock", color: "#d5d5d4" },
];

export const createBackgroundCard = () => {
  const background = [...backgrounds].reduce(
    (returnValue, currentValue) =>
      returnValue.concat(`
        &.${currentValue.type}{
          background: ${currentValue.color}
        }
      `),
    ""
  );
  return background;
};
