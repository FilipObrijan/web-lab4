import { watch } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const execAsync = promisify(exec);

// Force output to flush immediately
process.stdout.write('🔍 TinaCMS Auto-Deploy Watcher Started\n');
process.stdout.write('📁 Watching content/ for changes...\n');
process.stdout.write('💡 Make changes in TinaCMS admin and they will auto-deploy!\n');
process.stdout.write('🟢 Watcher is ACTIVE and waiting...\n\n');

process.chdir(projectRoot);

const contentPath = join(projectRoot, 'content');

if (!existsSync(contentPath)) {
  process.stderr.write(`❌ Error: content/ directory not found at ${contentPath}\n`);
  process.exit(1);
}

process.stdout.write(`✅ Watching: ${contentPath}\n\n`);

let timeout;

const watcher = watch(contentPath, { recursive: true }, async (eventType, filename) => {
  if (!filename || !filename.endsWith('.json')) return;
  
  process.stdout.write(`\n📝 Change detected: ${filename}\n`);
  
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    process.stdout.write('🚀 Auto-committing and pushing to GitHub...\n');
    
    try {
      const { stdout: addOut } = await execAsync('git add content/', { cwd: projectRoot });
      const { stdout: commitOut } = await execAsync(`git commit -m "Update content via TinaCMS: ${filename}"`, { cwd: projectRoot });
      const { stdout: pushOut } = await execAsync('git push', { cwd: projectRoot });
      
      process.stdout.write('✅ Changes pushed successfully!\n');
      process.stdout.write('⏳ GitHub Pages will rebuild in ~2-3 minutes\n');
      process.stdout.write('🌐 Check: https://filipobrijan.github.io/web-lab4/\n\n');
    } catch (error) {
      if (error.message.includes('nothing to commit')) {
        process.stdout.write('ℹ️  No new changes to commit\n\n');
      } else {
        process.stderr.write(`❌ Error: ${error.message}\n\n`);
      }
    }
  }, 2000);
});

watcher.on('error', (error) => {
  process.stderr.write(`❌ Watcher error: ${error.message}\n`);
});

// Keep the process running
process.on('SIGINT', () => {
  process.stdout.write('\n👋 Auto-deploy watcher stopped\n');
  watcher.close();
  process.exit(0);
});
