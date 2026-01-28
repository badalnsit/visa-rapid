import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Helper to copy directory recursively
function copyDir(src, dest, excludeFiles = []) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (excludeFiles.includes(entry.name)) {
            console.log(`Skipping excluded file: ${entry.name}`);
            continue;
        }

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath, excludeFiles);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

try {
    console.log('Starting Production Build...');

    // 1. Build Next.js App (Blogs)
    console.log('\n--- Installing Blog Dependencies ---');
    execSync('npm install', { cwd: path.join(process.cwd(), 'blog-web'), stdio: 'inherit' });

    console.log('\n--- Building Next.js Blog App ---');
    execSync('npm run build', { cwd: path.join(process.cwd(), 'blog-web'), stdio: 'inherit' });

    // 2. Build React App (Main)
    console.log('\n--- Building Main React App ---');
    // Vite clears the dist folder, so we run this first or let it run.
    execSync('npx vite build', { stdio: 'inherit' });

    // 3. Merge Builds
    console.log('\n--- Merging Builds ---');
    const blogOutDir = path.join(process.cwd(), 'blog-web', 'out');
    const mainDistDir = path.join(process.cwd(), 'dist');

    if (!fs.existsSync(blogOutDir)) {
        throw new Error('Blog build directory (out) not found. Next.js build failed?');
    }

    // Copy blog-web/out to dist, EXCLUDING index.html/404.html ONLY at the root level.
    // We expect the blogs to be accessible via /blogs (which should be a folder in out)

    // Custom copy function to handle root-only exclusions
    function copyWithRootExclusions(src, dest, exclusions) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        const entries = fs.readdirSync(src, { withFileTypes: true });

        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (exclusions.includes(entry.name)) {
                console.log(`Skipping root file: ${entry.name}`);
                continue;
            }

            if (entry.isDirectory()) {
                copyDir(srcPath, destPath); // Use standard copyDir for subdirectories (no exclusions)
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        }
    }

    copyWithRootExclusions(blogOutDir, mainDistDir, ['index.html', '404.html']);

    console.log('\n--- Cleaning up Conflicting Next.js Files ---');
    // Function to recursively find and delete .txt files in dist/blogs and dist/_next
    function deleteTxtFiles(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                deleteTxtFiles(fullPath);
            } else if (entry.name.endsWith('.txt')) {
                fs.unlinkSync(fullPath);
                console.log(`Deleted: ${fullPath}`);
            }
        }
    }
    deleteTxtFiles(path.join(mainDistDir, 'blogs'));
    deleteTxtFiles(path.join(mainDistDir, '_next'));

    console.log('\nSUCCESS: Unified build created in "dist". Ready for Vercel deployment.');
    console.log('Note: The Main App handles "/" and the Blog App handles "/blogs" (and other paths).');

} catch (error) {
    console.error('\nBUILD FAILED:', error.message);
    process.exit(1);
}
