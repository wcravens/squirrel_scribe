#!/usr/bin/env node

import {markdown} from 'markdown';
import {fs} from 'fs';


try {
    const data = fs.readFileSync('LoremIpsum.md', 'utf8');
    console.log( markdown.toHTML( data ) );
} catch (err) {
    console.error(err);
}
