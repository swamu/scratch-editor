export default function calculateInsertingPosition (e, droppedChips) {
    const FixedTopExtras = 88;
    const ChipHeight = 28;

    const { top } = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - top;
    let droppedChipPositionOnViewPort = 0

    if(mouseY >= FixedTopExtras){
      droppedChipPositionOnViewPort = Math.floor(((mouseY-FixedTopExtras) / ChipHeight));
    }

    return droppedChipPositionOnViewPort > droppedChips.length ? droppedChips.length : droppedChipPositionOnViewPort;
}