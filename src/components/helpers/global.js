export default function calculateInsertingPosition (e, droppedChips) {
    const FixedTopExtras = 32;
    const ChipHeight = 32;

    const { top } = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - top;
    let droppedChipPositionOnViewPort = 0

    if(mouseY >= FixedTopExtras){
      droppedChipPositionOnViewPort = Math.floor(((mouseY-FixedTopExtras) / ChipHeight));
    }

    return droppedChipPositionOnViewPort > droppedChips.length ? droppedChips.length : droppedChipPositionOnViewPort;
}