import confetti, {Shape} from 'canvas-confetti'
import checkWeekDayAndHour from "./checkWeekDayAndHour.ts";

function celebrateWeekend() {
  const weekDay = checkWeekDayAndHour(),
    confettiCount = 100,
    confettiAngle = 45,
    confettiSpread = 45,
    confettiOriginX = -0.2,
    confettiOriginY = 1.2,
    confettiSpeed = 120,
    confettiTicks = 300,
    confettiShapes: Shape[] = ['square', 'circle'],
    confettiColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
    confettiZIndex = 100;

  if (weekDay === "fridayAfterNoon") {
    confetti({
      particleCount: confettiCount,
      angle: confettiAngle,
      spread: confettiSpread,
      origin: {x: confettiOriginX, y: confettiOriginY},
      startVelocity: confettiSpeed,
      ticks: confettiTicks,
      shapes: confettiShapes,
      colors: confettiColors,
      zIndex: confettiZIndex
    });

    confetti({
      particleCount: confettiCount,
      angle: confettiAngle * 3,
      spread: confettiSpread,
      origin: {x: confettiOriginX + 1.4, y: confettiOriginY},
      startVelocity: confettiSpeed,
      ticks: confettiTicks,
      shapes: confettiShapes,
      colors: confettiColors,
      zIndex: confettiZIndex
    });

    return true;
  }

  return false;
}

export default celebrateWeekend;
