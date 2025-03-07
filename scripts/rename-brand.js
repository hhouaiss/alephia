/**
 * Script to replace "Alephia" with "Alefia" in content areas of the website
 * Focuses on text content in paragraphs, headings, titles, and alt attributes
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

// Configuration
const OLD_BRAND = 'Alephia';
const NEW_BRAND = 'Alefia';
const OLD_BRAND_LOWERCASE = OLD_BRAND.toLowerCase();
const NEW_BRAND_LOWERCASE = NEW_BRAND.toLowerCase();

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File patterns to search
const FILE_PATTERNS = [
  '**/*.astro',
  '**/*.md',
  '**/*.mdx',
  '**/*.html',
  '**/*.jsx',
  '**/*.tsx',
  '**/*.js',
  '**/*.ts'
];

// Paths to exclude
const EXCLUDE_PATTERNS = [
  'node_modules/**',
  '.git/**',
  'dist/**',
  'scripts/**'
];

// Counter for changes
let filesChanged = 0;
let occurrencesReplaced = 0;

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Create regex patterns that target content in HTML/JSX/Markdown
    const patterns = [
      // Title attributes
      { regex: new RegExp(`title=["']([^"']*${OLD_BRAND}[^"']*)["']`, 'gi'), replacement: (match, p1) => `title="${p1.replace(new RegExp(OLD_BRAND, 'gi'), NEW_BRAND)}"` },
      { regex: new RegExp(`title=["']([^"']*${OLD_BRAND_LOWERCASE}[^"']*)["']`, 'gi'), replacement: (match, p1) => `title="${p1.replace(new RegExp(OLD_BRAND_LOWERCASE, 'gi'), NEW_BRAND_LOWERCASE)}"` },
      
      // Alt attributes
      { regex: new RegExp(`alt=["']([^"']*${OLD_BRAND}[^"']*)["']`, 'gi'), replacement: (match, p1) => `alt="${p1.replace(new RegExp(OLD_BRAND, 'gi'), NEW_BRAND)}"` },
      { regex: new RegExp(`alt=["']([^"']*${OLD_BRAND_LOWERCASE}[^"']*)["']`, 'gi'), replacement: (match, p1) => `alt="${p1.replace(new RegExp(OLD_BRAND_LOWERCASE, 'gi'), NEW_BRAND_LOWERCASE)}"` },
      
      // Between heading tags
      { regex: new RegExp(`(<h[1-6][^>]*>)([^<]*${OLD_BRAND}[^<]*)(<\/h[1-6]>)`, 'gi'), replacement: (match, open, content, close) => `${open}${content.replace(new RegExp(OLD_BRAND, 'gi'), NEW_BRAND)}${close}` },
      { regex: new RegExp(`(<h[1-6][^>]*>)([^<]*${OLD_BRAND_LOWERCASE}[^<]*)(<\/h[1-6]>)`, 'gi'), replacement: (match, open, content, close) => `${open}${content.replace(new RegExp(OLD_BRAND_LOWERCASE, 'gi'), NEW_BRAND_LOWERCASE)}${close}` },
      
      // Between paragraph tags
      { regex: new RegExp(`(<p[^>]*>)([^<]*${OLD_BRAND}[^<]*)(<\/p>)`, 'gi'), replacement: (match, open, content, close) => `${open}${content.replace(new RegExp(OLD_BRAND, 'gi'), NEW_BRAND)}${close}` },
      { regex: new RegExp(`(<p[^>]*>)([^<]*${OLD_BRAND_LOWERCASE}[^<]*)(<\/p>)`, 'gi'), replacement: (match, open, content, close) => `${open}${content.replace(new RegExp(OLD_BRAND_LOWERCASE, 'gi'), NEW_BRAND_LOWERCASE)}${close}` },
      
      // In frontmatter title
      { regex: new RegExp(`(title:\\s*["'])([^"']*${OLD_BRAND}[^"']*)(['"])`, 'gi'), replacement: (match, prefix, content, suffix) => `${prefix}${content.replace(new RegExp(OLD_BRAND, 'gi'), NEW_BRAND)}${suffix}` },
      { regex: new RegExp(`(title:\\s*["'])([^"']*${OLD_BRAND_LOWERCASE}[^"']*)(['"])`, 'gi'), replacement: (match, prefix, content, suffix) => `${prefix}${content.replace(new RegExp(OLD_BRAND_LOWERCASE, 'gi'), NEW_BRAND_LOWERCASE)}${suffix}` },
      
      // In span, div, and other common text containers
      { regex: new RegExp(`(<(span|div|li|a|button)[^>]*>)([^<]*${OLD_BRAND}[^<]*)(</\\2>)`, 'gi'), replacement: (match, open, tag, content, close) => `${open}${content.replace(new RegExp(OLD_BRAND, 'gi'), NEW_BRAND)}${close}` },
      { regex: new RegExp(`(<(span|div|li|a|button)[^>]*>)([^<]*${OLD_BRAND_LOWERCASE}[^<]*)(</\\2>)`, 'gi'), replacement: (match, open, tag, content, close) => `${open}${content.replace(new RegExp(OLD_BRAND_LOWERCASE, 'gi'), NEW_BRAND_LOWERCASE)}${close}` },
    ];
    
    let newContent = content;
    let fileChanged = false;
    
    // Apply each pattern
    for (const pattern of patterns) {
      const tempContent = newContent.replace(pattern.regex, pattern.replacement);
      if (tempContent !== newContent) {
        const matches = newContent.match(pattern.regex) || [];
        occurrencesReplaced += matches.length;
        fileChanged = true;
        newContent = tempContent;
      }
    }
    
    // Save changes if the file was modified
    if (fileChanged) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      filesChanged++;
      console.log(`✅ Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Main function
function main() {
  console.log(`🔍 Searching for "${OLD_BRAND}" to replace with "${NEW_BRAND}" in content areas...`);
  
  // Get all files matching the patterns
  const files = FILE_PATTERNS.flatMap(pattern => 
    glob.sync(pattern, { 
      ignore: EXCLUDE_PATTERNS,
      cwd: path.resolve(__dirname, '..'),
      absolute: true
    })
  );
  
  console.log(`Found ${files.length} files to check.`);
  
  // Process each file
  files.forEach(processFile);
  
  console.log(`\n✨ Done! Changed ${occurrencesReplaced} occurrences in ${filesChanged} files.`);
}

main();