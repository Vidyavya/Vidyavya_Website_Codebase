const fs = require('fs');

const dataFile = 'src/pages/DataEngineering.tsx';
const aiFile = 'src/pages/AIMLEngineering.tsx';

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove "Vidyavya Advanced Engineering Career Programs"
    content = content.replace(/<motion\.span[^>]*>\s*Vidyavya Advanced Engineering Career Programs\s*<\/motion\.span>/g, '');

    // 2. Remove "Hybrid" from "Classroom / Hybrid"
    content = content.replace(/Classroom \/ Hybrid/g, 'Classroom');

    // 3. Hide Capstone & Deliverables
    // Find {/* Capstone & Deliverables */} and the following <Section...
    // Wrap the <Section>...</Section> in {false && ( ... )}
    if (content.includes('{/* Capstone & Deliverables */}')) {
        const parts = content.split('{/* Capstone & Deliverables */}');
        const endSectionMatch = parts[1].indexOf('</Section>');
        if (endSectionMatch !== -1) {
            const sectionEndIndex = endSectionMatch + '</Section>'.length;
            const updatedSection = '\n      {/* Capstone & Deliverables Hidden by Request\n      ' + 
                 parts[1].substring(0, sectionEndIndex)
                 .replace(/\*\//g, '* /') // escape any inner comments
                 + ' */}';
            content = parts[0] + updatedSection + parts[1].substring(sectionEndIndex);
        }
    }

    // 4. Project boxes - replace the rendering
    // Let's use regex to remove the {item.project && (...)} block dynamically
    // It's safer to just replace any `{item.project && ( ... )}`
    content = content.replace(/\{item\.project && \([\s\S]*?\)\}/g, '');

    // 5. Month numbers (Month 1, 2, 3, etc.)
    // Find the inline block rendering {item.month}
    content = content.replace(/<span className="font-accent[^>]*>\{item\.month\}<\/span>/g, '');

    // 6. "Every Saturday" text and proper line breaks
    // Pill text removal
    content = content.replace(/<span className="inline-block font-accent text-sm font-semibold tracking-widest text-\[[^\]]+\] bg-\[[^\]]+\]\/10 px-4 py-2 rounded-full uppercase mb-6">\s*Every Saturday\s*<\/span>/g, '');
    content = content.replace(/<span className="inline-block font-accent text-sm font-semibold tracking-widest text-primary bg-primary\/10 px-4 py-2 rounded-full uppercase mb-6">\s*Every Saturday\s*<\/span>/g, '');


    // Add proper line breaks to descriptions
    const oldText1 = `Technical ability gets you interviews. Professional readiness gets you hired. Every Saturday throughout the program, students participate in career development sessions.`;
    const newText1 = `Technical ability gets you interviews.<br />\n              Professional readiness gets you hired.<br />\n              Every Saturday throughout the program, students participate in career development sessions.`;
    
    const oldText2 = `Technical ability gets you interviews. Professional readiness gets you hired. Every Saturday throughout the program, students participate in structured career development sessions.`;
    const newText2 = `Technical ability gets you interviews.<br />\n              Professional readiness gets you hired.<br />\n              Every Saturday throughout the program, students participate in structured career development sessions.`;

    content = content.replace(oldText1, newText1);
    content = content.replace(oldText2, newText2);

    // 7. Em-dashes
    content = content.replace(/—/g, '-');

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
}

try {
    updateFile(dataFile);
    updateFile(aiFile);
} catch (e) {
    console.error(e);
    process.exit(1);
}
