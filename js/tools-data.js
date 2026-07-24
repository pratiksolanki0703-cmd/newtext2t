// Centralized Data for Tools
// To add a new tool:
// 1. Use the Tool Generator: /generator/tool-generator
// 2. Paste the generated code into the TOOLS array below.
const TOOLS = [
    
   //trending tools
    {
        id: 'temp-mail',
        name: 'Temp Mail',
        description: 'Disposable email service to keep your inbox clean.',
        category: 'Trending',
        color: 'trending',
        icon: 'mail',
        path: 'tools/trending/temp-mail',
        isTrending: true
    },
     {
    id: 'ai-character',
        name: 'Ai Character',
        description: 'Create and chat with unique AI personas instantly without signup.',
        category: 'Trending',
        color: 'trending',
        icon: 'bot',
        path: '/tools/trending/ai-character',
        isTrending: true
    },
     
     
    //pdf tools
    {
        id: 'jpg-to-pdf',
        name: 'JPG to PDF',
        description: 'Convert JPG to PDF online free. Combine multiple JPG/JPEG/PNG images, reduce PDF size (100KB, 200KB), and download instantly. Fast, secure, and fully browser-based – no uploads required.',
        category: 'PDF',
        color: 'pdf',
        icon: 'file-image',
        path: '/tools/pdf-tools/jpg-to-pdf'
    },
    {
        id: 'merge-pdf',
        name: 'Merge PDF',
        description: 'Combine multiple PDF files into a single document in seconds. Simple, fast, and secure merging directly in your browser.',
        category: 'PDF',
        color: 'pdf',
        icon: 'combine',
        path: '/tools/pdf-tools/merge-pdf'
    },
    {
        id: 'pdf-to-image',
        name: 'PDF to Image',
        description: 'Convert PDF pages into high-quality images (JPG or PNG). Easy to use, fast processing, and 100% privacy-friendly.',
        category: 'PDF',
        color: 'pdf',
        icon: 'file-up',
        path: '/tools/pdf-tools/pdf-to-image'
    },
    {
        id: 'text-to-pdf',
        name: 'Text to PDF',
        description: 'Convert raw text into high-quality PDF files instantly. Simple and clean formatting for your documents.',
        category: 'PDF',
        color: 'pdf',
        icon: 'file-type',
        path: '/tools/pdf-tools/text-to-pdf'
    },
    {
        id: 'pdf-to-text',
        name: 'PDF to Text',
        description: 'Extract text from PDF documents with precision. Fast extraction for easy editing and sharing.',
        category: 'PDF',
        color: 'pdf',
        icon: 'file-type-2',
        path: '/tools/pdf-tools/pdf-to-text'
    },
    
    //image tools
    {
    id: 'image-rename-online',
    name: 'Bulk Image Rename',
    description: 'Rename multiple images and photos instantly with custom names, prefixes, suffixes, and numbering sequences.',
    category: 'Image',
    color: 'image',
    icon: 'type',
    path: 'tools/image-tools/bulk-image-rename'
    },

        {
        id: 'text-to-handwriting',
        name: 'Text to Handwriting',
        description: 'Convert your digital text into realistic handwriting. Choose from different styles and paper types.',
        category: 'Image',
        color: 'image',
        icon: 'pen-tool',
        path: 'tools/image-tools/text-to-handwriting'
    },
    {
        id: 'image-to-text',
        name: 'Image to Text (OCR)',
        description: 'Extract editable text from any image using powerful OCR technology. Fast and accurate extraction.',
        category: 'Image',
        color: 'image',
        icon: 'scan-text',
        path: 'tools/image-tools/image-to-text'
    },
    {
        id: 'image-cropper',
        name: 'Image Cropper',
        description: 'Crop your images with precision. Supports preset aspect ratios for social media and custom sizes.',
        category: 'Image',
        color: 'image',
        icon: 'crop',
        path: 'tools/image-tools/image-cropper'
    },
    {
        id: 'image-compressor',
        name: 'Image Compressor',
        description: 'Reduce image file size without losing quality. Optimize PNG, JPG, and WebP for faster web loading.',
        category: 'Image',
        color: 'image',
        icon: 'minimize-2',
        path: 'tools/image-tools/image-compressor'
    },
    {
        id: 'image-format-converter',
        name: 'Image Format Converter',
        description: 'Convert images between different formats like PNG, JPG, WebP, and more instantly in your browser.',
        category: 'Image',
        color: 'image',
        icon: 'refresh-ccw',
        path: 'tools/image-tools/image-format-converter'
    },
    
    //youtube tools
        {
        id: 'youtube-transcript',
        name: 'YouTube Transcript generator',
        description: 'Extract and copy full text transcripts from any YouTube video instantly.',
        category: ['YouTube','Trending'],
        color: 'youtube',
        icon: 'subtitles',
        path: '/tools/youtube-tools/youtube-transcript',
        isTrending: true
    },
    {
        id: 'youtube-shorts-converter',
        name: 'YouTube Shorts to Video Link',
        description: 'Convert YouTube Shorts links into standard video player links for easier sharing and embedding.',
        category: 'YouTube',
        color: 'youtube',
        icon: 'link',
        path: '/tools/youtube-tools/youtube-shorts-to-video-link-converter'
    },
    {
        id: 'thumbnail-download',
        name: 'YouTube Thumbnail Downloader',
        description: 'Grab high-quality thumbnails from any YouTube video. Supports HD, SD, and 4K resolutions.',
        category: 'YouTube',
        color: 'youtube',
        icon: 'image-down',
        path: '/tools/youtube-tools/thumbnail-download'
    },
    {
        id: 'youtube-profile-downloader',
        name: 'YouTube Channel Profile Downloader',
        description: 'Download high-resolution profile pictures (Avatars) from any YouTube channel easily.',
        category: 'YouTube',
        color: 'youtube',
        icon: 'user-circle',
        path: '/tools/youtube-tools/youtube-profile-downloader'
    },

    //dev tools
        {
        id: 'html-compiler',
        name: 'HTML Compiler',
        description: 'Live HTML, CSS, and JavaScript editor with real-time preview. Write and test your web code instantly.',
        category: 'Developer',
        color: 'dev',
        icon: 'code',
        path: 'tools/dev-tools/html-compiler'
    },
    {
        id: 'html-to-markdown',
        name: 'HTML to Markdown',
        description: 'Convert HTML code to clean Markdown format. Perfect for documentation, GitHub readmes, and blog posts.',
        category: 'Developer',
        color: 'dev',
        icon: 'file-code',
        path: 'tools/dev-tools/html-to-markdown-converter'
    },
    {
        id: 'base64-to-image',
        name: 'Base64 to Image',
        description: 'Decode Base64 strings back into original images. Preview and download PNG, JPG, or WebP files instantly.',
        category: 'Developer',
        color: 'dev',
        icon: 'image-down',
        path: 'tools/dev-tools/base64-to-image'
    },
    {
        id: 'image-to-base64',
        name: 'Image to Base64',
        description: 'Encode any image into a Base64 string. Fast and secure converter for embedding images directly into code.',
        category: 'Developer',
        color: 'dev',
        icon: 'file-image',
        path: 'tools/dev-tools/image-to-base64'
    },
    {
        id: 'json-to-xml',
        name: 'JSON to XML',
        description: 'Convert JSON data structures into well-formatted XML strings quickly and accurately.',
        category: 'Developer',
        color: 'dev',
        icon: 'file-output',
        path: 'tools/dev-tools/json-to-xml'
    },
    {
        id: 'xml-to-json',
        name: 'XML to JSON',
        description: 'Transform XML data into easy-to-read JSON objects. Simplify your data handling for web applications.',
        category: 'Developer',
        color: 'dev',
        icon: 'file-json',
        path: 'tools/dev-tools/xml-to-json'
    },
    {
        id: 'csv-to-sql',
        name: 'CSV to SQL',
        description: 'Convert CSV files into SQL Insert statements. Generate database queries from spreadsheet data instantly.',
        category: 'Developer',
        color: 'dev',
        icon: 'database',
        path: 'tools/dev-tools/csv-to-sql'
    },
        {
        id: 'jwt-decoder',
        name: 'JWT Decoder',
        description: 'Securely decode JSON Web Tokens (JWT) to view header, payload, and signature data instantly in your browser.',
        category: 'Developer',
        color: 'dev',
        icon: 'shield-check',
        path: 'tools/dev-tools/jwt-decoder'
    },
    {
        id: 'json-formatter',
        name: 'JSON Formatter',
        description: 'Free online tool to pretty print, beautify, and validate JSON data instantly. Fix JSON errors and improve readability.',
        category: 'Developer',
        color: 'dev',
        icon: 'file-braces-corner',
        path: 'tools/dev-tools/json-formatter'
    },
    {
        id: 'url-encoder-decoder',
        name: 'URL Encoder Decoder',
        description: 'Encode and decode URLs instantly. Convert special characters to URL-safe format and fix encoding errors online.',
        category: 'Developer',
        color: 'dev',
        icon: 'link-2',
        path: 'tools/dev-tools/url-encoder-decoder'
    },

        //security tool
    {
    id: 'fake-website-detector',
    name: 'Fake Website Detector',
    description: 'Check if a website or URL is fake, suspicious, phishing, or potentially dangerous.',
    category: 'Security',
    color: 'security',
    icon: 'shield-alert',
    path: 'tools/security-tools/fake-website-detector'
    },
    {
    id: 'whatsapp-scam-checker',
    name: 'WhatsApp Scam Checker',
    description: 'Analyze WhatsApp messages and detect scams, phishing attempts, fake jobs, lottery frauds, and suspicious links.',
    category: 'Security',
    color: 'security',
    icon: 'message-square-warning',
    path: 'tools/security-tools/whatsapp-scam-checker'
    },

    
    //audio tools
     {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert text into natural-sounding voice instantly.',
    category: ['Audio','Trending'],
    color: 'audio',
    icon: 'mic-2',
    path: 'tools/audio-tools/text-to-speech',
    isTrending: true
     },
     {
    id: 'audio-to-text',
    name: 'Audio to Text',
    description: 'Transcribe MP3, M4A, and voice recordings into accurate text instantly.',
    category:'Audio',
    color: 'audio',
    icon: 'book-audio',
    path: 'tools/audio-tools/audio-to-text'
     },
     {
    id: 'silence-remover',
    name: 'Silence Remover',
    description: 'AI-based silence detection to automatically remove silent parts and dead space from your audio files instantly.',
    category: 'Audio',
    color: 'audio',
    icon: 'volume-x',
    path: 'tools/audio-tools/audio-silence-remover'
     }

];

 //tools categories
const CATEGORIES = [
    { name: 'Trending', color: 'trending' },
    { name: 'PDF', color: 'pdf' },
    { name: 'Image', color: 'image' },
    { name: 'YouTube', color: 'youtube' },
    { name: 'Developer', color: 'dev' },
    {name: 'Security',color: 'security'},
    { name: 'Audio', color: 'audio' }
];
