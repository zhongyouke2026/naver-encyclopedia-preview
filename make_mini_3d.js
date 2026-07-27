const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'shenzhen_interactive_terrain_3d.html');
const dst = path.join(__dirname, 'shenzhen_interactive_terrain_3d_mini.html');

let content = fs.readFileSync(src, 'utf8');

const hide_css = `
<style>
/* Mini version overrides */
.topbar, .panel, .compass-container, .regions, .footer, .eyebrow, h1, .subtitle, .controls { display: none !important; }
.main { min-height: 100vh !important; border-radius: 0 !important; border: none !important; margin: 0 !important; box-shadow: none !important; }
body { padding: 0 !important; margin: 0 !important; }
.app { margin: 0 !important; width: 100% !important; min-height: 100vh !important; display: block !important; }
</style>
</head>
`;

content = content.replace('</head>', hide_css);

// Adjust camera position for smaller height - zooming out a bit from previous attempt
content = content.replace('camera.position.set(-105, 42, 90);', 'camera.position.set(-105, 42, 90);');

// Hide GridHelper
content = content.replace('scene.add(grid);', '// scene.add(grid);');

fs.writeFileSync(dst, content, 'utf8');
console.log("Mini 3D created via Node.");
