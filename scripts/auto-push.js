import { watch } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const execAsync = promisify(exec);

console.log('🔍 TinaCMS Auto-Deploy Watcher Started');
console.log('📁 Watching content/ for changes...');
console.log('💡 Make changes in TinaCMS admin and they will auto-deploy!\n');

process.chdir(projectRoot);

let timeout;
const contentPath = join(projectRoot, 'content');

watch(contentPath, { recursive: true }, async (eventType, filename) => {
  if (!filename || !filename.endsWith('.json')) return;
  
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    console.log(`\n📝 Change detected: ${filename}`);
    console.log('🚀 Auto-committing and pushing to GitHub...');
    
    try {
      await execAsync('git add content/', { cwd: projectRoot });
      await execAsync(`git commit -m "Update content via TinaCMS: ${filename}"`, { cwd: projectRoot });
      await execAsync('git push', { cwd: projectRoot });
      console.log('✅ Changes pushed successfully!');
      console.log('⏳ GitHub Pages will rebuild in ~2-3 minutes');
      console.log('🌐 Check: https://filipobrijan.github.io/web-lab4/\n');
    } catch (error) {
      if (error.message.includes('nothing to commit')) {
        console.log('ℹ️  No new changes to commit\n');
      } else {
        console.error('❌ Error:', error.message, '\n');
      }
    }
  }, 2000); // Wait 2 seconds after last change
});

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n👋 Auto-deploy watcher stopped');
  process.exit(0);
});
