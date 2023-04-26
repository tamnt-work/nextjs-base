import { extractStyle } from '@ant-design/static-style-extract';
import fs from 'fs';

const outputPath = './src/assets/styles/vendors/antd.min.css';

const css = extractStyle();

fs.writeFileSync(outputPath, css);
