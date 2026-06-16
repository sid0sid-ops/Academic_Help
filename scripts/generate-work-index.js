const fs = require('fs');
const path = require('path');

const WORK_DIR = path.join(__dirname, '../public/work');
const OUTPUT_FILE = path.join(__dirname, '../src/data/work-index.json');

// Ensure directories exist
if (!fs.existsSync(WORK_DIR)) {
  fs.mkdirSync(WORK_DIR, { recursive: true });
}

const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function guessCategory(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('project')) return 'project';
  if (lower.includes('dissertation')) return 'dissertation';
  if (lower.includes('thesis')) return 'thesis';
  if (lower.includes('formatting') || lower.includes('format')) return 'formatting';
  if (lower.includes('presentation') || lower.includes('ppt') || lower.includes('slide')) return 'presentation';
  if (lower.includes('poster')) return 'poster';
  if (lower.includes('report')) return 'report';
  if (lower.includes('cv') || lower.includes('portfolio')) return 'cv';
  if (lower.includes('bioinformatics') || lower.includes('dna') || lower.includes('rna') || lower.includes('gene') || lower.includes('sequence')) return 'bioinformatics';
  return 'general';
}

function cleanTitle(filename, ext) {
  // Remove extension
  let nameWithoutExt = filename.slice(0, -ext.length);
  // Replace underscores, hyphens and dots with spaces
  let title = nameWithoutExt.replace(/[_\-\.]+/g, ' ');
  // Capitalize each word
  return title
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .trim();
}

try {
  const files = fs.readdirSync(WORK_DIR);
  const workItems = [];

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.pdf' || ext === '.pptx') {
      const filePath = path.join(WORK_DIR, file);
      const stat = fs.statSync(filePath);
      
      const category = guessCategory(file);
      const title = cleanTitle(file, ext);
      
      workItems.push({
        fileName: file,
        title: title,
        filePath: `/work/${file}`, // Path relative to public folder
        type: ext === '.pdf' ? 'PDF' : 'PPTX',
        category: category,
        modifiedDate: stat.mtime.toISOString(),
        sizeBytes: stat.size
      });
    }
  });

  // Sort by modified date descending
  workItems.sort((a, b) => new Date(b.modifiedDate) - new Date(a.modifiedDate));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(workItems, null, 2));
  console.log(`Successfully indexed ${workItems.length} work files to ${OUTPUT_FILE}`);
} catch (error) {
  console.error('Error generating work index:', error);
  // Write an empty array so build doesn't fail
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2));
}
