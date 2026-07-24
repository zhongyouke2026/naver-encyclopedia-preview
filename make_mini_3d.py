import os

src = 'shenzhen_interactive_terrain_3d.html'
dst = 'shenzhen_interactive_terrain_3d_mini.html'

with open(src, 'r', encoding='utf-8') as f:
    content = f.read()

hide_css = """
<style>
/* Mini version overrides */
.topbar, .panel, .compass-container, .regions, .footer, .eyebrow, h1, .subtitle, .controls { display: none !important; }
.main { min-height: 100vh !important; border-radius: 0 !important; border: none !important; margin: 0 !important; box-shadow: none !important; }
body { padding: 0 !important; margin: 0 !important; }
.app { margin: 0 !important; width: 100% !important; min-height: 100vh !important; display: block !important; }
</style>
</head>
"""

content = content.replace('</head>', hide_css)

# Adjust camera position for smaller height - zooming out a bit from previous attempt
content = content.replace('camera.position.set(-20, 110, 155);', 'camera.position.set(-15, 90, 125);')

# Hide GridHelper
content = content.replace('scene.add(grid);', '// scene.add(grid);')

with open(dst, 'w', encoding='utf-8') as f:
    f.write(content)

print("Mini 3D created.")
