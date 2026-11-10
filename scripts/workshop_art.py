"""Explicit palette-indexed pixel drawings. Run: python3 scripts/workshop_art.py.
Coordinates are source pixels; no antialiasing, generated imagery or external art.
"""
from pathlib import Path
import json
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/workshop'
REVIEW = ROOT / 'output/playwright/art'
COLORS = ['#0a0d12', '#0f1218', '#131c2b', '#223349', '#2c3b4c', '#c7d0dd', '#5aa6f2', '#7ed26a', '#f0b43c', '#ef5b78', '#d6a77a', '#8c5b47']
PALETTE = [0, 0, 0] + [v for c in COLORS for v in bytes.fromhex(c[1:])]
PALETTE += [0] * (768 - len(PALETTE))

def canvas(w, h):
    im = Image.new('P', (w, h), 0)
    im.putpalette(PALETTE)
    im.info['transparency'] = 0
    return im

def box(im, xy, fill, outline=None):
    ImageDraw.Draw(im).rectangle(xy, fill=fill, outline=outline)

def line(im, xy, color, width=1):
    ImageDraw.Draw(im).line(xy, fill=color, width=width)

def paste(im, piece, x, y):
    im.paste(piece, (x, y), piece.convert('RGBA').getchannel('A'))

def developer(state, f):
    im = canvas(48, 48)
    # Chair and fixed seat/foot anchors.
    box(im, (9, 21, 12, 36), 5, 1)
    box(im, (11, 34, 29, 37), 5, 1)
    line(im, [(20, 38), (20, 45), (10, 45)], 4)
    line(im, [(20, 45), (30, 45)], 4)
    box(im, (16, 30, 30, 34), 4, 1)
    box(im, (27, 33, 31, 43), 4, 1)
    box(im, (27, 43, 36, 45), 1)
    box(im, (15, 19, 26, 31), 7, 1)
    box(im, (15, 21, 18, 30), 4)
    nod = [0, 1, 2, 0][f] if state == 'nod' else 0
    box(im, (17, 6+nod, 29, 18+nod), 11, 1)
    box(im, (17, 6+nod, 28, 10+nod), 12)
    box(im, (16, 7+nod, 19, 15+nod), 12)
    box(im, (20, 5+nod, 26, 7+nod), 12)
    box(im, (28, 12+nod, 31, 15+nod), 11, 1)
    line(im, [(24, 11+nod), (29, 11+nod)], 6)
    box(im, (26, 12+nod, 27, 13+nod), 1)
    box(im, (18, 13+nod, 20, 15+nod), 11)
    # Deliberate key tapping, Enter extension and resting hands.
    hands = [(35, 25), (36, 24), (35, 26), (37, 25), (35, 24), (36, 26), (34, 25), (36, 24)]
    hx, hy = hands[f] if state == 'typing' else (([36, 40, 40, 36][f], [23, 24, 26, 25][f]) if state == 'enter' else (34, 27))
    line(im, [(25, 22), (29, 26), (hx, hy)], 1, 4)
    line(im, [(25, 22), (29, 25), (hx-2, hy)], 7, 2)
    box(im, (hx-2, hy-1, hx+1, hy), 11)
    line(im, [(21, 25), (27, 28), (33, 27+(f % 2 if state == 'typing' else 0))], 12, 2)
    return im

def robot(state, f):
    im = canvas(32, 32)
    walk = state in ('loaded', 'walk')
    shift = [0, 0, 1, 1, 0, 0, -1, -1][f] if walk else 0
    # Planted feet alternate; the body never drifts off its foot anchor.
    legs = [(-2, 2), (-1, 1), (0, 0), (2, -2), (2, -2), (1, -1), (0, 0), (-2, 2)]
    a, b = legs[f] if walk else (0, 0)
    for x, step in ((10, a), (19, b)):
        line(im, [(x, 22), (x+step, 27)], 5, 3)
        box(im, (x+step-2, 28, x+step+3, 30), 6, 1)
    box(im, (8+shift, 14, 22+shift, 23), 5, 1)
    box(im, (9+shift, 15, 11+shift, 21), 6)
    box(im, (17+shift, 17, 20+shift, 19), 9 if state == 'idle' and f == 2 else 8)
    # Turning frames narrow the silhouette and carry the visor across the face.
    inset = [0, 2, 3, 0][f] if state == 'turn' else 0
    box(im, (7+inset+shift, 4, 23-inset+shift, 13), 6, 1)
    box(im, (8+inset+shift, 5, 21-inset+shift, 6), 6)
    eye = [17, 14, 11, 9][f] if state == 'turn' else 17
    box(im, (eye+shift, 8, eye+3+shift, 10), 7)
    line(im, [(13+shift, 3), (13+shift, 1)], 5)
    box(im, (12+shift, 0, 14+shift, 1), 9)
    reaches = [(23, 20), (25, 21), (27, 22), (29, 23), (29, 23), (28, 20), (26, 18), (25, 17)]
    hx, hy = reaches[f] if state == 'pickup' else (([25, 26, 27, 28, 29, 29, 26, 23][f], [17, 17, 17, 18, 19, 20, 20, 20][f]) if state == 'unload' else ((25, 17) if state == 'loaded' else (23+shift, 21+(a//2))))
    line(im, [(21+shift, 16), (23+shift, 20), (hx, hy)], 1, 3)
    line(im, [(21+shift, 16), (23+shift, 19), (hx, hy)], 6)
    box(im, (hx-1, hy-1, hx+1, hy+(3 if state in ('pickup', 'loaded', 'unload') else 1)), 6, 1)
    if state == 'walk':
        im = im.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    return im

def cargo(kind):
    im = canvas(16, 16)
    if kind == 'chassis':
        box(im, (0, 8, 15, 15), 5, 1)
        line(im, [(1, 9), (14, 9)], 6)
        for x in (3, 6, 9):
            line(im, [(x, 12), (x+1, 12)], 1)
    else:
        box(im, (0, 0, 15, 13), 6, 1)
        box(im, (2, 2, 13, 10), 3, 1)
        box(im, (6, 14, 9, 15), 5)
    return im

def project(state, f):
    im = canvas(64, 64)
    if state == 'shipping' and f == 7:
        return im
    drop = [0, 1, 3, 6, 10, 15, 22, 32][f] if state == 'shipping' else 0
    seat = [0, 1, 0, 0][f] if state == 'seating' else 0
    paste(im, cargo('chassis'), 16, 32+drop+seat)
    if state in ('ready', 'shipping') or (state == 'boot' and f >= 5):
        sy = 24+drop + ([8, 4, 0][f-5] if state == 'boot' else 0)
        paste(im, cargo('screen'), 16, sy)
        if state != 'boot' or f == 7:
            line(im, [(20, sy+5), (22, sy+7), (20, sy+9)], 8)
            line(im, [(24, sy+9), (27, sy+9)], 8)
            box(im, (28, 44+drop, 29, 44+drop), 8)
            if state == 'ready':
                box(im, (20+f*2, 44, 21+f*2, 44), 8)
                if f % 2:
                    line(im, [(24, sy+9), (27, sy+9)], 3)
    return im

PROPS = {}
props = canvas(256, 128)
def prop(name, x, y, w, h):
    im = canvas(w, h)
    PROPS[name] = {'x': x, 'y': y, 'w': w, 'h': h}
    return im

def put(name, im):
    r = PROPS[name]
    paste(props, im, r['x'], r['y'])

wall = prop('wall', 0, 0, 16, 16)
box(wall, (0, 0, 15, 15), 2)
line(wall, [(0, 15), (15, 15)], 3)
line(wall, [(15, 0), (15, 15)], 3)
put('wall', wall)
floor = prop('floor', 16, 0, 16, 16)
box(floor, (0, 0, 15, 15), 3)
line(floor, [(0, 0), (15, 0)], 5)
line(floor, [(0, 14), (15, 14)], 1)
put('floor', floor)
work = prop('workstation', 32, 0, 64, 48)
box(work, (29, 5, 48, 22), 5, 1)
box(work, (31, 7, 46, 20), 2)
box(work, (36, 23, 40, 26), 5, 1)
box(work, (23, 27, 44, 29), 6, 1)
box(work, (14, 30, 57, 34), 5, 1)
line(work, [(15, 30), (56, 30)], 6)
box(work, (17, 35, 20, 47), 4, 1)
box(work, (51, 35, 54, 47), 4, 1)
box(work, (52, 21, 57, 28), 9, 1)
put('workstation', work)
disp = prop('dispenser', 96, 0, 32, 48)
box(disp, (2, 0, 29, 47), 4, 1)
box(disp, (4, 2, 27, 5), 5)
box(disp, (6, 9, 25, 25), 2, 1)
for yy in (12, 17, 22):
    line(disp, [(9, yy), (21, yy)], 5)
box(disp, (6, 31, 27, 44), 1)
box(disp, (3, 44, 30, 47), 5, 1)
box(disp, (25, 3, 26, 4), 8)
put('dispenser', disp)
bench = prop('hatch', 128, 0, 48, 32)
box(bench, (0, 12, 47, 31), 4, 1)
box(bench, (3, 13, 44, 16), 5, 1)
box(bench, (10, 13, 36, 16), 1)
box(bench, (5, 19, 42, 29), 3, 1)
line(bench, [(9, 23), (36, 23)], 5)
box(bench, (39, 20, 40, 21), 8)
put('hatch', bench)
window = prop('window', 176, 0, 64, 48)
box(window, (0, 0, 63, 47), 4, 1)
box(window, (3, 3, 60, 43), 3, 1)
# Quiet night skyline, deliberately pixel stepped.
for x, y, w in ((5, 27, 9), (16, 20, 10), (28, 30, 8), (40, 16, 12), (54, 25, 5)):
    box(window, (x, y, x+w, 42), 2)
    box(window, (x+2, y+4, x+3, y+5), 5)
line(window, [(31, 3), (31, 44)], 4, 2)
line(window, [(3, 23), (60, 23)], 4)
line(window, [(0, 47), (63, 47)], 5)
put('window', window)
shelf = prop('shelf', 0, 48, 64, 32)
box(shelf, (0, 23, 63, 26), 5, 1)
for x, h, c in ((5, 15, 7), (12, 18, 5), (18, 13, 12), (25, 16, 5)):
    box(shelf, (x, h, x+4, 22), c, 1)
box(shelf, (39, 13, 55, 22), 4, 1)
box(shelf, (44, 16, 49, 18), 9)
line(shelf, [(5, 27), (5, 30)], 4)
line(shelf, [(58, 27), (58, 30)], 4)
put('shelf', shelf)
tools = prop('tools', 64, 48, 48, 32)
box(tools, (0, 0, 47, 31), 3, 1)
for xx in range(3, 47, 4):
    for yy in range(3, 31, 4):
        box(tools, (xx, yy, xx, yy), 4)
line(tools, [(9, 8), (9, 24)], 6, 2)
line(tools, [(6, 7), (6, 11), (12, 11), (12, 7)], 6)
line(tools, [(24, 9), (24, 24)], 12, 3)
box(tools, (18, 7, 29, 11), 5, 1)
line(tools, [(38, 9), (38, 24)], 6)
box(tools, (36, 18, 40, 26), 9, 1)
put('tools', tools)
cables = prop('cables', 112, 48, 64, 16)
line(cables, [(0, 1), (12, 1), (12, 7), (39, 7), (39, 12), (63, 12)], 1, 2)
line(cables, [(2, 0), (14, 0), (14, 5), (41, 5)], 5)
put('cables', cables)
toolbox = prop('toolbox', 176, 48, 32, 16)
box(toolbox, (10, 1, 22, 6), 5, 1)
box(toolbox, (2, 5, 30, 15), 12, 1)
line(toolbox, [(3, 6), (29, 6)], 11)
box(toolbox, (15, 9, 17, 11), 9, 1)
put('toolbox', toolbox)
for n, x in [('chassis', 208), ('screen', 224)]:
    prop(n, x, 48, 16, 16)
    put(n, cargo(n))
for f in range(4):
    mon = prop(f'monitor{f}', f*16, 80, 16, 16)
    box(mon, (0, 0, 15, 15), 2)
    for yy, end in ((3, 9), (6, 5+f*2), (9, 11)):
        line(mon, [(2, yy), (end, yy)], 8 if f == 3 else 7)
    box(mon, (3+f*2, 12, 5+f*2, 12), 8)
    put(f'monitor{f}', mon)

STATES = {
    'developer': [('typing', 8, 125), ('enter', 4, 125), ('watch', 2, 250), ('nod', 4, 125)],
    'robot': [('idle', 4, 250), ('pickup', 8, 125), ('loaded', 8, 125), ('unload', 8, 125), ('turn', 4, 125), ('walk', 8, 125)],
    'project': [('seating', 4, 125), ('boot', 8, 125), ('ready', 4, 125), ('shipping', 8, 125)],
}
SIZES = {'developer': 48, 'robot': 32, 'project': 64}
manifest = {'palette': COLORS, 'loopMs': 14000, 'props': PROPS, 'monitor': {'frames': 4, 'frameMs': 250}, 'sheets': {}, 'anchors': {'developer': {'seat': [20, 36], 'foot': [30, 45]}, 'robot': {'foot': [16, 31], 'cargo': [24, 12]}, 'project': {'tray': [24, 48]}}}
OUT.mkdir(exist_ok=True, parents=True)
REVIEW.mkdir(exist_ok=True, parents=True)
images = {'props': props}
for name, states in STATES.items():
    size = SIZES[name]
    sheet = canvas(size*8, size*len(states))
    metadata = {}
    for row, (state, count, duration) in enumerate(states):
        metadata[state] = {'row': row, 'frames': count, 'frameMs': duration}
        for f in range(count):
            paste(sheet, globals()[name](state, f), f*size, row*size)
    images[name] = sheet
    manifest['sheets'][name] = {'cell': size, 'states': metadata}
    # Adjacent-frame overlays expose stationary-anchor drift.
    overlay = Image.new('RGBA', sheet.size, '#131c2b')
    for row, (_, count, _) in enumerate(states):
        for f in range(count):
            a = sheet.crop((f*size, row*size, (f+1)*size, (row+1)*size)).convert('RGBA')
            b = sheet.crop((((f+1)%count)*size, row*size, (((f+1)%count)+1)*size, (row+1)*size)).convert('RGBA')
            overlay.paste(Image.blend(a, b, 0.5), (f*size, row*size))
    overlay.resize((sheet.width*3, sheet.height*3), Image.Resampling.NEAREST).save(REVIEW / f'{name}-overlays.png')

def poster(mobile):
    w, h = (160, 96) if mobile else (480, 128)
    im = canvas(w, h)
    box(im, (0, 0, w-1, h-1), 2)
    floor_y = h-16
    for x in range(0, w, 16):
        paste(im, floor, x, floor_y)
    def p(n, x, y):
        r = PROPS[n]
        paste(im, props.crop((r['x'], r['y'], r['x']+r['w'], r['y']+r['h'])), x, y)
    if mobile:
        p('window', 3, 0)
        p('shelf', 94, 0)
        dx, dy, start, end, ry = 40, 8, 0, 96, 56
    else:
        p('window', 62, 10)
        p('shelf', 184, 12)
        p('tools', 362, 24)
        p('cables', 126, 111)
        p('toolbox', 424, 109)
        dx, dy, start, end, ry = 80, 64, 216, 326, 80
    p('workstation', dx+12, dy)
    paste(im, developer('watch', 0), dx, dy)
    p('monitor3', dx+43, dy+7)
    p('dispenser', start+20, ry-20)
    p('hatch', end+12, ry+16)
    paste(im, project('ready', 0), end+12, ry-20)
    paste(im, robot('idle', 0), start, ry)
    return im

images['poster-desktop'] = poster(False)
images['poster-mobile'] = poster(True)
for name, im in images.items():
    im.save(OUT / f'{name}.png', optimize=True, transparency=0)
    bg = Image.new('RGBA', im.size, '#131c2b')
    bg.alpha_composite(im.convert('RGBA'))
    bg.resize((im.width*3, im.height*3), Image.Resampling.NEAREST).save(REVIEW / f'{name}.png')
(OUT / 'manifest.json').write_text(json.dumps(manifest, indent=2)+'\n')
print('Exported', sum(p.stat().st_size for p in OUT.iterdir()), 'bytes')
