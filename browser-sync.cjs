// #ddev-generated
let docroot = process.env.DDEV_DOCROOT;
let filesdir = process.env.DDEV_FILES_DIR;
let url = process.env.DDEV_HOSTNAME;
let nonSslUrl = process.env.DDEV_PRIMARY_URL.replace(/^https:/, 'http:')

if (filesdir === "") {
    filesdir = null
}

module.exports = {
    // Watch only these file extensions under app/code and app/design:
    files: [
        "app/code/**/*.js",
        "app/code/**/*.xml",
        "app/code/**/*.css",
        "app/code/**/*.phtml",
        "app/code/**/*.html",
        "app/design/**/*.js",
        "app/design/**/*.xml",
        "app/design/**/*.css",
        "app/design/**/*.phtml",
        "app/design/**/*.html"
    ],
    ignore: [
        "node_modules",
        filesdir, "vendor"
    ],
    open: false,
    ui: false,
    server: false,
    proxy: {
        target: nonSslUrl
    },
    host: url,
}
