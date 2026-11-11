/** All coordinates are source pixels. Every channel samples the same active-time clock. */
export type Rect = { x: number; y: number; w: number; h: number }
export type StateSpec = { row: number; frames: number; frameMs: number }
export type WorkshopManifest = {
  loopMs: number
  props: Record<string, Rect>
  sheets: Record<'developer' | 'robot' | 'project', { cell: number; states: Record<string, StateSpec> }>
}
export type WorkshopAssets = {
  manifest: WorkshopManifest
  developer: HTMLImageElement
  robot: HTMLImageElement
  project: HTMLImageElement
  props: HTMLImageElement
}
export type WorkshopLayout = {
  width: number; height: number; developerX: number; developerY: number
  start: number; end: number; robotY: number; mobile: boolean
}
export function workshopLayout(mobile: boolean): WorkshopLayout {
  return mobile
    ? { width: 160, height: 96, developerX: 40, developerY: 8, start: 0, end: 96, robotY: 56, mobile }
    : { width: 480, height: 128, developerX: 80, developerY: 64, start: 216, end: 326, robotY: 80, mobile }
}
const frame = (ms: number, count: number, duration = 125) => Math.floor(ms / duration) % count
const clamp = (n: number) => Math.max(0, Math.min(1, n))

export function sampleWorkshop(elapsedMs: number, layout: WorkshopLayout) {
  const phase = ((elapsedMs % 14000) + 14000) % 14000
  // A settled quarter-second at the end makes the seam an identical pose.
  const t = phase >= 13750 ? 0 : phase
  const secondTrip = t >= 7000
  const trip = secondTrip ? t - 7000 : t - 1000
  let robotState = 'idle'
  let robotFrame = frame(t, 4, 250)
  let robotX = layout.start
  let cargoOwner: 'dispenser' | 'robot' | 'project' = 'dispenser'
  let cargoX = layout.start + 28
  let cargoY = layout.robotY + 16
  if (trip >= 0 && trip < 1000) {
    robotState = 'pickup'
    robotFrame = frame(trip, 8)
    if (robotFrame >= 5) {
      cargoOwner = 'robot'
      cargoX = robotX + [28, 26, 24][robotFrame - 5]
      cargoY = layout.robotY + [15, 13, 12][robotFrame - 5]
    }
  } else if (trip >= 1000 && trip < 3000) {
    robotState = 'loaded'
    robotFrame = frame(trip - 1000, 8)
    robotX = Math.round(layout.start + (layout.end - layout.start) * (trip - 1000) / 2000)
    cargoOwner = 'robot'
    cargoX = robotX + 24
    cargoY = layout.robotY + 12
  } else if (trip >= 3000 && trip < 4000) {
    robotState = 'unload'
    robotFrame = frame(trip - 3000, 8)
    robotX = layout.end
    cargoOwner = robotFrame < 5 ? 'robot' : 'project'
    cargoX = robotX + Math.min(4, robotFrame) + 24
    cargoY = layout.robotY + 12
  } else if (trip >= 4000) {
    cargoOwner = 'project'
    // The longer second return leaves a short idle hold before the loop seam.
    const returnDuration = secondTrip ? 1750 : 1000
    if (trip < 4500) {
      robotState = 'turn'
      robotFrame = frame(trip - 4000, 4)
      robotX = layout.end
    } else if (trip < 4500 + returnDuration) {
      robotState = 'walk'
      robotFrame = frame((trip - 4500) * 1000 / returnDuration, 8)
      robotX = Math.round(layout.end + (layout.start - layout.end) * (trip - 4500) / returnDuration)
    } else if (trip < 5000 + returnDuration) {
      robotState = 'turn'
      robotFrame = 3 - Math.min(3, Math.floor((trip - 4500 - returnDuration) / 125))
    }
  }
  const developerState = t >= 10000 && t < 10500 ? 'enter'
    : t >= 10500 && t < 11000 ? 'watch' : t >= 11000 && t < 11500 ? 'nod' : 'typing'
  const developerFrame = developerState === 'typing' ? frame(t, 8)
    : developerState === 'enter' ? frame(t - 10000, 4)
      : developerState === 'watch' ? frame(t - 10500, 2, 250) : frame(t - 11000, 4)
  let projectState: string | null = null
  let projectFrame = 0
  if (t >= 4625 && t < 10000) {
    projectState = 'seating'
    projectFrame = Math.min(3, Math.floor((t - 4625) / 125))
  } else if (t >= 10000 && t < 11000) {
    projectState = 'boot'
    projectFrame = frame(t - 10000, 8)
  } else if (t >= 11000 && t < 11500) {
    projectState = 'ready'
    projectFrame = frame(t - 11000, 4)
  } else if (t >= 11500 && t < 12500) {
    projectState = 'shipping'
    projectFrame = frame(t - 11500, 8)
  }
  if (t >= 12500) {
    cargoOwner = 'dispenser'
    cargoX = layout.start + 28
    cargoY = layout.robotY + 16
  }
  return {
    phase, robotState, robotFrame, robotX, cargoOwner, cargoX, cargoY,
    cargo: secondTrip && t < 12500 ? 'screen' : 'chassis', developerState, developerFrame,
    projectState, projectFrame, monitorFrame: t >= 10500 && t < 11500 ? 3 : frame(t, 4, 250),
    hatchOpen: t >= 11500 && t < 12500 ? clamp((t - 11500) / 125)
      : t >= 12500 && t < 13000 ? 1 - (t - 12500) / 500 : 0,
  }
}

export function drawWorkshop(
  ctx: CanvasRenderingContext2D, assets: WorkshopAssets, elapsedMs: number,
  layout: WorkshopLayout, parallax = 0,
) {
  const s = sampleWorkshop(elapsedMs, layout)
  const { width, height, developerX: dx, developerY: dy, robotY: ry, end, start } = layout
  ctx.imageSmoothingEnabled = false
  const prop = (name: string, x: number, y: number) => {
    const r = assets.manifest.props[name]
    ctx.drawImage(assets.props, r.x, r.y, r.w, r.h, Math.round(x), Math.round(y), r.w, r.h)
  }
  const sprite = (name: 'developer' | 'robot' | 'project', state: string, f: number, x: number, y: number) => {
    const spec = assets.manifest.sheets[name]
    const row = spec.states[state].row
    ctx.drawImage(assets[name], f * spec.cell, row * spec.cell, spec.cell, spec.cell, Math.round(x), Math.round(y), spec.cell, spec.cell)
  }
  ctx.fillStyle = '#0f1218'
  ctx.fillRect(0, 0, width, height)
  const wallShift = Math.round(parallax * 2)
  if (layout.mobile) {
    prop('window', 3, 0)
    prop('shelf', 94, 0)
  } else {
    prop('window', 62 + wallShift, 10)
    prop('shelf', 184 + wallShift, 12)
    prop('tools', 362 + wallShift, 24)
    // Wall seams use one path rather than a draw call per tile.
    ctx.strokeStyle = '#131c2b'
    ctx.beginPath()
    ctx.moveTo(0, 59.5); ctx.lineTo(width, 59.5)
    ctx.moveTo(280.5 + wallShift, 0); ctx.lineTo(280.5 + wallShift, height - 16)
    ctx.stroke()
  }
  ctx.fillStyle = '#131c2b'
  ctx.fillRect(0, height - 16, width, 16)
  ctx.fillStyle = '#2c3b4c'
  ctx.fillRect(0, height - 16, width, 1)
  prop('workstation', dx + 12, dy)
  sprite('developer', s.developerState, s.developerFrame, dx, dy)
  prop(`monitor${s.monitorFrame}`, dx + 43, dy + 7)
  prop('dispenser', start + 20, ry - 20)
  prop('hatch', end + 12, ry + 16)
  // Sliding doors expose the shaft before the terminal lowers into it.
  const opening = Math.round(s.hatchOpen * 13)
  ctx.fillStyle = '#5aa6f2'
  ctx.fillRect(end + 23, ry + 29, 13 - opening, 1)
  ctx.fillRect(end + 36 + opening, ry + 29, 13 - opening, 1)
  if (s.projectState) {
    ctx.save()
    ctx.beginPath()
    ctx.rect(end + 12, 0, 48, ry + 30)
    ctx.clip()
    sprite('project', s.projectState, s.projectFrame, end + 12, ry - 20)
    ctx.restore()
  }
  sprite('robot', s.robotState, s.robotFrame, s.robotX, ry)
  if (s.cargoOwner !== 'project') prop(s.cargo, s.cargoX, s.cargoY)
  if (!layout.mobile) {
    prop('cables', 126 + Math.round(parallax), 111)
    prop('toolbox', 424 + Math.round(parallax), 109)
  }
}
