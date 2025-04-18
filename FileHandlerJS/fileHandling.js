const multer = require('multer');

/**
 * Handles file uploads, requires Express.js.
 * @author Tristan Rush
 */

/** @type {string} File storage path for uploads. */
let fileStorage = '';

/**
 * Sets the file storage location.
 *
 * @param {string} fileLocation The desired location to store uploaded files.
 * @throws {Error} If the provided file location is not valid.
 */
function setStorageLocation(fileLocation) {
    if (fileLocation.length < 1) {
        throw new Error('File location argument is not valid!');
    }
    fileStorage = fileLocation;
}

/**
 * Gets the current file storage location.
 *
 * @return {string} The current file storage path.
 */
function getStorageLocation() {
    return fileStorage;
}

/**
 * Sets up the storage configuration for multer.
 *
 * @type {import('multer').StorageEngine}
 */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, fileStorage);
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});

/**
 * Multer instance configured with custom storage.
 *
 * @type {import('multer').Multer}
 */
const upload = multer({ storage: storage });

export default upload;
