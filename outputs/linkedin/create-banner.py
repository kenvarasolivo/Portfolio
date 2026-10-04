from pathlib import Path
from html import escape
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen

folder = Path(__file__).parent
fonts = {}
for weight in (400, 500):
    fonts[weight] = instantiateVariableFont(TTFont(folder / 'Inter.ttf'), {'wght': weight, 'opsz': 32}, inplace=True)

parts = ['<svg xmlns="http://www.w3.org/2000/svg" width="1584" height="396" viewBox="0 0 1584 396" role="img" aria-labelledby="title desc">',
         '<title id="title">Kenvara Solivo Lwie | Software Engineer</title>',
         '<desc id="desc">Black editorial banner. Software Engineer. Building complete digital products. Full-stack, Applied AI, Product thinking.</desc>',
         '<rect width="1584" height="396" fill="#111111"/>']

def text(value, x, y, size, color='#faf9f6', weight=400, tracking=0):
    font = fonts[weight]
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = size / font['head'].unitsPerEm
    start = x
    parts.append(f'<g aria-label="{escape(value)}" fill="{color}">')
    for character in value:
        glyph_name = cmap[ord(character)]
        pen = SVGPathPen(glyphs)
        glyphs[glyph_name].draw(pen)
        outline = pen.getCommands()
        if outline:
            parts.append(f'<path d="{outline}" transform="translate({x:.3f} {y}) scale({scale:.6f} {-scale:.6f})"/>')
        x += font['hmtx'][glyph_name][0] * scale + tracking
    parts.append('</g>')
    return x - start

# The left third stays clear for the overlapping LinkedIn profile portrait.
text('Kenvara Solivo Lwie', 460, 77, 24, '#b6b6b3', tracking=-0.25)
text('Software Engineer.', 460, 174, 78, weight=500, tracking=-2.8)
text('Building complete digital products.', 463, 230, 32, '#c5c5c1', tracking=-0.65)
parts.append('<path d="M460 278H1488" stroke="#3c3c3c" stroke-width="1"/>')
text('Full-stack engineering', 463, 327, 23, '#faf9f6', tracking=-0.25)
parts.append('<circle cx="728" cy="319" r="2.5" fill="#86b6ef"/>')
text('Applied AI', 752, 327, 23, '#faf9f6', tracking=-0.25)
parts.append('<circle cx="889" cy="319" r="2.5" fill="#86b6ef"/>')
text('Product thinking', 913, 327, 23, '#faf9f6', tracking=-0.25)
# A small directional mark echoes the portfolio's link treatment.
parts.append('<path d="M1458 77L1484 51M1463 51H1484V72" fill="none" stroke="#86b6ef" stroke-width="3"/>')
parts.append('</svg>')
(folder / 'kenvara-linkedin-banner.svg').write_text('\n'.join(parts), encoding='utf-8')
